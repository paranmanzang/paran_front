import {getCurrentFile} from "@/lib/features/file.Slice";
import {getCurrentGroupPost} from "@/lib/features/group/group.Slice";
import {useSelector} from "react-redux";

export default function GroupBoardId() {
    const groupPost = useSelector(getCurrentGroupPost);
    const file = useSelector(getCurrentFile)


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
