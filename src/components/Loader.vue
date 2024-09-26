<script setup>

</script>

<template>
  <div class="loader-container">
    <div class="loader"></div>
  </div>
</template>

<style scoped>
.loader-container{
  display: flex;
  justify-content: center;
  margin-top: 8rem;
}
    .loader {
  width: 50px;
  height: 50px;
  display: inline-block;
  border: 5px solid #10b981;
  border-radius: 50%;
  border-top-color: transparent;
  border-bottom-color: transparent;
  animation: rot5 1s infinite;
}

@keyframes rot5 {
  0% {
    transform: rotate(0);
  }

  50% {
    transform: rotate(180deg);
    border-top-color: #10b981;
    border-bottom-color: rgb(243, 92, 33);
    border-right-color: transparent;
    border-left-color: transparent;
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>