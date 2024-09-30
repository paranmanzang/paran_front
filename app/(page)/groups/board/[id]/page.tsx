import {getCurrentFile} from "@/lib/features/file.Slice";
import {getCurrentGroupPost} from "@/lib/features/group/group.Slice";
import {useSelector} from "react-redux";
import DetailButton from "@/app/components/common/Details/DetailButton";

export default function GroupBoardId() {
    const groupPost = useSelector(getCurrentGroupPost);
    const file = useSelector(getCurrentFile)


    return (
        <div>
            <ul>
                <li>
                    <div>yar</div>
                    <DetailButton thisPage={'/groupPost'} displayReview="none" displayReservation="none" />
                </li>
            </ul>
        </div>
    )
}
