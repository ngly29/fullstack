import { defineStore } from "pinia";

export const counterStore = defineStore("counter" , {
    state: () => ({
        count: 1
    }),
    getters: {
        getCount: state => state.count 
    },
    actions: {
        increment() { this.count++ }
    }
})