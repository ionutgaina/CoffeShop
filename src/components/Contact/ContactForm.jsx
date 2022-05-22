import CustomForm from "../shared/CustomForm";
import { contact } from "../../api/requests";
import { REQUIRED } from "../../common/constants";
import * as Yup from "yup";
import Swal from "sweetalert2";

export const ContactForm = () => {
  return (
    <CustomForm
      fields={[
        {
          name: "name",
          initialValue: "",
          label: "Name",
          type: "text",
          placeholder: "John Chicken",
          validation: Yup.string()
            .max(50, "Your name need to be maximum 50 characters")
            .required(REQUIRED),
        },
        {
          name: "email",
          initialValue: "",
          label: "Email",
          type: "text",
          placeholder: "john@gmail.com",
          validation: Yup.string()
            .email("Please insert a valid email")
            .required(REQUIRED),
        },
        {
          name: "message",
          initialValue: "",
          label: "Message",
          type: "text",
          component: "textarea",
          CustomStyle: "h-20",
          placeholder: "Mesaj",
          validation: Yup.string()
            .max(500, "Maximum 500 characters")
            .required(REQUIRED),
        },
      ]}
      text="SEND"
      onSubmit={async (values) => {
        console.log(values);
        try {
          let { data } = await contact(values);

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
