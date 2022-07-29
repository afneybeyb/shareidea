<script setup lang="ts">
import ShowIdea from "../components/ShowIdea.vue";

const props = defineProps({
	id: {
		type: String,
		default: "",
		required: true,
	}
});
</script>

<template>
	<main>
		<section class="welcome-text">
			<h1>Oh, you again! Here's your idea:</h1>
			<Suspense>
				<ShowIdea :id="props.id" />
				<template #fallback>
					Loading your amazing idea 🤠
				</template>
			</Suspense>
		</section>
	</main>
</template>

<style scoped>
main {
	width: 80%;
	margin-inline: auto;
	padding: 5px;
}

@media screen and (max-width: 500px) {
	main {
		width: 100%;
	}

	.welcome-text {
		padding-inline: 15px;
	}
}
</style>

