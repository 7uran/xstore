import axios from "axios";

export const axiosInstance = axios.create({
    headers: {
        "Content-Type": "application/json",
    },
});

export const fetcher = (url: string) => fetch(url).then(res => res.json());
