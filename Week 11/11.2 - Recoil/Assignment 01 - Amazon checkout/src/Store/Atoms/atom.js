import { atomFamily, selector } from 'recoil'
import { ITEMS } from '../../items'

export const itemAtomFamily = atomFamily({
    key: "itemAtomFamily",
    default: id => {
        return ITEMS.find(x => x.id === id);
    }
})

export const checkoutSelector = selector({ key: 'checkoutSelector', get: ({ get }) => { let totalPrice = 0; let totalQuantity = 0; ITEMS.forEach(item => { const itemState = get(itemAtomFamily(item.id)); totalPrice += itemState.price * itemState.quantity; totalQuantity += itemState.quantity; }); return { totalPrice, totalQuantity }; }, });