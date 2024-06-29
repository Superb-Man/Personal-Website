<script>
    import { onMount } from 'svelte';
    let description = `I am an enthusiast proogrammer who loves to code and learn new things. I have immense interest in solving problems and studying computer systems.
                        I am currently a final year student at BUET.I am trying my best to improve my academic performance.`;

    let displayedText = '';
    let showImage = false ;

    onMount(() => {
        typeWriter(description, 0);
    });

    function typeWriter(text, i) {
        if (i < text.length) {
            displayedText += text.charAt(i);
            setTimeout(() => typeWriter(text, i + 1), 20); // Typing speed
        } 
		else if(!showImage) {
            setTimeout(() => {
                showImage = true;
            }, 1000);
        }
    }
</script>

<div class="home">
    <div class="home-writing">
        <h1 class="home-title">Kazi Istiak</h1>
        <div class="typewriter-container">
            <p class="home-subtitle">{displayedText}</p>
        </div>
        {#if showImage}
            <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/104999005/344055205-a1333b7b-2508-456f-98e3-9a489adf5ffe.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240628%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240628T061344Z&X-Amz-Expires=300&X-Amz-Signature=77c5d7d8d595019b135112cf4962b90af5fa6aaec9b1b01fbf307e8a7488ca11&X-Amz-SignedHeaders=host&actor_id=104999005&key_id=0&repo_id=817348756" alt="dragon2" class="transparent-image"/>
        {/if}
    </div>
</div>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');
    .home {
        align-self: center;
        display: flex;
        flex-direction: row;
        flex: 1;
        align-self: stretch;
        align-items: center;
        padding: 0px 10px;

        &-title {
            font-family: 'Roboto', sans-serif;
            font-size: 4em;
            font-weight: 900;
            letter-spacing: 2px;
        }

        .typewriter-container {
            display: inline-block;
            overflow: hidden;
            border-right: 2px solid var(--tertiary-text);
            white-space: normal;
            width: 100%;
        }

        &-subtitle {
            color: var(--tertiary-text);
            font-family: 'Dancing Script', cursive;
            font-size:2em;
            font-weight: 900;
            letter-spacing: 3px;
			line-height: 1.5;
            display: inline-block;
            white-space: normal;
            word-break: break-word;
            overflow: hidden;
        }

        &-section {
            display: flex;
            flex-direction: column;
            flex: 1;
            gap: 10px;
        }

        &-social {
            padding: 15px 0px;

            &-item {
                margin-right: 10px;
                text-decoration: none;
            }
        }

        @media (max-width: 875px) {
            & {
                flex-direction: column;
                justify-content: center;
            }

            &-section {
                flex: 0;
                align-items: center;
                text-align: center;
            }
        }

        @keyframes blink-caret {
            from, to { border-color: transparent }
            50% { border-color: var(--tertiary-text); }
        }

        .transparent-image {
            opacity: 1;
            background-color: transparent;
            // transition: opacity 1s ease-in-out;
			width: 100%;
        }
    }
</style>
