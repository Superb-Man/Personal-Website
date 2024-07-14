 <script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import Card from '../components/Projects/Card.svelte';
	import Loader from '../components/Loader.svelte';
	import {repoProjects} from '../components/Projects/repoProjects.js';

	// let portfolioRepos = [];
	// let coverImagesPromises = [];
	// let promisesResolved = false;
	// let errorOccurred = false;

	// const username = 'Superb-Man';
	// const url = `https://api.github.com/users/${username}/repos`;

	// const preloadImage = (src) => {
	// 	return new Promise((resolve) => {
	// 		let img = new Image();
	// 		img.onload = resolve;
	// 		img.src = src;
	// 	});
	// };

	// const createAndResolvePromises = async () => {
	// 	if (portfolioRepos && Array.isArray(portfolioRepos)) {
	// 		portfolioRepos.forEach((repo) => coverImagesPromises.push(preloadImage(repo.coverImage)));
	// 	} else {
	// 		console.error('portfolioRepos is undefined or not an array');
	// 	}

	// 	return await Promise.all(coverImagesPromises);
	// };

	// const fetchData = async () => {
	// 	try {
	// 		//use a map to store image name against the repo.name
	// 		let obj = {};

	// 		// Add key-value pairs
	// 		obj["e-TicketBooking"] = "history.webp";
	// 		obj['xv6-OS'] = "x-33.webp";
	// 		obj['PACPACMAN'] = 'pacman.webp';
	// 		obj['jfx-smol-project-'] = 'yahoo.webp';
	// 		obj['cpp-Console-chat-and-Threads'] = 'message.webp';
	// 		obj['TOC-Solver'] = 'toc.webp';
	// 		obj['Runners_GameJam'] = 'game.webp';
	// 		obj['Artificial-Intelligence_318'] = 'haha.webp';
	// 		obj['Find-Motifs'] = 'motif.webp' ;
			
	// 		const res = await fetch(url);
	// 		if (res.ok) {
	// 			const data = await res.json();
	// 			portfolioRepos = data
	// 				.filter((repo) => repo.topics.includes('x-33'))
	// 				.map((repo) => ({
	// 					username: username,
	// 					name: repo.name,
	// 					url: repo.html_url,
	// 					homepage: repo.homepage,
	// 					description: repoProjects[repo.name].description,
	// 					coverImage: `https://cdn.jsdelivr.net/gh/${username}/${repo.name}@master/${repoProjects[repo.name].image}`,
	// 					// coverImage2: `https://cdn.jsdelivr.net/gh/${username}/${repo.name}@master/mockup.webp`,
	// 					topics: repoProjects[repo.name].techStack,
	// 				}));

	// 			await createAndResolvePromises();
	// 			promisesResolved = true;
	// 		} else {
	// 			errorOccurred = true;
	// 			console.error(`Failed to fetch data: ${res.status}`);
	// 		}
	// 	} catch (error) {
	// 		errorOccurred = true;
	// 		console.error('Error fetching data:', error);
	// 	}
	// };

	// onMount(() => {
	// 	fetchData();
	// });
</script>

<div class="flex flex-col items-center overflow-hidden">
	<h1 in:fade class="text-4xl mb-11 sm:mb-16">Projects</h1>
	<!-- {#if !promisesResolved && !errorOccurred}
		<Loader />
	{:else if errorOccurred}
		<div class="text-red-500">An error occurred while fetching the projects.</div>
	{:else} -->
		<div in:fly={{ y: 200, duration: 1000 }} class="grid grid-cols-1 md:grid-cols-2 w-11/12 gap-16 md:gap-20">
			{#each repoProjects as repo}
				<Card {repo} />
			{/each}
		</div>
	<!-- {/if} -->
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

