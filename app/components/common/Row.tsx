"use client";
import React, { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { fetchData } from "@/app/api/fetchData";

interface RowData {
  id: string | number;
  title: string;
  content: string;
  fetchUrl: string;
  linkUrl: string;
  imageUrl?: string; 
  author?: string;    
}

interface RowProps {
  data: RowData;
  onSelect: () => void;
  isSelected: boolean;
  key: string | number;
}


const Row: React.FC<RowProps> = ({ data, onSelect, isSelected }) => {
  const [detailedData, setDetailedData] = useState(data);

  useEffect(() => {
    const fetchDetailedData = async () => {
      try {
        const result = await fetchData(`/api/item/${data.id}`);
        setDetailedData({ ...data, ...result });
      } catch (error) {
        console.error("Error fetching detailed data:", error);
      }
    };

    fetchDetailedData();
  }, [data.id]);

  return (
    <div
      className={`max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 ${isSelected ? "ring-2 ring-green-500" : ""}`}
      onClick={onSelect}
    >
      <Link href={detailedData.linkUrl || "/"}>
        <Image
          width={400}
          height={330}
          className="rounded-t-lg"
          src={detailedData.imageUrl || "https://picsum.photos/400/380"}
          alt="rowsImage"
        />
      </Link>
      <div className="p-5">
        <Link href={detailedData.linkUrl || "/"}>
          <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
            {detailedData.title}
          </h5>
        </Link>
        <p className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-400">
          {detailedData.content}
        </p>
        <p className="text-sm font-medium">{detailedData.author || "저자명"}</p>
        <Link
          href={detailedData.linkUrl || "/"}
          className="text- mt-5 inline-flex w-full items-center rounded-lg bg-green-400 p-3 text-sm font-medium text-white hover:bg-green-500 dark:bg-green-400 dark:hover:bg-green-500"
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
};

export default React.memo(Row);
