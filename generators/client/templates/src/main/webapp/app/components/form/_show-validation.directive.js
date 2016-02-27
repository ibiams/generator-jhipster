/* globals $ */
(function() {
    'use strict';

    angular
        .module('<%=angularAppName%>')
        .directive('showValidation', showValidation);

    function showValidation () {
        var directive = {
            restrict: 'A',
            require: 'form',
            link: linkFunc
        };

        return directive;

        function linkFunc (scope, element) {
            element.find('.form-group').each(function() {
                var $formGroup = $(this);
                var $inputs = $formGroup.find('input[ng-model],textarea[ng-model],select[ng-model]');

                if ($inputs.length > 0) {
                    $inputs.each(function() {
                        var $input = $(this);
                        scope.$watch(function() {
                            return $input.hasClass('ng-invalid') && $input.hasClass('ng-dirty');
                        }, function(isInvalid) {
                            $formGroup.toggleClass('has-error', isInvalid);
                        });
                    });
                }
            });
        }
    }
})();