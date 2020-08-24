<template>
    <div>
        <h1>Home page</h1>

        <div>
            <h2>Rand (id: {{ randProducts[0].id }})</h2>

            <ProductItem
                v-for="(product, i) in randProducts"
                :product="product"
                :key="i"
                />

            <button
                class="btn btn-primary"
                @click="fetchRandProducts"
                >
                Reroll
            </button>
        </div>

        <div>
            <h2>List (count: {{ productsCount }})</h2>

            <ProductItem
                v-for="(product, i) in validProducts"
                :product="product"
                :key="i"
                />
        </div>

        <button
            @click="fetchProducts(pagination.previous)"
            :disabled="!pagination.previous"
            class="btn btn-primary"
            >
            Previous Page
        </button>
        <button
            @click="fetchProducts(pagination.next)"
            :disabled="!pagination.next"
            class="btn btn-primary"
            >
            Next Page
        </button>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    import ProductItem from "../components/ProductItem";

    export default {
        name: 'app',
        computed: mapGetters(["validProducts", "productsCount", "pagination", "randProducts"]),
        methods: mapActions(["fetchProducts", "fetchRandProducts", "fetchСurrencies", "amountInRUR"]),
        components: {
            ProductItem
        },
        async mounted() {
            this.fetchProducts();
            this.fetchRandProducts();
            this.fetchСurrencies();
        }
    }
</script>

<style scoped>
    .product {
        width: 200px;
        display: inline-block;
        vertical-align: top;
        margin: 0 10px;
    }
</style>
