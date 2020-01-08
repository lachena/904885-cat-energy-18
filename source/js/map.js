ymaps.ready(init);
  function init(){
      var myMap = new ymaps.Map("map", {
          center: [59.938631, 30.323055],
          zoom: 17
      });
      pointer = new ymaps.Placemark([55.938631, 25.323055], {
      iconLayout: "default#image",
      iconImageHref: "./img/map-pin.png",
      iconImageSize: [19, 19]
      });
      myMap.geoObjects.add(pointer);
  }
