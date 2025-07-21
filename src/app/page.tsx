import ThemeSwitchButton from "@/components/buttons/ThemeSwitchButton";
import MainLayout from "@/components/layouts/MainLayout";

export default function Home() {

  return (
    <MainLayout>
      <div
        className="size-full bg-white dark:bg-black text-black dark:text-white"
      >
        <ThemeSwitchButton />
      </div>
    </MainLayout>
  );
}