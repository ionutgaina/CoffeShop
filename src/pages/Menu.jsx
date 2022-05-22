import { MenuList } from "../components/Menu/MenuList";
import { Page } from "../components/Page/Page";
export const Menu = () => {
  return (
    <Page>
      <h1 className="mt-24 text-2xl">Our menu</h1>
      <MenuList />
    </Page>
  );
};
