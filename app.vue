<script setup lang="ts">
import TheHeader from "~/components/common/TheHeader.vue";
</script>

<template>
    <div>
        <NuxtLayout>
            <div class="container">
                <TheHeader/>
                <NuxtPage/>
            </div>
        </NuxtLayout>
    </div>
</template>
