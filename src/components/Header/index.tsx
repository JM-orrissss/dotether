import { checkRole } from "@/utils/roles";
import HeaderClient from "./HeaderClient";

export default async function Header() {
  const isAdmin = await checkRole("admin");

  return <HeaderClient isAdmin={isAdmin} />;
}