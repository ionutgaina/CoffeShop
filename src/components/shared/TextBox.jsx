export const TextBox = ({ title, content }) => {
  return (
    <div className="w-9/12 mx-auto">
      <div className="mx-auto my-auto p-5 pb-10 ">
        <h1 className="text-3xl font-medium text-black border-b border-black pb-5">
          {title}
        </h1>
        <div>
          <p className="text-left pt-5">{content}</p>
        </div>
      </div>
    </div>
  );
};
