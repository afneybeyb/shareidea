<script setup lang="ts">
import { ref } from "vue";
import router from "@/router";
import { addIdea, serverTimestamp } from "../firebase";

let note = ref("");

let saveIdea = async () => {
	if (note.value == "") {
		console.error("It looks like you haven't written anything yet.");
		return 1;
	}
	const idea = {
		note: note.value,
		time: serverTimestamp(),
	};
	// Add idea and catch error if adding idea fails
	const ref = await addIdea(idea).catch(() => console.error("Unable to connect to the server."));
	// Redirect to the new idea
	if (ref?.id) router.push(ref.id);
};
</script>

<template>
	<main>
		<section class="welcome-text">
			<h1>Hello!</h1>
			<p>
				You can write your idea here and I will give you link to access that idea.
			</p>
		</section>
		<textarea id="idea-input" placeholder="Sooo...do YOU have any idea? 🧐" v-model="note"></textarea>
		<button @click="saveIdea">Save</button>

	</main>
</template>

<style scoped>
main {
	width: 80%;
	margin-inline: auto;
	padding: 5px;
}

textarea {
	width: 100%;
	height: 350px;
}

@media screen and (max-width: 500px) {
	main {
		width: 100%;
	}

	.welcome-text {
		padding-inline: 15px;
	}

	textarea {
		height: 500px;
	}
}
</style>

