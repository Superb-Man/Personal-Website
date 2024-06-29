<script>
	import Projects from './../Projects/Projects.svelte';
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte';
	import FaEnvelopeSquare from 'svelte-icons/fa/FaEnvelopeSquare.svelte';
	import FaCaretSquareDown from 'svelte-icons/fa/FaCaretSquareDown.svelte';

	export let currentPage;
	const defaultLinkClass = 'transition ease-in-out text-lg hover:text-[#1565c0]';
	const activeLinkClass = 'text-lg text-[#1976d2] dark:text-blue-200 underline';

	let scrollY;
	let isScrolled = false;
	let navBarClass;
	let leftIconClass;
	let middleIconClass;
	let rightIconClass;
	let dropdownArrowClass;
	let navLinksClass;
	let brandLogoClass;
	let iconWrapperClass;
	let navHeight;

	$: if (scrollY > 55) {
		navHeight = 'h-[3rem]';
		navBarClass = 'pt-4 pb-1 shadow-md dark:bg-[#1e1e1e] rounded-b-lg ';
		leftIconClass = 'translate-x-[88px] opacity-0';
		middleIconClass = 'translate-x-[44px] opacity-0';
		rightIconClass = 'opacity-0';
		isScrolled = true;
		dropdownArrowClass = 'block absolute translate-y-[5px]';
		navLinksClass = 'translate-x-[-50px] translate-y-[-40px] right-[30px] ';
		brandLogoClass = 'w-10 h-10';
		iconWrapperClass = 'group';
	} else {
		navBarClass = 'dark:bg-[#121212] py-4';
		leftIconClass = '';
		middleIconClass = '';
		rightIconClass = '';
		isScrolled = false;
		dropdownArrowClass = 'hidden';
		navLinksClass = '';
		brandLogoClass = 'w-20 h-20';
		iconWrapperClass = '';
		navHeight = '';
	}
</script>

<svelte:window bind:scrollY={scrollY} />

<nav
	class={`left-0 top-0 mx-auto fixed z-10 flex justify-between bg-white/95 backdrop-blur box-s dark:text-white w-full mb-12 dark:bg-[#121212]/95`}>
	<div class={`ease-in-out delay-100 transition-all duration-300 w-full max-w-screen-2xl mx-auto px-4 flex justify-between ${navBarClass}`}>
		<a
			href="/"
			class={`${brandLogoClass} transition-all duration-500 ease-in-out will-change-transform`}
		>
			<img
				width="158"
				height="144"
				class={`w-full h-auto dark:invert `}
				src="/mylogo.png"
				alt="Toriqe logo"
			/>
		</a>
		<div class={`self-end ${navHeight}`}>
			<div class={`flex justify-end gap-5  pb-5 ${iconWrapperClass}`}>
				<a
					aria-label="Link to linkedin"
					href="https://www.linkedin.com/in/kazi-istiak-toriqe-66a499307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
					target="_blank"
					rel="noopener noreferrer"
					class={`w-6 h-6 hover:scale-110 transition-all duration-200 ease-in-out will-change-transform hover:text-[#1565c0] group-hover:translate-y-[98px] group-hover:opacity-100 group:hover:absolute ${leftIconClass}`}
				>
					<FaLinkedin />
				</a>
				<a
					aria-label="Link to github"
					href="https://github.com/Superb-Man"
					target="_blank"
					rel="noopener noreferrer"
					class={`w-6 h-6 hover:scale-110 transition-all duration-500 ease-in-out  hover:text-[#1565c0] group-hover:translate-y-[68px] group-hover:opacity-100 ${middleIconClass}`}
				>
					<FaGithubSquare />
				</a>
				<a
					aria-label="Link to email"
					href="mailto:kaziistiak@gmail.com"
					target="_blank"
					rel="noopener noreferrer"
					class={`w-6 h-6 hover:scale-110 transition-all duration-500 ease-in-out  hover:text-[#1565c0] group-hover:translate-y-[38px] group-hover:opacity-100 ${rightIconClass}`}
				>
					<FaEnvelopeSquare />
				</a>
				<a
					aria-label="Link to email"
					href="mailto:aleksebastian@outlook.com"
					target="_blank"
					rel="noopener noreferrer"
					class={`w-6 h-6 transition duration-300 ease-in-out display-none ${dropdownArrowClass}`}
				>
					<FaCaretSquareDown />
				</a>
			</div>
			<div class={`flex gap-5 transition-all duration-500 ease-in-out  pb-2 ${navLinksClass}`}>
				<a class={currentPage === '/' ? activeLinkClass : defaultLinkClass} href="/"><i class="fa-solid fa-house"></i></a>
				<a class={currentPage === '/projects' ? activeLinkClass : defaultLinkClass} href="/projects"><i class="fas fa-tasks"></i></a>
				<a class={currentPage === '/arts' ? activeLinkClass : defaultLinkClass} href="/arts"><i class="fa-solid fa-paintbrush"></i></a>
			</div>
		</div>
	</div>
</nav>
