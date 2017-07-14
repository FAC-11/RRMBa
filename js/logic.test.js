var test =  require('tape');
var logic = require('./logic.js');
var lines = require('./lines.js');
var examples = require('./test-data.js');


test ("makeTflUrl test", function(t){

  logic.resultsObj.line = 'victoria';

  var actual = typeof logic.makeTflUrl();
  var expected = 'string';
  t.equal(actual,expected,'logic.makeTflUrl should return a string');

  var actual = logic.makeTflUrl();
  var expected = 'https://api.tfl.gov.uk/Line/victoria/Status?app_id=de9e1a2e&app_key=41bcfcc2d033bae16403b619c8ec1613';
  t.equal(actual,expected,'logic.makeTflUrl should return the url');

  t.end();
});

test ("makeGiphyUrl test", function(t){
  var actual = typeof logic.makeGiphyUrl(logic.resultsObj.status);
  var expected = 'string';
  t.equal(actual,expected,'logic.makeGiphyUrl should return a string');

  logic.resultsObj.status = "Special Service";
  var actual = logic.makeGiphyUrl(logic.resultsObj.status);
  var expected = "https://api.giphy.com/v1/gifs/search?api_key=03d284987c9444e8931acbc0601067d3&limit=30&offset=0&rating=G&lang=en&q=flying";
  t.equal(actual,expected,'logic.makeGiphyUrl should return the url');
  logic.resultsObj = {};


    t.end();
  });


test('TFL Callback function', function(t){

  var expected = {
      "$type": "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
      "id": 0,
      "statusSeverity": 10,
      "statusSeverityDescription": "Good Service",
      "created": "0001-01-01T00:00:00",
      "validityPeriods": []
  };

  logic.tflCb(examples.exampleTflData);
  var actual = examples.exampleTflData[0].lineStatuses[0];
  t.deepEqual(actual, expected, 'does not mutate section of input data that is used by function');

  actual = logic.resultsObj.status;
  expected = "Good Service";
  t.equal(actual, expected, 'Returns line status as a string from TFL-formatted data');

  t.end();
});


test('Giphy Callback function', function(t){

  logic.giphyCb(examples.exampleGiphyData);
  var urlTest = logic.resultsObj.url;
  var reg = /https:\/\/media\d\.giphy\.com\/media\/(\w|\d)+\/200\.gif/g;
  t.ok(reg.test(urlTest), 'Passes a giphy url to the results Object');


  t.end();
});
