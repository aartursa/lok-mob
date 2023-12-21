'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "ae796f608bd95c3f39f0f504a9ca8b15",
"index.html": "f6d4e6dff52a3d94767e2bfeed47b80d",
"/": "f6d4e6dff52a3d94767e2bfeed47b80d",
"main.dart.js": "4969a784cbb41c32e75700a95f122913",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "df8ee12e5d40a884cc23acd0588bda1c",
"assets/AssetManifest.json": "8a95027800e3011421e533bafab36433",
"assets/NOTICES": "43b23e8f55b5970eceea1789b4d33c5c",
"assets/FontManifest.json": "ed840173c59d755350a9befbff92fae4",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "2dd40a020d33c90fb10c9a4047b09b9f",
"assets/fonts/MaterialIcons-Regular.otf": "6147fe78a640c97237df26f1628285ba",
"assets/assets/icons/journal_screen.png": "6fc09741f0f5f37e23abdad9a72dbcb7",
"assets/assets/icons/app_icon.png": "9eb502f720f31b3eee81fa38f76a5d57",
"assets/assets/icons/add_button.png": "3595b96196198a44d72c8ccdfaa0ae04",
"assets/assets/icons/menu.png": "e217ae1f1a65d25b24d40de244d026a3",
"assets/assets/icons/purple_vector.png": "10ce78fb1254b5b4d8fc33db25f7e81a",
"assets/assets/icons/avatar_01.png": "5ba29092c78a7b544b48ce5d8abc5c3c",
"assets/assets/icons/ic_zen.jpg": "e8c08176f5718583fa7bdf250a99eb8c",
"assets/assets/icons/zen_logo.png": "cfd9509df03070b4df1183f6123d07ea",
"assets/assets/icons/activity_placeholder.png": "942f1dc1ba962f03ff6a31f53698019c",
"assets/assets/icons/back_button.png": "11cd9f2b058c1af591ebbb9a9d23eb97",
"assets/assets/icons/Rectangle%25204.png": "f6c9a088443db1b869546322fe885758",
"assets/assets/icons/yellow_vector.png": "dfa04494724d1715b3303bd9db92f51c",
"assets/assets/icons/Rectangle%25205.png": "bbf153cfa9585cd4cd10d41297683aae",
"assets/assets/icons/Rectangle%25207.png": "84f241ec67599c341224475de377f9e9",
"assets/assets/icons/logo_app_bar.png": "81252c814facc5015c2b2994ba1e4d4e",
"assets/assets/icons/Rectangle%25206.png": "6734761070b2ebe6e5fba9079e62ad74",
"assets/assets/avatars/happy/avatar5.png": "21827e4fab784c2215d8db5d6f46ba3f",
"assets/assets/avatars/happy/avatar4.png": "8f75806303a176a4fe7c24bc439d3b39",
"assets/assets/avatars/happy/avatar3.png": "3b2d80a54b6b83e4f14573c5c9b4aaa6",
"assets/assets/avatars/happy/avatar2.png": "ac54e34426f42b8c432e13fb35b37043",
"assets/assets/avatars/happy/avatar1.png": "85c1422c228377d36feb580eb0f0f546",
"assets/assets/avatars/sad/avatar5.png": "8b071176dbb766e3382f2d660822fa0d",
"assets/assets/avatars/sad/avatar4.png": "45f5e7d89f231cdb74c8421a09235475",
"assets/assets/avatars/sad/avatar3.png": "7e813b5a2a9c7e244b7060a7a48b6c30",
"assets/assets/avatars/sad/avatar2.png": "f4dac99559f07d5a9886b01c7e089590",
"assets/assets/avatars/sad/avatar1.png": "6f2c0146e007edd8ae85c95202cd80bf",
"assets/assets/avatars/neutral/avatar5.png": "f640efeaafc1887192aac8f3b8c7a773",
"assets/assets/avatars/neutral/avatar4.png": "1eab6358f395fbf0ac489214145a14a6",
"assets/assets/avatars/neutral/avatar3.png": "4afd5e74875a7bdb015a101759b5a4a3",
"assets/assets/avatars/neutral/avatar2.png": "04ed4c50b2c0fceb4c1c02170a970515",
"assets/assets/avatars/neutral/avatar1.png": "fce3e3fe253d248fe3d95b80481822f2",
"assets/assets/avatars/buttonIcons/rightActive.png": "cca7300ed8beda57b2a9d084949beb3b",
"assets/assets/avatars/buttonIcons/leftActive.png": "dfed5ab3701d85e773abc5af72e01389",
"assets/assets/avatars/buttonIcons/left.png": "d56b891f889d26e3bbec4ac16be05a22",
"assets/assets/avatars/buttonIcons/right.png": "c24f151141499f1bac000978a37a0db9",
"assets/assets/fonts/Raleway-Regular.ttf": "75b4247fdd3b97d0e3b8e07b115673c2",
"assets/assets/fonts/Raleway-Bold.ttf": "7802d8b27fcb19893ce6b38c0789268e",
"assets/assets/themes/darkTheme.png": "3e7b761427d3db24cefc0401d03b07bd",
"assets/assets/themes/lightTheme.png": "f5e9fce931d7a7cd5c73aa619c94577b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
