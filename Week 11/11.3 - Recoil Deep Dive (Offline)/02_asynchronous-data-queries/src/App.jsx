import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { homeAtom, jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalCountSelector } from "./Store/Atoms/atom"
import { useMemo } from "react";
import { notificationCountAtom } from "./count";

function App(){
    return <RecoilRoot>
        <MainApp/>
    </RecoilRoot>
}

function MainApp(){

  const [notificationCount, setNotificationCount] = useRecoilState(notificationCountAtom);

  const totalCount = useRecoilValue(totalCountSelector);

    return <div>
        <button>Home ({notificationCount.home>=100 ? "99+" : notificationCount.home})</button>
        <button>Network ({notificationCount.network>=100 ? "99+" : notificationCount.network})</button>
        <button>Jobs ({notificationCount.jobs>=100 ? "99+" : notificationCount.jobs})</button>
        <button>Messaging ({notificationCount.messaging>=100 ? "99+" : notificationCount.messaging})</button>
        <button>Notifications ({notificationCount.notifications>=100 ? "99+" : notificationCount.notifications})</button>
        <button>Me ({totalCount})</button>
    </div>
}

export default App