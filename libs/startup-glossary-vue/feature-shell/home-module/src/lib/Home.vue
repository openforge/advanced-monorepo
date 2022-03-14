<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Startup Glossary</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <section>
                <h2>What would you like to learn today?</h2>
                <p>Select a category below to view its terms.</p>
            </section>
            <ion-list>
                <category-list-item @click="router.push({ name: '/category', id: category.id })" v-for="category in categories" v-bind:key="category.title" :category="category"></category-list-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { Categories } from '@company-name/data-access/glossary';

export default defineComponent({
    name: 'Home',
    setup() {
        const router = useRouter();
        return { router };
    },
    components: {
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar,
        IonList,
    },
    data() {
        return {
            categories: Categories,
        };
    },
});
</script>

<style>
ion-header ion-title {
    text-align: center;
}

ion-content section h2,
ion-content section p {
    text-align: center;
}

ion-content ion-list {
    padding: 0;
}
</style>
