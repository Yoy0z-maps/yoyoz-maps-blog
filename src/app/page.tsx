import LeftSideBar from "@/container/main/LeftSideBar";

export default function Home() {
  return (
    <div className="flex w-full h-full gap-x-10 px-10 py-5">
      <LeftSideBar />
      {/* Main Content */}
      <section className="w-full h-full bg-container rounded-lg">
        <p className="text-white text-2xl font-bold">Main Content</p>
      </section>
    </div>
  );
}
