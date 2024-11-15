import { atom, selector } from 'recoil'

export const counterAtom = atom({
    key: "counter",
    default: 0
})

export const evenSelector = selector({
    key: "isEvenSelector",
    get: function({get}){  // get is a function that is used to get the current value of an atom or selector in the Recoil store
        const currentCount = get(counterAtom);

        const isEven = currentCount % 2 == 0;

        return isEven;
    }
})