 // Initialize and add the map
 function initMap() {
     var map = L.map('map').setView([49.23525, 28.46973], 19);
     var icon = L.icon({
         iconUrl: './assets/marker.svg',
         iconSize: [88, 91.03], // size of the icon
         //  iconAnchor: [-10, 60], // point of the icon which will correspond to marker's location
     });

     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
     }).addTo(map);

     L.marker([49.23525, 28.46973], { icon: icon }).addTo(map);
 }