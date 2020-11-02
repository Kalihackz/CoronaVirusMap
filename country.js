function updateMap() {
    console.log("Updating map with realtime data")
 
   
   /* 
    const fetchPromise = fetch("https://covid-193.p.rapidapi.com/statistics", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-193.p.rapidapi.com",
		"x-rapidapi-key": "6dfeec813amsh366bc7f143c6ebap1e0dfbjsnbae86a901c90"
	}
});
fetchPromise.then(response => {
  return response.json();
}).then(people => {
  //const names = people.map(response => response.country).join("\n");
  console.log(people.response[200]);
});
    */
    
    
   /* const fetchPromise1 = fetch("https://www.trackcorona.live/api/countries");
    
    fetchPromise1.then(response => {
  return response.json();
}).then(people => {
  //const names = people.map(response => response.country).join("\n");
  console.log(people);
});
    */
    
        
        fetch("https://www.trackcorona.live/api/countries")
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.confirmed;
                /*if (cases>255)
                {
                   color = "rgb(255, 0, 0)";
                }
               else
               {
                  color = `rgb(${cases}, ${cases}, ${cases})`;
               }*/
              
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
