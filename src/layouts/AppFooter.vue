<script lang="ts">
import AppContainer from './AppContainer.vue';

export default {
    name: "AppFooter",
    components: {
        AppContainer: AppContainer
    },

    data() {
        // get current year
        let year = new Date().getFullYear();
        return { year };
    },
}
</script>

<template>
    <footer class="bg-white py-4">
        <AppContainer>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <p class="text-xs text-gray-400">&copy; {{ year }}. All rights reserved.</p>
                </div>
            </div>
        </AppContainer>
    </footer>
</template>