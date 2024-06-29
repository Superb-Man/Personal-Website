<script>
	import Icon from '@iconify/svelte';
	import '@fortawesome/fontawesome-free/css/all.css';
	export let repo;
</script>

<div class="group w-80 h-80 overflow-hidden relative rounded-lg bg-white shadow-lg justify-self-center cursor-pointer transition transform hover:scale-105 hover:shadow-2xl">
	<img
		src={repo.coverImage}
		alt="project mockup thumbnail"
		class="image-cover w-full h-full object-cover transition duration-500 ease-in-out rounded-lg"
	/>
	<div class="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"></div>
	<div class="self-end content-end w-full h-full top-0 xl:top-[85%] xl:group-hover:-translate-y-[85%] transition-transform duration-500 ease-in-out absolute flex flex-col justify-between motion-reduce:transition-none motion-reduce:transform-none will-change-transform bg-[rgba(0,0,0,.45)] rounded-lg">
		<div class="transition duration-[250ms] ease-in-out h-12 flex items-center px-4 gap-4">
			{#if repo.topics.length}
				{#each repo.topics as topic}
					<a title={topic} href={`https://www.google.com/search?q=${topic}`} target="_blank">
						<Icon icon={`simple-icons:${topic}`} height="27.5" color="white" />
					</a>
				{/each}
			{/if}
		</div>
		<div class="p-4">
			<h1 class="text-2xl text-white mb-1">
				{repo.name}
			</h1>
			<p class="text-white mb-2 line-clamp-5">
				{repo.description}
			</p>
			<div class="flex gap-4 py-1">
				<a
					href='no-link-yet'
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Link to more information"
					class="underline underline-offset-2 text-blue-200 text-base visited:text-blue-400"
					><i class="fa-brands fa-youtube youtube"></i></a
				>
				<a
					href={repo.url}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Link to more information"
					class="underline underline-offset-2 text-blue-200 text-base visited:text-blue-400"
					><i class="fa-brands fa-github github"></i></a
				>
			</div>
		</div>
	</div>
</div>

<style>
	.image-cover {
		object-fit: cover;
		object-position: center;
	}
	.github {
		font-size: 1.5em; /* Adjust the size of the icon */
		transition: color 0.3s;
	}
	.youtube {
		font-size: 1.5em; /* Adjust the size of the icon */
		transition: color 0.3s;
	}
	.github:hover, .youtube:hover {
		color: #007BFF; /* Change color on hover */
	}
	.group:hover .object-cover {
		filter: brightness(50%);
	}
</style>
