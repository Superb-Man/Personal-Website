<script>
    import '@fortawesome/fontawesome-free/css/all.css';
    export let education;

    console.log(education, 'here');
</script>

<div class="group w-full overflow-hidden relative rounded-lg bg-white shadow-lg justify-self-center cursor-pointer transition transform border-8 hover:border-blue-900 rounded-xl">
    <div class="p-4">
        <div class="text-black mb-4">
            {#each education as edu, i}
                <div class="mb-4 relative pl-6 border-l-2 border-gray-300">
                    <div class="flex items-center">
                        <span class="bg-white p-1 rounded-full border-2 border-gray-300 mr-2">
                            <i class="fas fa-graduation-cap"></i>
                        </span>
                        <h3 class="font-semibold">{edu.institute}</h3>
                    </div>
                    <div class="ml-8">
                        <div class="flex justify-between text-sm text-gray-700">
                            <span>{edu.time}</span>
                            {#if edu.grade !=''}
                                <span>GPA: {edu.grade}</span>
                            {/if}
                        </div>
                        <p class="text-gray-500 text-sm">{edu.department}</p>
                    </div>
                    <div class="ml-8">
                        {#if edu.course.length > 0}
                            <h3 class="font-semibold color-blue-900"># Major Courses : </h3>
                        {/if}
                        <ul class="list-none">
                            {#each edu.course as c , j}
                                <li class="flex items-center text-sm text-gray-700 mb-1">
                                    <i class="fas fa-square text-xs mr-2"></i>
                                    <p>{c}</p>
                                </li>
                            {/each}
                        </ul>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .group:hover .p-4 {
        filter: brightness(85%);
    }
    .border-l-2::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 2px;
        background: #d2d6dc;
    }
</style>
