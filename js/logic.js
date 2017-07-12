var map = require("./map.js");

var logicObj = {

  resultsObj: {},

  formatLineName: function(line){
    return line.slice(0,1).toLowerCase() + line.slice(1,-5);
  },

  makeTflUrl: function(line) {
    /// code!
    var urlStart = 'https://api.tfl.gov.uk/Line/';
    var urlEnd = '/Status?app_id=de9e1a2e&app_key=41bcfcc2d033bae16403b619c8ec1613';
    return urlStart + this.formatLineName(line) + urlEnd;
  },

  makeGiphyUrl: function() {
    /// code!
    var urlBase = "https://api.giphy.com/v1/gifs/search?api_key=03d284987c9444e8931acbc0601067d3&limit=25&offset=0&rating=G&lang=en&q=";
    var searchTerm = map[this.resultsObj.status];
    return urlBase + searchTerm;
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
    var lineStatus = tflData[0].lineStatuses[0].statusSeverityDescription;
    this.resultsObj.status = lineStatus;
    /// calls makeGiphyRequest
    this.makeGiphyRequest();
  },

  giphyCb: function(giphyData) {
    /// set object giphy url property
    var randomNum = Math.floor(Math.random()*30);
    var gifSrc = giphyData.data[randomNum].images.fixed_height.url;
    this.resultsObj.url = gifSrc;
    /// call dom render
    render(this.resultsObj);
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
  module.exports=logicObj;
}
