import { g as getContext, c as create_ssr_component, b as subscribe } from "../../chunks/ssr.js";
const app = "";
const IconBase_svelte_svelte_type_style_lang = "";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const MobileNav_svelte_svelte_type_style_lang = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "*{-webkit-tap-highlight-color:transparent}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $page.url.pathname;
  $$unsubscribe_page();
  return `<main class="p-8 max-w-7xl mx-auto font-body">${``} </main>`;
});
export {
  Layout as default
};
