

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.16cf729c.js","_app/immutable/chunks/scheduler.e3b60afe.js","_app/immutable/chunks/index.264fd9a2.js"];
export const stylesheets = ["_app/immutable/assets/2.28afccb2.css"];
export const fonts = [];
