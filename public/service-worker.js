self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('static-v1').then((cache) => {
      return cache.addAll([
        '/image.png', // local resources
        '/img/icons/tumblr_image.gif' // local version of the image
      ]);
    })
  );
});
  self.addEventListener('fetch', (event) => {
    console.log('Service Worker: Fetching', event.request.url);
  });
  self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('static-v1').then((cache) => {
        return cache.addAll([
          '/image.png', // local resources
          new Request('https://24.media.tumblr.com/d2780fd4d3e24bef0070f0a90537062b/tumblr_mpyzh7MK9J1rs8ziuo1_500.gif', {
            mode: 'no-cors', // This bypasses the CORS policy
          })
        ]);
      })
    );
  });
  
