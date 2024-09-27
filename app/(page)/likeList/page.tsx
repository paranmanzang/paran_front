"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import ComLikeList from "@/app/components/user/ComLikeList";

type TabType = "All" | "Groups" | "Rooms";

export default function LikeList() {
  const [activeTab, setActiveTab] = useState<TabType>("All");
  const router = useRouter();

  const goBack = () => router.back();

  const renderContent = () => {
    switch(activeTab) {
      case "All":
        return (
          <>
            <ComLikeList type="all" />
            <ComLikeList type="all" />
            <ComLikeList type="all" />
          </>
        );
      case "Groups":
        return <ComLikeList type="groups" />;
      case "Rooms":
        return <ComLikeList type="rooms" />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-lg p-6 my-8 mx-auto bg-green-100">
      <div className="mb-4">
        <ul className="flex border-b">
          {["All", "Groups", "Rooms"].map((tab) => (
            <li key={tab} className="-mb-px mr-1">
              <a
                href="#"
                className={`inline-block py-2 px-4 text-sm font-semibold ${
                  activeTab === tab
                    ? "text-green-600 border-l border-t border-r rounded-t"
                    : "text-green-500 hover:text-green-800"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(tab as TabType);
                }}
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      {renderContent()}
      
      <button 
        type="button" 
        onClick={goBack}
        className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        뒤로가기
      </button>
    </div>
  )
}