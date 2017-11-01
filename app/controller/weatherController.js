var app = angular.module('myApp');
app.controller('myCtrl',['$scope','$cookies','convertDegreeScale','weatherService', function($scope,$cookies,convertDegreeScale,weatherService) {
    $scope.updateWeather=function(){

        if($scope.cityName.length==0){
            $scope.errorvalue="Please enter the city name";
            $scope.handleerror=false;
        }
        //Adding city to the cookie for an year so that it is persisted across browser sessions
        var now = new Date(),
            exp = new Date(now.getFullYear()+1, now.getMonth(), now.getDate());
        $cookies.put('city', $scope.cityName,{expires: exp});

        //get current weather data and teh forcast for 10days by making a call to the weatherService
        weatherService.getWeather($scope.cityName)
            .then(function(weatherData) {
                $scope.title=weatherData.title;
                $scope.todayDate=weatherData.todayDate;
                $scope.currentDegrees=weatherData.currentDegrees;
                $scope.todayDescription=weatherData.todayDescription;
                $scope.forecasts=weatherData.forecasts;
                $scope.hideCurrentWeather=false;
                $scope.labels=weatherService.getdates($scope.forecasts);
                $scope.data=weatherService.getdata($scope.forecasts);
                $scope.series = ['High', 'Low'];
                $scope.citydisplay=$scope.cityName;
                $scope.errorvalue="";
                $scope.handleerror=true;
            }).catch(function(response) {
                  $scope.handleerror=false;
                  console.log("Did not get the weather data");
        })
    }

    //clearing the already populated city name when clicked on the input box
    $scope.clear = function () {
        $scope.cityName="";
    }

    //this logic converts from F to C and vice versa in the current weather
    $scope.convertScale = function (converto) {
        if(converto!=current){
            current=converto;
            if(converto==0)
                $scope.currentDegrees = convertDegreeScale.convertFtoC($scope.currentDegrees);
            else
                $scope.currentDegrees = convertDegreeScale.convertCtoF($scope.currentDegrees);
        }
    }

    var current=1;
    $scope.hideCurrentWeather=true;
    $scope.handleerror=true;

    //On load of the controller i the cookie is not set to null load the page for the current city
    if($cookies.get('city')!=null){
        $scope.cityName=$cookies.get('city');
        $scope.updateWeather();
        $scope.showCurrentWeather=false;
    }
    else{
        $scope.hideCurrentWeather=true;
    }

    $scope.$on('place_changed', function (e, place) {
        $scope.cityName=place;
    });

}]);


