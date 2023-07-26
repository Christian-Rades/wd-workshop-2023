<script setup lang="ts">
const { refreshSessionContext } = useSessionContext();

onMounted(() => {
  refreshSessionContext();
});
</script>

<template>
    <div id="app" class="flex justify-center">
        <div class="grid grid-cols-2 gap-3 max-w-screen-md">
            <Search class="col-span-2" />
            <Listing />
            <Cart />
            <Login />
            <Checkout />
        </div>
    </div>
</template>
<style>
@import "./style.css";
</style>
