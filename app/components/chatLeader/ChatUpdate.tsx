export default function ChatUpdate() {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="chatTitle">채팅방의 제목을 입력해주세요</label>
          <input type="text" placeholder="채팅방의 제목을 입력해주세요" id="chatTitle"/>
        </div>
        <div>
          <label htmlFor="chatTitle">채팅방의 공개여부를 입력해주세요</label>
          <select>
            <option value=""></option>
          </select>
        </div>
      </form>

    </div>
  )
}
