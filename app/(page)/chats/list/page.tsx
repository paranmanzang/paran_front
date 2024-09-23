import CardRow from "@/app/components/chat/CardRow";
export default function page() {
  return (
    <div className="mx-auto my-6 grid w-full max-w-lg grid-cols-2 gap-3">
      {/* max props 넣어서 돌리기 */}
      <CardRow />
      <CardRow />
      <CardRow />
      <CardRow />
      <CardRow />
    </div>
  );
}
