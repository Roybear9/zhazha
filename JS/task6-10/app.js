/**
 * Created by roy on 2017/8/29.
 */




var myApp = angular.module("userApp", ['ui.router', 'oc.lazyLoad','angularFileUpload','ngCookies']);
myApp.config(function ($stateProvider, $urlRouterProvider) {
    var _lazyLoad = function (loaded) {
        return function ($ocLazyLoad) {
            return $ocLazyLoad.load(loaded, {serie: true});
        }
    };
    $urlRouterProvider.otherwise("/login");
    $stateProvider
        .state("login", {
            url: "/login",
            templateUrl: "html/login.html",
            controller: "myCtrl",
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/login.js',
                    'scss/login.css'
                ])
            }
        })
        .state("home", {
            url: "/home",
            templateUrl: "html/home.html"

        })
        .state("home.uploadFile", {
            url: "/uploadFile",
            templateUrl: "html/uploadFile.html"
        })
        .state("home.welcome", {
            url: "/welcome",
            templateUrl: "html/welcome.html"
        })
        .state("home.article", {
            url: "/article?type&status&page&startAt&endAt&total",
            templateUrl: "html/article.html",
            controller: "articleCtrl",
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/article.js'
                ])
            }
        })
        .state("home.addEdit", {
            url: "/addEdit?id",
            templateUrl: "html/addEdit.html",
            controller: "addEditArticleCtrl",
            resolve: {
                loadMyFile: _lazyLoad([
                    'wangEditor-2.1.23/dist/css/wangEditor.min.css',
                    'wangEditor-2.1.23/dist/js/wangEditor.min.js',
                    'js/addEdit.js'
                ])
            }
        })
});
