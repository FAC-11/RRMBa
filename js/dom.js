var domRender = ( function() {
      var render = function( resultsObject ) {
      // stuff stuff stuff
      console.log("hey");
    };
    return render;
  }() );

( function() {
  var submit = document.getElementById('submit'),
      tubeLines = document.getElementsByName('tube-lines')[0];

      submit.addEventListener( 'submit', function( el ) {
        el.preventDefault();
        logicObject.makeTflRequest( tubeLines.value );
      });
}() );
