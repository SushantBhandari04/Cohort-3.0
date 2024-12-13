import { atomFamily } from 'recoil';
import { ITEMS } from '../items';

export const itemAtomFamily = atomFamily({
  key: 'itemAtomFamily',
  default: id => {
    return ITEMS.find(x => x.id === id);
  },
});
