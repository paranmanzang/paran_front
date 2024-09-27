export default function RoomAdd() {
  return (
    <form>
      <div>
        <label htmlFor="place">공간 이름</label>
        <input type="text" placeholder="공간의 이름을 적어주세요" id="place" />
      </div>
      <div>
        <label htmlFor="people" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">정원 수</label>
        <select id="people" className="bg-green-50 border border-green-300 text-green-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-700 dark:border-green-600 dark:placeholder-green-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
          <option>1 ~ 3</option>
          <option>4 ~ 7</option>
          <option>8 ~ 10</option>
        </select>
      </div>
      <div>
        <label htmlFor="alone">싱글 사용여부</label>
        <div>
          <input type="radio" id="aloneOk" /><span>예</span>
        </div>
        <div>
          <input type="radio" id="aloneNo" /><span>아니오</span>
        </div>
      </div>
      <div>
        <label htmlFor="alone">이용가능 날짜</label>
        <input type="date" />
      </div>
      <div>
        <label htmlFor="alone">이용가능 시간</label>
        <ul>
          <li>
            <input type="checkbox" id="timeSelect01" value="" className="hidden peer" />
            <label htmlFor="timeSelect01" className="p-2 text-center text-green-500 bg-white border-2 border-green-200 rounded-lg cursor-pointer dark:hover:text-green-300 dark:border-green-700 peer-checked:border-green-600 hover:text-green-600 dark:peer-checked:text-green-300 peer-checked:text-green-600 hover:bg-green-50 dark:text-green-400 dark:bg-green-800 dark:hover:bg-green-700">
              00:00
            </label>
          </li>
        </ul>
      </div>
      <div>
        <label htmlFor="account">이용 금액</label>
        <input type="text" id="account" placeholder="이용금액을 적어주세요" />
      </div>
      <button type="submit">등록하기</button>
    </form>
  )
}
