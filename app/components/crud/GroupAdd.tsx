export default function GroupAdd() {
  return (
    <form>
      <div>
        <label htmlFor="place">모임 이름</label>
        <input type="text" placeholder="공간의 이름을 적어주세요" id="place" />
      </div>
      <div>
        <label htmlFor="people">정원 수</label>
        <input type="text" placeholder="인원수를 정해주세요!" id="people" />
        <option>1 ~ 3</option>
        <option>4 ~ 7</option>
        <option>8 ~ 10</option>
      </div>
      <div>
        <label htmlFor="alone">싱글 사용여부</label>
        <input type="radio" id="aloneOk" />
        <input type="radio" id="aloneNo" />
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
            <label htmlFor="timeSelect01" className="p-2 text-center text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-green-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
              00:00
            </label>
          </li>
        </ul>
      </div>
      <div>
        <label htmlFor="account">이용 금액</label>
        <input type="text" id="account" placeholder="이용금액을 적어주세요" />
      </div>

    </form>
  )
}
