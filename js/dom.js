var render = function( resultsObj ) {
  var lineTitleSelector = document.getElementsByClassName('selected-line')[0];
  var imageSelector = document.getElementsByClassName('giphy')[0];
  var captionSelector = document.getElementsByClassName('status-severity')[0];

  imageSelector.src = resultsObj.url;
  imageSelector.setAttribute('alt', resultsObj.status);
  imageSelector.setAttribute('title', resultsObj.status);
  captionSelector.textContent = resultsObj.status;
  lineTitleSelector.style.padding = '1%';
  lineTitleSelector.style.backgroundColor = linesColours[resultsObj.line][0];
  lineTitleSelector.style.color = linesColours[resultsObj.line][1];
  lineTitleSelector.textContent = resultsObj.lineName;

  };

( function() {
var tubeLines = document.getElementsByName('tube-lines'),
    chooseLine = document.getElementsByClassName('choose-your-line')[0];

    chooseLine.addEventListener( 'click', function( e ) {
        logicObj.init( e.target.value, e.target.textContent);
      });
}() );
