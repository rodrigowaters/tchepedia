angular.module('tchepedia', ['ngMaterial', 'tchepedia.controllers', 'tchepedia.services'])

    .controller('AppCtrl', function ($scope) {

        $scope.items = [
            {id: '12-10'},
            {id: '3-31'},
            {id: '7-15'},
            {id: '8-20'},
            {id: '11-1'},
            {id: '11-9'},
            {id: '15-1'},
            {id: 'xx-xx'}
        ];

    });