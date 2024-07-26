import { deserialize } from "$app/forms";

export let repoProjects = [
    {
        name: "e-TicketBooking",
        description: `A ticket booking platform for train,air and bus tickets in Bnagladesh.
                    This project was made as a part of the Software Development course at CSE 408.
                    Throught the time ,the project was developed following process of development and industrial practise.
                    Also learnt about money transaction,CORS, etc`,    
        topics: ['typescript','javascript','nodejs','svelte','express','tailwindcss','vite','postgresql','web-app'],
        image : "/repoImages/history.jpg",
        url : `https://github.com/Superb-Man/e-TicketBooking`
    },
    {
        name: "PACPACMAN",
        description: `Classic PACMAN game rebuilt using openGL wrapper.Implemented 10 differentmazes
                        with different difficulty levels.Implemented fireballs , hiding and different speeds 
                        for different level.I hope you will really enjoy playing it.`,
        topics: ['c','cpp','openGL','game-development'],
        image : "/repoImages/pacman.jpg",
        url : `https://github.com/Superb-Man/PACPACMAN`
    },
    {
        name: "jfx-smol-project-",
        description: `Networking project using java and javafx.For making the ui 
                     components beautiful i used jphoneix library.Implemented 
                     realtime marketing transaction`,
        topics: ['java','socket','networking'],
        image : "/repoImages/yahoo.jpg",
        url : `https://github.com/Superb-Man/jfx-smol-project-`
    },
    {
        name: "cpp-Console-chat-and-Threads",
        description: `A simple chat application using threads and sockets in C++.
                        Implemented server and client side chat application.
                        Implemented only for console.At that time i was learning 
                        java networking and socket programming.So i thought to give a try in cpp.`,
        topics: ['cpp','c','socket','networking'],
        image : "/repoImages/message.jpg",
        url : "https://github.com/Superb-Man/cpp-Console-chat-and-Threads"
    },
    {
        name: "TOC-Solver",
        description: `I did it because i wanted to make it.It can make nfa,min dfa 
                        and also can check if a string is accepted by the dfa or not.
                        for the min-DFA i implemented the moore-algorithm.I also implemented 
                        the CYK-Algorithm for context-free grammar.I hope i can contribute 
                        further to this project.Hope it will help you to solve and find 
                        DFA,NFA,parsing ,CYK-Algorithm etc and help you verify your answer.`,
        topics: ['json','cpp','state-machine','CYK','Parser'],
        image : "/repoImages/toc.jpg",
        url : `https://github.com/Superb-Man/TOC-Solver`
    },
    {
        name: "Runners_GameJam",
        description: `2D arcade game built using python3 and pygame library.
                        This was made as a part of the GameJam competition.
                        The game is about "you are not supposed to do that" concept
                        and we tried our best to make it fun and enjoyable.`,
        topics: ['python3','game-development'],
        image : "/repoImages/game.jpg",
        url : `https://github.com/Superb-Man/Runners_GameJam`
    },
    {
        name: "Mancala-AI",
        description: `Famous Mnacala AI vs Human game console.
                        Implemented Minimax algorithm with alpha-beta pruning.
                        Play it now and have fun! .Thought of making it with openGL
                        but i'm too lazy to do that for now!`,
        topics: ['javascript','html','css','cpp','Adversarial Search game'],
        image : "/repoImages/mancala.jpg",
        url : `https://github.com/Superb-Man/Artificial-Intelligence_318/tree/master/Offline-2`

    },
    {
        name: "Find-Motifs",
        description: `A simple program to find motifs in DNA sequences.Tried to enhance 
                    traditional Gibbs Sampler and Randomized Motif Search algorithms.
                    Used different approaches to find the best motif.`,
        topics: ['python3','algorithms'],
        image : "/repoImages/motif.jpg",
        url : `https://github.com/Superb-Man/Find-Motifs`
    },
    {
        name : 'Kernel-Thread',
        description : `Kernel Thread implementation for RISC V architecture in xv-6 os for learning purposes.
                        Implemented mutex,semaphore,condition variable and barrier for synchronization.
                        The producer-consumer problem was solved using these synchronization primitives of
                        Kernel-Threads.`,
        topics : ['c','bash'],
        image : "/repoImages/Threads.jpg",
        url : `https://github.com/Superb-Man/Kernel-Thread`
    },
    {
        name : 'Memory-Management',
        description : `Memory management for RISC V architecture in xv-6 os for learning purposes.
                        Implemented paging and page-replacement algorithms like FIFO.
                        Also implemented swap-space and page-fault handling for the memory management.Learnt
                        the detail functionality of call sequence of mapping and unmapping of pages in vm.c file.`,
        topics : ['c','bash','swap-space','paging','page-fault'],
        image : "/repoImages/memory.jpg",
        url : `https://github.com/Superb-Man/Memory-Management`
    },
    {
        name:'Puzzle-Fun',
        description : `Some basic mathematical games implemented with vanila js
                        and html css.Implemented games like 15-puzzle,Misere-Nim,
                        dx-ball,tower-of hanoi auto simulation etc.I made this project 
                        to have a little fun and to learn some basic javascript manipulation
                        and animation.`,
        topics : ['javascript','html','css','puzzle'],
        image : "/repoImages/Puzzle.jpg",
        url : `https://superb-man.github.io/Puzzle-Fun/`
    },
    {
        name : 'Compiler-Design',
        description : ` Compiler design project for learning purposes.
                        Implemented a C compiler for a simple language.
                        Implemented lexer,top-down parser ,semantic analysis and code generation
                        for the language.This was done for CSE 310 compiler design sessional course.
                        `,
        topics : ['c','bash','cpp','lex','yacc'],
        image : "/repoImages/compiler.jpg",
        url : `https://github.com/Superb-Man/Compiler/tree/master/icg_Offline-4`
    },
    {
        name : 'Cryptography',
        description : `AES encryption and decryption algorithm implemented in python 
                        using BitVector library.Implemented the AES algorithm for 128,192,256 bit key.
                        Also implemented the key expansion and substitution box for the algorithm.
                        Implemented CTR and CBC mode of operation for the AES algorithm.
                        ECC algorithm was also implemented for symmetric key encryption.
                        RSA implemented with Miller-Rabin primality test and Euclidean algorithm for
                        finding the private and public key.Implemented primitive roots of any number up to 1000 in c++`,
        topics : ['python3','cpp','AES','Diffie-Hellman','RSA cryptography'],
        image : "/repoImages/crypto.jpg",
        url : `https://github.com/Superb-Man/Cryptography`
    }
    ,
    {
        name : 'Graphics',
        description : `Graphics project for learning purposes.Implented popular biliard ball simulation,
                        rendered and transformed some 3D objects. Implemented Raster-based pipeline for rendering
                        and lastly implemented ray-tracing for rendering 3D objects.`,
        topics : ['cpp','graphics','ray-tracing','raseterization'],
        image : "/repoImages/raytracer.jpg", 
        url : `https://github.com/Superb-Man/Computer-Graphics`
    },
    {
        name : 'Personal-Website',
        description : `I tried to learn web-development using svelte or react more efficiently.I choose svelte although.
                        And then started building it.`,
        topics : ['javascript','svelte-kit','tailwindcss','web-development'],
        image : "/repoImages/website.jpg",
        url : `https://github.com/Superb-Man/Personal-Website` 
    },

]


// repoProjects["e-TicketBooking"] = array[0] ;
// repoProjects["PACPACMAN"] = array[1] ;
// repoProjects["jfx-smol-project-"] = array[2] ;
// repoProjects["cpp-Console-chat-and-Threads"] = array[3] ;
// repoProjects["TOC-Solver"] = array[4] ;
// repoProjects["Runners_GameJam"] = array[5] ;
// repoProjects["Mancala-AI"] = array[6] ;
// repoProjects["Find-Motifs"] = array[7] ;
// repoProjects["Kernel-Thread"] = array[8] ;
// repoProjects["Memory-Management"] = array[9] ;
// repoProjects["Puzzle-Fun"] = array[10] ;
// repoProjects["Compiler-Design"] = array[11] ;
// repoProjects["Cryptography"] = array[12] ;



// export default repoProjects ;