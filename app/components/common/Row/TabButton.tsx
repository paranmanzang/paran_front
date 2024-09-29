"use client";

import { useState, useCallback, useMemo } from "react";
import dynamic from 'next/dynamic';

const GroupRow = dynamic(() => import("./GroupRow"), { ssr: false });
const RoomRow = dynamic(() => import("./RoomRow"), { ssr: false });
const BookRow = dynamic(() => import("./BookRow"), { ssr: false });

const tabConfig = {
  Groups: { label: "소모임", component: GroupRow },
  Rooms: { label: "공간", component: RoomRow },
  Books: { label: "도서", component: BookRow },
};

export default function TabButton({ initialTab }) {
  const [activeTab, setActiveTab] = useState(initialTab || "Groups");

  const handleTabClick = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  const renderActiveContent = useMemo(() => {
    const ActiveComponent = tabConfig[activeTab]?.component;
    return ActiveComponent ? <ActiveComponent active={true} onSelect={() => {}} /> : null;
  }, [activeTab]);

  const tabButtons = useMemo(() => (
    Object.entries(tabConfig).map(([key, { label }]) => (
      <li key={key} className="me-2">
        <button
          type="button"
          className={`inline-block rounded-t-lg border-b-2 p-4 ${
            activeTab === key
              ? "border-green-600 text-green-600 dark:border-green-500 dark:text-green-500"
              : "border-transparent hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
          }`}
          onClick={() => handleTabClick(key)}
        >
          {label}
        </button>
      </li>
    ))
  ), [activeTab, handleTabClick]);

  return (
    <>
      <div className="mb-4 border-b border-gray-200 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
        <ul className="-mb-px flex flex-wrap">
          {tabButtons}
        </ul>
      </div>
      <ul className="grid h-full w-full grid-cols-3 gap-6 mt-3 mb-8 md:grid-cols-3">
        <li>{renderActiveContent}</li>
      </ul>
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      initialTab: "Groups",
    },
  };
}