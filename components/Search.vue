<script setup lang="ts">
import { getSrcSetForMedia } from '@shopware-pwa/helpers-next';
import {
  ListingResult,
  Product,
  ShopwareSearchParams,
} from "@shopware-pwa/types";
const route = useRoute();
const router = useRouter();

const {
  search,
  getElements: products,
  getTotalPagesCount,
  getCurrentPage,
  changeCurrentPage,
  loading,
  setInitialListing,
  getCurrentListing,
} = useListing({
  listingType: "productSearchListing",
});
const term = ref("");

const { data: productSearch } = await useAsyncData(
  "productSearch",
  async () => {
    await search({ limit: 5, query: term.value});
    console.log(getCurrentListing.value);
    return getCurrentListing.value;
  },
  {
    watch: [term],
  },
);
setInitialListing(productSearch.value as Partial<ListingResult<Product>>); 
</script>

<template>
    <div class="grid grid-cols-1 content-center p-10 gap-y-2">
    <h1>Search</h1>
    <input v-model="term" />
    <div>
        <div class="flex flex-row w-100% bg-slate-700 p-1" v-for="product in products" :key="product.id">
            <img class="w-10 h-10 mr-5" :srcset="getSrcSetForMedia(product?.cover?.media)">
            <span class="flex-none">{{ product.name }}</span>
        </div>
    </div>
    </div>
</template>
