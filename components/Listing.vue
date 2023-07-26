<script setup lang="ts">
import {
  getSrcSetForMedia,
} from "@shopware-pwa/helpers-next";
const product = ref();

const { search } = useProductSearch();
const { addToCart } = useAddToCart(product);
const { removeItem, cartItems, count, refreshCart } = useCart();
const { getFormattedPrice } = usePrice();
const { unitPrice } = useProductPrice(product);

const proxyAddToCart = async () => {
  await addToCart();
  refreshCart();
};

onMounted(async () => {
  refreshCart();
  const productResponse = await search(
  "f5cdc1a027ba4f48947eb2fe3de1b4d4",
  {
    criteria: {
      associations: {
        cover: {},
      },
    },
  }
  );
  product.value = productResponse.product;
});

</script>

<template>
  
  <div class="border rounded-lg shadow bg-gray-800 text-white">
    <img class="p-8" :srcset="getSrcSetForMedia(product?.cover?.media)" :alt="product?.cover?.media.title||'Product cover'" />
    
    <div class="px-8 pb-8">
      <h5 class="text-xl font-semibold tracking-tight">{{ product?.name }}</h5>

      <div class="flex items-center my-3">
        {{ product?.availableStock }} left in stock
      </div>

      <div class="flex items-center justify-between">
        <span class="text-3xl font-bold">{{ getFormattedPrice(unitPrice) }}</span>
        <button @click="proxyAddToCart" href="#" class="font-medium rounded-lg text-sm px-5 py-2.5 bg-blue-600">Add to cart</button>
      </div>
    </div>

  </div>

</template>
