//For now, not a service
angular.module('sm').filter('RMPUrl', function() {
	return function(input) {
		if(input && input != "TBA") {
			var RMPSearchURL = 'http://www.ratemyprofessors.com/search.jsp?queryBy=teacherName&queryoption=HEADER&query=' + encodeURIComponent(input) + '&facetSearch=true&schoolName=rochester+institute+of+technology';
			
			var splitName = input.split(" ");
			var RITEvalsURL = 'https://openevals.rit.edu/professor/' + encodeURIComponent(splitName[splitName.length - 1]) + '/' + encodeURIComponent(splitName[0]);
			
			//window.open(\'' + RMPSearchURL + '\',\'_blank\'); window.open(\'' + RITEvalsURL + '\',\'_blank\');
			return '<a target="_blank" href="' + RMPSearchURL + '" onclick="alert();">' + input + '</a>';
		} else {
			return '<a href="#">' + input + '</a>';
		}
	}
});