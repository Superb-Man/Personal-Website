<script>
	import '@fortawesome/fontawesome-free/css/all.css';
	export let repo;
</script>

<div class="group w-full overflow-hidden relative rounded-xl bg-white shadow-lg justify-self-center cursor-pointer transition transform hover:scale-105 hover:shadow-2xl border-8 hover:border-blue-900 rounded-xl">
	<img
		src={repo.image}
		alt="project cover"
		class="image-cover w-full h-72 object-cover transition duration-500 ease-in-out"
	/>
	<div class="border-b border-orange-400 rounded-xl"></div>
	<div class="p-4">
		<h1 class="text-2xl text-orange-500 font-bold mb-1">
			{repo.name}
		</h1>
		<p class="text-gray-700">
			{repo.description}
		</p>
		<div class="flex gap-4 py-1">
			<a
				href='no-link-yet'
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Link to more information"
				class="underline underline-offset-2 text-blue-600 text-base visited:text-blue-800"
				><i class="fa-brands fa-youtube youtube"></i></a
			>
			<a
				href={repo.url}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Link to more information"
				class="underline underline-offset-2 text-blue-600 text-base visited:text-blue-800"
				><i class="fa-brands fa-github github"></i></a
			>
		</div>
		<div class="flex gap-3 py-2 flex-wrap">
			{#if repo.topics.length}
				{#each repo.topics as topic}
					<div class="badge">
						<p class="badge-text">{topic}</p>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</div>

<style>
	.image-cover {
		object-fit: cover;
		object-position: center;
	}
	.github, .youtube {
		font-size: 1.5em; 
		color: black; 
		transition: color 0.3s;
	}
	.github:hover, .youtube:hover {
		color: #007BFF;
	}
	.badge {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.2em 0.6em;
		border-radius: 9999px; 
		background-color: #e2e8f0;
		color: #1a202c;
		border: none;
		transition: background-color 0.3s, color 0.3s;
		font-size: 0.875em;
		font-weight: 500;
		margin-bottom: 0.5em; /* Add margin to separate badges when wrapped */
	}
	.badge:hover {
		background-color: gray; 
		color: white;
	}
	.badge-text {
		font-weight: bold;
		text-align: center;
		margin: 0;
	}
</style>
