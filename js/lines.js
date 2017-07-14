var linesObj = {
  "bakerloo": "Bakerloo",
  "central": "Central",
  "circle": "Circle",
  "district": "District",
  "hammersmith-city": "Hammersmith & City",
  "jubilee": "Jubilee",
  "metropolitan": "Metropolitan",
  "northern": "Northern",
  "piccadilly": "Piccadilly",
  "victoria": "Victoria",
  "waterloo-city": "Waterloo & City",
  "london-overground": "London Overground",
  "dlr": "DLR",
  "tfl-rail": "TFL Rail",
  "tram": "Tram"
};

var linesColours = {
"bakerloo": [ "#b36305","white" ], // [ background-color,font-color ]
"central": [ "#e32017","white" ],
"circle": [ "#ffd300","black" ],
"district": [ "#00782a","white" ],
"hammersmith-city": [ "#f3a9bb","black" ],
"jubilee": [ "#a0a5a9","black" ],
"metropolitan": [ "#9b0056","white" ],
"northern": [ "#000000","white" ],
"piccadilly": [ "#003688","white" ],
"victoria": [ "#0098d4","white" ],
"waterloo-city": [ "#95cdba","black" ],
"london-overground": [ "#ee7c0e","white" ],
"dlr": [ "#00a4a7","white" ],
"tfl-rail": [ "#0019a8","white" ],
"tram": [ "#84b817","white" ]
}

if (typeof module !== 'undefined'){
  module.exports=linesObj;
}
