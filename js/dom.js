var render = function( resultsObj ) {
  var lineTitleSelector = document.getElementsByClassName('selected-line')[0];
  var imageSelector = document.getElementsByClassName('giphy')[0];
  var captionSelector = document.getElementsByClassName('status-severity')[0];

  lineTitleSelector.textContent = resultsObj.line;
  imageSelector.src = resultsObj.url;
  imageSelector.setAttribute('alt', resultsObj.status);
  imageSelector.setAttribute('title', resultsObj.status);
  captionSelector.textContent = resultsObj.status;
  };

( function() {
var tubeLines = document.getElementsByName('tube-lines'),
    form = document.getElementsByClassName('choose-your-line')[0];

    form.addEventListener( 'click', function( e ) {
      console.log(e);
    tubeLines.forEach( function( line ) {
      if ( line.checked ) {
        console.log('about to run init');
        logicObj.init( line.value );
      };
    });
      });
}() );
