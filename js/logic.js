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

}