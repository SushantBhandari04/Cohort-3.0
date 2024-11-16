import { RecoilRoot, useRecoilValue } from "recoil"
import { homeAtom, jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalCountSelector } from "./Store/Atoms/atom"
import { useMemo } from "react";

function App(){
    return <RecoilRoot>
        <MainApp/>
    </RecoilRoot>
}

function MainApp(){
    const homeCount = useRecoilValue(homeAtom);
    const networkCount = useRecoilValue(networkAtom);
    const jobsCount = useRecoilValue(jobsAtom);
    const messagingCount = useRecoilValue(messagingAtom);
    const notificationsCount = useRecoilValue(notificationsAtom);

    const totalCount = useRecoilValue(totalCountSelector);

    // const totalCount = useMemo(function(){
    //     return homeCount + networkCount + jobsCount + messagingCount + notificationsCount;
    // }, [homeCount, networkCount, jobsCount, messagingCount, notificationsCount])

    return <div>
        <button>Home ({homeCount>=100 ? "99+" : homeCount})</button>
        <button>Network ({networkCount>=100 ? "99+" : networkCount})</button>
        <button>Jobs ({jobsCount>=100 ? "99+" : jobsCount})</button>
        <button>Messaging ({messagingCount>=100 ? "99+" : messagingCount})</button>
        <button>Notifications ({notificationsCount>=100 ? "99+" : notificationsCount})</button>
        <button>Me ({totalCount})</button>
    </div>
}

export default App