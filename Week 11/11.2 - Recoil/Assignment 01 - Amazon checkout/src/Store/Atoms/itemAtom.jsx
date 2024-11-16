import {atom} from 'recoil'
export const itemAtom = atom({
    default: [],
    key: "itemAtom"
})

// const cartTotalSelector = selector({
//     key:"cartTotalSelector",
//     get:{ function(get){

//     }
//     }
// })