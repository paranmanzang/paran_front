"use client"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

interface RowProps {
  title: string;
  fetchUrl: string;
  getId: (id: string) => string;
}

interface RowData {
  id: string;
  title: string;
  content: string;
  publicationDate: string;
  imageUrl: string;
}

export default function Row({ title, fetchUrl, getId, max }: RowProps) {
  const [data, setData] = useState<RowData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(fetchUrl);
        setData(response.data); // 배열로 데이터를 받는다고 가정
      } catch (err) {
        setError("데이터를 불러오는 데 실패했습니다.");
        console.error("Error fetching data: ", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [fetchUrl]);

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;
  if (!data || data.length === 0) return <div>데이터가 없습니다.</div>;

  return (
    <div>
      <h2 className="mb-5 text-xl font-bold">{title}</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
          >
            <Link href={getId(item.id)}>
              <Image
                width={400}
                height={330}
                className="rounded-t-lg"
                src={item.imageUrl} // 각 데이터의 imageUrl 사용
                alt={item.title}
              />
            </Link>
            <div className="p-5">
              <Link href={getId(item.id)}>
                <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                  Title: {item.title}
                </h5>
              </Link>
              <p className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-400">
                출간일: {item.publicationDate}
              </p>
              <p className="text-sm font-medium">Contents: {item.content}</p>
              <Link
                href={getId(item.id)}
                className="w-full mt-5 inline-flex items-center rounded-lg bg-green-400 p-3 text-center text-sm font-medium text-white hover:bg-green-500 dark:bg-green-400 dark:hover:bg-green-500"
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}