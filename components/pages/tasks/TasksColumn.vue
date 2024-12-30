<script setup lang="ts">
import type { IColumn } from "~/types/common";

import TaskCard from "~/components/pages/tasks/TaskCard.vue";

interface IProps {
	column: IColumn;
}
defineProps<IProps>();
</script>

<template>
	<div class="TasksColumn">
		<h2 class="title">
			{{ column.name }}
			<span>({{ column.tasks.length }})</span>
		</h2>

		<div v-if="column.tasks?.length" class="wrapper">
			<TaskCard
				v-for="task in column.tasks"
				:key="task.id"
				:task="task"
				class="card"
			/>

			<!-- <button @click="tasks++">Добавить задачу</button> -->
		</div>
	</div>
</template>

<style scoped lang="scss">
.TasksColumn {
	width: 28rem;
	height: 100%;
	padding: 0 1.4rem;
}

.wrapper {
	height: 100%;
	overflow-y: scroll;
}

.title {
    margin-bottom: 1.6rem;
    font-size: 2rem;
    font-weight: 700;
}

.card {
	&:not(:last-child) {
		margin-bottom: 1.6rem;
	}

	&:last-child {
		margin-bottom: 5rem;
	}
}
</style>
