import { HTMLElement, createEvent, h, proxyCustomElement } from '@stencil/core/internal/client';

const categoryListItemCss = ":host{display:block}ion-img{width:45px;height:45px}ion-button{text-transform:initial}";

let CategoryListItemComponent = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.viewItemEvent = createEvent(this, "viewItemEvent", 7);
  }
  viewItem(item) {
    this.viewItemEvent.emit(item);
  }
  render() {
    return (h("ion-item", null, h("ion-img", { src: this.category.icon, slot: "start" }), h("ion-label", null, h("h2", null, this.category.title), h("h3", null, this.category.termsLearned, "/", this.category.termsTotal, " Terms Learned")), h("ion-button", { slot: "end", onClick: () => this.viewItem(this.category), fill: "clear" }, "View")));
  }
  static get style() { return categoryListItemCss; }
};
CategoryListItemComponent = /*@__PURE__*/ proxyCustomElement(CategoryListItemComponent, [1, "category-list-item", {
    "category": [8]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["category-list-item"];
  components.forEach(tagName => { switch (tagName) {
    case "category-list-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CategoryListItemComponent);
      }
      break;
  } });
}

const CategoryListItem = CategoryListItemComponent;
const defineCustomElement = defineCustomElement$1;

export { CategoryListItem, defineCustomElement };
