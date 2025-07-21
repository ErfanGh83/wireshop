import BannersContainer from "@/components/banners/BannersContainer";
import MainLayout from "@/components/layouts/MainLayout";
import { banners } from "../../public/api/examples";
import CircularProductsContainer from "@/components/products/CircularProductsContainer";

export default function Home() {

  return (
    <MainLayout>
      <div
        className="size-full flex flex-col bg-white dark:bg-black text-black dark:text-white overflow-y-auto"
      >
        <BannersContainer banners={banners} />

        <div
          className="w-full h-fit my-12"
        >
          <CircularProductsContainer />
        </div>
      </div>
    </MainLayout>
  );
}