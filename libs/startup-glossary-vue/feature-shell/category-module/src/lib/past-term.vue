<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>{{ category.title }}</ion-title>
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
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonButton, IonBackButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { Categories } from '@company-name/data-access/glossary';

export default defineComponent({
    name: 'PastTerm',
    setup() {
        const route = useRoute();
        const { idCategory } = route.params;
        const category = Categories.find(c => c.id === idCategory);
        return {
            category,
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
        IonBackButton,
    },
});
</script>

<style>
ion-header ion-title {
    text-align: center;
}

ion-header ion-back-button {
    color: white;
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
