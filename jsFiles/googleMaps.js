    function initMap() {
      var saratoga = {lat: 37.2664, lng: -122.0296};
      var gunn = {lat: 37.4025, lng: -122.1334};
      var mv = {lat: 37.3150, lng: -122.0562};
      var jl = {lat: 37.2924, lng: -122.0011};
      var prospect = {lat: 37.5899, lng: -122.0269};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: saratoga
      });

      var contentString1 = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">Saratoga High School</h1>'+
          '<div id="bodyContent">'+
          '<p><b>Device Type:</b> Chromebooks' +
          '<p><b>Device Count:</b> 2600'+
        '</div>'+
          '</div>';

          var contentString2 = '<div id="content">'+
              '<div id="siteNotice">'+
              '</div>'+
              '<h1 id="firstHeading" class="firstHeading">Gunn High School</h1>'+
              '<div id="bodyContent">'+
              '<p><b>Device Type:</b> Chromebooks' +
              '<p><b>Device Count:</b> 2600'+
            '</div>'+
              '</div>';

              var contentString3 = '<div id="content">'+
                  '<div id="siteNotice">'+
                  '</div>'+
                  '<h1 id="firstHeading" class="firstHeading">Monta Vista High School</h1>'+
                  '<div id="bodyContent">'+
                  '<p><b>Device Type:</b> Chromebooks' +
                  '<p><b>Device Count:</b> 2600'+
                '</div>'+
                  '</div>';

                  var contentString4 = '<div id="content">'+
                      '<div id="siteNotice">'+
                      '</div>'+
                      '<h1 id="firstHeading" class="firstHeading">Prospect High School</h1>'+
                      '<div id="bodyContent">'+
                      '<p><b>Device Type:</b> Chromebooks' +
                      '<p><b>Device Count:</b> 2600'+
                    '</div>'+
                      '</div>';

                      var contentString5 = '<div id="content">'+
                          '<div id="siteNotice">'+
                          '</div>'+
                          '<h1 id="firstHeading" class="firstHeading">James Logan High School</h1>'+
                          '<div id="bodyContent">'+
                          '<p><b>Device Type:</b> Chromebooks' +
                          '<p><b>Device Count:</b> 2600'+
                        '</div>'+
                          '</div>';

      var infowindow1 = new google.maps.InfoWindow({
        content: contentString1
      });
      var infowindow2 = new google.maps.InfoWindow({
        content: contentString2
      });
      var infowindow3 = new google.maps.InfoWindow({
        content: contentString3
      });
      var infowindow4 = new google.maps.InfoWindow({
        content: contentString4
      });
      var infowindow5 = new google.maps.InfoWindow({
        content: contentString5
      });

      var marker1 = new google.maps.Marker({
        position: saratoga,
        map: map,
        title: 'Uluru (Ayers Rock)'
      });
      var marker2 = new google.maps.Marker({
        position: gunn,
        map: map,
        title: 'Uluru (Ayers Rock)'
      });
      var marker3 = new google.maps.Marker({
        position: mv,
        map: map,
        title: 'Uluru (Ayers Rock)'
      });
      var marker4 = new google.maps.Marker({
        position: jl,
        map: map,
        title: 'Uluru (Ayers Rock)'
      });
      var marker5 = new google.maps.Marker({
        position: prospect,
        map: map,
        title: 'Uluru (Ayers Rock)'
      });

      marker1.addListener('click', function() {
        infowindow1.open(map, marker1);
      });
      marker2.addListener('click', function() {
        infowindow2.open(map, marker2);
      });
      marker3.addListener('click', function() {
        infowindow3.open(map, marker3);
      });
      marker4.addListener('click', function() {
        infowindow4.open(map, marker4);
      });
      marker5.addListener('click', function() {
        infowindow5.open(map, marker5);
      });
    }

  // Initialize and add the map
  function initMapTwo() {

          var saratoga = {lat: 37.2664, lng: -122.0296};
          var gunn = {lat: 37.4025, lng: -122.1334};
          var mv = {lat: 37.3150, lng: -122.0562};
          var jl = {lat: 37.2924, lng: -122.0011};
          var prospect = {lat: 37.5899, lng: -122.0269};
          var gilroy = {lat: 36.9951, lng: -121.5763};

          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: saratoga
          });

          var contentString1 = '<div id="content">'+
              '<div id="siteNotice">'+
              '</div>'+
              '<h1 id="firstHeading" class="firstHeading">Saratoga High School</h1>'+
              '<div id="bodyContent">'+
              '<p><b>Device Type:</b> Chromebooks' +
              '<p><b>Device Count:</b> 2600'+
            '</div>'+
              '</div>';

              var contentString2 = '<div id="content">'+
                  '<div id="siteNotice">'+
                  '</div>'+
                  '<h1 id="firstHeading" class="firstHeading">Gunn High School</h1>'+
                  '<div id="bodyContent">'+
                  '<p><b>Device Type:</b> Chromebooks' +
                  '<p><b>Device Count:</b> 2600'+
                '</div>'+
                  '</div>';

                  var contentString3 = '<div id="content">'+
                      '<div id="siteNotice">'+
                      '</div>'+
                      '<h1 id="firstHeading" class="firstHeading">Monta Vista High School</h1>'+
                      '<div id="bodyContent">'+
                      '<p><b>Device Type:</b> Chromebooks' +
                      '<p><b>Device Count:</b> 2600'+
                    '</div>'+
                      '</div>';

                      var contentString4 = '<div id="content">'+
                          '<div id="siteNotice">'+
                          '</div>'+
                          '<h1 id="firstHeading" class="firstHeading">James Logan High School</h1>'+
                          '<div id="bodyContent">'+
                          '<p><b>Device Type:</b> Chromebooks' +
                          '<p><b>Device Count:</b> 2600'+
                        '</div>'+
                          '</div>';

                          var contentString5 = '<div id="content">'+
                              '<div id="siteNotice">'+
                              '</div>'+
                              '<h1 id="firstHeading" class="firstHeading">Prospect High School</h1>'+
                              '<div id="bodyContent">'+
                              '<p><b>Device Type:</b> Chromebooks' +
                              '<p><b>Device Count:</b> 2600'+
                            '</div>'+
                              '</div>';

                              var contentString6 = '<div id="content">'+
                                  '<div id="siteNotice">'+
                                  '</div>'+
                                  '<h1 id="firstHeading" class="firstHeading">Gilroy High School</h1>'+
                                  '<div id="bodyContent">'+
                                  '<p><b>Device Type:</b> Chromebooks' +
                                  '<p><b>Device Count:</b> 2600'+
                                '</div>'+
                                  '</div>';

          var infowindow1 = new google.maps.InfoWindow({
            content: contentString1
          });
          var infowindow2 = new google.maps.InfoWindow({
            content: contentString2
          });
          var infowindow3 = new google.maps.InfoWindow({
            content: contentString3
          });
          var infowindow4 = new google.maps.InfoWindow({
            content: contentString4
          });
          var infowindow5 = new google.maps.InfoWindow({
            content: contentString5
          });
          var infowindow6 = new google.maps.InfoWindow({
            content: contentString6
          });

          var marker1 = new google.maps.Marker({
            position: saratoga,
            map: map,
            title: 'Uluru (Ayers Rock)'
          });
          var marker2 = new google.maps.Marker({
            position: gunn,
            map: map,
            title: 'Uluru (Ayers Rock)'
          });
          var marker3 = new google.maps.Marker({
            position: mv,
            map: map,
            title: 'Uluru (Ayers Rock)'
          });
          var marker4 = new google.maps.Marker({
            position: jl,
            map: map,
            title: 'Uluru (Ayers Rock)'
          });
          var marker5 = new google.maps.Marker({
            position: prospect,
            map: map,
            title: 'Uluru (Ayers Rock)'
          });
          var marker6 = new google.maps.Marker({
            position: gilroy,
            map: map,
            title: 'Uluru (Ayers Rock)'
          });

          marker1.addListener('click', function() {
            infowindow1.open(map, marker1);
          });
          marker2.addListener('click', function() {
            infowindow2.open(map, marker2);
          });
          marker3.addListener('click', function() {
            infowindow3.open(map, marker3);
          });
          marker4.addListener('click', function() {
            infowindow4.open(map, marker4);
          });
          marker5.addListener('click', function() {
            infowindow5.open(map, marker5);
          });
          marker6.addListener('click', function() {
            infowindow6.open(map, marker6);
          });
        }
