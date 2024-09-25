"use client"
import { useState } from "react";

import Row from "./components/common/Row";
import Link from "next/link";
import "./globals.css";
import Map from "./components/common/Map";
import RecommendBook from "./components/chat/ChatBot/RecommendBook";
import Carousel from "./components/common/Carousel";
import TabButton from "./components/common/TabButton";
<<<<<<< HEAD


=======
>>>>>>> d2c75c253371737555690cf1186657be8673f7bb

export default function Home() {
  const [rowData, setRowData] = useState<any[]>([]);
  const [max, setMax] = useState<number>(5);

  return (
    <div id="home">
      <section className="artWrap">
        <span className="bgEffect"></span>
        <Carousel />
      </section>
      <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
        <h1 className="text-2xl dark:text-white">
          <section className="size-90" id="rowColum">
            <TabButton />
            <div className="grid h-full grid-cols-2 gap-4 md:grid-cols-3">
              {/* map 사용해서 데이타 props받고 연속 돌리기 넣어줄거임 */}
              {rowData.length > 0 ? (
                rowData.slice(0, max).map((item: any) => (
                  <Row
                    data={{
                      id: item.id,
                      title: item.title,
                      content: item.content,
                      fetchUrl: item.fetchUrl,
                      linkUrl: item.linkUrl,
                      imageUrl: item.imageUrl, // optional
                      author: item.author, // optional
                    }}
                    onSelect={() => (item.id)}
                    isSelected={item.id}
                    key={item.id}
                  />
                ))
              ) : (
                <p>Loading...</p>
              )}
              <Link
                href="/books/"
                className="mb-2 me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-400 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                더보기
              </Link>
            </div>
          </section>
        </h1>
        <RecommendBook />
      </main>
      <article>
        <Map />
      </article>
    </div>
  );
}
