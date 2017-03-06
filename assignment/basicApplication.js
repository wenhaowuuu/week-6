/* ================================
Week 6 Assignment: Basic Application

Take a look at the midterm prototype: https://marvelapp.com/bf2c9h/screen/10434841
Try clicking on the "Next" and "Previous" buttons. This task will ask you to write some functions
that will enable us to write an application like in the midterm.

Write three functions: clickNextButton, clickPreviousButton, and saySlideName.
clickNextButton and clickPreviousButtons should simulate what will happen when someone clicks
on a next or previous button in your application.

You don't need to create HTML buttons or a useable application—this exercise is asking you to create
functions that will be used in your application. To test it out, try calling the functions in your
console. For example, try running: clickNextButton() and see what it does. Use lots of console logs!
================================ */

/* =====================
  Global Variables
===================== */
var data = EconomicIndicator_Chinesecities;  // for holding data
var stringFilter = "";
var selectValue = 'All';

/* =====================
  Map Setup
===================== */
// Notice that we've been using an options object since week 1 without realizing it
// var mapOpts = {
//   center: [0, 0],
//   zoom: 2
// };
// var map = L.map('map', mapOpts);

var map = L.map('map', {
  center: [32.9670, 117.5370],
  zoom: 5
});

// Another options object
// var tileOpts = {
//   attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//   subdomains: 'abcd',
//   minZoom: 0,
//   maxZoom: 20,
//   ext: 'png'
// };

var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

var state = {
  "slideNumber": 0, // slideNumber keeps track of what slide you are on. It should increase when you
                    // click the next button and decrease when you click the previous button. It
                    // should never get so large that it is bigger than the dataset. It should never
                    // get so small that it is smaller than 0.
  "slideData": [
    {
      "name": "Leaflet",
      "language": "Javascript",
      "namespace": "L"
    },
    {
      "name": "Underscore",
      "language": "Javascript",
      "namespace": "_"
    },
    {
      "name": "jQuery",
      "language": "Javascript",
      "namespace": "$"
    }
  ]
};
var datalength = data.length;

var clickNextButton = function() {
  if (state.slideNumber<data.length){
    state.slideNumber +=1;
    console.log("slide"+state.slideNumber);
    removeMarkers();
  }
};

var clickPreviousButton = function() {
  if (state.slideNumber>0){
    state.slideNumber -=1;
    console.log("slide"+state.slideNumber);
  }
};

var saySlideName = function() {
    console.log(state.slideData.name);
  // saySlideName uses console.log to "say" the name of the slide it is given. It should run when
  // someone clicks on one of the buttons.
};

$('#nextButton').click(function(){
    console.log('clicked');
    clickNextButton();
});

$('#previousButton').click(function(){
    console.log('clicked');
    clickPreviousButton();
});

$('#SaynameButton').click(function(){
    console.log('clicked');
    saySlideName();
});
