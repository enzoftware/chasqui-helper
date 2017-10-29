
path = [];
var counter = 1;
var icon;
var iconGirl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACcUExURch3XfhEUXhUR3hUSP+3TPCrS3pVRuCETv+3TP+5TPpMUfcbVPGtS4heSPcoU/pPUXhUR/YFVopgSHhURvg0U/QAVP+3TP+3TP+3TKh2SP+3THdTRv+3TP+3TJZpSJJmSPlJUr+JSfUAVotiR3hURsWPSPlGUv+3S/YBVnhUSP+nJtudSv2DT/tRS/+vTP+kTvccVfthUvtmUPk9UhJIbJ4AAAAndFJOUwEYXvDvK4oOaVt04Ugi61mn8PrU0yzHjIKWp0bc4uvzivWE5bdknTasaEIAAAGqSURBVEgNxZVpY4MgDIbxbqu2Vnvf11Zw2vP//7cFW2eoFti+jA8KSR7eBBQI+b82XcXxavoLfWfNirZ2dKEwfhCMrT0txoz2JcHYPjKVUJgwa/v107YWS0I5FFqMTY+ouYxZciaCnD4QcQzAEMlkPAiwHIx4IMtkizAHf0IWFTMiCZjmEhkT/AfSqpCAHMAkW7W567rgn5XMmBATTDKVMoGJzSG7VY513kZ7PGnLqq5PYvQ2m55Rt7+1dLq0aN3O2xDRYfgPgD8HWskZT4kH19VhBpVGoSOm0DTqiASlvaYowSakpSVjvIpQKszYMKjlpc7ss66i2hz+FV8q7ALDdkMy2ATIqSIoPWkhGUYyLeSKkZsWcsfIXQtB1VMK9avLP2MRXr8aEaqnNFMizjIXVa4L5fHvoR+Mw77GD9MXVXy80c39oUhQqj40hi8q/WHz1Nhq7BDk7zRKATo4Z7c8z6+37KxcradYcVukKT9j9TSA48EFYuOMpf1liYykYdg5KpEZtkr7/H4pEhtLw7BzUiL6Fww/MwqVAE8k7Qe2bacpPHS3RTrbH53fSM1hHgMz9wwAAAAASUVORK5CYII=";
var iconBoy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABpUExURUdwTG+xTmibQX+XaDqOO+W3T/+3TP+4TP+3TP+3S/+3S0JStoZ1lZOkXf+3TP+3TP+3TFhgp/+3Sz5QtUyvUP+nJi58MtW1TkJqm456jLKdZkemSyIsi7ulYP+nKDREpyw4mZNuXk6tTIElt48AAAASdFJOUwDvnif+EpJa2CjvPTqH9bd2sYsLAqYAAAE/SURBVEgN7ZXbkoIwDIYj0AM4HKyIu57l/R/SJlhbvElwd2Zv9r8oDNOvfxIyDcAfyrTWtmZBAMo6klVSKBDOiRk9eeCqhTZVRCoZUkbCuVLE/BQR1uxZYozPiuICMDEZ8d98VVlaYx9L16BR0wnDom3KaG2EqT/PzTOvfIFJXQykohZC+arvj4XXse9XIickokTMjPA+fGx1dJje+HzeTAQ2ahznNuPI/Z5sGIqU8eXOmGw+QHwX71OXvXNcN/8jH1Ts/JXozBe5tO6wTXRwlr0wlZ4jmmsxbKc6MdnyrY/ImpDrlR5r/MJqQm63xcjptADJN99e9zuuG9ENA6Dwdt3tcJWUizLFG5mQhk08bMABQ4h0vAC0AWnDIewT5wu5yOdLF5COPT1swMlHLtxNEQCAsqqqy8UvbBNH5rffHiuyK+sCUnW7AAAAAElFTkSuQmCC";

var map = new GMaps({
    el: '#map',
    lat: -12.124836771541993,
    lng: -77.00487971305847,
    click: function (e) {
        var position = e.latLng;
        var latitude = position.lat();
        var longitude = position.lng();


        if(counter % 2 === 0){
            icon = iconGirl;
        }else {
            icon = iconBoy;
        }

        console.log(latitude,longitude);
        map.addMarker({
            lat : latitude,
            lng : longitude,
            icon :icon,
            title : 'Student',
            infoWindow : {
                content : 'Latitude ' + latitude + '\n' +
                'Longitude '+longitude
            }
        });

        path.push([latitude,longitude]);

        if(path.length >= 1 ){
            map.drawRoute({
                origin : path[counter-1] ,
                destination : path[counter],
                strokeColor: '#131540',
                strokeOpacity: 0.6,
                strokeWeight: 6
            });

            distance()

        }

        counter = counter + 1;
    }
});

function distance() {
    var srcLocation = new google.maps.LatLng(path[0][0] , path[0][1]);
    var dstLocation = new google.maps.LatLng(path[1][0], path[1][1]);
    var distance = google.maps.geometry.spherical.computeDistanceBetween(srcLocation, dstLocation);
    console.log('distance = ' + distance/1000);
}
