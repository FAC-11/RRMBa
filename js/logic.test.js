var test = require('tape');
var logicObj = require('./logic.js');

//tests for tflCb function
//example API data from TFL
var exampleTflData = [
    {  "name": "Victoria",
        "modeName": "tube",
        "disruptions": [],
        "created": "2017-07-11T16:41:00.017Z",
        "modified": "2017-07-11T16:41:00.017Z",
        "lineStatuses": [
            {
                "$type": "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
                "id": 0,
                "statusSeverity": 10,
                "statusSeverityDescription": "Good Service",
                "created": "0001-01-01T00:00:00",
                "validityPeriods": []
            }
        ],
        "routeSections": [],
        "serviceTypes": [
            {
                "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
                "name": "Regular",
                "uri": "/Line/Route?ids=Victoria&serviceTypes=Regular"
            },
            {
                "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
                "name": "Night",
                "uri": "/Line/Route?ids=Victoria&serviceTypes=Night"
            }
        ],
        "crowding": {
            "$type": "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
        }
    }
]

test('TFL Callback function', function(t){

  var expected = {
      "$type": "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
      "id": 0,
      "statusSeverity": 10,
      "statusSeverityDescription": "Good Service",
      "created": "0001-01-01T00:00:00",
      "validityPeriods": []
  };
  logicObj.tflCb(exampleTflData);
  var actual = exampleTflData[0].lineStatuses[0];
  t.deepEqual(actual, expected, 'does not mutate section of input data that is used by function');

  actual = logicObj.resultsObj.status;
  expected = "Good Service"
  t.equal(actual, expected, 'Returns line status as a string from TFL-formatted data');

  t.end();
});

//tests for giphyCb function
//example Giphy Data - replace with new version in a new file
var exampleGiphyData = {data:[
{
type: "gif",
id: "ilqP024HRmg5MkaN8s",
slug: "gopop-come-at-me-bro-kangaroo-ilqP024HRmg5MkaN8s",
url: "https://giphy.com/gifs/gopop-come-at-me-bro-kangaroo-ilqP024HRmg5MkaN8s",
bitly_gif_url: "http://gph.is/1hepcuU",
bitly_url: "http://gph.is/1hepcuU",
embed_url: "https://giphy.com/embed/ilqP024HRmg5MkaN8s",
username: "",
source: "http://tumblr.4gifs.com/post/77571638425/anteater-stands-kangaroo",
rating: "g",
content_url: "",
source_tld: "tumblr.4gifs.com",
source_post_url: "http://tumblr.4gifs.com/post/77571638425/anteater-stands-kangaroo",
is_indexable: 0,
import_datetime: "2014-02-23 18:26:34",
trending_datetime: "2016-08-01 02:15:01",
images: {
fixed_height: {
url: "https://media3.giphy.com/media/ilqP024HRmg5MkaN8s/200.gif",
width: "214",
height: "200",
size: "1216909",
mp4: "https://media0.giphy.com/media/ilqP024HRmg5MkaN8s/200.mp4",
mp4_size: "111335",
webp: "https://media3.giphy.com/media/ilqP024HRmg5MkaN8s/200.webp",
webp_size: "559104"
},
fixed_height_still: {
url: "https://media3.giphy.com/media/ilqP024HRmg5MkaN8s/200_s.gif",
width: "214",
height: "200"
},
fixed_height_downsampled: {
url: "https://media3.giphy.com/media/ilqP024HRmg5MkaN8s/200_d.gif",
width: "214",
height: "200",
size: "127118",
webp: "https://media3.giphy.com/media/ilqP024HRmg5MkaN8s/200_d.webp",
webp_size: "56046"
},
fixed_width: {
url: "https://media3.giphy.com/media/ilqP024HRmg5MkaN8s/200w.gif",
width: "200",
height: "187",
size: "1059567",
mp4: "https://media0.giphy.com/media/ilqP024HRmg5MkaN8s/200w.mp4",
mp4_size: "99050",
webp: "https://media3.giphy.com/media/ilqP024HRmg5MkaN8s/200w.webp",
webp_size: "489210"
},
fixed_width_still: {
url: "https://media3.giphy.com/media/ilqP024HRmg5MkaN8s/200w_s.gif",
width: "200",
height: "187"
},
fixed_width_downsampled: {
url: "https://media3.giphy.com/media/ilqP024HRmg5MkaN8s/200w_d.gif",
width: "200",
height: "187",
size: "111144",
webp: "https://media3.giphy.com/media/ilqP024HRmg5MkaN8s/200w_d.webp",
webp_size: "48878"
},
fixed_height_small: {
url: "https://media3.giphy.com/media/ilqP024HRmg5MkaN8s/100.gif",
width: "107",
height: "100",
size: "365956",
mp4: "https://media0.giphy.com/media/ilqP024HRmg5MkaN8s/100.mp4",
mp4_size: "45148",
webp: "https://media3.giphy.com/media/ilqP024HRmg5MkaN8s/100.webp",
webp_size: "186778"
},
fixed_height_small_still: {
url: "https://media3.giphy.com/media/ilqP024HRmg5MkaN8s/100_s.gif",
width: "107",
height: "100"
},
fixed_width_small: {
url: "https://media3.giphy.com/media/ilqP024HRmg5MkaN8s/100w.gif",
width: "100",
height: "93",
size: "317417",
mp4: "https://media0.giphy.com/media/ilqP024HRmg5MkaN8s/100w.mp4",
mp4_size: "40878",
webp: "https://media3.giphy.com/media/ilqP024HRmg5MkaN8s/100w.webp",
webp_size: "162394"
},
fixed_width_small_still: {
url: "https://media3.giphy.com/media/ilqP024HRmg5MkaN8s/100w_s.gif",
width: "100",
height: "93"
},
downsized: {
url: "https://media0.giphy.com/media/ilqP024HRmg5MkaN8s/giphy-downsized.gif",
width: "250",
height: "233",
size: "1664790"
},
downsized_still: {
url: "https://media0.giphy.com/media/ilqP024HRmg5MkaN8s/giphy-downsized_s.gif",
width: "250",
height: "233",
size: "31152"
},
downsized_large: {
url: "https://media3.giphy.com/media/ilqP024HRmg5MkaN8s/giphy.gif",
width: "341",
height: "318",
size: "2095985"
},
downsized_medium: {
url: "https://media3.giphy.com/media/ilqP024HRmg5MkaN8s/giphy.gif",
width: "341",
height: "318",
size: "2095985"
},
original: {
url: "https://media3.giphy.com/media/ilqP024HRmg5MkaN8s/giphy.gif",
width: "341",
height: "318",
size: "2095985",
frames: "60",
mp4: "https://media3.giphy.com/media/ilqP024HRmg5MkaN8s/giphy.mp4",
mp4_size: "719446",
webp: "https://media3.giphy.com/media/ilqP024HRmg5MkaN8s/giphy.webp",
webp_size: "1655680"
},
original_still: {
url: "https://media3.giphy.com/media/ilqP024HRmg5MkaN8s/giphy_s.gif",
width: "341",
height: "318"
},
looping: {
mp4: "https://media0.giphy.com/media/ilqP024HRmg5MkaN8s/giphy-loop.mp4",
mp4_size: "1526197"
},
original_mp4: {
mp4: "https://media0.giphy.com/media/ilqP024HRmg5MkaN8s/giphy.mp4",
mp4_size: "719446",
width: "480",
height: "446"
},
preview: {
mp4: "https://media0.giphy.com/media/ilqP024HRmg5MkaN8s/giphy-preview.mp4",
mp4_size: "40459",
width: "202",
height: "188"
},
downsized_small: {
mp4: "https://media0.giphy.com/media/ilqP024HRmg5MkaN8s/giphy-downsized-small.mp4",
mp4_size: "112312",
width: "190",
height: "178"
},
preview_gif: {
url: "https://media0.giphy.com/media/ilqP024HRmg5MkaN8s/giphy-preview.gif",
width: "125",
height: "117",
size: "47860"
},
preview_webp: {
url: "https://media0.giphy.com/media/ilqP024HRmg5MkaN8s/giphy-preview.webp",
width: "160",
height: "149",
size: "47442"
}
}
},
]}

test('Giphy Callback function', function(t){
  //rewrite this test with a new exampleGiphyData (perhaps put in a new file)
  // logicObj.giphyCb(exampleGiphyData);
  // var urlTest = logicObj.resultsObj.url;
  // var reg = /https:\/\/media3.giphy.com\/media\/(\w|\d)+\/200.gif/g;
  // t.ok(reg.test(urlTest), 'Passes a giphy url to the results Object');


  t.end();
});
