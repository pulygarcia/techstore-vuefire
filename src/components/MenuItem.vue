<script setup>
    import {formatCurrency} from '../helpers'
    import { ref } from 'vue'
    import {Dialog, DialogPanel, DialogTitle,DialogDescription,} from '@headlessui/vue'

    const isOpen = ref(false)

    defineProps({
        item:{
            type: Object
        }
    })

    function setIsOpen(value) {
        isOpen.value = value
    }
</script>

<template>
  

<div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="p-4 rounded-t-lg h-36 w-full object-cover md:h-80 md:w-full" :src="item.image" :alt="item.name" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{item.name}} <span v-if="item.category === 1" class="text-gray-500 text-sm">x6</span></h5>
        </a>
        <div class="flex items-center mt-2.5 mb-2 md:mb-5">
            <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>
        </div>
        <div class="flex md:items-center flex-col md:flex-row md:justify-between">
            <span class="text-xl md:text-3xl font-bold text-gray-900 dark:text-white">{{ formatCurrency(item.price) }}</span>
            <button @click="setIsOpen(true)" type="button" class="mt-2 md:mt-0 text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs md:text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Ver más</button>
        </div>
    </div>
</div>

<Dialog as="div" class="relative z-10" :open="isOpen" @close="setIsOpen(false)">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>
        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                <div>
                  <div class="mt-3">
                    <img :src="item.image" :alt="item.name" class="mx-auto w-96 rounded-md">

                    <DialogTitle as="h2" class="text-center text-3xl font-bold truncate my-3 text-gray-700">
                        {{ item.name }}
                    </DialogTitle>

                    <DialogTitle as="h2" class="text-lg font-bold truncate my-3 py-1 flex items-center gap-2">
                        <span class="underline">Categoría:</span> <span class="font-normal text-gray-700"> {{ item.category === 1 ? 'Piezas' : 'Combos' }}</span>
                    </DialogTitle>

                    <DialogTitle as="h2" class="text-lg font-bold truncate my-3 underline">
                        Contenido / Ingredientes :
                    </DialogTitle>

                    <p class="text-gray-700">{{ item.description }}</p>

                    <DialogTitle as="h2" class="text-lg font-bold truncate mt-10">
                        Precio <span class="text-gray-700 text-lg font-normal">{{ item.category === 1 ? 'x6' : 'del combo' }}</span> : 
                        
                        <span class="text-red-400 font-semibold text-xl">{{ formatCurrency(item.price) }}</span>
                    </DialogTitle>
                  </div>
                </div>
                <div class="mt-5 sm:mt-6 flex justify-between gap-4">
                    <button
                        type="button"
                        class="w-full bg-red-600 text-white font-bold text-center rounded-lg py-2 hover:bg-red-800 transition"
                        @click="setIsOpen(false)"
                    >
                        Cerrar
                    </button>
                </div> 
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>

</template>