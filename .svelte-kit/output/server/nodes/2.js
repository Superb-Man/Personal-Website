

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.76c9df75.js","_app/immutable/chunks/scheduler.84683fb4.js","_app/immutable/chunks/index.9a359735.js"];
export const stylesheets = ["_app/immutable/assets/2.af7acdc4.css"];
export const fonts = [];
