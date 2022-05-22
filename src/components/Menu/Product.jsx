import Swal from "sweetalert2";

export const Product = (props) => {
  const ProductModal = (ProductInfo) => {
    let rating = ProductInfo.rating.reduce((a, b) => a + b) / ProductInfo.rating.length;
    rating = Math.round(rating * 10) / 10

    if ( rating === 0 )
    rating = "not having "
    else
    rating = "having " + rating
    return Swal.fire({
      imageUrl: ProductInfo.image,
      imageWidth: 200,
      imageHeight: 200,
      title: ProductInfo.name + " " + ProductInfo.price + " LEI",
      text: ProductInfo.description,
      footer: '<p>this product is ' + rating +' stars</p>',
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
        className="object-cover w-1/2 md:w-full md:h-60 mx-auto"
        src={ProductInfo.image}
        alt={"product " + ProductInfo.id}
      />

      <p
        className="bg-primary text-black
      font-bold w-1/2 md:w-full md:py-3 mb-1"
      >
        {ProductInfo.name}
        {ProductInfo.quantity == 0 ? " is out of stock" : null}
      </p>
    </button>
  );
};
