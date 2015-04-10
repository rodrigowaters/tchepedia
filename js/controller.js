angular.module('tchepedia.controllers', ['ionic'])

        .controller('ArticlesCtrl', function ($scope, Articles_model) {

            $scope.articles = [];

            Articles_model.all().success(function ($articles) {
                window['articles'] = $articles;
                $scope.articles = $articles;
            });

        })

        .controller('ArticleDetailCtrl', function ($scope, $stateParams, Articles_model) {

            $scope.article = Articles_model.get($stateParams.articleId);

        });