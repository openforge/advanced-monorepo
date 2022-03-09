import { attachShadow, h, proxyCustomElement } from '@stencil/core/internal/client';

const glossaryTermCss = ":host{display:block}section{padding:24px}p.example{font-style:italic}";

let GlossaryTermComponent = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  render() {
    return (h("section", null, h("h2", null, "Net Worth"), h("p", null, h("strong", null, "[ net wurth ]")), h("p", null, "The total wealth of an individual, company or household, taking account of all financial assets and liabilities."), h("p", null, h("strong", null, "For example:")), h("p", { class: "example" }, "\"With a net worth of $150 million, he is among the richest golfers in the sports today.\"")));
  }
  static get style() { return glossaryTermCss; }
};
GlossaryTermComponent = /*@__PURE__*/ proxyCustomElement(GlossaryTermComponent, [1, "glossary-term", {
    "term": [8]
  }]);
function defineCustomElement$1() {
  const components = ["glossary-term"];
  components.forEach(tagName => { switch (tagName) {
    case "glossary-term":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GlossaryTermComponent);
      }
      break;
  } });
}

const GlossaryTerm = GlossaryTermComponent;
const defineCustomElement = defineCustomElement$1;

export { GlossaryTerm, defineCustomElement };
