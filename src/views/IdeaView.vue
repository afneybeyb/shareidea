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
		<section>
			<h1 class="welcome-text">Oh, you again! Here's your idea:</h1>
			<Suspense>
				<ShowIdea :id="props.id" />
				<template #fallback>
					<p class="loading-fallback">Loading your amazing idea 🤠</p>
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

.loading-fallback {
	padding: 1.5rem 0.3rem;
}

@media screen and (max-width: 500px) {
	main {
		width: 100%;
	}

	.welcome-text {
		padding-inline: 0.3rem;
	}
}
</style>

