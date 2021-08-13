'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "300ca13262f49550b78f2df533334c12",
"index.html": "026ec31aa5a9ee645784912e55981077",
"/": "026ec31aa5a9ee645784912e55981077",
"main.dart.js": "c9d3b26b17f3bbb86734572eef1889d0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0ce536a8a91148ca61a7139e568102d6",
".git/config": "f43eb7ff6decf63d82e9c7dc59ebca05",
".git/objects/61/eb9b878b2fd833249d1a539bdd93a4c422fda9": "5abc0fe61dbc28dbbd6ed2bf4ceda547",
".git/objects/66/25fe759418fdbd1fd120e01a45f889ac2f4e7c": "70ba18f897adea30510df7f6f56a89f4",
".git/objects/03/a301578b9e666a31ef21aa8393cd1baf854c77": "6485d3ecdb9168b7f88a73cfd862b8b8",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/56/cb34b7f8bb9dfda46cb113ab3ed7677518d641": "e428c355ab4ee88e955cdd6288a897d4",
".git/objects/34/e9a4976ce6af92d8313b74c0c01f64bb6b44e9": "b66f2876fe4f849d11bc3fbf2e8a126d",
".git/objects/9d/a0e345bd0d53381501091e47eaa9856d2f7039": "c63dcfe43655a6af0981f500885e7a0a",
".git/objects/a2/4f91dd54b2f5e7dd9f268311b256a66cf2a5f1": "1796023175b8d3565f89e6cd3ed71587",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ee/09dd1aef2a5409655b0579b4407bf93a72eb33": "2697c9e537174397fcafefe97a880b62",
".git/objects/fc/84a4605f527ddf9f5e98c1c379f0c5ac125f10": "34c6bcba454eaffe8b9bf95328dba593",
".git/objects/ca/5b52707683a0ff919d92b12038bd1570d67ab0": "0706591740f6fd0862a040afa4b6a0f3",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/a94c38e941b2cc69241a7ef9a2c022064c718d": "4374d12fcdede7d259e0cae182a05fb5",
".git/objects/18/6957e53eebd8bd350976174b8b1178ebcfce47": "c15321a995748390c60d18dcf31e752c",
".git/objects/11/b2e68d3e8d0ba36a5de2b1da14a190ec6071a1": "a9c621a93d6afd3d250ec68b6ea7a292",
".git/objects/7b/cc1e99b8da2d0a0bb164c2dc5aee4fdc829625": "4087b505bff5bdca9bc6dd9e9f5c16a5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/5749b999e06c2dbceabb39ad88f8b49aa8d832": "8cd030c7f2e77c7cd3cde69eb1f81d1e",
".git/objects/2a/737c238a219d9ae3c0fd9a73a544710b8d12ee": "7b68f633660881c4b10501f68607e901",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/6cb132a8edfb278b1ed6d6a98787ae19a52faf": "2449dfbcc7fca07107970118050a9ec4",
".git/objects/07/32f25c8c41888159f91fc9e9a96174dcaa73a5": "dc5fa68a1566dcfa87a06119207d5221",
".git/objects/5c/8c8d4c2fd2e7f4e37628aaa5a1dad9aa987137": "cd15221720e586d9f656d172901f8d3f",
".git/objects/65/ac71ebe1976de827d907500465ab332c55b147": "c279f8b37dbe536ecabeeb7018b3c0a6",
".git/objects/3f/89df5f49a07c3e8ef48c79bc20eb5209cfcb48": "7368f8bd9e667768ff696c19fe0b51c4",
".git/objects/6d/4c296a10cbaf67919c1069c982cdc14a391b8f": "7731b56d0b0cd2e41d63fa4b39f57008",
".git/objects/d3/91467c86ba8d4093e6adb5eb866ffd43db67a8": "9627e8be59bbc070bd63a052b7710b87",
".git/objects/d4/6470d42ef351e846552e5da18cdd3ea3d6662c": "d8614a6eb88b8646528344e23c33d92a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/1298fbb428a8681001bf0c9f715af7d29ff7ef": "408b5c88a5464118def1e893dec66fac",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/fe73fe47f1959b36e9ff1cf4dcdaeae74603a3": "4e567d6b383c58aae312db5bfe74772a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c4/2165343781d1995539c876b422197fa7e495c0": "115b4680305131acaf1cf77169bab7eb",
".git/objects/e7/118d060f09b8228ab2e21bd6ddaa730ebb463b": "cc8d6eece9d3abfa81f982f97996a107",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/48/0d4b9267a268ae56083a8f4db186e4214b5bee": "afaa6d3f86eb1f5c8d960c4f66c2de64",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4cfb25b33f93a6ca473d259622afe0dc",
".git/logs/refs/heads/master": "4cfb25b33f93a6ca473d259622afe0dc",
".git/logs/refs/remotes/origin/master": "113f5834fdc9b39e79a2e296950e613e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/refs/heads/master": "128db9b22168a29f934142f6cd1f7afc",
".git/refs/remotes/origin/master": "6582f339347968bbc9474d46db30ab49",
".git/index": "f97c1085b84c2ccacffa851ebc294943",
".git/COMMIT_EDITMSG": "9a76face27155d57605db5734038c707",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "fa66257721ae93cc1a361b6912062d07",
"assets/NOTICES": "b336d591dfd89d71367fcde1191d2a64",
"assets/FontManifest.json": "7041430cb3bb92e631ff1b5b4e4cdf72",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/svg/Vector.svg": "ed840b93836c38d459b3f33d466d46d2",
"assets/assets/svg/Student.svg": "65f352fde0aa1b0aef036296bf9b66cb",
"assets/assets/fonts/PoetsenOne-Regular.ttf": "e7f249e71a563eed9c495835657eb9c2",
"assets/assets/fonts/Quicksand-VariableFont_wght.ttf": "51b6fe996746b9607630d2cd0f81b913"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
