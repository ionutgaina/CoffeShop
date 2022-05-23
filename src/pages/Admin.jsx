import { AdminList } from "../components/Admin/AdminList";
import { Page } from "../components/Page/Page";
import { useNavigate } from "react-router-dom";
import { CoffeButton } from "../components/shared/CoffeButton";

export const Admin = () => {
    let nav = useNavigate();
  return (
    <Page>
      <h1 className="mt-24 text-2xl">Admin MENU</h1>

      <CoffeButton onClick={() => nav("/admin/create")} text="CREATE Product" type="button"/>

      
      <AdminList />
    </Page>
  );
};
