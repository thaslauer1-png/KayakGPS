const CACHE_NAME = "kayak-gps-v1";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "https://unpkg.com/leaflet/dist/leaflet.css",
  "https://unpkg.com/leaflet/dist/leaflet.js"
];


self.addEventListener("install", function(event){

event.waitUntil(

caches.open(CACHE_NAME)
.then(function(cache){

return cache.addAll(FILES_TO_CACHE);

})

);

});



self.addEventListener("fetch", function(event){

event.respondWith(

caches.match(event.request)

.then(function(response){

return response || fetch(event.request);

})

);

});