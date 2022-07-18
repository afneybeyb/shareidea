<script setup lang="ts"></script>

<template>
	<main>
		<section class="welcome-text">
			<h1>Hello!</h1>
			<p>
				You can write your idea here and I will give you link to access that idea.
			</p>
		</section>
		<textarea name="idea" id="" placeholder="Sooo...do YOU have any idea? 🧐"></textarea>
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
	margin-block: 1rem;
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