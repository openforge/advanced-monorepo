import { Definition } from './definition.model';
import { Category } from './category.model';

export class Glossary {
    entries: GlossaryEntry[];
}

export class GlossaryEntry {
    category: Category;
    definition: Definition;
}
