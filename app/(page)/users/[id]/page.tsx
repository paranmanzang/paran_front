import AdminUser from "@/app/components/user/AdminUser";
interface PageProps {
  params: { nickname: string }
}
export default function getUserId({ params }: PageProps) {
  return (
    <div>
    <AdminUser nickname={params.nickname} />
  </div>
  )
}
