/**
 * Created by roy on 2017/8/30.
 */


angular.module("userApp")
    .controller('addEditArticleCtrl', function($scope,$http,$state,$stateParams,type,industry) {
        //wangEditor富文本编辑器引入说明
        var editor = new wangEditor('editor');
        editor.create();
        //将注入的constant中的type和industry赋值到该控制器中
        $scope.type = type;
        $scope.industry = industry;
        $scope.addParams = {};
        $scope.test = function(){
            $scope.$apply(function(){
                $scope.progress = 0;
                $scope.hidden = true;
                $scope.show = false;
                //更改上传的图片的时候，先将原来的图片预览清空，上传成功后再显示新上传的图片
                var imgSrc = document.getElementById("src");
                imgSrc.src = "";
                $scope.src = "";
                $scope.file = document.getElementById("file1").files;
                console.log(typeof ($scope.file));
                console.log($scope.file);
                console.log($scope.file[0]);
            })
        };
        var xhr;
        $scope.uploadFile = function() {
            //创建FormData()对象
            var fd = new FormData();
            // //文件对象 file
            fd.append("file", $scope.file[0]);
            //准备使用ajax上传
            xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        var jsons = JSON.parse(xhr.responseText);
                        console.log(jsons);
                        if (jsons.code === 0) {
                            $scope.$apply(function () {
                                $scope.src = jsons.data.url;
                                if (!!$scope.src) {
                                    $scope.show = true;
                                    $scope.hidden = false;
                                }
                            });
                            console.log($scope.src);
                        } else {
                            bootbox.alert(jsons.message)
                        }
                    }
                }
            };
            xhr.upload.addEventListener("progress", function (evt) {
                if (evt.total >= 2000000) {
                    bootbox.alert("请上传小于2MB的图片")
                }else {
                    $scope.progress = Math.round((evt.loaded) * 100 / evt.total);
                }
                //evt.loaded：文件上传的大小   evt.total：文件总的大小
                console.log(evt.loaded);
                //进度条显示
                console.log($scope.progress);
            }, false);
            //进度条
            xhr.open("post", "/carrots-admin-ajax/a/u/img/task", true);
            xhr.send(fd);
        };
        $scope.removeFile = function () {
            //由于ng-src会生成一个src的路径，所以删除的时候需要将ng-src和src都清空；
            var imgSrc = document.getElementById("src");
            imgSrc.src = "";
            $scope.src = "";
            $scope.file = "";
            $scope.progress = 0;
            $scope.show = false;
            $scope.hidden = false;
        };
        $scope.upload = function (x) {
            $scope.addParams.status = x;
            $scope.addParams.img = $scope.src;
            //将富文本编辑器中的内容获取出来，直接是带html的标签的，然后发给服务器；
            $scope.addParams.content = editor.$txt.html();
            if ($stateParams.id === undefined) {
                $http({
                    method: 'post',
                    url: '/carrots-admin-ajax/a/u/article',
                    params : $scope.addParams
                }).then(function successCallback(response) {
                    bootbox.alert("新增成功!");
                    $state.go("home.article",{reload:true})
                }, function errorCallback(response) {
                    bootbox.alert("请求服务器失败，请重试！")
                });
            } else {
                id = $stateParams.id;
                $http({
                    method: 'put',
                    url: '/carrots-admin-ajax/a/u/article/' + id,
                    params : $scope.addParams
                }).then(function successCallback(response) {
                    bootbox.alert("编辑成功!");
                    $state.go("home.article",{reload:true})
                }, function errorCallback(response) {
                    bootbox.alert("请求服务器失败，请重试！")
                });
            }
        };
        // 判断是否有id，来显示“编辑”还是“新增”
        $scope.id = $stateParams.id;
        if ($stateParams.id) {
            id = $stateParams.id;
            $http({
                method: 'get',
                url: '/carrots-admin-ajax/a/article/' + id
            }).then(function successCallback(response) {
                $scope.addParams = response.data.data.article;
                $scope.src = $scope.addParams.img;
                //将服务器回复的content显示在富文本编辑器中，html标签会自己转化
                editor.$txt.html($scope.addParams.content);
                console.log($scope.addParams);
                console.log($scope.addParams.content);
            }, function errorCallback(response) {
                bootbox.alert("请求服务器失败，请重试！")
            });
        }
        $scope.cancel = function () {
            bootbox.confirm("确定放弃正在编辑的内容吗？",function (result) {
                if (result) {
                    $state.go("home.article",{reload:true})
                }
            })
        };
    });



