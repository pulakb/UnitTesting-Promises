//Failure Example

function two() {		    
    var deferred = $.Deferred(); 

    $.ajax( {
        url: '/',
        success: function() {
            deferred.reject("I am failed");
        }		        
    });
    
    return deferred.promise();
}