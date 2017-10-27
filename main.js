var map = new GMaps({
    el: '#map',
    lat: -12.043333,
    lng: -77.028333,
    click: function (e) {
        alert("Clicked");
    },
    dragend:function (e) {
        alert("Dragend");
    }
});

