import Billboard from "@/components/product/Billboard";
import Container from "@/components/general/Container";
import ProductList from "@/components/product/ProductList";
import getBillboard from "@/actions/getBillboard";
import getProducts from "@/actions/getProducts";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("e8cffcbc-f163-4d79-ad6a-a3897dbaacfc");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;