<template>
    <ion-app>
        <ion-router-outlet />
    </ion-app>
</template>

<style src="./theme.css"></style>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'App',
    components: {
        IonApp,
        IonRouterOutlet,
    },
});
</script>
