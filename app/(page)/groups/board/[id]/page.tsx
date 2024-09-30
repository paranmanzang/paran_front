import { getCurrentFile } from "@/lib/features/file.Slice";
import { getCurrentGroupPost } from "@/lib/features/group/group.Slice";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export default function GroupBoardId() {
  const groupPost = useSelector((state: RootState) => getCurrentGroupPost(state));
  const file = useSelector((state: RootState) => getCurrentFile(state))

  
  return (
    <div>
      <ul>
        <li>
          <div>yar</div>
        </li>
      </ul>
    </div>
  )
}
