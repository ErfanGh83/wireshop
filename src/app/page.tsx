import ThemeSwitchButton from "@/components/buttons/ThemeSwitchButton";

export default function Home() {

  return (
    <div
      className="w-screen h-screen bg-white dark:bg-black text-black dark:text-white"
    >
      <ThemeSwitchButton />
      خانه
    </div>
  );
}