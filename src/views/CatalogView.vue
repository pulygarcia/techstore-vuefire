<script setup>
    import Header from '../components/Header.vue';
    import MenuItem from '../components/CatalogItem.vue';
    import {useItemsStore} from '../stores/itemsStore';

    const items = useItemsStore();
</script>

<template>
    <Header />

    <main class="container mx-auto w-11/12 md:w-full py-10">
        <h2 class="text-center text-2xl font-bold">Productos</h2>
        <p class="text-gray-600 text-center">¡No dudes en consultar por cualquiera de ellos!</p>

        <div class="flex items-center gap-2 justify-center mt-6">
            <button @click="items.selectedCategory = null" 
                class="px-5 py-1 rounded-lg font-semibold border hover:border-gray-400"
                :class="items.selectedCategory === null ? 'border-emerald-400' : 'border-gray-300'"
            >
                Todos
            </button>

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

        <div class="grid grid-cols-2 gap-2 md:gap-8 lg:grid-cols-4 mt-8 mx-auto">
            <MenuItem 
                v-for="item in items.filteredItems"
                :key="item.id"
                :item="item"
            />
        </div>
    </main>
</template>