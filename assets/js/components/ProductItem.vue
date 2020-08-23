<template>
    <div class="product">
        <img :src="product.images[0].src" alt="">
        <h3>{{ product.name }}</h3>
        <p>
            ${{ product.price }} <br>
            {{ priceInRUB }}₽ <br>
            €{{ priceInEUR }}
        </p>
    </div>
</template>


<script>
    export default {
        props: {
            product: {
                type: Object,
                required: true
            }
        },
        computed: {
            priceInRUB() {
                return Math.round(this.product.price * this.$store.state.currency.rates.RUB);
            },
            priceInEUR() {
                return Math.round(this.product.price * this.$store.state.currency.rates.EUR * 100) / 100;
            }
        }
    }
</script>