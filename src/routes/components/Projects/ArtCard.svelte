<script>
	import '@fortawesome/fontawesome-free/css/all.css';
	export let art;

	const viewImage = () => {
		window.open(art.coverImage, '_blank');
	};
</script>

<div 
	class="group w-80 h-80 overflow-hidden relative rounded-lg bg-white shadow-lg justify-self-center cursor-pointer transition transform hover:scale-105 hover:shadow-2xl"
	on:click={viewImage}
>
	<img
		src={art.coverImage}
		alt={art.name}
		class="w-full h-full object-cover object-mockup block transition duration-500 ease-in-out rounded-lg"
		width="300"
		height="300"
	/>
	<div class="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-500 ease-in-out group-hover:bg-opacity-0"></div>
	<div class="self-end content-end w-full h-full top-0 transition-transform duration-500 ease-in-out absolute flex flex-col justify-between motion-reduce:transition-none motion-reduce:transform-none will-change-transform md:bg-transparent md:relative md:transform-none md:static md:top-auto md:w-full">
		<div class="transition duration-[250ms] ease-in-out h-12 flex items-center px-4 gap-4 md:hidden">
		</div>
		<div class="p-4 md:bg-white md:rounded-b-lg">
			<h1 class="text-2xl text-white mb-1 md:text-black">
				{art.name}
			</h1>
			<p class="text-white mb-2 line-clamp-5 md:text-black">
				{art.description}
			</p>
		</div>
	</div>
</div>

<style>
	.group:hover .object-cover {
		filter: none; /* Remove brightness effect */
	}

	@media (max-width: 768px) {
		.group {
			width: 100%;
			height: auto;
		}
		.md\:relative {
			position: relative;
		}
		.md\:transform-none {
			transform: none;
		}
		.md\:static {
			position: static;
		}
		.md\:top-auto {
			top: auto;
		}
		.md\:bg-white {
			background-color: white;
		}
		.md\:rounded-b-lg {
			border-bottom-left-radius: 0.5rem;
			border-bottom-right-radius: 0.5rem;
		}
		.md\:w-full {
			width: 100%;
		}
		.md\:hidden {
			display: none;
		}
	}
</style>
