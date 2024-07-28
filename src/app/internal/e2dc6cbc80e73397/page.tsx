import { redirect } from "next/navigation";

const AdminPage = () => {
  redirect("/internal/e2dc6cbc80e73397/auth");

  // This part will never be reached due to the redirect
  return null;
};

export default AdminPage;
