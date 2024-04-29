import { getAllProducts } from "@/lib/request";
import Image from "next/image";

export default async function Home() {
  const allProducts = await getAllProducts()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {allProducts?.length}
      {allProducts?.map(p => (
        <div className="text-white" key={p.id}>
          <Image src={p.image} width={100} height={100} />
          <h4>{p.title}</h4>


        </div>
      ))}
    </main>
  );
}
