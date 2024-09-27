export default function CategorySelect() {
  return (
      <div>
        <label htmlFor="category">모임의 카테고리를 정해주세요</label>
        <select id="category">
          <option>1. 사회과학</option>
          <option>2. 기술과학</option>
          <option>3. 문학</option>
          <option>4. 철학</option>
          <option>5. 예술</option>
          <option>6. 언어</option>
          <option>7. 역사</option>
          <option>8. 종교</option>
          <option>9. 자연과학</option>
          <option>10. 기타</option>
        </select>
      </div>
  )
}
