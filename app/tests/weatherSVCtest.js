'use strict';

//Unit test for get weather service mocked with _$httpBackend_
describe('Testing the getWeather API service', function(){
    var weatherService,
        $httpBackend;

    var Response = {
        "query": {
            "count": 1,
            "created": "2017-11-01T04:47:30Z",
            "lang": "en-US",
            "results": {
                "channel": {
                    "units": {
                        "distance": "mi",
                        "pressure": "in",
                        "speed": "mph",
                        "temperature": "F"
                    },
                    "title": "Yahoo! Weather - Mountain View, CA, US",
                    "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2455920/",
                    "description": "Yahoo! Weather for Mountain View, CA, US",
                    "language": "en-us",
                    "lastBuildDate": "Tue, 31 Oct 2017 09:47 PM PDT",
                    "ttl": "60",
                    "location": {
                        "city": "Mountain View",
                        "country": "United States",
                        "region": " CA"
                    },
                    "wind": {
                        "chill": "57",
                        "direction": "335",
                        "speed": "7"
                    },
                    "atmosphere": {
                        "humidity": "73",
                        "pressure": "1005.0",
                        "rising": "0",
                        "visibility": "16.1"
                    },
                    "astronomy": {
                        "sunrise": "7:32 am",
                        "sunset": "6:11 pm"
                    },
                    "image": {
                        "title": "Yahoo! Weather",
                        "width": "142",
                        "height": "18",
                        "link": "http://weather.yahoo.com",
                        "url": "http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"
                    },
                    "item": {
                        "title": "Conditions for Mountain View, CA, US at 09:00 PM PDT",
                        "lat": "37.39999",
                        "long": "-122.079552",
                        "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2455920/",
                        "pubDate": "Tue, 31 Oct 2017 09:00 PM PDT",
                        "condition": {
                            "code": "31",
                            "date": "Tue, 31 Oct 2017 09:00 PM PDT",
                            "temp": "57",
                            "text": "Clear"
                        },
                        "forecast": [
                            {
                                "code": "30",
                                "date": "31 Oct 2017",
                                "day": "Tue",
                                "high": "70",
                                "low": "54",
                                "text": "Partly Cloudy"
                            },
                            {
                                "code": "34",
                                "date": "01 Nov 2017",
                                "day": "Wed",
                                "high": "67",
                                "low": "49",
                                "text": "Mostly Sunny"
                            },
                            {
                                "code": "30",
                                "date": "02 Nov 2017",
                                "day": "Thu",
                                "high": "66",
                                "low": "51",
                                "text": "Partly Cloudy"
                            },
                            {
                                "code": "12",
                                "date": "03 Nov 2017",
                                "day": "Fri",
                                "high": "64",
                                "low": "55",
                                "text": "Rain"
                            },
                            {
                                "code": "39",
                                "date": "04 Nov 2017",
                                "day": "Sat",
                                "high": "60",
                                "low": "52",
                                "text": "Scattered Showers"
                            },
                            {
                                "code": "30",
                                "date": "05 Nov 2017",
                                "day": "Sun",
                                "high": "59",
                                "low": "46",
                                "text": "Partly Cloudy"
                            },
                            {
                                "code": "30",
                                "date": "06 Nov 2017",
                                "day": "Mon",
                                "high": "61",
                                "low": "48",
                                "text": "Partly Cloudy"
                            },
                            {
                                "code": "30",
                                "date": "07 Nov 2017",
                                "day": "Tue",
                                "high": "61",
                                "low": "45",
                                "text": "Partly Cloudy"
                            },
                            {
                                "code": "30",
                                "date": "08 Nov 2017",
                                "day": "Wed",
                                "high": "62",
                                "low": "46",
                                "text": "Partly Cloudy"
                            },
                            {
                                "code": "28",
                                "date": "09 Nov 2017",
                                "day": "Thu",
                                "high": "64",
                                "low": "50",
                                "text": "Mostly Cloudy"
                            }
                        ],
                        "description": "<![CDATA[<img src=\"http://l.yimg.com/a/i/us/we/52/31.gif\"/>\n<BR />\n<b>Current Conditions:</b>\n<BR />Clear\n<BR />\n<BR />\n<b>Forecast:</b>\n<BR /> Tue - Partly Cloudy. High: 70Low: 54\n<BR /> Wed - Mostly Sunny. High: 67Low: 49\n<BR /> Thu - Partly Cloudy. High: 66Low: 51\n<BR /> Fri - Rain. High: 64Low: 55\n<BR /> Sat - Scattered Showers. High: 60Low: 52\n<BR />\n<BR />\n<a href=\"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2455920/\">Full Forecast at Yahoo! Weather</a>\n<BR />\n<BR />\n<BR />\n]]>",
                        "guid": {
                            "isPermaLink": "false"
                        }
                    }
                }
            }
        }
    };

    beforeEach(function(){
        module('weatherModule');

        inject(function(_$httpBackend_, _weatherService_){
            $httpBackend = _$httpBackend_;
            weatherService = _weatherService_;
        })
    });

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest()
    });

    it('should make a get to retrieve Weather for given city', function(){
        $httpBackend.expectGET('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text=\'mountain%20view\')&format=json&env=store%253A%252F%252Fdatatables.org%252Falltableswithkeys').respond(Response);
        var deferredResponse =  weatherService.getWeather('mountain view');
        var result;
        deferredResponse.then(function(response){
            result = response.title;
        });
        $httpBackend.flush();
        expect(result).toEqual("Yahoo! Weather - Mountain View, CA, US")
    });

});

//Unit test for testing the getdates service
describe('Testing the getdates service', function(){
    var weatherService;

    beforeEach(function(){
        module('weatherModule');

        inject(function(_weatherService_){
            weatherService = _weatherService_;
        })
    });


    var forecast = [
            {
                "code": "30",
                "date": "29 Oct 2017",
                "day": "Sun",
                "high": "64",
                "low": "55",
                "text": "Partly Cloudy"
            },
            {
                "code": "28",
                "date": "30 Oct 2017",
                "day": "Mon",
                "high": "62",
                "low": "51",
                "text": "Mostly Cloudy"
            }
            ];

    it('get the date', function() {
        var respdates = weatherService.getdates(forecast);
        var dates = new Array();
        dates[0]="29 Oct 2017";
        dates[1]="30 Oct 2017";
        expect(respdates).toEqual(dates);
    });
});