<script setup>
    import {useItemsStore} from '../../stores/itemsStore';
    import { formatCurrency } from '../../helpers';

    const items = useItemsStore();
</script>

<template>
    <h2 class="text-center text-2xl font-bold mt-8">Catálogo</h2>
    <p class="text-gray-600 text-center">Aquí podrás visualizar como se encuentra el catálogo actualmente.</p>

    <div class="flex items-center gap-2 justify-center mt-6">
            <button @click="items.selectedCategory = 1" 
                class="px-5 py-1 rounded-lg font-semibold border hover:border-gray-400"
                :class="items.selectedCategory === 1 ? 'border-emerald-400' : 'border-gray-300'"
            >
                Usados
            </button>
            
            <button @click="items.selectedCategory = 2" 
                class="px-5 py-1 rounded-lg font-semibold border hover:border-gray-400"
                :class="items.selectedCategory === 2 ? 'border-emerald-400' : 'border-gray-300'"
            >
                Nuevos
            </button>
    </div>

    <!-- Cards -->
    <div class="container mx-auto w-11/12 md:w-full grid grid-cols-2 gap-2 md:gap-8 lg:grid-cols-3 mt-8">
        <div
            v-for="item in items.filteredItems"
        >
            <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img class="p-4 rounded-t-lg h-36 w-full object-cover md:h-80 md:w-full" :src="item.image" :alt="item.name" />
        </a>
        <div class="px-5 pb-5">
            <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{item.name}}</h5>
            </a>
            <span class="text-xl md:text-3xl font-bold text-gray-900 dark:text-white">{{ formatCurrency(item.price) }}</span>
            <div class="flex flex-col md:flex-row mt-1 gap-1 md:gap-2 md:mt-4">
                <RouterLink :to="{name: 'edit-item', params:{id: item.id}}" class="mt-2 md:mt-0 md:w-full text-white bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-xs md:text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Editar</RouterLink>
                <button @click="items.deleteItem(item.id)" class="mt-2 md:mt-0 md:w-full text-white bg-red-500 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-sm text-sm md:text-md px-5 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Eliminar</button>
            </div>
        </div>
    </div>
</div>

    </div>
</template>