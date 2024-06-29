<script>
	import { fade, fly } from 'svelte/transition';
	import Card from './ArtCard.svelte';
	import Loader from '../Loader.svelte';
	export let arts;

	const preloadImage = (src) => {
		return new Promise((resolve) => {
			let img = new Image();
			img.onload = resolve;
			img.src = src;
		});
	};

	let coverImagesPromises = [];
	const createAndResolvePromises = async () => {
		arts.forEach((art) => coverImagesPromises.push(preloadImage(art.coverImage)));
		return await Promise.all(coverImagesPromises);
	};
</script>

<div class="flex flex-col items-center overflow-hidden">
	<h1 in:fade class="text-4xl mb-11 sm:mb-16">Projects</h1>
	{#await createAndResolvePromises()}
		<Loader />
	{:then}
		<div in:fly={{ y: 200, duration: 1000 }} class="grid grid-cols-2 gap-12 md:gap-14 w-11/12">
			{#each arts as art}
				<Card {art} />
			{/each}
		</div>
	{/await}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 3rem; /* 12 for small screens, adjusted to 3rem for better spacing */
	}
	
	@media (max-width: 768px) {
		.grid {
			grid-template-columns: repeat(1, minmax(0, 1fr)); /* single column for small screens */
		}
	}

	@media (min-width: 768px) {
		.grid {
			gap: 3.5rem; /* 14 for medium screens and up */
		}
	}

	@media (prefers-reduced-motion: reduce) {
		* {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
			animation-delay: 0.01ms !important;
		}
	}
</style>
