"use client";
import React, { useEffect, useState } from "react";
// import styles from "./page.module.css";
import useSWR from "swr";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
const Dashborad = () => {
    // const [data, setData] = useState([]);
    // const [err, setErr] = useState(false);
    // const [loading, setLoading] = useState(false);

    // useEffect(() => {

    //     const getData = async () => {
    //         setLoading(true)
    //         const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    //             cache: "no-store",
    //         });

    //         if (!res.ok) {
    //             setErr(true)
    //         }
    //         const data = await res.json()
    //         setLoading(false);
    //         setData(data)
    //     };
    //     getData();

    // }, [])
    // console.log(data)
    const fetcher = (...args) => fetch(...args).then((res) => res.json());

    const { data, mutate, error, isLoading } = useSWR(
        `https://jsonplaceholder.typicode.com/posts`,
        fetcher
    );

    console.log(data)
    return (
        <div>Dashborad</div>
    )
}

export default Dashborad