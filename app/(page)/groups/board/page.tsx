import GroupBoard from "@/app/components/common/GroupBoard"
export default function groupBoard() {
  return (
    <div>
      {/* group에 참여중인 사람만 보일 수 있도록 한다. */}
      <GroupBoard />
    </div>
  )
}
