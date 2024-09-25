<script setup>
    import { reactive, watch } from 'vue';
    import { useRouter, useRoute } from 'vue-router';
    import {useDocument} from 'vuefire';
    import { doc } from "firebase/firestore";
    import {useItemsStore} from '../../stores/itemsStore';
    import useImage from '../../composables/useImage'
    import {Dialog, DialogPanel, DialogTitle, DialogDescription,} from '@headlessui/vue'
    import Loader from '../../components/Loader.vue';

    const items = useItemsStore();
    const router = useRouter();
    const route = useRoute();
    const { onFileChange, url, imageUploaded } = useImage()

    const formData = reactive({
        name: '',
        image: '',
        category: '',
        description: '',
        price: '',
    })

    const db = items.db;
    const itemRef = doc(db, 'items', route.params.id);
    const selectedItem = useDocument(itemRef);

    watch(selectedItem, (selectedItem) => {
        //If there isnt product, return user to products view
        if(!selectedItem){
            router.push({name: 'current-menu'});

            return;
        }
        
        //Fill the form
        Object.assign(formData, selectedItem);
    })

    const handleSubmit = async (data) => {
        try {
            await items.updateItem(itemRef, {...data, url});
            
            setTimeout(() => {
                router.push({name: 'current-menu'});
            }, 3000);

        } catch (error) {
        console.log(error); 
        }
  }
</script>

<template>
  <div class="mt-10 container mx-auto">
      <h2 class="text-center text-2xl font-bold">Modificar</h2>
      <p class="text-gray-600 text-center">Actualizá los datos del producto seleccionado</p>

      <Dialog :open="items.successMessage ? true : false" class="relative z-50">
        <div class="fixed top-0 flex w-screen items-center justify-end p-2">
          <DialogPanel class="w-full max-w-sm rounded-lg bg-green-100 p-5">
            <DialogTitle class="text-green-600 font-bold text-2xl">Éxito</DialogTitle>
            <DialogDescription class="text-gray-600">
              {{items.successMessage}}
            </DialogDescription>
            <button @click="items.successMessage = ''" class="mt-4 py-1 px-8 bg-white rounded-lg text-green-600 hover:bg-gray-50 outline-none">Agree</button>
          </DialogPanel>
        </div>
      </Dialog>

      <main class="mx-auto w-11/12 md:w-6/12 mt-11">
        <Loader v-if="items.loading || items.successMessage"/>
        <FormKit
            v-else
            type="form"
            submit-label="Actualizar"
            incomplete-message="Por favor completa los campos"
            @submit="handleSubmit"
            :value="formData"
        >
            <FormKit
                type="text"
                name="name"
                label="Titulo"
                placeholder="Nombre del producto"
                validation="required"
                :validation-messages="{required: 'El título es obligatorio'}"
                v-model.trim="formData.name"
            />

            <div v-if="imageUploaded">
                <p class="font-black">Imagen cargada: </p>
                <img :src="url" class="w-32" alt="Nuevo producto imagen"/>
            </div>

            <FormKit
                type="file"
                name="image"
                label="Nueva imagen"
                accept=".jpg, .png, .JPG, .PNG"
                @change="onFileChange"
                v-model="formData.image"
            />


            <FormKit
                type="select"
                name="category"
                label="Categoría"
                validation="required"
                :validation-messages="{required: 'La categoría es obligatoria'}"
                v-model.number="formData.category"
                :options="items.categoryOptions"
            />
            <FormKit
                type="text"
                name="description"
                label="Descripción"
                validation="required"
                :validation-messages="{required: 'Por favor agregá una descripción'}"
                v-model="formData.description"
            />
            <FormKit
                type="number"
                name="price"
                label="Precio"
                placeholder="Precio del producto"
                validation="required"
                :validation-messages="{required: 'El precio es obligatorio'}"
                min="1"
                v-model.number="formData.price"
            />
        </FormKit>
      </main>
  </div>
</template>