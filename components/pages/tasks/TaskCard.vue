<script setup lang="ts">
import type { ITask } from "~/types/common";

interface IProps {
	task: ITask;
}
const props = defineProps<IProps>();

const initials = computed(() => {
	if (!props.task.executor) {
		return "";
	}

	const names = props.task.executor.name.split(" ");
	return names.map((name) => name.charAt(0).toUpperCase()).join("");
});
</script>

<template>
	<div class="TaskCard">
		<h3 v-if="task.name" class="title">
			{{ task.name }}
		</h3>

		<div v-if="task.tags?.length" class="tags">
			<p
				v-for="(tag, index) in task.tags"
				:key="index"
				:class="['tag', `_${tag.color}`]"
			>
				{{ tag.name }}
			</p>
		</div>

		<div class="bottom">
			<p v-if="task?.deadline" class="deadline">
				{{ task.deadline }}
			</p>

			<div
				v-if="initials"
				:class="['executor', `_${task.executor.color}`]"
			>
				{{ initials }}
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.TaskCard {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 12rem;
	padding: 1.2rem;
	border-radius: 1.2rem;
	background-color: #373a44;
}

.title {
	font-weight: 700;
	margin-bottom: 1.6rem;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}

.tags {
	display: flex;
	margin-bottom: 1.6rem;
}

.tag {
	display: flex;
	align-items: center;
	font-size: 1.2rem;

	&:not(:last-child) {
		&:after {
			content: "";
			display: block;
			flex-shrink: 0;
			width: 0.4rem;
			height: 0.4rem;
			margin: 0 0.8rem;
			border-radius: 100%;
			background-color: #86868b;
		}
	}

	&._red {
		color: #fb9699;
	}

	&._green {
		color: #7ab734;
	}

	&._blue {
		color: #5384bf;
	}
}

.bottom {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: auto;
}

.deadline {
	font-size: 1.4rem;
	font-weight: 700;
}

.executor {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2.6rem;
	height: 2.6rem;
	border-radius: 100%;
	font-size: 1.2rem;
	font-weight: 700;

	&._red {
		color: #5b3637;
		background-color: #fb9699;
	}

	&._green {
		color: #3f5552;
        background-color: #aee6e0;
	}

	&._blue {
		color: #3f556c;
        background-color: #97cbff;
	}
}
</style>
