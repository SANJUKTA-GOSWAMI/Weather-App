let loc = document.getElementById("location");
let tempicon = document.getElementById("temp-icon");
let tempvalue=document.getElementById("temp-value");
let climate =document.getElementById("climate");
let iconfile;
const searchInput=document.getElementById("search-input");
const searchButton=document.getElementById("search-button");



window.addEventListener("load" ,()=>{

let long;
let lat;

if(navigator.geolocation)
{

     navigator.geolocation.getCurrentPosition((position)=>
     {
     
     long=position.coords.longitude;
     lat=position.coords.latitude;


         const api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=fb2406ea54a159d7d1eb468e4af3bc1a     `

         fetch(api).then((response)=>
         {
   
            return response.json();

         })


         .then(data =>
            {


                const{name}=data;
                const{feels_like}=data.main;
                const{id,main}=data.weather[0];



                loc.textContent=name;
                climate.textContent=main;
                tempvalue.textContent=Math.round(feels_like-273);
                



         })

    }
     
     )}


})
