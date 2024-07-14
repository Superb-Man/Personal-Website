

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/arts/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.1abb0b9f.js","_app/immutable/chunks/scheduler.84683fb4.js","_app/immutable/chunks/index.9a359735.js","_app/immutable/chunks/Loader.f693249d.js","_app/immutable/chunks/index.ee033ed6.js"];
export const stylesheets = ["_app/immutable/assets/3.39a4c287.css","_app/immutable/assets/Loader.83c9b148.css"];
export const fonts = ["_app/immutable/assets/fa-brands-400.232c6f6a.woff2","_app/immutable/assets/fa-brands-400.e28096fa.ttf","_app/immutable/assets/fa-regular-400.c27da6f8.woff2","_app/immutable/assets/fa-regular-400.9174757e.ttf","_app/immutable/assets/fa-solid-900.ae17c16a.woff2","_app/immutable/assets/fa-solid-900.b4990d0d.ttf","_app/immutable/assets/fa-v4compatibility.c7a869fa.woff2","_app/immutable/assets/fa-v4compatibility.ff8f525f.ttf"];
