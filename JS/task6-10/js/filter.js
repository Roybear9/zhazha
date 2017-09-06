/**
 * Created by roy on 2017/8/30.
 */
angular.module("userApp")

    .filter('typeFilter', function(type) {


        return function (input) {
            var name ;
            angular.forEach(type,function (item) {
                if (item.value === input) {
                    name = item.text
                }
            });
            return name;
        }

    })
    .filter('statusFilter', function() {
        return function (type) {
            return (type === 1) ? "草稿" : "上线";
        }
    })
    .filter('btnFilter', function() {
        return function (type) {
            return (type === 1) ? "上线" : "下线";
        }



    });
