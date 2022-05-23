import Swal from "sweetalert2";

export const Product = (props) => {
  const ProductModal = (ProductInfo) => {
    let rating = ProductInfo.rating;

    // Verify if rating exist to display a friendly response
    rating === undefined
      ? (rating = "not having ")
      : (rating = "having " + rating);

    // The modal with product information
    return Swal.fire({
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
      footer: "<p>this product is " + rating + " stars</p>",
    });
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
