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
                <category-list-item v-for="category in categories" v-bind:key="category.title" :category="category" v-on:viewItemEvent="data => console.log(data)"></category-list-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'Home',
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
        IonList,
    },
    data() {
        return {
            categories: [
                {
                    icon: 'img/finance.svg',
                    title: 'Finance',
                    termsLearned: 11,
                    termsTotal: 25,
                },
                {
                    icon: 'img/marketing.svg',
                    title: 'Marketing',
                    termsLearned: 5,
                    termsTotal: 25,
                },
                {
                    icon: 'img/business.svg',
                    title: 'Business',
                    termsLearned: 7,
                    termsTotal: 25,
                },
                {
                    icon: 'img/investing.svg',
                    title: 'Investment',
                    termsLearned: 0,
                    termsTotal: 25,
                },
            ],
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
