import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { L as Loader } from "../../../chunks/Loader.js";
const Card_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(prefers-reduced-motion: reduce){.svelte-lym2nm{animation-duration:0.01ms !important;animation-iteration-count:1 !important;transition-duration:0.01ms !important;animation-delay:0.01ms !important}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="flex flex-col items-center overflow-hidden svelte-lym2nm"><h1 class="text-4xl mb-11 sm:mb-16 svelte-lym2nm" data-svelte-h="svelte-w8axyf">Projects</h1> ${`${validate_component(Loader, "Loader").$$render($$result, {}, {}, {})}`} </div>`;
});
export {
  Page as default
};
