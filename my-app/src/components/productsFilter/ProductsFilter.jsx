"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const allCategories = [
    { "id": 1, "name": "clothes" },
    { "id": 2, "name": "electronics" },
    { "id": 3, "name": "Furniture" },
    { "id": 4, "name": "Shoes" },
    { "id": 5, "name": "Miscellaneous" },
]
const CategoriesFilter = ({ params }) => {

    const router = useRouter()
    const searchText = params?.search
    const sort = params?.sort
    const [filters, setFilters] = useState([])

    const handleFilter = (e) => {
        const filterName = e.target.value;
        e.target.checked ?
            setFilters([...filters, filterName]) : setFilters(() => filters.filter((f) => f !== filterName))
    };
    const generateUrl = () => {
        let url = "/products";
        const queryParams = [];
        if (searchText) queryParams.push(`search=${searchText}`);
        if (sort) queryParams.push(`sort=${sort}`);
        if (filters.length > 0) queryParams.push(`filter=${filters.join(",")}`);
        if (queryParams.length > 0) {
            url += `?${queryParams.join("&")}`;
        }
        return url;
    };


    useEffect(() => {
        router.push(generateUrl());
    }, [filters, searchText, sort])

    // Reset sort and filters when searchText changes
    useEffect(() => {
        if (searchText && (sort || filters.length > 0)) {
            // router.push(`/products/?search=${searchText}`);
            router.push(generateUrl());
            document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
                checkbox.checked = false;
            });
            setFilters([])
        }
    }, [searchText]);

    const handleClearFilter = () => {
        setFilters([])
        document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
            checkbox.checked = false;
        });
    }
    return (
        <div>
            {
                allCategories.map((cat) => (
                    <form className="flex gap-2 capitalize my-1" key={cat.id}>
                        <input type="checkbox" id={cat.name} value={cat.name.toLocaleLowerCase()} onChange={(e) => { handleFilter(e) }}/>
                        <label htmlFor={cat.name} className="cursor-pointer font-light text-sm">{cat.name}</label>
                    </form>
                ))
            }
            <button className="p-2 my-3 border-2 rounded-lg bg-main-color hover:bg-primary-red transition-all text-white  text-sm" onClick={() => { handleClearFilter() }}>Clear All Filter</button>
        </div>
    )
}

export default CategoriesFilter