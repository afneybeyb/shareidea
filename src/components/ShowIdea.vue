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
	<p>
		{{ note }}
	</p>
</template>

<style scoped>
</style>

