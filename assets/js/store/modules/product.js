export default {
    actions: {
        async fetchProducts( { commit }, path = '/api/products?page=1') {
            const res = await fetch(
                    'http://w1.blackriver.agency' + path, {
                        method: 'GET',
                        headers: {
                            'accept': 'application/ld+json'
                        }
                    }
            );
            const json = await res.json();

            commit('updateProducts', json['hydra:member']);
            commit('updateProductCount', json['hydra:totalItems']);
            commit('setPagination', {
                previous: json['hydra:view']['hydra:previous'],
                next: json['hydra:view']['hydra:next']
            });
        },
        async fetchRandProducts({ commit }) {
            const res = await fetch('http://w1.blackriver.agency/api/products/rand');
            const json = await res.json();

            commit('setRandProducts', json);
        }
    },
    mutations: {
        updateProducts(state, products) {
            state.products = products;
        },
        updateProductCount(state, count) {
            state.count = count;
        },
        setPagination(state, pagination) {
            state.pagination = pagination;
        },
        setRandProducts(state, products) {
            state.rand_products = products;
        }
    },
    state: {
        products: [],
        count: '',
        pagination: {},
        rand_products: {}
    },
    getters: {
        validProducts(state) {
            return state.products.filter(p => {
                return p.name;
            });
        },
        allProducts(state) {
            return state.products;
        },
        productsCount(state) {
            return state.count;
        },
        pagination(state) {
            return state.pagination;
        },
        randProducts(state) {
            return state.rand_products;
        }
    }
}
