import CustomForm from "../shared/CustomForm";
import { postProduct } from "../../api/requests";
import { REQUIRED } from "../../common/constants";
import * as Yup from "yup";
import Swal from "sweetalert2";

export const CreateProductForm = () => {
  // Regex for url verification
  const URL =
    /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
  return (
    <CustomForm
      fields={[
        {
          name: "name",
          initialValue: "",
          label: "Name product",
          type: "text",
          placeholder: "Coffe",
          validation: Yup.string()
            .max(50, "Maximum 50 characters")
            .required(REQUIRED),
        },
        {
          name: "image",
          initialValue: "",
          label: "image",
          type: "text",
          placeholder: "put a link image",
          validation: Yup.string()
            .matches(URL, "URL is not valid")
            .required(REQUIRED),
        },
        {
          name: "quantity",
          initialValue: "",
          label: "Quantity",
          type: "number",
          placeholder: "Coffee",
          validation: Yup.number()
            .positive()
            .nullable(false)
            .required(REQUIRED),
        },
        {
          name: "price",
          initialValue: "",
          label: "Price",
          type: "number",
          placeholder: "Coffee",
          validation: Yup.number().positive().required(REQUIRED),
        },
        {
          name: "comments",
          initialValue: "",
          label: "Comment",
          type: "text",
          component: "textarea",
          CustomStyle: "h-20",
          placeholder: "Mesaj",
          validation: Yup.string()
            .max(500, "Maximum 500 characters")
            .notRequired(),
        },
        {
          name: "description",
          initialValue: "",
          label: "Description",
          type: "text",
          component: "textarea",
          CustomStyle: "h-20",
          placeholder: "Mesaj",
          validation: Yup.string()
            .max(500, "Maximum 500 characters")
            .notRequired(),
        },
        {
          name: "rating",
          initialValue: "",
          label: "Rating",
          type: "number",
          placeholder: "3",
          validation: Yup.number()
            .min(1, "Minimum 1 stars")
            .max(5, "Maximum 5 stars")
            .positive()
            .notRequired(),
        },
      ]}
      text="CREATE"
      onSubmit={async (values) => {
        console.log(values);
        try {
          let { data } = await postProduct(values);

          // success message
          let response = "Message sent successfully";

          Swal.fire({
            title: response,
            icon: "success",
            timer: 1500,
            position: "top-end",
            showConfirmButton: false,
          });
        } catch (e) {
          // Error message
          let response = "The message could not be sent";

          Swal.fire({
            title: response,
            icon: "error",
            timer: 1500,
            position: "top-end",
            showConfirmButton: false,
          });

          throw e;
        }
      }}
    />
  );
};
