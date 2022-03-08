import { Component, Prop, h, Event, State, EventEmitter } from '@stencil/core';

@Component({
    tag: 'my-component',
    styleUrl: 'my-component.css',
    shadow: true,
})
export class MyComponent {
    /**
     * The items array
     */
    @Prop() items: any[];

    /**
     * Testing an event without value
     */
    @Event() viewItemEvent: EventEmitter<any>;

    /**
     * The array that is displayed
     */
    @State() animes = [];

    componentWillLoad() {
        this.items.map(item => {
            this.animes.push(
                <ion-item>
                    <ion-img src={item.icon} slot="start"></ion-img>
                    <ion-label>
                        <h2>{item.title}</h2>
                        <h3>
                            {item.termsLearned}/{item.termsTotal} Terms Learned
                        </h3>
                    </ion-label>
                    <ion-button slot="end" onClick={() => this.viewItem(item)} fill="clear">
                        View
                    </ion-button>
                </ion-item>
            );
        });
    }

    viewItem(item) {
        this.viewItemEvent.emit(item);
    }

    render() {
        return this.animes;
    }
}
