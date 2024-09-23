"use client"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchData } from '@/app/api/fetchData'; // api 함수 임포트

export default function Row({ title, content, fetchUrl, linkUrl }: { title: string, content: string, fetchUrl: string, linkUrl: string }) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData(fetchUrl); // api 모듈에서 데이터 가져오기
        setData(result);
      } catch (error) {
        console.error("Error fetching data in Row component:", error);
      }
    };

    loadData();
  }, [fetchUrl]);

  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <Link href={linkUrl|| '/'}>
        <Image
          width={400}
          height={330}
          className="rounded-t-lg"
          src={data?.imageUrl || "https://picsum.photos/400/380"}
          alt="rowsImage"
        />
      </Link>
      <div className="p-5">
        <Link href={linkUrl|| '/'}>
          <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
            {data?.title || title}
          </h5>
        </Link>
        <p className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-400">
          {data?.content || content}
        </p>
        <p className="text-sm font-medium">
          {data?.author || "저자명"}
        </p>
        <Link
          href={linkUrl|| '/'}
          className="w-full mt-5 inline-flex items-center rounded-lg bg-green-400 p-3 text- text-sm font-medium text-white hover:bg-green-500 dark:bg-green-400 dark:hover:bg-green-500"
        >
          상세보기
          <svg
            className="ms-2 size-3.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}