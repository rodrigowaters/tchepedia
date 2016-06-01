angular.module('tchepedia.controllers', [])

        .controller('ArticlesCtrl', function ($scope, $mdDialog, Articles_model) {

            $scope.articles = [];

            $scope.showArticle = function(articleId)
            {
                $mdDialog.show({
                    templateUrl: 'template/dialog.tmpl.html',
                    controller: 'ArticleDetailCtrl',
                    locals: {
                        article: $scope.articles[articleId]
                    },
                    parent: angular.element(document.body),
                    clickOutsideToClose:true,
                    fullscreen: true
                });

            };

            Articles_model.all().success(function ($articles) {
                $scope.articles = $articles;
            });

        })

        .controller('ArticleDetailCtrl', function ($scope, $mdDialog, article) {

            $scope.article = article;
            $scope.closeDialog = function() {
                $mdDialog.hide();
            }

        });