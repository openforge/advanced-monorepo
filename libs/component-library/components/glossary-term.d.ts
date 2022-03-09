import type { Components, JSX } from "../dist/types/interfaces";

interface GlossaryTerm extends Components.GlossaryTerm, HTMLElement {}
export const GlossaryTerm: {
  prototype: GlossaryTerm;
  new (): GlossaryTerm;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
