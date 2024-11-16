import axios from 'axios'
import { atom, selector } from 'recoil'

export const notificationCountAtom = atom({
    key: "notificationCount",
    default: selector({
        key: "notificationCountSelector",
        get: async () => {
            const res = await axios.get();
            return res.json();
        }
    })
})

export const totalCountSelector = selector({
    key: "totalCountSelector",
    get: ({get}) => {
        const notificationsCount = get(notificationCountAtom);

        return notificationsCount.home + notificationsCount.jobs + notificationsCount.messaging + notificationsCount.notifications + notificationsCount.network; 
    }
})