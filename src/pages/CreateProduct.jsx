import { CreateProductForm } from "../components/Admin/CreateProductForm"
import { Page } from "../components/Page/Page";
export const CreateProduct = () => {
  return (
    <Page>
      <div className="py-14 px-5 md:my-auto">
        <div className="lg:w-1/2 md:w-11/12 m-auto bg-primary rounded-2xl">
          <div className="m-auto p-5 pb-10 ">
            <h1 className=" text-2xl md:text-3xl font-medium text-black">
              Create product
            </h1>
            <CreateProductForm />
          </div>
        </div>
      </div>
    </Page>
  );
};
