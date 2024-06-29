<script>
    import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import ArtCard from '../components/Projects/ArtCard.svelte';
	import Loader from '../components/Loader.svelte';

	let arts = [];
	let coverImagesPromises = [];
	let promisesResolved = false;
	let errorOccurred = false;

	const preloadImage = (src) => {
		return new Promise((resolve) => {
			let img = new Image();
			img.onload = resolve;
			img.src = src;
		});
	};

	const createAndResolvePromises = async () => {
		if (arts && Array.isArray(arts)) {
			arts.forEach((art) => coverImagesPromises.push(preloadImage(art.coverImage)));
		} else {
			console.error('arts is undefined or not an array');
		}

		return await Promise.all(coverImagesPromises);
	};

	const fetchData = async () => {
		try {
			// Add your art details here
			arts = [
				{
					name: 'Art Piece 1',
					description: 'Description of Art Piece 1',
					coverImage: 'https://github.com/Superb-Man/Superb-Man/assets/104999005/ca98e065-4bd9-4e0e-a281-5d20f8c1c3ca',
				},
				{
					name: 'Art Piece 2',
					description: 'Description of Art Piece 2',
					coverImage: 'https://github.com/Superb-Man/Superb-Man/assets/104999005/9f96ec91-f0e9-432e-bbd9-a375a1b8dbce',
				},
				{
					name: 'Art Piece 3',
					description: 'Description of Art Piece 3',
					coverImage: 'https://github.com/Superb-Man/Superb-Man/assets/104999005/50bcafe9-d96c-4877-be5a-82fc33548e6b',
				},
				{
					name: 'Art Piece 4',
					description: 'Description of Art Piece 4',
					coverImage: 'https://github.com/Superb-Man/Superb-Man/assets/104999005/abddded0-4539-4ea3-a796-06e4071abc98',
				},
				{
					name: 'Art Piece 5',
					description: 'Description of Art Piece 5',
					coverImage: 'https://github.com/Superb-Man/Superb-Man/assets/104999005/aad94605-efcf-48a5-8f8b-9f05b72d6e3e',
				},
				{
					name: 'Art Piece 6',
					description: 'Description of Art Piece 6',
					coverImage: 'https://github.com/Superb-Man/Superb-Man/assets/104999005/46a5a51a-d33e-4105-9175-0631300cdab6',
				},
				{
					name: 'Art Piece 7',
					description: 'Description of Art Piece 7',
					coverImage: 'https://github.com/Superb-Man/Superb-Man/assets/104999005/31031902-16e5-45b8-84ec-e100ac3320e3',
				},
				{
					name: 'Art Piece 8',
					description: 'Description of Art Piece 8',
					coverImage: 'https://github.com/Superb-Man/Superb-Man/assets/104999005/3144a439-63aa-4ab4-81ae-2756a2ab4948',
				},
				{
					name: 'Art Piece 9',
					description: 'Description of Art Piece 9',
					coverImage: 'https://github.com/Superb-Man/Superb-Man/assets/104999005/56e6ce6a-b280-48f6-8cdd-c8ea09c51325',
				},
				{
					name: 'Art Piece 10',
					description: 'Description of Art Piece 10',
					coverImage: 'https://github.com/Superb-Man/Superb-Man/assets/104999005/06e89c5a-7d15-45a5-abdd-e80db07f2920',
				},
				{
					name: 'Art Piece 11',
					description: 'Description of Art Piece 11',
					coverImage: 'https://github.com/Superb-Man/Superb-Man/assets/104999005/1fb6ede0-099a-4879-b41c-7ed63658a34a',
				},
				{
					name: 'Art Piece 12',
					description: 'Description of Art Piece 12',
					coverImage: 'https://github.com/Superb-Man/Superb-Man/assets/104999005/b16acb9e-a4a5-481b-b654-2b0177cec3dd',
				}
			];


			await createAndResolvePromises();
			promisesResolved = true;
		} catch (error) {
			errorOccurred = true;
			console.error('Error fetching data:', error);
		}
	};

	onMount(() => {
		fetchData();
	});
</script>

<div class="flex flex-col items-center overflow-hidden">
	<h1 in:fade class="text-4xl mb-11 sm:mb-16">Arts</h1>
	{#if !promisesResolved && !errorOccurred}
		<Loader />
	{:else if errorOccurred}
		<div class="text-red-500">An error occurred while fetching the arts.</div>
	{:else}
		<div in:fly={{ y: 200, duration: 1000 }} class="grid grid-cols-cards w-11/12 gap-12 md:gap-14">
			{#each arts as art}
				<ArtCard {art} />
			{/each}
		</div>
	{/if}
</div>

<style>
	@media (prefers-reduced-motion: reduce) {
		* {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
			animation-delay: 0.01ms !important;
		}
	}
</style>
