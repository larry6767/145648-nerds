ymaps.ready(function () {
var myMap = new ymaps.Map("map", {
        center: [59.939460, 30.31508],
        zoom: 16
    }),
    myPlacemark = new ymaps.Placemark([59.938554, 30.32248],
        {
        hintContent: "Nёrds"
    }, {
        iconLayout: "default#image",
        iconImageHref: "img/marker.png",
        iconImageSize: [231, 190],
        iconImageOffset: [-49, -195]
    });

myMap.geoObjects.add(myPlacemark);
});


var link = document.querySelector(".contact-block-btn");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".close-btn");
        
link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
});
        
close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
});
window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
        }
    }
});
