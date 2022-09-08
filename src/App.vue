<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
	<header>
		<div class="navbar">
			<RouterLink to="/">
				<img class="logo" alt="Vue logo" src="@/assets/logo.svg" />

			</RouterLink>
			<nav>
				<RouterLink to="/">New idea</RouterLink>
				<a href="https://github.com/afneybeyb/shareidea">Github</a>
			</nav>
		</div>
	</header>

	<!-- Vue router is used to navigate between different views -->
	<RouterView />
</template>

<style scoped>
header {
	height: 100px;
	margin-bottom: 10px;
	padding: 10px;

	background-color: var(--color-bg2);

	border-radius: 6px;
}

@media screen and (max-width: 700px) {
	header {
		border-radius: 0px;
	}
}

.navbar {
	display: flex;
	width: 80%;
	height: 100%;
	margin-inline: auto;

	justify-content: space-between;
	align-items: center;
	gap: 1rem;
}

.logo {
	display: block;
	height: 80px;
}

nav {
	display: flex;
	width: fit-content;
	gap: 1rem;
}

@media screen and (max-width: 500px) {
	header {
		height: auto;
	}

	nav,
	.navbar {
		flex-direction: column;
		gap: 0.5rem;

		text-align: center;
	}
}
</style>

