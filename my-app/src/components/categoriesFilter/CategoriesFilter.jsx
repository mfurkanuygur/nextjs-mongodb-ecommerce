"use client"
const CategoriesFilter = () => {
    const allCategories = [
        { "id": 1, "name": "clothes" },
        { "id": 2, "name": "electronics" },
        { "id": 3, "name": "Furniture" },
        { "id": 4, "name": "Shoes" },
        { "id": 5, "name": "Miscellaneous" },
    ]
    return (
        <div>
            {
                allCategories.map((cat) => (
                    <div className="flex gap-2 capitalize my-1" key={cat.id}>
                        <input type="checkbox" id={cat.name} />
                        <label htmlFor={cat.name} className="cursor-pointer font-light text-sm">{cat.name}</label>
                    </div>
                ))
            }
        </div>
    )
}

export default CategoriesFilter