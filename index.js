function updateMap() {
    console.log("Updating map with realtime data")
     fetch("https://www.trackcorona.live/api/countries")
        .then(response => response.json())
        .then(rsp => {
            
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.confirmed;
             
              if(cases>680000)              
                 {
                  color = "rgb(255, 0, 0)";
                 }     
                 else if(cases>156000)              
                 {
                  color = "rgb(255, 225, 0)";
                 }  
                 else if(cases>80000)              
                 {
                  color = "rgb(0, 100, 0)";
                 }      
                 else if(cases>20000)              
                 {
                  color = "rgb(0, 255, 0)";
                 }
                 else
                 {
                   color = "rgb(0, 0, 0)";
                 }
                
               
                  // Mark on the map
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                }).setLngLat([longitude, latitude])
                .addTo(map); 
            });
        })
        
        
}

updateMap();
let interval = 80000;
setInterval( updateMap, interval); 
