<script>
    import { onMount, onDestroy } from 'svelte';
    import { fly } from 'svelte/transition';
    
    let currentIndex = 0;
    const skills = [
      { name: 'HTML', icon: '/icons/html.svg' },
      { name: 'CSS', icon: '/icons/css.svg' },
      { name: 'JavaScript', icon: '/icons/js.svg' },
      { name: 'bash', icon: '/icons/bash.svg' },
      { name: 'C', icon: '/icons/c.svg' },
      { name: 'C++', icon: '/icons/cpp.svg' },
      { name: 'Java', icon: '/icons/java.svg' },
      { name: 'Python', icon: '/icons/python3.svg' },
      { name: 'Svelte', icon: '/icons/svelte.svg' },
      { name: 'Node.js', icon: '/icons/nodejs.svg' },
      { name: 'Express', icon: '/icons/express.svg' },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
      { name: 'Bootstrap', icon: '/icons/bootstrap.svg' },
      { name: 'Tailwind', icon: '/icons/tailwindcss.svg' },
      { name: 'Git', icon: '/icons/git.svg' },
      { name: 'React', icon: '/icons/react.svg' },
      { name : 'PyTorch', icon: '/icons/pytorch.svg' }
    ];
    
    function next() {
      currentIndex = (currentIndex + 1) % skills.length;
    }
    
    function prev() {
      currentIndex = (currentIndex - 1 + skills.length) % skills.length;
    }
    
    let interval;
    
    onMount(() => {
      interval = setInterval(next, 3000); // Change skill every 3 seconds
    });
    
    onDestroy(() => {
      clearInterval(interval);
    });
  </script>
  
  <style>
    .carousel-container {
      height: 80vh;
      margin-top: -40px;
    }
    
    .carousel-item {
      transition: transform 0.5s ease-in-out;
    }
  </style>
  
  <div in:fly={{ y: 200, duration: 1000 }} class="carousel-container flex justify-center items-center bg-white relative">
    <div class="relative w-128 max-w-4xl p-4 bg-white rounded-xl">
      <div class="overflow-hidden relative">
        <div class="flex transition-transform duration-500 ease-in-out" style="transform: translateX({-currentIndex * 100}%)">
          {#each skills as skill}
          <div class="carousel-item flex-shrink-0 w-full flex flex-col items-center p-6 -mt-10">
            <img src={skill.icon} alt={skill.name} class="w-48 h-48 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto mb-4 transition-transform transform hover:scale-110 duration-300 ease-in-out cursor-pointer" />
            <div class="text-center text-lg font-semibold text-gray-800">{skill.name}</div>
          </div>
          {/each}
        </div>
      </div>
      <div class="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between">
        <button on:click={prev} class="bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <button on:click={next} class="bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
  