import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import IdeaView from "../views/IdeaView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/:id",
			name: "idea",
			component: IdeaView,
			props: true,
		},
	],
});

export default router;
