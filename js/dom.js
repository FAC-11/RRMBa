var render = function( resultsObject ) {
  var lineTitleSelector = document.getElementsByClassName('selected-line')[0];
  var imageSelector = document.getElementsByClassName('giphy')[0];
  var captionSelector = document.getElementsByClassName('status-severity')[0];

  lineTitleSelector.textContent = resultsObject.line;
  imageSelector.src = resultsObject.url;
  imageSelector.setAttribute('alt', resultsObject.status);
  captionSelector.textContent = resultsObject.status;
  };

( function() {
  var submit = document.getElementById('submit'),
      tubeLines = document.getElementsByName('tube-lines')[0];

      submit.addEventListener( 'submit', function( el ) {
        el.preventDefault();
        logicObject.makeTflRequest( tubeLines.value );
      });
}() );
