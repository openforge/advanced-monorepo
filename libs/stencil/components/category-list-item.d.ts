import type { Components, JSX } from "../dist/types/interfaces";

interface CategoryListItem extends Components.CategoryListItem, HTMLElement {}
export const CategoryListItem: {
  prototype: CategoryListItem;
  new (): CategoryListItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
