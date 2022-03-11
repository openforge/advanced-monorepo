<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>CATEGORY</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <glossary-term></glossary-term>
            <glossary-term></glossary-term>
            <glossary-term></glossary-term>
        </ion-content>

        <ion-footer>
            <ion-button>Scroll to Top</ion-button>
        </ion-footer>
    </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'PastTerm',
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
        IonFooter,
        IonButton,
    },
});
</script>

<style>
ion-header ion-title {
    text-align: center;
}

ion-content section {
    padding: 24px;
}

ion-content section p.example {
    font-style: italic;
}

ion-footer {
    display: flex;
    align-items: center;
    justify-content: center;
}
ion-footer ion-button {
    width: 200px;
}
</style>
