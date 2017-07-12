var test =  require('tape');
var logic = require('./logic.js');


test ('formatLineName test', function(t){
  var actual = typeof logic.formatLineName("Victoria Line");
  var expected = 'string';
  t.equal(actual,expected,'logic.formatLineName should return a string');

  var actual = logic.formatLineName("Victoria Line");
  var expected = 'victoria';
  t.equal(actual,expected,'logic.formatLineName("Victoria Line") should return victoria');

  t.end();

});


test ("makeTflUrl test", function(t){
  var actual = typeof logic.makeTflUrl("Victoria Line");
  var expected = 'string';
  t.equal(actual,expected,'logic.makeTflUrl should return a string');

  var actual = logic.makeTflUrl("Victoria Line");
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
  var expected = "https://api.giphy.com/v1/gifs/search?api_key=03d284987c9444e8931acbc0601067d3&limit=25&offset=0&rating=G&lang=en&q=aardvark";
  t.equal(actual,expected,'logic.makeGiphyUrl should return the url');
  logic.resultsObj = {};

  t.end();
});
