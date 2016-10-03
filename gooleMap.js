$(function () {
    var latI = '';

    var town = '';

    $("#getMap").click(function (ev) {
        var area = $("#location").val();
        $.ajax("https://maps.googleapis.com/maps/api/geocode/json?address=" + area + "&key=AIzaSyAt3yHpgvBYw2u5lrWXKisJ9d23ITL3VUQ", { dataType: "json" }).done(function (data) {
            console.log(data);
            latI = data.results[0].geometry.location.lat;
            longI = data.results[0].geometry.location.lng;
            town = data.results[0].formatted_address;
            console.log(latI);
            console.log(longI);



            function init_map() {
                var myOptions = { zoom: 9, center: new google.maps.LatLng(latI, longI), mapTypeId: google.maps.MapTypeId.ROADMAP }; map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions); marker = new google.maps.Marker({ map: map, position: new google.maps.LatLng(latI, longI) }); infowindow = new google.maps.InfoWindow({ content: town }); google.maps.event.addListener(marker, 'click', function () { infowindow.open(map, marker); }); infowindow.open(map, marker);
            } google.maps.event.addDomListener(window, 'load', init_map);
            var div = $("<div></div>");
            var div = $("<div></div>");
            $(".map").append(init_map);
        });

    });
});
