import Wysiwyg from "./components/Wysiwyg";

export default (strapi) => {
  const plugin = {
    blockerComponent: null,
    blockerComponentProps: {},
    description: "wysiwyg plugin",
    icon: "plug",
    id: "wysiwyg",
    initializer: () => null,
    injectedComponents: [],
    isReady: true,
    isRequired: true,
    leftMenuLinks: [],
    leftMenuSections: [],
    mainComponent: null,
    name: "wysiwyg",
    preventComponentRendering: false,
    settings: null,
    trads: {},
  };

  strapi.registerField({ type: "wysiwyg", Component: Wysiwyg });

  return strapi.registerPlugin(plugin);
};
