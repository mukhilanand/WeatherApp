//Converts the text date into 'MMMM dd yyyy' format
angular.module('myApp').filter('datefilter', function($filter) {

    return function(input) {
        if(input == null){ return ""; }
        var date = $filter('date')(new Date(input), 'MMMM dd yyyy');
        return date;
    }
});

//Converts the short hand version of the day to complete name
angular.module('myApp').filter('dayfilter', function() {

    return function(input) {
        var day;
        switch (input) {
            case "Sun":
                day = "Sunday";
                break;
            case "Mon":
                day = "Monday";
                break;
            case "Tue":
                day = "Tuesday";
                break;
            case "Wed":
                day = "Wednesday";
                break;
            case "Thu":
                day = "Thursday";
                break;
            case "Fri":
                day = "Friday";
                break;
            case "Sat":
                day = "Saturday";
        }
        return day
    }
});