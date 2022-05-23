import Swal from "sweetalert2";
import { deleteProduct } from "../../api/requests";
import { useNavigate } from "react-router-dom";

export const AdminProduct = (props) => {
  const nav = useNavigate();

  const ProductModal = async (ProductInfo) => {
    let rating = ProductInfo.rating;

    // Verify if rating exist to display a friendly response
    rating === undefined
      ? (rating = "not having ")
      : (rating = "having " + rating);

    // The modal with product information
    const result = await Swal.fire({
      imageUrl: ProductInfo.image,
      imageWidth: 200,
      imageHeight: 200,
      title: ProductInfo.name + " " + ProductInfo.price + " LEI",
      // html is a prop which you can put html instead of plain text in content
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
      deleteProduct(ProductInfo.id)
        .then((r) => {
          // Popup if it was succesfully deleted
          Swal.fire({
            title: "The product was deleted",

            timer: 2000,
            willClose: () => {
              // We need to reload the page for see the updated menu
              window.location.reload();
            },
          });
        })
        .catch((e) => {
          // Popup if it was an error
          let response = "Error";

          Swal.fire({
            title: response,
            icon: "error",
            timer: 1500,
            position: "top-end",
            showConfirmButton: false,
          });

          throw e;
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
