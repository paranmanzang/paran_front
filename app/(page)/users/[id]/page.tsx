import AdminUser from "@/app/components/user/AdminUser";
interface PageProps {
  params: { id: string };
}
export default function getUserId({ params }: PageProps) {
  return (
    <div>
      <AdminUser id={params.id} />
  </div>
  )
}
