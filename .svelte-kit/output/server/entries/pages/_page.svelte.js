import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.home.svelte-18nlrte.svelte-18nlrte{align-self:center;display:flex;flex-direction:row;flex:1;align-self:stretch;align-items:center;padding:0px 10px}.home-title.svelte-18nlrte.svelte-18nlrte{font-family:"Roboto", sans-serif;font-size:4em;font-weight:900;letter-spacing:2px}.home.svelte-18nlrte .typewriter-container.svelte-18nlrte{display:inline-block;overflow:hidden;border-right:2px solid var(--tertiary-text);white-space:normal;width:100%}.home-subtitle.svelte-18nlrte.svelte-18nlrte{color:var(--tertiary-text);font-family:"Dancing Script", cursive;font-size:2em;font-weight:900;letter-spacing:3px;line-height:1.5;display:inline-block;white-space:normal;word-break:break-word;overflow:hidden}@media(max-width: 875px){.home.svelte-18nlrte.svelte-18nlrte{flex-direction:column;justify-content:center}}@keyframes svelte-18nlrte-blink-caret{from,to{border-color:transparent}50%{border-color:var(--tertiary-text)}}.home.svelte-18nlrte .transparent-image.svelte-18nlrte{opacity:1;background-color:transparent;width:100%}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let displayedText = "";
  $$result.css.add(css);
  return `<div class="home svelte-18nlrte"><div class="home-writing"><h1 class="home-title svelte-18nlrte" data-svelte-h="svelte-1mnp9hf">Kazi Istiak</h1> <div class="typewriter-container svelte-18nlrte"><p class="home-subtitle svelte-18nlrte">${escape(displayedText)}</p></div> ${``}</div> </div>`;
});
export {
  Page as default
};
