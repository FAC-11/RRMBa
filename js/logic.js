if (typeof module !== 'undefined'){
  var severityGifMap = require("./map.js");
}

var logicObj = {

  resultsObj: {},

  formatLineName: function(line){
    return line.slice(0,1).toLowerCase() + line.slice(1,-5);
  },

  makeTflUrl: function() {
    /// code!
    var urlStart = 'https://api.tfl.gov.uk/Line/';
    var urlEnd = '/Status?app_id=de9e1a2e&app_key=41bcfcc2d033bae16403b619c8ec1613';
    return urlStart + logicObj.formatLineName(logicObj.resultsObj.line) + urlEnd;
  },

  makeGiphyUrl: function() {
    /// code!
    var urlBase = "https://api.giphy.com/v1/gifs/search?api_key=03d284987c9444e8931acbc0601067d3&limit=25&offset=0&rating=G&lang=en&q=";
    var searchTerm = severityGifMap[logicObj.resultsObj.status];
    return urlBase + searchTerm;
  },

  apiCall: function(url, cb) {
    ////code
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var data = JSON.parse(xhr.responseText);
        console.log('api call', data);
        cb(data);
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  },

  tflCb: function(tflData) {
    /// sets object status property
    console.log('tflCb', tflData);
    var lineStatus = tflData[0].lineStatuses[0].statusSeverityDescription;
    logicObj.resultsObj.status = lineStatus;
    /// calls makeGiphyRequest
    // logicObj.makeGiphyRequest();
  },

  giphyCb: function(giphyData) {
    /// set object giphy url property
    console.log('giphyCb', giphyData);
    var randomNum = Math.floor(Math.random()*30);
    var gifSrc = giphyData.data[randomNum].images.fixed_height.url;
    logicObj.resultsObj.url = gifSrc;
    /// call dom render
    // render(logicObj.resultsObj);
  },

  waterfall: function(tasksArray, urlsArray) {
      if (tasksArray.length > 0) {

          var task = tasksArray[0];
          var remainingTasks = tasksArray.slice(1);
          var url = urlsArray[0];
          var remainingUrls = urlsArray.slice(1);

          logicObj.apiCall(url, function(data) {
              console.log('waterfall anon cb', data);
              task(data);
              logicObj.waterfall(remainingTasks, remainingUrls);
          })

      }
      render(logicObj.resultsObj);
  },

  init: function(line) {
      logicObj.resultsObj.line = line;
      logicObj.waterfall([logicObj.tflCb, logicObj.giphyCb], [logicObj.makeTflUrl, logicObj.makeGiphyUrl]);
  }

//   makeTflRequest: function(line) {
//     logicObj.resultsObj.line = line;
//     //calls makeTflUrl
//     var url = logicObj.makeTflUrl(line);
//     // calls apiCall with url and tflCb
//     logicObj.apiCall(url, logicObj.tflCb);
//   },

//   makeGiphyRequest: function() {
//     //get line status from resultsObj - don't need to, as makeGiphyUrl doesn't take it as an argument and instead calls it from within the function
//     //calls makegiphyUrl
//     var url = logicObj.makeGiphyUrl();
//     //apiCall(url, giphyCb)
//     logicObj.apiCall(url, logicObj.giphyCb)
//   }

}

if (typeof module !== 'undefined'){
  module.exports=logicObj;
}
