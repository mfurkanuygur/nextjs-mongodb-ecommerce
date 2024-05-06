import RenderProduct from "@/components/RenderOneProduct/RenderProduct"
import ProductSort from "@/components/productSort/ProductSort"
import ProductsFilter from "@/components/productsFilter/ProductsFilter"
import { getAllProducts } from "@/lib/request"

const page = async ({searchParams }) => {
    const products = await getAllProducts();
    const searchText = searchParams?.search
    const sort = searchParams?.sort
    const productFilters = searchParams?.filter?.split(",").map(filter => filter.toLowerCase())
    let filteredProducts =
        searchText == null
            ? products
            : products.filter((product) =>
                product.title
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
            );

    if (productFilters) {
        filteredProducts = filteredProducts.filter(product => productFilters.includes(product.category.toLowerCase()));
    }

    switch (sort) {
        case "azName":
            filteredProducts.sort((a, b) =>
                a.title.toLowerCase().localeCompare(b.title.toLowerCase())
            );
            break;
        case "zaName":
            filteredProducts.sort((a, b) =>
                b.title.toLowerCase().localeCompare(a.title.toLowerCase())
            );
            break;
        case "priceDec":
            filteredProducts.sort((a, b) => Number(b.price) - Number(a.price));
            break;
        case "priceInc":
            filteredProducts.sort((a, b) => Number(a.price) - Number(b.price));
            break;
        case "azCategory":
            filteredProducts.sort((a, b) =>
                a.category.toLowerCase().localeCompare(b.category.toLowerCase())
            );
            break;
        case "zaCategory":
            filteredProducts.sort((a, b) =>
                b.category.toLowerCase().localeCompare(a.category.toLowerCase())
            );
            break;
        default:
            filteredProducts.sort((a, b) => Number(a.id) - Number(b.id));
            break;
    }

    return (
        <div className="relative flex min-h-screen  justify-between container mx-auto p-4 xl:px-24 lg:py-12 w-full gap-4 ">
            <div className="hidden lg:block w-1/6 sticky top-0">
                <h1 className="font-bold border-b mb-2 pb-1 text-xl">Categories</h1>
                <ProductsFilter />
            </div>
            <div className="w-full lg:w-5/6">
                <div className="flex flex-col md:flex-row justify-between">
                    <h1 className="font-bold  mb-2 pb-1 text-xl">Produtcs  {filteredProducts?.length}</h1>
                    <ProductSort/>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts?.map(p => (
                        <RenderProduct key={p.id} product={p} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page