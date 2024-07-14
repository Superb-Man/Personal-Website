<script>
	import { fade, fly } from 'svelte/transition';
	import Card from './Card.svelte';
	import Loader from '../Loader.svelte';
	export let portfolioRepos;

	// @ts-ignore
	const preloadImage = (src) => {
		return new Promise((resolve) => {
			let img = new Image();
			// @ts-ignore
			img.onload = resolve();
			img.src = src;
		});
	};

	// const tempCardCoverImgUrl =
	// 	'https://res.cloudinary.com/blitva/image/upload/v1634794360/Project%20screenshots/comingsoon_stcck3.webp';
	// @ts-ignore
	let coverImagesPromises = [];
	const createAndResolvePromises = async () => {
		// @ts-ignore
		portfolioRepos.forEach((repo) => coverImagesPromises.push(preloadImage(repo.coverImage)));
		// @ts-ignore
		return await Promise.all(coverImagesPromises);
	};
	
</script>
