<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>CATEGORY</ion-title>
            </ion-toolbar>
        </ion-header>
    </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Category',
    components: {
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar,
    },
});
</script>
