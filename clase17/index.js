let marker, map


function initMap() {
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4, 
    center: posicion,
  });

  const marker= new google.maps.Marker({
    position: posicion,
    map,
    title:"Posición Inicial"
})


function geoPosicion(){
    if(navigator.geolocation){
        const geoLoc = navigator.geolocation
        const options = {timeout: 6000}
        const watchPos = geoLoc.watchPosition(centraMapa, onError, options)
    }else{
    alert("Tu navegador no admite geolocalización")
    }
}


function centraMapa(position){
    const nuevaPos = {
       lat: position.coords.latitude,
       lng: position.coords.longitude
    }
    
    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
    }
    
    function onError(){
     console.error(error);
    }
    


  geoPosicion()
 
  const disneyParque= new google.maps.Marker({
    position:{
        lat: 33.812296807864406,
        lng: -117.9190385759237,
    },
    map,
    title:"Disney"
})

const piramidesEgipto= new google.maps.Marker({
    position:{
        lat: 29.9792345,
        lng: 31.002366,
    },
    map,
    title:"Piramides de Egipto"
})
  

}


    