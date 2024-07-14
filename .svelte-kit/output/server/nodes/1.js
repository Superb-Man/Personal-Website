

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.6fcb3962.js","_app/immutable/chunks/scheduler.84683fb4.js","_app/immutable/chunks/index.9a359735.js"];
export const stylesheets = [];
export const fonts = [];
