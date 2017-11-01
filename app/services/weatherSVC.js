//weather service module which has API's to handle weather related information
angular.module('weatherModule',[]).service('weatherService', function($http, $log, $q) {
    return {
        //gets the current weather and the forcast by making http call to the endpoint
        getWeather: function(cityName) {
            var deferred = $q.defer();
            $http.get("https://query.yahooapis.com/v1/public/yql?q="+encodeURI("select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="+"'"+cityName+"'"+")&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"))
                .then(function(response) {
                    deferred.resolve({
                        title:response.data.query.results.channel.title,
                        todayDate:response.data.query.results.channel.item.condition.date,
                        currentDegrees:response.data.query.results.channel.item.condition.temp,
                        todayDescription:response.data.query.results.channel.item.condition.text,
                        forecasts:response.data.query.results.channel.item.forecast
                    });
                }).catch(function(response) {
                console.log(response)
                deferred.reject(response);
            })

            return deferred.promise;
        },

        //this api parses the forcast information and gets the list of dates
        getdates: function(forecasts) {
            var dates=new Array();
            for(i=0;i<forecasts.length;i++){
                dates[i]=forecasts[i].date;
            }
            return dates;

        },

        //this api parses the forcast information and gets the list of high and low weather for the next 10 days
        getdata: function(forecasts) {
            var data=[];
            data[0]=[];
            data[1]=[];
            for(i=0;i<forecasts.length;i++){
                data[0][i]=forecasts[i].high;
                data[1][i]=forecasts[i].low;
            }
            return data;

        }
    }
});
