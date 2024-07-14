

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.f94d999f.js","_app/immutable/chunks/scheduler.84683fb4.js","_app/immutable/chunks/index.9a359735.js","_app/immutable/chunks/singletons.6b6e18f3.js","_app/immutable/chunks/index.ee033ed6.js"];
export const stylesheets = ["_app/immutable/assets/0.e471275f.css"];
export const fonts = [];
