import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function MyProfile() {
  useEffect(() => {
    const targetElement = document.getElementById("popover-top");
    const triggerElement = document.getElementById("popup-button");

    if (targetElement && triggerElement) {
      const options = {
        placement: "top",
        triggerType: "click",
        offset: 10,
      };
    }
  }, []);

  const togglePopover = () => {
    const popover = document.getElementById("popover-top");
    if (popover) {
      popover.classList.toggle("invisible");
      popover.classList.toggle("opacity-0");
    }
  };

  return (
    <div className="align-center mb-3 flex justify-evenly border-t bg-white px-3 py-2">
      <Image
        width="50"
        height="50"
        className="rounded-full bg-blue-400"
        src="/profile"
        alt="userprofile"
      />
      <p className=" text-lg font-semibold text-gray-700">나를 보라</p>


      <button
        data-popover-target="popover-top"
        data-popover-placement="top"
        type="button"
        onClick={togglePopover}
        className="relative mb-3 me-4 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800"
      >
        {">"}
      </button>

      <div
        data-popover
        id="popover-top"
        role="tooltip"
        className="invisible absolute z-10 inline-block w-30 rounded-lg border border-gray-200 bg-white text-sm text-gray-500 opacity-0 shadow-sm transition-opacity dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
      >
        <div className="rounded-t-lg border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
        </div>
        <div className="px-3 py-2">
          <Link href="/">user setting</Link>
        </div>
        <div data-popper-arrow></div>
      </div>
    </div>
  );
}
