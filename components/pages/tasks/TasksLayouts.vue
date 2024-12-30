<script setup lang="ts">
import type { IColumn } from "~/types/common";

import TasksColumn from "~/components/pages/tasks/TasksColumn.vue";

// interface IProps {
// 	columns: IColumn[];
// }

// const props = defineProps<IProps>();

const columns = ref<IColumn[]>([
	{
		id: Math.random(),
		name: "Очередь",
		tasks: [
			{
				id: Math.random(),
				name: "Сделать первый экран",
				description:
					"Необходимо сделать первый экран с интеграцией и адаптивами",
				executor: {
                    name: "Мухтаров Рамазан",
                    color: 'red'
                },
				columnsName: "Очередь",
				deadline: "24.01.2025",
				tags: [
                    {
                        name: "FRONTEND",
                        color: 'red',
                    },
                    {
                        name: "DEV/РАЗРАБОТКА",
                        color: 'blue',
                    },
                ],
			},
			{
				id: Math.random(),
				name: "Сделать footer",
                executor: {
                    name: "Мухтаров Рамазан",
                    color: 'blue'
                },
				columnsName: "Очередь",
				deadline: "23.01.2025",
				tags: [
                    {
                        name: "FRONTEND",
                        color: 'red',
                    },
                    {
                        name: "DEV/РАЗРАБОТКА",
                        color: 'blue',
                    },
                ],
			},
		],
	},
	{
		id: Math.random(),
		name: "В работе",
		tasks: [
			{
				id: Math.random(),
				name: "Сделать header",
                executor: {
                    name: "Мухтаров Рамазан",
                    color: 'green'
                },
				columnsName: "В работе",
				deadline: "23.01.2025",
				tags: [
                    {
                        name: "FRONTEND",
                        color: 'red',
                    },
                    {
                        name: "DEV/РАЗРАБОТКА",
                        color: 'blue',
                    },
                ],
			},
		],
	},
]);
</script>

<template>
	<div class="TasksLayouts">
		<TasksColumn
			v-for="column in columns"
			:key="column.id"
			:column="column"
			class="column"
		/>
	</div>
</template>

<style scoped lang="scss">
.TasksLayouts {
	display: flex;
	overflow-y: hidden;
	overflow-x: scroll;
	height: 100%;
}

.column {
	flex-shrink: 0;
}
</style>
