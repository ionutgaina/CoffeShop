import Swal from "sweetalert2";
import { deleteProduct } from "../../api/requests";
import { useNavigate } from "react-router-dom";

export const AdminProduct = (props) => {
  const nav = useNavigate();

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
      html:
        "<b> Description </b> <p>" +
        ProductInfo.description +
        "</p> <br> <b> Comment:</b> <p> " +
        ProductInfo.comments +
        "</p>",
      showCancelButton: true,
      showDenyButton: true,
      confirmButtonColor: "red",
      cancelButtonColor: "blue",
      denyButtonColor: "orange",
      footer: "<p>this product is " + rating + " stars</p>",
      confirmButtonText: `Delete product!`,
      denyButtonText: `Update product!`,
    });
    // When press Delete button
    if (result.isConfirmed) {
      deleteProduct(ProductInfo.id).then((r) => {
        Swal.fire({
          title: "The product was deleted",

          timer: 2000,
          willClose: () => {
            // We need to reload the page for see the updated menu
            window.location.reload();
          },
        });
      });
      // When press Update button
    } else if (result.isDenied) {
      nav("/admin/update", { state: ProductInfo });
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
