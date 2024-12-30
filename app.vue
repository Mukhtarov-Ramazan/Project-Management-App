<script setup lang="ts">
    import TheHeader from "~/components/common/TheHeader.vue";
</script>

<template>
    <div class="app">
        <NuxtLayout>
            <div class="wrapper-app container">
                <TheHeader/>

                <div class="pages">
                    <NuxtPage />
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>

<style scoped lang="scss">
    .app {
        max-height: 100vh;
    }

    .wrapper-app {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    .pages {
        height: 75vh;
    }
</style>
