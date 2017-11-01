//Converts the degree scale from C to F and vice versa
angular.module('degreeconvertSvc',[]).service('convertDegreeScale', function() {
    this.convertFtoC = function (scale) {
        if(!isNaN(scale))
            return Math.round((scale - 32) * 5.0/9.0);
        else
            return scale;
    }
    this.convertCtoF = function (scale) {
        if(!isNaN(scale))
            return Math.round(scale * 9.0 / 5.0 + 32);
        else
            return scale;
    }
});