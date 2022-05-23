import { useState } from "react";
import { MenuList } from "../components/Menu/MenuList";
import { Page } from "../components/Page/Page";
import { DropDownMenu } from "../components/shared/DropDownMenu";
export const Menu = () => {
  const [sort, setSort] = useState("");
  const [key, setKey] = useState("id");
  const sortlist = [
    {
      name: "Ascending",
      onClick: () => setSort("Ascending"),
    },
    {
      name: "Descending",
      onClick: () => setSort("Descending"),
    },
  ];

  const keylist = [
    {
      name: "name",
      onClick: () => setKey("name"),
    },
    {
      name: "quantity",
      onClick: () => setKey("quantity"),
    },
    {
      name: "price",
      onClick: () => setKey("price"),
    },
  ];

  return (
    <Page>
      <h1 className="mt-24 text-2xl">Our menu</h1>
      <div className="flex m-auto">
        <DropDownMenu text="By" list={keylist} />
        <DropDownMenu text="Sort" list={sortlist} />
      </div>
      <MenuList mykey={key} sort={sort} />
    </Page>
  );
};
