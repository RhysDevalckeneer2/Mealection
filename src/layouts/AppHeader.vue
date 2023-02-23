<template>
    <header>
        <AppContainer>
            <p>AppHeader</p>
        </AppContainer>
    </header>
</template>
<script lang="ts">
    import AppContainer from './AppContainer.vue';

    export default {
        name: "AppHeader",
        components: {
            AppContainer: AppContainer
        }
    }
</script>