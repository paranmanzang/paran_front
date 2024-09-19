import React, { useEffect } from "react";
import Link from "next/link";
import "./ChatRoomList.css";

export default function ChatRoomList() {
  useEffect(() => {
    const targetElement = document.getElementById("popover-bottom");
    const triggerElement = document.getElementById("popup-button");

    if (targetElement && triggerElement) {
      const options = {
        placement: "bottom",
        triggerType: "click",
        offset: 10,
      };
    }
  }, []);

  const togglePopover = () => {
    const popover = document.getElementById("popover-bottom");
    if (popover) {
      popover.classList.toggle("invisible");
      popover.classList.toggle("opacity-0");
    }
  };

  return (
    <div id="chatHead" className="px-5 py-3">
      <button
        id="popup-button"
        type="button"
        className="relative mb-3 me-4 w-full rounded-lg px-5 py-2.5 text-center text-lg font-bold text-gray-100 hover:bg-blue-200 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={togglePopover}
      >
        참여중인 대화방 이름 {"^"}
      </button>
      <ul
        id="popover-bottom"
        className="listUp invisible absolute z-10 inline-block w-80 space-y-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-lg text-gray-500 opacity-0 shadow-sm transition-opacity
         dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
      >
        <li className="ListOne">
          <Link href="/">참여중인 대화방</Link>
          <span className="number">2</span>
        </li>
        <li className="ListOne">
          <Link href="/">참여중인 대화방</Link>
          <span className="number">2</span>
        </li>
        <li className="ListOne">
          <Link href="/">참여중인 대화방</Link>
          <span className="number">2</span>
        </li>
        <li className="ListOne">
          <Link href="/">참여중인 대화방</Link>
          <span className="number">2</span>
        </li>
      </ul>
      <div data-popper-arrow></div>
    </div>
  );
}
