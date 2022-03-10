<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Hey Fernando, this is Vue in our Monorepo!" />
        <category-list-item :category="item"></category-list-item>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import HelloWorld from '../components/HelloWorld.vue';

export default defineComponent({
    name: 'Home',
    components: {
        HelloWorld,
    },
    data() {
        return {
            item: {
                icon: 'assets/icons/finance.svg',
                title: 'Finance',
                termsLearned: 11,
                termsTotal: 25,
            },
        };
    },
});
</script>
