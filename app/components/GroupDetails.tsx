export default function Details() {
  return (
    <div>
      <div className="bg-gray-400 h-[300px] w-full justify-center">메인 상세보기</div>
      <div className="grid min-h-screen grid-cols-2 my-6 place-items-center">
         <div className="bg-gray-400 h-[70%] w-[80%]">안에 내용 넣기</div>
         <div className="bg-gray-400 h-[70%] w-[80%]">안에 내용 넣기</div>
         <div className="bg-gray-400 h-[70%] w-[90%] col-span-2">안에 내용 넣기</div>
         <div className="bg-gray-400 h-[70%] w-[80%]">안에 내용 넣기</div>
         <div className="bg-gray-400 h-[70%] w-[80%]">안에 내용 넣기</div>
         <div className="bg-gray-400 h-[70%] w-full col-span-2">안에 내용 넣기</div>
      </div>

      <div className="h-[20px] w-full flex items-end mx-auto max-w-sm">
        <button type="button" className="py-2 px-3 mx-2 border rounded-full">🥰 찜하기 🥰</button>
        <button type="button" className="py-2 px-3 mx-2 border rounded-full">예약하기</button>
        <button type="button" className="py-2 px-3 mx-2 border rounded-full">뒤로가기</button>
      </div>
    </div>
  )
}
