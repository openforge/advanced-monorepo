<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Category</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <section>
                <ion-img src="img/finance.svg"></ion-img>
                <h2>You have learned</h2>
                <h2><span>5</span> out of <span>10</span> Terms</h2>
                <p>Tap "Learn New Term" to continue.</p>
                <ion-button @click="router.push('/new-term')" class="primary">Learn New Term</ion-button>
                <ion-button @click="router.push('/past-term')" class="secondary" fill="outline">What I've Learned</ion-button>
            </section>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonImg } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'Category',
    setup() {
        return {
            router: useRouter(),
        };
    },
    components: {
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar,
        IonButton,
        IonImg,
    },
});
</script>

<style>
ion-header ion-title {
    text-align: center;
}

ion-header ion-toolbar {
    --background: var(--ion-color-pink);
}

ion-header ion-toolbar ion-title {
    --color: #ffffff;
}

ion-content section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 24px 16px;
    align-items: center;
}

ion-content section h2 span {
    color: var(--ion-color-pink);
}

ion-content section ion-img {
    width: 100px;
    height: 100px;
}

ion-content section ion-button {
    width: 200px;
}

ion-content section ion-button.primary {
    --background: var(--ion-color-pink);
}
ion-content section ion-button.secondary {
    --color: var(--ion-color-pink);
    --border-color: var(--ion-color-pink);
}
</style>
