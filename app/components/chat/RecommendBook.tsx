"use client";
import { useState } from "react";
import { button } from "flowbite-react";

export default function RecommendBook() {
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw new Error(
          data.error || `Request failed with status ${response.status}`,
        );
      }

      setAnswer(data.result);
      setQuestion("");
    } catch (error: any) {
      console.error("Error response:", error.response?.data || error.message);

      alert(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="책 취향을 입력하세요"
        />
        <button type="submit">추천 받기</button>
      </form>
      {answer && <div>추천 결과: {answer}</div>}
    </>
  );
}
