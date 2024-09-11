import Link from "next/link";
export default function Post() {
  return (
    <div className="px-[15%] py-[5%]">
      <blockquote className="text-xl font-semibold italic text-gray-900 dark:text-white mb-6">
        <p>
          "Paranmanzang 서비스를 이용해주셔서 감사합니다."
        </p>
      </blockquote>

      <div id="accordion-open" data-accordion="open">
        <h2 id="accordion-open-heading-1">
          <button
            type="button"
            className="flex w-full items-center justify-between gap-3 rounded-t-xl border border-b-0 border-gray-200 p-5 font-medium text-gray-500 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-800 rtl:text-right"
            data-accordion-target="#accordion-open-body-1"
            aria-expanded="true"
            aria-controls="accordion-open-body-1"
          >
            <span className="flex items-center">
              <svg
                className="me-2 h-5 w-5 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>{" "}
              paranmanzang 이란?
            </span>
            <svg
              data-accordion-icon
              className="h-3 w-3 shrink-0 rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-open-body-1"
          className=""// hidden 속성 풀고 안풀고 js 로 컨트롤 예정
          aria-labelledby="accordion-open-heading-1"
        >
          <div className="border border-b-0 border-gray-200 p-5 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              책을 사랑하고 취미로 읽으시는 분들이 모여 소모임과 공간대여를 통해 자유롭게 의견을 나누고 
              책을 더 좋아하게 되었으면 좋겠다는 취지로 만들어진 서비스입니다.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              파란만장 서비스를 경험해보고 싶으신 분들은{" "}
              <Link
                href="/"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                지금 시작해보기
              </Link>{" "}
              함께 독서하고 얘기를 나누며 삶의 질을 높이는 경험이 될 수 있으면 좋겠습니다.
            </p>
          </div>
        </div>
        <h2 id="accordion-open-heading-2">
          <button
            type="button"
            className="flex w-full items-center justify-between gap-3 border border-b-0 border-gray-200 p-5 font-medium text-gray-500 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-800 rtl:text-right"
            data-accordion-target="#accordion-open-body-2"
            aria-expanded="false"
            aria-controls="accordion-open-body-2"
          >
            <span className="flex items-center">
              <svg
                className="me-2 h-5 w-5 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              책 구매도 할 수 있나요?
            </span>
            <svg
              data-accordion-icon
              className="h-3 w-3 shrink-0 rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-open-body-2"
          className="hidden"
          aria-labelledby="accordion-open-heading-2"
        >
          <div className="border border-b-0 border-gray-200 p-5 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is first conceptualized and designed using the Figma
              software so everything you see in the library has a design
              equivalent in our Figma file.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out the{" "}
              <a
                href="https://flowbite.com/figma/"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                Figma design system
              </a>{" "}
              based on the utility classes from Tailwind CSS and components from
              Flowbite.
            </p>
          </div>
        </div>
        <h2 id="accordion-open-heading-3">
          <button
            type="button"
            className="flex w-full items-center justify-between gap-3 border border-gray-200 p-5 font-medium text-gray-500 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-800 rtl:text-right"
            data-accordion-target="#accordion-open-body-3"
            aria-expanded="false"
            aria-controls="accordion-open-body-3"
          >
            <span className="flex items-center">
              <svg
                className="me-2 h-5 w-5 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>{" "}
              공간은 어떻게 예약할 수 있나요?
            </span>
            <svg
              data-accordion-icon
              className="h-3 w-3 shrink-0 rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-open-body-3"
          className="hidden"
          aria-labelledby="accordion-open-heading-3"
        >
          <div className="border border-t-0 border-gray-200 p-5 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The main difference is that the core components from Flowbite are
              open source under the MIT license, whereas Tailwind UI is a paid
              product. Another difference is that Flowbite relies on smaller and
              standalone components, whereas Tailwind UI offers sections of
              pages.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              However, we actually recommend using both Flowbite, Flowbite Pro,
              and even Tailwind UI as there is no technical reason stopping you
              from using the best of two worlds.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Learn more about these technologies:
            </p>
            <ul className="list-disc ps-5 text-gray-500 dark:text-gray-400">
              <li>
                <a
                  href="https://flowbite.com/pro/"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Tailwind UI
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
