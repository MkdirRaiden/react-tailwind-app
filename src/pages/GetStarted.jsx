import getStarted from "../assets/getStarted.png";
import Pricing from "../components/Pricing";
const GetStarted = () => {
  return (
    <>
      <div className="md:py-28 py-20" id="start">
        <div className="flex md:flex-row flex-col-reverse gap-4">
          <div className="md:w-1/2 w-full flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-4 text-primary dark:text-secondary">
              Get started and start using our services
            </h1>
            <p className="text-tertiary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
              doloribus laborum, tenetur, magnam consectetur commodi cum soluta
              tempore, distinctio provident velit? Sequi pariatur, debitis
              possimus illo cupiditate iusto exercitationem alias in iste veniam
              fugit doloremque modi ut repellendus. Quos rem, quam, aliquam
              necessitatibus sed nihil saepe ipsa a pariatur, cum quibusdam fuga
              alias veritatis facilis accusamus et voluptatem deleniti mollitia
              enim. Eaque libero veritatis ad tempora consequatur voluptas
              dolore quod sed velit. Quisquam at voluptates aspernatur quasi
              ipsam rerum quo quam numquam veritatis dolor delectus impedit
              velit sequi voluptate optio distinctio commodi rem laborum,
              nesciunt neque aliquam dignissimos? Commodi, saepe?
            </p>
          </div>
          <div className="md:w-1/2 w-full flex justify-center">
            <img src={getStarted} alt="image" width={500} />
          </div>
        </div>
        <Pricing />
      </div>
    </>
  );
};

export default GetStarted;
