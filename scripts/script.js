function openAbout(){
  if (document.getElementById("about-link").style.display == "none"){
    document.getElementById("about-link").style.display = "block"
    document.getElementById("map").style.display = "none"}
    else{
      document.getElementById("about-link").style.display = "none"
      document.getElementById("map").style.display = "block"
    }

}

function handwashwarning(){
// alert("Have you washed your hands?")

}

function casesByState(){
  if (document.getElementById("dropdown-content").style.display == "none"){
    document.getElementById("dropdown-content").style.display = "block"
    document.getElementById("map").style.top = "75px"
    document.getElementById("selftest").style.top = "75px"
    document.getElementById("video").style.marginTop = "75px"
    document.getElementById("feeds").style.top = "75px"
    document.getElementById("ncdctweet").style.top = "105px"
    document.getElementById("googlerss").style.marginTop = "85px"
    document.getElementById("about-link").style.display = "none"
    document.getElementById("map").style.display = "block"
  }
else{
  document.getElementById("dropdown-content").style.display = "none"
  document.getElementById("map").style.top = "55px"
  document.getElementById("selftest").style.top = "55px"
  document.getElementById("feeds").style.top = "55px"
  document.getElementById("googlerss").style.marginTop = "75px"
  document.getElementById("ncdctweet").style.top = "90px"
  document.getElementById("video").style.marginTop = "55px"

}

}

function newsFeed(){
  document.getElementById("ncdctweet").style.display = "none"
    document.getElementById("googlerss").style.display = "block"
  }

  function tweetFeed(){
    document.getElementById("googlerss").style.display = "none"
    document.getElementById("ncdctweet").style.display = "block"
    }

    var count = 0;

function selftestcard(){
  count = 0;
  if (document.getElementById("firstquestion").style.display == "block"||
  document.getElementById("secondquestion").style.display == "block"||
  document.getElementById("thirdquestion").style.display == "block"||
  document.getElementById("fourthquestion").style.display == "block"||
  document.getElementById("fifthquestion").style.display == "block"||
  document.getElementById("sixthquestion").style.display == "block"||
  document.getElementById("seventhquestion").style.display == "block"||
  document.getElementById("eighthquestion").style.display == "block"||
  document.getElementById("ninthquestion").style.display == "block"||
  document.getElementById("tenthquestion").style.display == "block"||
  document.getElementById("eleventhquestion").style.display == "block"||
  document.getElementById("resulthigh").style.display == "block"||
  document.getElementById("resultlow").style.display == "block"||
  document.getElementById("resultsevere").style.display == "block"||
  document.getElementById("resultmedium").style.display == "block"||
  document.getElementById("resultunclear").style.display == "block")
  {
    
    document.getElementById("firstquestion").style.display = "none"
    document.getElementById("secondquestion").style.display = "none"
    document.getElementById("thirdquestion").style.display = "none"
    document.getElementById("fourthquestion").style.display = "none"
    document.getElementById("fifthquestion").style.display = "none"
    document.getElementById("sixthquestion").style.display = "none"
    document.getElementById("seventhquestion").style.display = "none"
    document.getElementById("eighthquestion").style.display = "none"
    document.getElementById("ninthquestion").style.display = "none"
    document.getElementById("tenthquestion").style.display = "none"
    document.getElementById("eleventhquestion").style.display = "none"
    document.getElementById("resulthigh").style.display = "none"
    document.getElementById("resultlow").style.display = "none"
    document.getElementById("resultsevere").style.display = "none"
    document.getElementById("resultmedium").style.display = "none"
    document.getElementById("resultunclear").style.display = "none"
  }

  if(document.getElementById("selftest").style.display == "none"){
  document.getElementById("selftest").style.display = "block"
  document.getElementById("about-link").style.display = "none"
}
  
 
  else{
    document.getElementById("selftest").style.display = "none"
  }

}

function continueToFirstQuestion(){
  document.getElementById("selftest").style.display = "none"
  document.getElementById("firstquestion").style.display = "block"

}

function continueToSecondQuestion(){
  document.getElementById("firstquestion").style.display = "none"
  document.getElementById("secondquestion").style.display = "block"
}

function continueToThirdQuestion(){
  document.getElementById("secondquestion").style.display = "none"
  document.getElementById("thirdquestion").style.display = "block"
}

function continueToFourthQuestion(){
  document.getElementById("thirdquestion").style.display = "none"
  document.getElementById("fourthquestion").style.display = "block"
}

function continueToFifthQuestion(){
  document.getElementById("fourthquestion").style.display = "none"
  document.getElementById("fifthquestion").style.display = "block"
}

function continueToSixthQuestion(){
  document.getElementById("fifthquestion").style.display = "none"
  document.getElementById("sixthquestion").style.display = "block"
}

function continueToSeventhQuestion(){
  document.getElementById("sixthquestion").style.display = "none"
  document.getElementById("seventhquestion").style.display = "block"
}

function continueToEighthQuestion(){
  document.getElementById("seventhquestion").style.display = "none"
  document.getElementById("eighthquestion").style.display = "block"
}

function continueToNinthQuestion(){
  document.getElementById("eighthquestion").style.display = "none"
  document.getElementById("ninthquestion").style.display = "block"
}

function continueToTenthQuestion(){
  document.getElementById("ninthquestion").style.display = "none"
  document.getElementById("tenthquestion").style.display = "block"
}

function continueToEleventhQuestion(){
  document.getElementById("tenthquestion").style.display = "none"
  document.getElementById("eleventhquestion").style.display = "block"
}



function counter(){
  count++;
}


function continueToResult(){
document.getElementById("eleventhquestion").style.display = "none"

console.log(count);

  switch(count){
    case 0:
    case 1:
    case 2:
    case 3:
    document.getElementById("resultlow").style.display = "block";
    break;

    case 4:
    case 5:
    document.getElementById("resultmedium").style.display = "block";
    break;

    case 6: 
    case 7:
    case 8:
    case 9:
    document.getElementById("resulthigh").style.display = "block";
    break;

    case 10:
    case 11:
    document.getElementById("resultsevere").style.display = "block";
    break;

    default:
    document.getElementById("resultunclear").style.display = "block";
    break;
  }
  
}

function closeResult(){
  if (document.getElementById("resultlow").style.display == "block"||
    document.getElementById("resultmedium").style.display == "block"||
    document.getElementById("resulthigh").style.display == "block"||
    document.getElementById("resultsevere").style.display == "block"||
    document.getElementById("resultunclear").style.display == "block"){
      document.getElementById("resultlow").style.display = "none"
      document.getElementById("resultmedium").style.display = "none"
      document.getElementById("resulthigh").style.display = "none"
      document.getElementById("resultsevere").style.display = "none"
      document.getElementById("resultunclear").style.display= "none"
    }
}



mapboxgl.accessToken = 'pk.eyJ1IjoiZXZlcnliZWVzIiwiYSI6ImNrNnJwczZtbzA2OHYzbXA5ZXN0eDRoM3kifQ.qSwJMpP4eQNC93dpD7kyIg';

// Map vars
var start_viz = {
  zoom: 5.31,
  center: [8.993, 9.807],
  bearing: -2.35,
  pitch: 60.0
};

var start_viz_mobile = {
  zoom: 4.31,
  center: [8.993, 9.807],
  bearing: -2.35,
  pitch: 60.0
};

var start_stats = {
  zoom: 5.31,
  center: [8.993, 9.807],
  bearing: 0,
  pitch: 0.00
};

var start_stats_mobile = {
  zoom: 4.31,
  center: [8.993, 9.807],
  bearing: 0,
  pitch: 0.00
};



// Loadng The Map from Mapbox
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/everybees/ck8a1cbp90mu61io562pj8dnd',
center: [8.993, 9.807],
zoom: 5.31,
maxZoom: 8,
// minZoom: 4.23,
bearing: start_viz.bearing,
pitch: start_viz.pitch
});

var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'bottom-right');

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    }), 'bottom-right');

map.on('load', function() {
      map.addLayer({
        id: 'daily-cases',
        type: 'circle',
        source: {
          type: 'geojson',
          data: 'https://raw.githubusercontent.com/everybees/covid-19-nigeria-updates/master/covid-19%20cases%20with%20description.geojson' // replace this with the url of your own geojson
        },
        paint: {
          'circle-radius': [
            'interpolate',
            ['linear'],
            ['number', ['get', 'cases']],
            0, 4,
            12, 24
          ],
          'circle-color': [
            'interpolate',
            ['linear'],
            ['number', ['get', 'cases']],
            1, '#2DC4B2',
            12, '#AA5E79'
          ],
          'circle-opacity': 0.75
        },
         filter: ['==', ['number', ['get', 'days']], 34]
      });

      map.addLayer({
        'id': 'daily-cases-numbers',
        'type': 'symbol',
        'source': 'daily-cases',
        'layout': {
            'text-field': [
            'concat',
            ['to-string', ['get', 'cases']]],
            'text-font': [
                'Open Sans Bold',
                'Arial Unicode MS Bold'
            ],
            'text-size': 12
        },
        'paint': {
            'text-color': 'rgba(0,0,0,0.5)'
        },
         filter: ['==', ['number', ['get', 'days']], 34]
      });

      map.on('click', 'daily-cases-numbers', function(e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(map);
      });

      // Change the cursor to a pointer when the mouse is over the places layer.
      map.on('mouseenter', 'daily-cases-numbers', function() {
        map.getCanvas().style.cursor = 'pointer';
      });

      // Change it back to a pointer when it leaves.
      map.on('mouseleave', 'daily-cases-numbers', function() {
        map.getCanvas().style.cursor = '';
      });

  document.getElementById('slider').addEventListener('input', function(e) {
    var day = parseInt(e.target.value);
    // update the map
    map.setFilter('daily-cases', ['==', ['number', ['get', 'days']], day]);
    map.setFilter('daily-cases-numbers', ['==', ['number', ['get', 'days']], day]);

    var date = ['date', '27/Feb/2020', '28/Feb/2020', '29/Feb/2020', '1/Mar/2020', '2/Mar/2020', '3/Mar/2020', '4/Mar/2020',
                '5/Mar/2020', '6/Mar/2020', '7/Mar/2020', '8/Mar/2020', '9/Mar/2020', '10/Mar/2020', '11/Mar/2020',
                '12/Mar/2020', '13/Mar/2020', '14/Mar/2020', '15/Mar/2020', '16/Mar/2020', '17/Mar/2020', '18/Mar/2020',
                '19/Mar/2020', '20/Mar/2020', '21/Mar/2020', '22/Mar/2020', '23/Mar/2020', '24/Mar/2020', '25/Mar/2020',
                '26/Mar/2020', '27/Mar/2020', '28/Mar/2020', '29/Mar/2020', '30/Mar/2020', '31/Mar/2020', '1/Apr/2020',
                '2/Apr/2020', '3/Apr/2020', '4/Apr/2020', '5/Apr/2020','6/Apr/2020', '7/Apr/2020', '8/Apr/2020', '9/Apr/2020',];

    // update text in the UI
    document.getElementById('active-day').innerText = day + ' - ' + date[day];
  });

  document.getElementById('lagos').addEventListener('click', function() {
    // Fly to a random location by offsetting the point
    // by up to 5 degrees.
    map.flyTo({
        bearing: 27,
        center: [3.391531071, 6.443261653],
        duration: 3000,
        zoom: 9.5,
        pitch: 50,
        speed: 0.6,
        // style: 'mapbox://styles/mapbox/streets-v11',
        essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
});

document.getElementById('fct').addEventListener('click', function() {
    // Fly to a random location by offsetting the point
    // by up to 5 degrees.
    map.flyTo({
        bearing: 27,
        center: [7.533328002,9.083333149],
        duration: 3000,
        zoom: 9.5,
        pitch: 50,
        speed: 0.6,
        // style: 'mapbox://styles/mapbox/streets-v11',
        essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
});

document.getElementById('osun').addEventListener('click', function() {
    // Fly to a random location by offsetting the point
    // by up to 5 degrees.
    map.flyTo({
        bearing: 27,
        center: [4.179992634,7.629959329],
        duration: 3000,
        zoom: 9.5,
        pitch: 50,
        speed: 0.6,
        // style: 'mapbox://styles/mapbox/streets-v11',
        essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
});
document.getElementById('oyo').addEventListener('click', function() {
    // Fly to a random location by offsetting the point
    // by up to 5 degrees.
    map.flyTo({
        bearing: 27,
        center: [3.590002806,7.970016092],
        duration: 3000,
        zoom: 9.5,
        pitch: 50,
        speed: 0.6,
        // style: 'mapbox://styles/mapbox/streets-v11',
        essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
});

document.getElementById('ogun').addEventListener('click', function() {
    // Fly to a random location by offsetting the point
    // by up to 5 degrees.
    map.flyTo({
        bearing: 27,
        center: [3.350017455,7.160427265],
        duration: 3000,
        zoom: 9.5,
        pitch: 50,
        speed: 0.6,
        // style: 'mapbox://styles/mapbox/streets-v11',
        essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
});
document.getElementById('edo').addEventListener('click', function() {
    // Fly to a random location by offsetting the point
    // by up to 5 degrees.
    map.flyTo({
        bearing: 27,
        center: [5.620008096,6.340477314],
        duration: 3000,
        zoom: 9.5,
        pitch: 50,
        speed: 0.6,
        // style: 'mapbox://styles/mapbox/streets-v11',
        essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
});

document.getElementById('kaduna').addEventListener('click', function() {
    // Fly to a random location by offsetting the point
    // by up to 5 degrees.
    map.flyTo({
        bearing: 27,
        center: [7.710009724,11.0799813],
        duration: 3000,
        zoom: 9.5,
        pitch: 50,
        speed: 0.6,
        // style: 'mapbox://styles/mapbox/streets-v11',
        essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
});
document.getElementById('enugu').addEventListener('click', function() {
    // Fly to a random location by offsetting the point
    // by up to 5 degrees.
    map.flyTo({
        bearing: 27,
        center: [7.383362995,6.867034321],
        duration: 3000,
        zoom: 9.5,
        pitch: 50,
        speed: 0.6,
        // style: 'mapbox://styles/mapbox/streets-v11',
        essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
});

document.getElementById('bauchi').addEventListener('click', function() {
    // Fly to a random location by offsetting the point
    // by up to 5 degrees.
    map.flyTo({
        bearing: 27,
        center: [10.19001339,11.68040977],
        duration: 3000,
        zoom: 9.5,
        pitch: 50,
        speed: 0.6,
        // style: 'mapbox://styles/mapbox/streets-v11',
        essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
});
document.getElementById('ekiti').addEventListener('click', function() {
    // Fly to a random location by offsetting the point
    // by up to 5 degrees.
    map.flyTo({
        bearing: 27,
        center: [5.219980834,7.630372741],
        duration: 3000,
        zoom: 9.5,
        pitch: 50,
        speed: 0.6,
        // style: 'mapbox://styles/mapbox/streets-v11',
        essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
});

document.getElementById('rivers').addEventListener('click', function() {
    // Fly to a random location by offsetting the point
    // by up to 5 degrees.
    map.flyTo({
        bearing: 27,
        center: [7.010000772,4.810002257],
        duration: 3000,
        zoom: 9.5,
        pitch: 50,
        speed: 0.6,
        // style: 'mapbox://styles/mapbox/streets-v11',
        essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
});
document.getElementById('benue').addEventListener('click', function() {
    // Fly to a random location by offsetting the point
    // by up to 5 degrees.
    map.flyTo({
        bearing: 27,
        center: [8.129984089,7.190399596],
        duration: 3000,
        zoom: 9.5,
        pitch: 50,
        speed: 0.6,
        // style: 'mapbox://styles/mapbox/streets-v11',
        essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
});


document.getElementById('akwaibom').addEventListener('click', function() {
    // Fly to a random location by offsetting the point
    // by up to 5 degrees.
    map.flyTo({
        bearing: 27,
        center: [7.8537, 4.9057],
        duration: 3000,
        zoom: 9.5,
        pitch: 50,
        speed: 0.6,
        // style: 'mapbox://styles/mapbox/streets-v11',
        essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
});

document.getElementById('home').addEventListener('click', function() {
    // Fly to a random location by offsetting the point
    // by up to 5 degrees.
    map.flyTo({
        bearing: 0,
        center: [8.993, 9.807],
        duration: 3000,
        zoom: 5,
        pitch: 0,
        speed: 0.6,
        // style: 'mapbox://styles/mapbox/streets-v11',
        essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
});
});



