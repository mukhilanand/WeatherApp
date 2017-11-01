//unit test for day filter
describe('dayfilter', function () {
    var $filter;

    beforeEach(function () {
        module('someApp');

        inject(function (_$filter_) {
            $filter = _$filter_;
        });
    });

    it('Convert full day name', function () {
        var result;
        result = $filter('dayfilter')('Sun');
        expect(result).toEqual('Sunday');
        result = $filter('dayfilter')('Mon');
        expect(result).toEqual('Monday');
        result = $filter('dayfilter')('Tue');
        expect(result).toEqual('Tuesday');
        result = $filter('dayfilter')('Wed');
        expect(result).toEqual('Wednesday');
        result = $filter('dayfilter')('Thu');
        expect(result).toEqual('Thursday');
        result = $filter('dayfilter')('Fri');
        expect(result).toEqual('Friday');
        result = $filter('dayfilter')('Sat');
        expect(result).toEqual('Saturday');
        result = $filter('dayfilter')('');
        expect(result).toEqual(undefined);
        result = $filter('dayfilter')('Something else');
        expect(result).toEqual(undefined);

    });
});

//unit test for date filter
describe('datefilter', function () {
    var $filter;

    beforeEach(function () {
        module('someApp');

        inject(function (_$filter_) {
            $filter = _$filter_;
        });
    });

    it('dateFormatter', function () {
        var result;
        result = $filter('datefilter')("20 Oct 2011");
        expect(result).toEqual('November 20 2017');
    });
});