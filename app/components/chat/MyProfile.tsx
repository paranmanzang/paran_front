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
    <div className="absolute bottom-[25px] mb-3 flex w-full justify-evenly border-t bg-white px-3 py-2">
      <Image
        width={50}
        height={50}
        className="rounded-full bg-green-400"
        src="/"
        alt="userprofile"
      />
      <span className="py-2 text-base font-semibold text-green-900">
        My 닉네임
      </span>

      <button
        data-popover-target="popover-top"
        data-popover-placement="top"
        type="button"
        onClick={togglePopover}
        className="relative mb-3 me-4 rounded-lg border border-green-200 bg-green-50 px-2.5 text-sm font-medium text-green-900 hover:bg-green-100"
      >
        {">"}
        </button>

        <div
          data-popover
          id="popover-top"
          role="tooltip"
          className="invisible absolute bottom-6 -right-24 w-36 z-10 inline-block rounded-lg border border-green-100 bg-white text-sm text-gray-900 opacity-0 shadow-sm transition-opacity"
        >
          <div className="rounded-t-lg border-b border-green-100 bg-green-50 px-3 py-2">
            <div className="justify-around flex py-1">
              <button type="button" className="mx-2 border-none">
                상태 변경
              </button>
              <span className="border text-xs">online</span>
            </div>
            <div className="px-3 py-2">
              <Link href="/users/getMyPage">내 정보</Link>
            </div>
          </div>
        </div>
    </div>
  );
}
