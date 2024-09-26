<script setup>

</script>

<template>
    <section class="container mx-auto w-11/12 md:w-full grid md:grid-cols-2 gap-6 md:gap-40 pt-16 items-center">
        <div class="space-y-4">
            <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">Nos encargamos de cada detalle.</h1>
            <p class="text-slate-600 text-lg"><span class="text-emerald-500 font-semibold">Productos electrónicos de alta gama. Nuevos ellados en caja y usados,</span> en TecnoApple &copy;. Disfrutá de la calidad y el rendimiento que buscás, con la seguridad de una garantía que te respalda. Si pensaste en tecnología, pensaste en lo mejor, pensaste en nosotros...</p>
            <button class="text-lg font-semibold bg-emerald-500 rounded p-3 text-white hover:bg-emerald-400 transition">
                <RouterLink :to="{name: 'catalog'}">Ver productos</RouterLink>
            </button>
        </div>

        <img src="/iphones-verdes.jpg" alt="iphone" class="animate-fade-right animate-duration-[3000ms]">
    </section>
</template>