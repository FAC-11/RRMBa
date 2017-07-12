( function() {
    var submit = document.getElementById('submit'),
        tubeLines = document.getElementsByName('tube-lines')[0],
        render = function(resultsObject) {
    };

    submit.addEventListener( 'submit', function( el ) {
      el.preventDefault();
      logicObject.makeTflRequest( tubeLines.value );
    });

    return render;
}) ();
