
import { fetcher } from "@/http/request";
import { SWRConfiguration } from "swr";

export const SWRconfig: SWRConfiguration = {
    revalidateOnMount: false,
    refreshInterval: 0,
    fetcher: fetcher,
    onSuccess: (data, key, config) => {
        console.log("onSuccess", data, key, config);
    },
    onError: (data, key, config) => {
        console.log("onError", data, key, config);
    },

}