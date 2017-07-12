var logicObj = {

  resultsObj: {},

  formatLineName: function(line){
    return line.slice(0, -5);
  },

  makeTflUrl: function(line) {
    /// code!
    var urlStart = 'https://api.tfl.gov.uk/Line/';
    var urlEnd = '/Status?app_id=de9e1a2e&app_key=41bcfcc2d033bae16403b619c8ec1613';
    return urlStart + this.formatLineName(line) + urlEnd;
  },

  makeGiphyUrl: function() {
    /// code!

  },

  apiCall: function(url, cb) {
    ////code
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var data = JSON.parse(xhr.responseText);
        cb(data);
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
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

if (typeof module !== 'undefined'){
  module.exports=romanizer;
}
