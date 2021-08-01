(function(global) {
    //Set up a namespace for our utility
    var ajaxUtils = {};

    //Returns an HTTP request object
    function getRequestObject() {
        if (window.XMLHttpRequest) {
            return (new XMLHttpRequest());
        }
        else if (window.ActiveXObject) {
            //For very old IE browsers (optional)
            return (new ActiveXObject("Microsoft.XMLHTTP"));
        }
        else {
            global.alert("Ajax is not supported!");
            return(null);
        }
    }

    //Makes an Ajax GET request to 'requestUrl'
    ajaxUtils.sendGetRequest = function(requestUrl, responseHandler, isJsonResponse, syncrounous) {
        var request = getRequestObject();
        request.onreadystatechange = function() {
            handleResponse(request, responseHandler, isJsonResponse);
        };

        if (syncrounous == undefined) {
            syncrounous = true;
        }

        if (syncrounous == true) {
            request.open("GET", requestUrl, true);
            request.send(null); //For POST only
        }
        else {
            request.open("GET", requestUrl, false);
            request.send(null);
        }
    };

    //Only calls user provided 'responseHandler'
    //Function if response is ready
    //And not an error
    function handleResponse(request, responseHandler, isJsonResponse) {
        if ((request.readyState == 4) && (request.status == 200)) {
            var jsonResponse = isJsonResponse;

            //Default to isJsonResponse = true
            if (jsonResponse == undefined) {
                jsonResponse = true;
            }

            if (jsonResponse == true) {
                responseHandler(JSON.parse(request.responseText));
            }

            else {
                responseHandler(request.responseText);
            }
        } 
    }

    //Expose utility to the global object
    global.$ajaxUtils = ajaxUtils;
    
})(window);