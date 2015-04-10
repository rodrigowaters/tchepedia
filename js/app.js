angular.module('tchepedia', ['ionic', 'tchepedia.controllers', 'tchepedia.services'])

        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if (window.StatusBar) {
                    StatusBar.styleDefault();
                }
            });
        })

        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
                $stateProvider
                        .state("articles", {url: "/", templateUrl: "templates/articles.html", controller: "ArticlesCtrl"})
                        .state("article-detail", {url: "/article/:articleId", templateUrl: "templates/article-detail.html", controller: "ArticleDetailCtrl"})

                $urlRouterProvider.otherwise("/");
            }]);