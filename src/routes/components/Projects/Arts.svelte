<script>
	export let arts;

	const preloadImage = (/** @type {string} */ src) => {
		return new Promise((resolve) => {
			let img = new Image();
			img.onload = resolve;
			img.src = src;
		});
	};

	/**
     * @type {any[]}
     */
	let coverImagesPromises = [];
	const createAndResolvePromises = async () => {
		arts.forEach((/** @type {{ coverImage: any; }} */ art) => coverImagesPromises.push(preloadImage(art.coverImage)));
		return await Promise.all(coverImagesPromises);
	};
</script>