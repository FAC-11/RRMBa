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
var submit = document.getElementsByTagName('form')[0],
    tubeLines = document.getElementsByName('tube-lines')[0];

      submit.addEventListener( 'submit', function( e ) {
        e.preventDefault();
        logicObj.makeTflRequest( tubeLines.value );
      });
}() );
