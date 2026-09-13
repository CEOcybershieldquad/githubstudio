const CACHE='xadon-studio-2.2-shell';
const SHELL=['./','./index.html','./manifest.webmanifest'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(r=>{const copy=r.clone();if(new URL(e.request.url).origin===location.origin)caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>cached)));});
