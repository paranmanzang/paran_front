import AdminUser from "@/app/components/user/AdminUser";
interface PageProps {
  params: { id: string };
}
export default function getUserId({ params }: PageProps) {
  const userId = params.id;

  return (
    <div>
      <AdminUser getUser={userId}/>
    </div>
  )
}
