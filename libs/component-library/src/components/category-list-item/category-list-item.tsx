import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'category-list-item',
    styleUrl: 'category-list-item.css',
    shadow: true,
})
export class CategoryListItemComponent {
    /**
     * The items array
     */
    @Prop() category: any;

    /**
     * Testing an event without value
     */
    @Event() viewItemEvent: EventEmitter<any>;

    viewItem(item) {
        this.viewItemEvent.emit(item);
    }

    render() {
        return (
            <ion-item>
                <ion-img src={this.category.icon} slot="start"></ion-img>
                <ion-label>
                    <h2>{this.category.title}</h2>
                    <h3>
                        {this.category.termsLearned}/{this.category.termsTotal} Terms Learned
                    </h3>
                </ion-label>
                <ion-button slot="end" onClick={() => this.viewItem(this.category)} fill="clear">
                    View
                </ion-button>
            </ion-item>
        );
    }
}
