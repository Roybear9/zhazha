/**
 * Created by roy on 2017/8/25.
 */


angular.module("userApp")
    .controller('myCtrl', function($scope,$http,$state,$cookies) {

        $scope.login = function () {
            $http({
                method: 'Post',
                url: '/carrots-admin-ajax/a/login',
                params: $scope.params
            }).then(function successCallback(response) {
                console.log(response);

                //服务器回复数据是个对象，并传给response
                if (response.data.code === 0) {
                    var expireDate = new Date();
                    expireDate.setDate(expireDate.getDate() + 30);
                    $cookies.put("user",angular.toJson($scope.params),{'expires': expireDate});
                    $state.go("home");
                    //给ui-rotue一个state，跳转到对应页面
                } else {
                    bootbox.alert(response.data.message)
                }
            }, function errorCallback(response) {
                //请求失败的情况是服务器无回复
                bootbox.alert("请求服务器失败，请重试！")
            });
        }

    });







