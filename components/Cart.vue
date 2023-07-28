<script setup>

const { cartItems, refreshCart, totalPrice, shippingTotal, subtotal, removeItem } = useCart();
const { getFormattedPrice } = usePrice();

onMounted(() => {
  refreshCart();
});

</script>

<template>

    <!-- Product listing -->
    <div>
    </div>

</template>
