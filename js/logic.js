if (typeof module !== 'undefined'){
  var severityGifMap = require("./map.js");
}

var logicObj = {

  resultsObj: {},

  formatLineName: function(line){
    return line.slice(0,1).toLowerCase() + line.slice(1,-5);
  },

  makeTflUrl: function() {
    var urlStart = 'https://api.tfl.gov.uk/Line/';
    var urlEnd = '/Status?app_id=de9e1a2e&app_key=41bcfcc2d033bae16403b619c8ec1613';
    return urlStart + logicObj.formatLineName(logicObj.resultsObj.line) + urlEnd;
  },

  makeGiphyUrl: function() {
    var urlBase = "https://api.giphy.com/v1/gifs/search?api_key=03d284987c9444e8931acbc0601067d3&limit=25&offset=0&rating=G&lang=en&q=";
    var searchTerm = severityGifMap[logicObj.resultsObj.status];
    return urlBase + searchTerm;
  },

  apiCall: function(url, cb) {
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
    var lineStatus = tflData[0].lineStatuses[0].statusSeverityDescription;
    logicObj.resultsObj.status = lineStatus;
  },

  giphyCb: function(giphyData) {
    var randomNum = Math.floor(Math.random()*30);
    var gifSrc = giphyData.data[randomNum].images.fixed_height.url;
    logicObj.resultsObj.url = gifSrc;
  },

  waterfall: function(tasksArray, urlsArray) {
      if (tasksArray.length > 0) {

          var task = tasksArray[0];
          var remainingTasks = tasksArray.slice(1);
          var url = urlsArray[0]();
          var remainingUrls = urlsArray.slice(1);

          logicObj.apiCall(url, function(data) {
              task(data);
              logicObj.waterfall(remainingTasks, remainingUrls);
          })

      }
      else { 
          render(logicObj.resultsObj);
      }
  },

  init: function(line) {
      logicObj.resultsObj.line = line;
      logicObj.waterfall([logicObj.tflCb, logicObj.giphyCb], [logicObj.makeTflUrl, logicObj.makeGiphyUrl]);
  }

}

if (typeof module !== 'undefined'){
  module.exports=logicObj;
}
