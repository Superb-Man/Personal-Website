import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap");.home.svelte-fu4tbo.svelte-fu4tbo{align-self:center;display:flex;flex-direction:row;flex:1;align-self:stretch;align-items:center;padding:0px 10px}.home-title.svelte-fu4tbo.svelte-fu4tbo{font-family:"Roboto", sans-serif;font-size:4em;font-weight:900;letter-spacing:2px}.home.svelte-fu4tbo .typewriter-container.svelte-fu4tbo{display:inline-block;overflow:hidden;border-right:2px solid var(--tertiary-text);white-space:normal;width:100%}.home-subtitle.svelte-fu4tbo.svelte-fu4tbo{color:var(--tertiary-text);font-family:"Dancing Script", cursive;font-size:2em;font-weight:900;letter-spacing:3px;line-height:1.5;display:inline-block;white-space:normal;word-break:break-word;overflow:hidden}@media(max-width: 875px){.home.svelte-fu4tbo.svelte-fu4tbo{flex-direction:column;justify-content:center}}@keyframes svelte-fu4tbo-blink-caret{from,to{border-color:transparent}50%{border-color:var(--tertiary-text)}}.home.svelte-fu4tbo .transparent-image.svelte-fu4tbo{opacity:1;background-color:transparent;width:100%}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let displayedText = "";
  $$result.css.add(css);
  return `<div class="home svelte-fu4tbo"><div class="home-writing"><h1 class="home-title svelte-fu4tbo" data-svelte-h="svelte-1mnp9hf">Kazi Istiak</h1> <div class="typewriter-container svelte-fu4tbo"><p class="home-subtitle svelte-fu4tbo">${escape(displayedText)}</p></div> ${``}</div> </div>`;
});
export {
  Page as default
};
