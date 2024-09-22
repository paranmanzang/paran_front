import Image from "next/image";
import Link from "next/link";

export default function getPeopleList() {
  return (
    <li className="border-b w-full">
{/* userId 받아서  */}
      <Link href="" className="flex justify-evenly px-3 py-2 my-3 align-center"> 
        <div className="relative">
          <Image
          width="46"
          height="46"
          className="rounded-full bg-green-400"
          src="/docs/images/people/profile-picture-5.jpg"
          alt="userprofile"
          />
          {/* user 상태 온라인 오프라인일 때 구분  */}
          {/* { !onLine ?
            <span className="absolute left-7 top-0  h-3.5 w-3.5 rounded-full border-2 border-white bg-red-400 dark:border-gray-800"></span>
          :
            <span className="absolute left-7 top-0  h-3.5 w-3.5 rounded-full border-2 border-white bg-green-400 dark:border-gray-800"></span>
          } */}
          
        </div>
        <p className="inline text-white text-lg font-semibold ">NickName</p>
        <span className="text-xs border-white border px-1 py-3 rounded-lg text-white hover:bg-green-600">보기</span>
      </Link>
      
    </li>
  );
}
