import { Header } from "./Header";
import { Footer } from "./Footer";

export const Page = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col flex-grow">{children}</div>
      <Footer />
    </div>
  );
};
