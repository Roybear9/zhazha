/**
 * Created by roy on 2017/8/30.
 */

angular.module("userApp",[])
    .controller('articleCtrl', function($scope,$http,$state,$stateParams) {
        $scope.params = {};
        http();
        console.log($stateParams);
        if ($stateParams.page === 1 ) {
            $scope.firstPage = true;
            $scope.endPage = false;
        }else if ($stateParams.page === $stateParams.total){
            $scope.endPage = true;
            $scope.firstPage = false;
        }else {
            $scope.firstPage = false;
            $scope.endPage = false;
        }
        if ($stateParams.page === undefined) {
            $scope.firstPage = true;
            $scope.endPage = false;
        }
        $scope.params.type = $stateParams.type;
        $scope.params.status = $stateParams.status;
        $scope.params.page = $stateParams.page;
        $scope.inputNum = $stateParams.page;
        //时间戳转化为时间格式显示在input框中，$stateParams存储的是字符串，需要先转化为number，在转换为日期格式
        $scope.startAt = new Date(parseInt($stateParams.startAt));
        $scope.endAt = new Date(parseInt($stateParams.endAt));
        $scope.addEdit = function (id) {
            $state.go("home.addEdit",{id:id});
        };
        $scope.changeStatus = function (id,status) {
            if (status === 1) {
                bootbox.confirm("上线后该图片将在轮播banner中展示。是否执行上线操作？", function(result){
                    if (result) {
                        status = 2;
                        $http({
                            method: 'put',
                            url: '/carrots-admin-ajax/a/u/article/status',
                            params:{
                                id: id ,
                                status : status
                            }
                        }).then(function successCallback(response) {
                            http();
                        }, function errorCallback(response) {
                            //请求失败的情况是服务器无回复
                            bootbox.alert("请求服务器失败，请重试！")
                        });
                    }})
            }else {
                bootbox.confirm("下线后该图片将不展示在轮播banner中。是否执行下线操作？",function(result){
                    if (result) {
                        status = 1;
                        $http({
                            method: 'put',
                            url: '/carrots-admin-ajax/a/u/article/status',
                            params:{
                                id: id ,
                                status : status
                            }
                        }).then(function successCallback(response) {
                            http();
                        }, function errorCallback(response) {
                            //请求失败的情况是服务器无回复
                            bootbox.alert("请求服务器失败，请重试！")
                        });
                    }
                })
            }
        };
        $scope.deleteId = function (id) {
            bootbox.confirm("是否确定删除该条信息？",function (result) {
                if (result) {
                    $http({
                        method: 'delete',

                        url: '/carrots-admin-ajax/a/u/article/' + id
                    }).then(function successCallback(response) {
                        http();
                    }, function errorCallback(response) {
                        //请求失败的情况是服务器无回复
                        bootbox.alert("请求服务器失败，请重试！")
                    });
                }
            })
        };
        $scope.currentPage = function (x) {
            console.log(x);
            if (x > $scope.articleNum) {
                bootbox.alert("请不要超过最大页数！");
                $scope.params.page = $scope.inputNum = 1
            }else {
                $scope.params.page = x;
            }

            $state.go('home.article',{
                page: $scope.params.page,
                total: $scope.articleNum
            },{reload:true});
        };
        $scope.search = function () {
            //用Date.parse（）方法，将获取到的时间转化为时间戳
            $scope.params.startAt = Date.parse($scope.startAt);
            $scope.params.endAt = Date.parse($scope.endAt);
            //转化为时间戳之后，是带毫秒的，将结束时间增加23小时59分钟59秒999毫秒
            if ( $stateParams.endAt === undefined) {
                console.log($stateParams.endAt);
                $scope.params.endAt = $scope.params.endAt + 1000*60*60*24 - 1;
            }
            $scope.params.page = "";
            $scope.inputNum = 1;
            //if判断是在时间没有选择的时候，将请求时间赋值为空，否则的话发送的是NaN，会导致报错
            if(isNaN($scope.params.startAt)){
                $scope.params.startAt = ""
            }
            if(isNaN($scope.params.endAt)){
                $scope.params.endAt = ""
            }
            if ($scope.params.endAt < $scope.params.startAt) {
                bootbox.alert("请选择正确的时间段！")
            }else {
                $state.go('home.article',$scope.params,{reload:true});
            }
        };
        $scope.reset = function () {
            //清空时将所有的input框赋值为空即可；
            console.log($scope.params);
            angular.forEach($scope.params,function (data,index) {
                $scope.params[index] = '';
            });
            console.log($scope.params);
            // $scope.params = {type:"", status: "", page: "", startAt: "", endAt: "",total: ""};
            $state.go('home.article',$scope.params,{reload:true});
        };
        function http() {
            $scope.params.startAt = $stateParams.startAt;
            $scope.params.endAt = $stateParams.endAt;
            $http({
                method: 'get',
                url: '/carrots-admin-ajax/a/article/search',
                params : $scope.params
            }).then(function successCallback(response) {
                //服务器回复数据是个对象，并传给response

                $scope.article = response.data.data.articleList;
                $scope.articleNum = Math.ceil((response.data.data.total)/10);
                $scope.articlePage = [];
                for (var i = 1; i < ($scope.articleNum + 1); i++) {
                    $scope.articlePage[i-1] = i;
                }
                $scope.n = $scope.inputNum = response.data.data.page;
                console.log($scope.n);
            }, function errorCallback(response) {
                bootbox.alert("请求服务器失败，请重试！")
            });
        }
    });





