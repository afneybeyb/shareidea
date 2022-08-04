<script setup lang="ts">
import { getIdea } from "../firebase";

const props = defineProps({
	id: {
		type: String,
		default: "",
		required: true,
	}
});

let idea = await getIdea(props.id);

// Shows either the idea or a sorry message
let note = idea ? idea.note : "Failed to find your idea. 🥺 Check your link and try again.";
</script>

<template>
	<pre>{{ note }}</pre>
</template>

<style scoped>
pre {
	line-height: 1.4;
	font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
		Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
	font-size: 1.1rem;

	white-space: pre-wrap;
	overflow: auto;
}
</style>

