<script setup lang="ts">
import router from "@/router";
import { reactive } from "vue";
import { getIdea } from "../firebase";

const props = defineProps({
	id: {
		type: String,
		default: "",
		required: true,
	}
});

let idea = await getIdea(props.id);

// Shows either the idea or a sorry mhandEmojis[Math.floor(Math.random() * handEmojis.length)];essage
let note = idea ? idea.note : "Failed to find your idea. 🥺 Check your link and try again.";
let state = reactive({ copyLinkText: "Copy link" });

// Copy idea URL to clipboard
const copyLink = () => {
	// Copy note to clipboard if Clipboard API is available
	if (navigator.clipboard) {
		navigator.clipboard.writeText(window.location.origin + router.currentRoute.value.fullPath);

		// Change copy button text, pick random emoji and to the end of the text 
		const handEmojis = ["👌", "👍", "🤘", "🫶", "🖖"]
		state.copyLinkText = `Link copied! ${handEmojis[Math.floor(Math.random() * handEmojis.length)]}`;
	} else {
		state.copyLinkText = "Unable to copy 😞";
	}
}
</script>

<template>
	<pre>{{ note }}</pre>
	<button :onclick="copyLink">
		{{ state.copyLinkText }}
		<span class="btn-popup">
			Copy to clipboard
		</span>
	</button>
</template>

<style scoped>
@media screen and (max-width: 500px) {
	button {
		display: block;
		width: 100%;
	}
}
</style>

