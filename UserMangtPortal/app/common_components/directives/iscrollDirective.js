angular.module('UserPortalApp')
.directive('iscrollDirective', iscrollDirective);
 iscrollDirective.$inject = ['$timeout']; 
 function iscrollDirective($timeout) { 
 	return { 
 		restrict:'A', 
 		link: function ($scope, element, attrs) 
 		{ 
 			$timeout(function()
 				{ 
 					iscrollwrapper = new IScroll(element.attr('id'), 
 						{ 
 							scrollX: true, 
 							scrollY: false, 
 							mouseWheel: false, 
 							scrollbars: false, 
 							useTransform: true, 
 							useTransition: false, 
 							eventPassthrough: true, 
 						}); iscrollwrapper.refresh(); 
 				}) 
 		} 
 	} 
 };