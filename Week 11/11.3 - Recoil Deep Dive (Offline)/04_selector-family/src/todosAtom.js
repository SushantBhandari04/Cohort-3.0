import axios from "axios";
import { atomFamily, selectorFamily } from "recoil";

export const todosAtomFamily = atomFamily({
    key: "todosAtomFamily",
    default: selectorFamily({
        key: "todosSelectorFamily",
        get: id => async ({get}) => {
            const res = await axios.get("https://sum-server.100xdevs.com/todo?id="+{id});
            return res.data.todo;
        }
    })
})