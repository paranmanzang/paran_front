import UserProfile from "@/app/components/user/UserProfile";

interface UserPageProps {
  userNickname: string;
}

export default function getMyPage({userNickname}: UserPageProps) {
  return (
    <div>
      <UserProfile getUser={userNickname}/>
    </div>
  )
}
