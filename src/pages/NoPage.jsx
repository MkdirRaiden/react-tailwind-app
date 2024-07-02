import noPageImage from "../assets/404.png";
const NoPage = () => {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <div className="md:w-1/3 w-full flex items-center flex-col">
          <img className="w-full" src={noPageImage} alt="image" />
          <h1 className="text-2xl">OOPS... page not found!</h1>
        </div>
      </div>
    </>
  );
};

export default NoPage;
