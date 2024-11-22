import { useState } from "react";

export default function Search() {
    const [search, setSearch] = useState("");

    console.log("search value --->", search);

    return (
        <div className="flex items-center justify-center h-screen text-black flex-col">
            <input type="search" onChange={(e) => setSearch(e.target.value)} />
            <p className="text-white">search: {search}</p>
        </div>
    )
}