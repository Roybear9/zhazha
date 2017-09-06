/**
 * Created by Master on 2017/3/22.
 */
angular.module("userApp")
/*传图片*/
    .directive('upLoader',function (FileUploader) {
        return {
            restrict: 'E',
            templateUrl: 'js/imgupload/upload.html',
            scope: {
                logoUrl: '=ngModel',//图片上传后地址
                labelName: '@',
                tip:'@'//提示语
            },
            replace: 'true',
            link: function (scope) {

                scope.uploader = new FileUploader({//实例化
                    url: '/carrots-admin-ajax/a/u/img/task',
                    queueLimit: 1
                });
                scope.clearItem = function () {//清空队列
                    scope.uploader.clearQueue()
                };
                scope.remove = function () {
                    var imgSrc = document.getElementById("img");
                    imgSrc.src = "";
                    scope.logoUrl = '';
                };
                scope.getUrl = function (files) {
                    scope.fileList = files;
                    scope.imgURL = window.URL.createObjectURL(scope.fileList[0]);//考虑性能用后清除
                };
                scope.uploader.onSuccessItem = function (item, response) {//上传成功返回地址
                    scope.logoUrl = response.data.url
                }
            }
        }
    });
