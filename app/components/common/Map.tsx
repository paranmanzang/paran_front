"use client";
import Image from "next/image";
import NaverMap from "./NaverMap";
import { findQuery } from "@/app/service/room/address.service";
import { useState } from "react";
import { AddressModel } from "@/app/model/room.model";

export default function Map() {
  const [addresses, setAddresses] = useState<AddressModel[]>([{
    id: 0,
    address: "서울 중구 세종대로 110 서울특별시청",
    detailAddress: "서울특별시청",
    latitude: 37.566535,
    longitude: 126.9779692,
    roomId: 0,
  }]);
  function search(query: string) {
    findQuery(query).then(data => {
      if (data) {
        setAddresses(data)
      }
    })
  }
  return (
    <div
      id="map-wrap"
      style={{ position: "relative", margin: "100px 0 150px" }}
    >
      <span
        className="w-200 min-h-60 bg-green-100"
        style={{
          position: "absolute",
          bottom: "-150px",
          left: "0",
          width: "100%",
          height: "400px",
          zIndex: "-999",
        }}
      ></span>
      <div className="flex w-full justify-center">
        <div className="mx-3 h-[46rem] w-[30%] rounded-lg border bg-white shadow ">
          {/* <form className="mx-auto max-w-full p-6" > */}
          <h1 className="text-2xl font-bold ">원하시는 정보를 검색해주세요!</h1>
          <p className="mt-2 text-base">정보를 남겨주시면 친절하게 도와드리겠습니다.</p>
          <div className="group relative z-0 my-8 w-full">
            <input
              type="text"
              name="floating_address"
              id="floating_address"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-green-400 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-green-400"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_address"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-green-400 dark:text-gray-400 peer-focus:dark:text-green-400 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
            >
              주소를 입력해주세요
            </label>
          </div>
          <div className="group relative z-0 mb-5 w-full">
            <input
              type="text"
              name="floating_detail"
              id="floating_detail"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-green-400 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-green-400"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_detail"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-green-400 dark:text-gray-400 peer-focus:dark:text-green-400 rtl:peer-focus:translate-x-1/4"
            >
              상세주소
            </label>
          </div>
          <button
            onClick={(event) => { event.preventDefault; search("강남") }}
            className="w-full rounded-lg bg-green-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-400 focus:outline-none focus:ring-4 focus:ring-green-400 dark:bg-green-400 dark:hover:bg-green-400 dark:focus:ring-green-400 sm:w-auto"
          >
            검색
          </button>
          {/* </form> */}
        </div>
        <div>
          <NaverMap addresses={addresses} />
        </div>
      </div>
    </div>
  );
}
