import { attachShadow, createEvent, h, proxyCustomElement } from '@stencil/core/internal/client';

const myComponentCss = ":host{display:block}ion-img{width:45px;height:45px}ion-button{text-transform:initial}";

let MyComponent$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    this.viewItemEvent = createEvent(this, "viewItemEvent", 7);
    /**
     * The array that is displayed
     */
    this.animes = [];
  }
  componentWillLoad() {
    this.items.map(item => {
      this.animes.push(h("ion-item", null, h("ion-img", { src: item.icon, slot: "start" }), h("ion-label", null, h("h2", null, item.title), h("h3", null, item.termsLearned, "/", item.termsTotal, " Terms Learned")), h("ion-button", { slot: "end", onClick: () => this.viewItem(item), fill: "clear" }, "View")));
    });
  }
  viewItem(item) {
    this.viewItemEvent.emit(item);
  }
  render() {
    return this.animes;
  }
  static get style() { return myComponentCss; }
};
MyComponent$1 = /*@__PURE__*/ proxyCustomElement(MyComponent$1, [1, "my-component", {
    "items": [16],
    "animes": [32]
  }]);
function defineCustomElement$1() {
  const components = ["my-component"];
  components.forEach(tagName => { switch (tagName) {
    case "my-component":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyComponent$1);
      }
      break;
  } });
}

const MyComponent = MyComponent$1;
const defineCustomElement = defineCustomElement$1;

export { MyComponent, defineCustomElement };
