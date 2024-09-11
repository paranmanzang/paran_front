import CardRow from "@/app/components/chat/CardRow"
export default function page() {
  return (
    <div className="mx-auto w-full max-w-lg grid grid-cols-2 gap-3 my-6">
      <CardRow />
      <CardRow />
      <CardRow />
      <CardRow />
      <CardRow />
    </div>
  )
}
