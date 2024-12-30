<script setup lang="ts">

interface IMenuItem {
    label: string,
    path: string,
}
const menu = ref<IMenuItem[]>([
    {
        label: 'Задачи',
        path: '/'
    },
])
</script>

<template>
    <div class="TheHeader">
        <nav class="nav">
            <NuxtLink
                v-for="(item, index) in menu"
                :key="index"
                :to="item.path"
                class="item"
            >
                {{ item.label }}
            </NuxtLink>
        </nav>

        <div class="filters">
            <p class="item">
                Это фильтры ебана свет
            </p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.TheHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 3.2rem 0;
    padding: 2.4rem;
    background-color: #373a44;
    border-radius: 1.2rem;
}

.item {
    font-weight: 500;
    transition: color .3s ease-in-out;
    cursor: pointer;

    &:not(:last-child) {
        margin-right: 1.6rem;
    }

    &:hover {
        color: #67ffc8;
    }
}
</style>