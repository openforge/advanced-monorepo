import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'glossary-term',
    styleUrl: 'glossary-term.css',
    shadow: true,
})
export class GlossaryTermComponent {
    /**
     * The items array
     */
    @Prop() term: any;

    render() {
        return (
            <section>
                <h2>Net Worth</h2>
                <p>
                    <strong>[ net wurth ]</strong>
                </p>
                <p>The total wealth of an individual, company or household, taking account of all financial assets and liabilities.</p>
                <p>
                    <strong>For example:</strong>
                </p>
                <p class="example">"With a net worth of $150 million, he is among the richest golfers in the sports today."</p>
            </section>
        );
    }
}
