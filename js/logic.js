var logicObj = {

    resultsObj: {},

    makeTflUrl: function(line) {
        /// code!
    },

    makeGiphyUrl: function() {
        /// code!
    },

    apiCall: function(url, cb) {
        ////code
    },

    tflCb: function(tflData) {
        /// sets object status property
        /// calls makeGiphyRequest
    },

    giphyCb: function(giphyData) {
        /// set object giphy url property
        /// call dom render
    },

    makeTflRequest: function(line) {
        // sets resultsObject.line = line
        //calls makeTflUrl
        // calls apiCall with url and tflCb
    },

    makeGiphyRequest: function() {
        //get line status from resultsObj
        //calls makegiphyUrl
        //apiCall(url, giphyCb)
    }



function makeTflRequest(line) {
    //
    var url = makeTflUrl(line);
    apiCall(url, tflCb);
}

function apiCall(url, cb) {
    //xmlhttRequest
    //if readystate = 4, status = 200
    let data = JSON.parse(response.text);
    cb(data);
}

function tflCb(tflData) {
    resultsObj.lineStatus = tflData.status;///????????
    makeGiphyRequest();
}

function makeGiphyRequest() {
    var url = makeGiphyUrl();
    apiCall(url, giphyCb);
}

function giphyCb(giphyData) {
    resultsObj.giphyUrl = giphyData.url; ///????????
    dom.render(resultsObj);
}

}