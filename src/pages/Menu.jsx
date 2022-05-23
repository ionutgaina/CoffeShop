import { useState } from "react";
import { MenuList } from "../components/Menu/MenuList";
import { Page } from "../components/Page/Page";
import { DropDownMenu } from "../components/shared/DropDownMenu";
export const Menu = () => {
  const [sort, setSort] = useState("");
  const [key, setKey] = useState("id");

  // Sort List
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

  // Key list for which we make sorting
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
    {
      name: "rating",
      onClick: () => setKey("rating"),
    }
  ];

  return (
    <Page>
      <h1 className="mt-24 text-2xl">Our menu</h1>
      <div className="flex m-auto">
        <DropDownMenu text="Sort" list={sortlist} />
        <DropDownMenu text="By" list={keylist} />
      </div>
      <MenuList mykey={key} sort={sort} />
    </Page>
  );
};
