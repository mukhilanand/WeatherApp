//Directive to show the forcasts for 10 days in list of cards
angular.module('myApp').directive("cardForecastDirective", function() {
    return {
        template : "<div class=\"card\">\n" +
        "            <div class=\"card-block\">\n" +
        "                <h4 class=\"preferredfont\">{{forecast.day | dayfilter}}, {{forecast.date | datefilter }}</h4>\n" +
        "                <p class=\"highdegree\">High : {{forecast.high}}ºF</p>\n" +
        "                <p class=\"lowdegree\">Low  : {{forecast.low}}ºF</p>\n" +
        "                <p>{{forecast.text}}</p>\n" +
        "            </div>\n" +
        "        </div>"
    };
});

//Directive to show the forecast in form of a chart
angular.module('myApp').directive("chartForecastDirective", function() {
    return {
        template : "<div class=\"col-sm-6 \" >\n" +
        "            <div class=\"card\">\n" +
        "                <div class=\"card-header customheader\" >Forecast Graph</div>\n" +
        "                <div class=\"card-block\">\n" +
        "                    <canvas id=\"bar\" class=\"chart chart-bar\" chart-data=\"data\" chart-labels=\"labels\">\n" +
        "                        chart-series=\"series\"\n" +
        "                    </canvas>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>"
    };
});

//Directive to show current weather in a card
angular.module('myApp').directive("currentWeatherDirective", function() {
    return {
        template : "<div class=\"col-sm-6 \" >\n" +
        "            <div class=\"card\">\n" +
        "                <div class=\"card-block\">\n" +
        "                    <h3 class=\"preferredfont\" >{{citydisplay}}</h3>\n" +
        "                    <h4 class=\"preferredfont\" >{{todayDate}}</h4>\n" +
        "                    <p>  <label class=\"degree\"> {{currentDegrees}}º</label>\n" +
        "                        <label ng-click=\"convertScale(0)\">C</label></sup>\n" +
        "                        <label >/</label>\n" +
        "                        <label ng-click=\"convertScale(1)\">F</label>\n" +
        "                    </p>\n" +
        "\n" +
        "                    <h3 class=\"preferredfont\">{{todayDescription}}</h3>\n" +
        "\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>"
    };
});

