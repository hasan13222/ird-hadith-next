"use client";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import BookChpHeading from "./components/BookChpHeading";
import Hadiths from "./components/Hadiths";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex">
        <Sidebar />
        <div className="mainbar flex gap-5 bg-[#f2f4f6] w-full rounded-ss-3xl p-5">
          <BookChpHeading/>
          <Hadiths/>
        </div>
      </main>
    </>
  );
}
