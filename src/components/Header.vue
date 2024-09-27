<script setup>
    import {RouterLink} from 'vue-router';
    import {ref} from 'vue';

    const isOpenMenu = ref(false);

    const openMenu = () => {
        isOpenMenu.value = true;
    }
    const closeMenu = () => {
        isOpenMenu.value = false;
    }
</script>

<template>
  <header class="container mx-auto w-11/12 md:w-full flex justify-between items-center py-4">
        <div class="">
            <a href="/" class="flex items-center gap-1">
                <img src="/apple.png" alt="sushi" class="w-10 object-cover mx-auto">
                <p class="text-lg uppercase font-semibold">Tecno<span class="text-emerald-500">Apple</span></p>
            </a>
        </div>
    
        <nav class="hidden md:block">
            <ul class="flex gap-10">
                <li class="text-md font-semibold hover:bg-gray-200 rounded p-1">
                    <a href="/#local" class=" p-1 flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        <span>Local</span>
                    </a>
                </li>
                <li class="text-md font-semibold hover:bg-gray-200 rounded p-1">
                    <RouterLink :to="{name: 'catalog'}" class="p-1 flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                        </svg>
                        <span>Productos</span>
                    </RouterLink>
                </li>
                <li class="text-md font-semibold hover:bg-gray-200 rounded p-1">
                    <a href="/#us" class=" p-1 flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                        <span>Nosotros</span>
                    </a>
                </li>
            </ul>
        </nav>

        <nav class="hidden md:flex gap-2">
            <a href="https://wa.me/3865601314?text=👋Hola. Vengo desde el sitio web de TechnoApple, quisiera encargar un producto." class="px-5 py-1 rounded-lg font-semibold text-white bg-black hover:bg-gray-800">Encargar</a>
            <a href="https://wa.me/3865601314?text=👋Hola. Vengo desde el sitio web de TechnoApple." class="px-5 py-1 rounded-lg font-semibold border border-gray-300 hover:border-gray-400">Contacto</a>
            <RouterLink :to="{name: 'current-catalog'}" class="px-5 py-1 rounded-lg font-semibold border border-gray-300 hover:border-gray-400">Admin</RouterLink>
        </nav>
    
        <div class="flex flex-grow justify-end basis-0 md:hidden">
            <button type="button" class="open-menu md:hidden" @click="openMenu">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </div>
    
        <!--BURGUER -->
    
        <div 
            v-if="isOpenMenu" 
            class="burguer-menu bg-white p-12 absolute right-0 top-0 h-screen z-40 shadow-2xl" 
            :class="isOpenMenu ? 'animate-fade-left animate-duration-300' : ''"
        >
            <button class="close-menu" @click="closeMenu">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 24 24" stroke-width="1.5" stroke="#10b981" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M18 6l-12 12" />
                    <path d="M6 6l12 12" />
                  </svg>
            </button>
            <nav>
                <div class="flex items-center gap-2 mt-4">
                    <p class=" font-bold text-xl">TechnoApple &copy;</p>
                    <img src="/apple.png" alt="apple" class="w-10 object-cover mx-auto">
                </div>
                <ul class="flex flex-col text-right mt-8 space-y-6">

                    <RouterLink :to="{name: 'catalog'}" class="text-sm font-semibold bg-[#efefef] rounded p-1 flex items-center justify-center gap-1" @click="isOpenMenu = false">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                            </svg>
                        </li>

                        <span>Catálogo</span>
                    </RouterLink>

                    <a href="/#us" class="text-sm font-semibold bg-[#efefef] rounded p-1 flex items-center justify-center gap-1" @click="isOpenMenu = false">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                            </svg>
                        </li>
                        <span>Nosotros</span>
                    </a>

                    <RouterLink :to="{name: 'current-catalog'}" class="text-sm font-semibold bg-[#efefef] rounded p-1 flex items-center justify-center gap-1" @click="isOpenMenu = false">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#10b981" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                            </svg>
                        </li>

                        <span>Admin panel</span>
                    </RouterLink>
                </ul>
    
                <div class="flex gap-4 items-center justify-end mt-8">
                    <a href="https://wa.me/3865601314?text=👋Hola. Vengo desde el sitio web de TechnoApple">
                        <svg xmlns="http://www.w3.org/2000/svg" class="" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#10b981" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                          </svg>
                    </a>
    
                    <a href="https://www.instagram.com/tecnoapple23/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#10b981" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                            <path d="M16.5 7.5l0 .01" />
                        </svg>
                    </a>
                </div>
            </nav>

            <img src="/iphone-faces.png" alt="iphones" class="mt-10 w-56 object-cover mx-auto">
        </div>
    </header>
</template>