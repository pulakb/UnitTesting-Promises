describe('Test example-1', function () {

    it('should check promise resolved with a custom message', function () {
        spyOn($, 'ajax').andCallFake(function (req) {
            var d = $.Deferred();
            d.resolve("I am done");
            return d.promise();
        });

        var expectedPromise = one();
        var result = "I am done";

        expectedPromise.then(function(response) {
          expect(response).toEqual(result);
        });
    });
});