import BannersContainer from "@/components/banners/BannersContainer";
import MainLayout from "@/components/layouts/MainLayout";
import CircularProductContainer from "@/components/products/CircularProductContainer";
import { banners } from "../../public/api/examples";

export default function Home() {

  return (
    <MainLayout>
      <div
        className="size-full flex flex-col bg-white dark:bg-black text-black dark:text-white"
      >
        <BannersContainer banners={banners} />

        <div>
          <CircularProductContainer id={"1"} title={"nigga"} imageUrl={"img"} />
        </div>
      </div>
    </MainLayout>
  );
}