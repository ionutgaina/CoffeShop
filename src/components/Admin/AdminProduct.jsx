import Swal from "sweetalert2";
import { deleteProduct } from "../../api/requests";

import { useNavigate } from "react-router-dom";

export const AdminProduct = (props) => {
  const ProductModal = async (ProductInfo) => {
    let rating = ProductInfo.rating;

    rating === undefined
      ? (rating = "not having ")
      : (rating = "having " + rating);

    const result = await Swal.fire({
      imageUrl: ProductInfo.image,
      imageWidth: 200,
      imageHeight: 200,
      title: ProductInfo.name + " " + ProductInfo.price + " LEI",
      text: ProductInfo.description,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      footer: "<p>this product is " + rating + " stars</p>",
      confirmButtonText: "Delete product!",
    });
    if (result.isConfirmed) {
      deleteProduct(ProductInfo.id).then((r) => {
        Swal.fire({
          title: "The product was deleted",

          timer: 2000,
          willClose: () => {
            window.location.reload();
          },
        });
      });
    }
  };

  let ProductInfo = props.props;
  return (
    <button
      className="pt-5"
      id={ProductInfo.id}
      type="button"
      onClick={() => ProductModal(ProductInfo)}
    >
      <img
        className="object-cover w-1/2 md:w-full h-16 md:h-60 mx-auto"
        src={ProductInfo.image}
        alt={"product " + ProductInfo.id}
      />

      <p
        className="bg-primary text-black text-xs md:text-base
      font-bold w-1/2 md:w-full m-auto md:py-3 mb-1"
      >
        {ProductInfo.name}
        {ProductInfo.quantity == 0 ? " is out of stock" : null}
      </p>
    </button>
  );
};
