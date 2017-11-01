//Unit test for service converting C to F and vice versa
describe('convertDegreeScale', function () {
    var myserv;

    beforeEach(function () {
        module('degreeconvertSvc');

        inject(function (_convertDegreeScale_) {
            myserv = _convertDegreeScale_;
        });
    });


    it('ServiceTestSpec', function () {

        var result = myserv.convertFtoC(71);
        var returnData=22;
        expect(result).toEqual(returnData);

        result = myserv.convertFtoC(NaN);
        returnData=NaN;
        expect(result).toEqual(returnData);

        result = myserv.convertCtoF(25);
        returnData=77;
        expect(result).toEqual(returnData);

        result = myserv.convertCtoF(NaN);
        returnData=NaN;
        expect(result).toEqual(returnData);


    });

});
