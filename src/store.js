import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Could problably be rewritten so we only have three functions and 
// then we pass whether we are incrementing or decrementing

let counterStore = (set) => ({
    counter: {
        level1: 0,
        level2: 0,
        level3: 0
    },

    level1_increment: () => set((state) => (
        {
            counter: {
                ...state.counter,
                level1: state.counter.level1 + 1,
                level2: state.counter.level2 + 1,
                level3: state.counter.level3 + 1
            }
        })
    ),

    level2_increment: () => set((state) => (
        {
            counter: {
                ...state.counter,
                level2: state.counter.level2 + 1,
                level3: state.counter.level3 + 1
            }
        })
    ),

    level3_increment: () => set((state) => (
        {
            counter: {
                ...state.counter,
                level3: state.counter.level3 + 1
            }
        })
    ),

    level1_decrement: () => set((state) => (
        {
            counter: {
                ...state.counter,
                level1: state.counter.level1 - 1,
                level2: state.counter.level2 - 1,
                level3: state.counter.level3 - 1
            }
        })
    ),

    level2_decrement: () => set((state) => (
        {
            counter: {
                ...state.counter,
                level2: state.counter.level2 - 1,
                level3: state.counter.level3 - 1
            }
        })
    ),

    level3_decrement: () => set((state) => (
        {
            counter: {
                ...state.counter,
                level3: state.counter.level3 - 1
            }
        })
    ),



})

//Local Storage
counterStore = persist(counterStore, { name: "counter-store" })


export const useCounterStore = create(counterStore)