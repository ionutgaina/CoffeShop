import { UpdateProductForm } from "../components/Admin/UpdateProductForm"
import { Page } from "../components/Page/Page";
import {useLocation, useNavigate} from 'react-router-dom';

export const UpdateProduct = () => {
    const location = useLocation();
    const nav = useNavigate();

    if ( !location.state )
        nav("/admin");
        
  return (
    <Page>
      <div className="py-14 px-5 md:my-auto">
        <div className="lg:w-1/2 md:w-11/12 m-auto bg-primary rounded-2xl">
          <div className="m-auto p-5 pb-10 ">
            <h1 className=" text-2xl md:text-3xl font-medium text-black">
              Update product
            </h1>
            <UpdateProductForm ProductInfo={location.state}/>
          </div>
        </div>
      </div>
    </Page>
  );
};
