import { atom, selector } from 'recoil'

export const homeAtom = atom({
    key: "home",
    default: 0
})

export const networkAtom = atom({
    key: "network",
    default: 102
})

export const jobsAtom = atom({
    key: "jobs",
    default: 0
})

export const messagingAtom = atom({
    key: "messaging",
    default: 0
})

export const notificationsAtom = atom({
    key: "notifications",
    default: 12
})

export const totalCountSelector = selector({
    key: "totalCount",
    get: ({get}) => {
        const homeCount = get(homeAtom);
        const networkCount = get(networkAtom);
        const jobsCount = get(jobsAtom);
        const messagingCount = get(messagingAtom);
        const notificationsCount = get(notificationsAtom);

        return homeCount + networkCount + jobsCount + messagingCount + notificationsCount;
    }
})