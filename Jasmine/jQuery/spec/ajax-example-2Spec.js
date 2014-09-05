describe('Test example-2', function () {

    it('should check promise rejected with a custom message', function () {
        spyOn($, 'ajax').andCallFake(function (req) {
            var d = $.Deferred();
            d.reject("I am failed");
            return d.promise();
        });

        var expectedPromise = two();
        var result = "I am failed";

        expectedPromise.then(null, function(response) {
          expect(response).toEqual(result);
        });
    });
});