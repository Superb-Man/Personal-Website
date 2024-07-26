<script>
	import { fade, fly } from 'svelte/transition';
	import EduCard from '../components/Education/EduCard.svelte';
    import Loader from '../components/Loader.svelte';
    import {education} from '../components/Education/education.js';

    console.log(education);

</script>
<div class="flex flex-col items-center overflow-hidden">
	<h1 in:fade class="text-4xl mb-11 sm:mb-16">Education</h1>
    <div in:fly={{ y: 200, duration: 1000 }} class="grid grid-cols-1 w-12/13 md:w-2/3 gap-16 md:gap-20">
        <EduCard {education} />
    </div>
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
