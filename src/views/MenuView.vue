<script setup>
    import Header from '../components/Header.vue';
    import MenuItem from '../components/MenuItem.vue';
    import {useItemsStore} from '../stores/itemsStore';

    const items = useItemsStore();
</script>

<template>
    <Header />

    <main class="container mx-auto w-11/12 md:w-full py-20">
        <h2 class="text-center text-2xl font-bold">Menú</h2>
        <p class="text-gray-600 text-center">¡Mirá nuestra carta y hacé tu pedido!</p>

        <div class="flex items-center gap-2 justify-center mt-6">
            <button @click="items.selectedCategory = 1" 
                class="px-5 py-1 rounded-lg font-semibold border border-gray-300 hover:border-gray-400"
                :class="items.selectedCategory === 1 ? 'border-red-400' : 'border-gray-300'"
            >
                Piezas
            </button>
            
            <button @click="items.selectedCategory = 2" 
                class="px-5 py-1 rounded-lg font-semibold border hover:border-gray-400"
                :class="items.selectedCategory === 2 ? 'border-red-400' : 'border-gray-300'"
            >
                Combos
            </button>
        </div>

        <div class="grid grid-cols-2 gap-2 md:gap-8 lg:grid-cols-3 mt-8 mx-auto">
            <MenuItem 
                v-for="item in items.filteredItems"
                :key="item.id"
                :item="item"
            />
        </div>
    </main>
</template>