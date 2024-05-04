import { getUniqueProduct } from "@/lib/request"

const page = async ({ params }) => {
  const { slug } = params
  console.log(slug, "asd")
  const product = await getUniqueProduct(slug)
  const { category, count, description, id, image, price, title } = product
  return (
    <div>
      {id}{title}
    </div>
  )
}

export default page