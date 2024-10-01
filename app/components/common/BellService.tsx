import { useRouter } from "next/navigation"
import { useState } from "react"

export default function BellService() {
  const route = useRouter()
  const [isPage, setIsPage] = useState();
  const onMovePage = () => {
    // setIsPage(`{여기에 이동할 페이지 올리기}`)
    route.push('/admin/`${}`')
  }
  return (
    //item 실시간 알림 구현하기 
    <li>
        {/* {item.map( */}
        <div className="flex justify-around p-2">
          <p>{} title</p>
          <button type="button" onClick={onMovePage} className="p-1 bg-green-400 text-xs">더보기</button>
        </div>
        <div className="flex justify-around p-2">
          <p>{} title</p>
          <button type="button" onClick={onMovePage} className="p-1 bg-green-400 text-xs">더보기</button>
        </div>
        <div className="flex justify-around p-2">
          <p>{} title</p>
          <button type="button" onClick={onMovePage} className="p-1 bg-green-400 text-xs">더보기</button>
        </div>
        <div className="flex justify-around p-2">
          <p>{} title</p>
          <button type="button" onClick={onMovePage} className="p-1 bg-green-400 text-xs">더보기</button>
        </div>
        <div className="flex justify-around p-2">
          <p>{} title</p>
          <button type="button" onClick={onMovePage} className="p-1 bg-green-400 text-xs">더보기</button>
        </div>
        <div>
          ...dmfh cjflgkrl 
        </div>
        {/* )} */}
      </li>
  )
}
