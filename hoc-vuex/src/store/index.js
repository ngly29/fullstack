import { createStore } from " vuex";

export default createStore ({
    state: () => ({
        count: 1
    })
    getters: {
        getCount(state) => state.count
    },
    mutations: {
        setCount(state, newValue) {
            state.count = newValue;
        }
    },
    actions: { //chua cac method xu ly logic
        increment(context){
            context.commit("setCount", context.state.context + 1);
        }    
    }
})