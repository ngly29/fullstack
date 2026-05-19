import { createStore } from "vuex";

export default createStore ({
    state: () => ({
        count: 1
    }),
    getters: {
        getCount(state) {
            return state.count
        }
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
    },
    modules: {
        "user": {
            namespaced: true,
            state:() => ({ name: "Nguyen Van 10 "}),
            getters: {
                getName(state) {
                    return state.name
                }
            }
        }
    }
})