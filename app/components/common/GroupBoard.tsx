"use client"
import Image from "next/image"
import HeartCheckbox from "./Row/HeartCheckBox"
import { useState } from "react";

export default function GroupBoard() {
  const [active, setActive] = useState(false);

  return (
      <ul className="max-w-sm mx-auto bg-green-100 my-8 p-4">
        <li className="p-6 m-2 bg-white">
          <Image 
          width={400}
          height={330}
          className="rounded-t-lg" src={"https://picsum.photos/400/380"} alt={'cover'}/>
          <div>title</div>
          <div  className="w-18 overflow-hidden whitespace-nowrap text-ellipsis">contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent</div>
          <HeartCheckbox onChange={setActive => true}/>
        </li>
      </ul>
  )
}
