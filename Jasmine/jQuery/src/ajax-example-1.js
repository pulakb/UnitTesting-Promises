function one() {		    
    var deferred = $.Deferred(); 

    $.ajax( {
        url: '/',
        success: function() {
            deferred.resolve("I am done");
        }		        
    });
    
    return deferred.promise();
}