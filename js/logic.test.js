var test =  require ('tape');
var logic = require ('./logic.js')

test ('Return strings', function(t){
  var actual = typeof logic.makeTflUrl("Victoria Line");
  var expected = 'string';
  t.equal(actual,expected,'logic.makeTflUrl should return a string');
  t.end();

});

test ('Return the correct url', function(t){
  var actual = logic.makeTflUrl("Victoria Line");
  var expected = 'https://api.tfl.gov.uk/Line/victoria/Status?app_id=de9e1a2e&app_key=41bcfcc2d033bae16403b619c8ec1613';
  t.equal(actual,expected,'logic.makeTflUrl should return the url');
  t.end();

});
