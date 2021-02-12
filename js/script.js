 // Initialize and add the map
 function initMap() {
     var map = L.map('map').setView([49.2352, 28.4702], 16);
     var icon = L.icon({
         iconUrl: './assets/marker.svg',
         iconSize: [88, 91.03], // size of the icon
         //  iconAnchor: [-10, 60], // point of the icon which will correspond to marker's location
     });

     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
     }).addTo(map);

     L.marker([49.2352, 28.4702], { icon: icon }).addTo(map);
 }

 function openMenu(){
    //  let html=document.getElementsByTagName('html');
    //  let overlay=document.getElementsByClassName('overlay');
     let sidemenu=document.querySelector('.side-menu');
    //  html.classList.add('overflow');
    //  overlay.classList.add('overlay-show');
     sidemenu.classList.add('side-menu-show');
 }