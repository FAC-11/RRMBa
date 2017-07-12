( function() {
    var submit = document.getElementById('submit'),
        tubeLines = document.getElementsByName('tube-lines')[0],
        render = function() {
    };

    submit.addEventListener( 'submit', function( el ) {
      el.preventDefault();
      logic.makeTflRequest( tubeLines.value );
    });

    return render;
}) ();
