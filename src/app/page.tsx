import { banners } from "@/components/banners/Banners";
import BannersContainer from "@/components/banners/BannersContainer";
import MainLayout from "@/components/layouts/MainLayout";

export default function Home() {

  return (
    <MainLayout>
      <div
        className="size-full bg-white dark:bg-black text-black dark:text-white"
      >
        <BannersContainer banners={banners} />
      </div>
    </MainLayout>
  );
}