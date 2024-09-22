import ChatDetails from "@/app/components/chat/ChatDetails";
import Link from "next/link";
export default function Chat() {
  return (
    <div className="relative w-full">
      <div id="btn-wrap">
        <Link
          href="/" //내가 접속했던 곳으로 그대로 뱉어주기
          className="absolute right-10 top-[-2.4rem] z-30 mb-2 me-2 rounded-full bg-red-700 px-3 py-1.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          X
        </Link>
      </div>
      <div className="absolute left-[50%] top-[50%] transform translate-x-[-50%] z-30 mx-auto flex h-[50dvh] w-[40%] bg-green-700 text-white justify-center rounded-lg py-6 px-6">
      <section>
       <ChatDetails />
      </section>
    </div>
    <p
      id="theme"
      className="z-1 fixed left-0 top-0 min-h-screen w-full bg-gray-200 bg-opacity-92 text-black"
    />

    </div>
  );
}
