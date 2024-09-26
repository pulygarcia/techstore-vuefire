<script setup>
    import {useRouter} from 'vue-router'
    import {reactive} from 'vue';
    import useImage from '@/composables/useImage';
    import {useItemsStore} from '@/stores/itemsStore';
    import {Dialog, DialogPanel, DialogTitle, DialogDescription} from '@headlessui/vue';
    import Loader from '../../components/Loader.vue';

    const router = useRouter();

    const {onFileChange, imageUploaded, url} = useImage();

    const items = useItemsStore();

    const formData = reactive({
        name: '',
        image: '',
        category: '',
        description: '',
        price: '',
    })

    //submit function, form values as data automaticly
    const handleSubmit = async(data) => {
        const {image, ...values} = data;

        try {
            await items.createItem({
                ...values,
                image: url.value
            })

            setTimeout(() => {
                router.push({name: 'current-menu'})
            }, 3000);

            formData.name = ''
            formData.price = ''
            formData.category = ''
            formData.description = ''
            formData.image = ''
        } catch (error) {
            console.log(error);
        }
    }
</script>

<template>
    <div class="mt-10 container mx-auto">
        <h2 class="text-center text-2xl font-bold">Agregar al catálogo</h2>
        <p class="text-gray-600 text-center">Aquí podrás agregar nuevos productos al catálogo.</p>

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

        <Loader v-if="items.loading || items.successMessage"/>

        <div v-else class="flex justify-center">
            <div class="mt-5 p-10 w-full 2xl:w-2/4">
                <FormKit
                    type="form"
                    submit-label="Agregar producto"
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

                    <FormKit 
                        type="file"
                        name="image"
                        label="Imagen"
                        validation="required"
                        :validation-messages="{required: 'La imagen es obligatoria'}"
                        accept=".jpg, .png, .JPG, .PNG"
                        @change="onFileChange"
                        v-model="formData.image"
                    />

                    <!-- <div v-if="imageUploaded">
                        <p class="font-black">Imagen cargada: </p>
                        <img :src="url" class="w-32" alt="Nuevo producto imagen"/>
                    </div> -->

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
            </div>
        </div>
    </div>
</template>