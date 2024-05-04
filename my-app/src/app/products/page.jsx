import RenderProduct from "@/components/RenderOneProduct/RenderProduct"
import { getAllProducts } from "@/lib/request"

const page = async () => {
    const allProducts = await getAllProducts()
    return (
        <div className="relative flex min-h-screen  justify-between container mx-auto p-4 xl:px-24 lg:py-12 w-full ">
            <div className="hidden lg:block w-1/6 sticky top-0">
                <h1>Categories</h1>
            </div>
            <div className="w-full lg:w-5/6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allProducts?.map(p => (
                    <RenderProduct key={p.id} product={p} />
                ))}
            </div>
        </div>
    )
}

export default page