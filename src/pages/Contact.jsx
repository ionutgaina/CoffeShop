import { ContactForm } from "../components/Contact/ContactForm";
import { Page } from "../components/Page/Page";
export const Contact = () => {
  return (
    <Page>
      <div className="py-14 px-5 md:my-auto">
        <div className="lg:w-1/2 md:w-11/12 m-auto bg-primary rounded-2xl">
          <div className="m-auto p-5 pb-10 ">
            <h1 className=" text-2xl md:text-3xl font-medium text-black">
              Contact us
            </h1>
            <ContactForm />
          </div>
        </div>
      </div>
    </Page>
  );
};
