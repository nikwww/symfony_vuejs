export default {
    actions: {
        async fetchСurrencies({ commit }) {
            const res = await fetch('https://api.exchangeratesapi.io/latest?base=USD');
            const json = await res.json();

            commit('setRates', json.rates);
        }
    },
    mutations: {
        setRates(state, rates) {
            state.rates = rates;
        }
    },
    state: {
        rates: {}
    },
    getters: {
        getRates(state) {
            return state.rates;
        }
    }
}
