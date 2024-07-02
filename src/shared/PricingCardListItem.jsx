const PricingCardListItem = ({ nme }) => {
  return (
    <>
      <ul className="mt-4 space-y-2 px-4 mx-auto w-fit">
        <li className="flex gap-2 items-center">
          <span className="rounded-full bg-green-500  h-4 w-4"></span>
          Videos of Lessons
        </li>
        <li className="flex gap-2 items-center">
          <span className="rounded-full bg-green-500  h-4 w-4"></span>
          Homework Check
        </li>
        <li className="flex gap-2 items-center">
          <span
            className={`rounded-full ${
              nme == "Start" ? "bg-red-500" : "bg-green-500"
            } h-4 w-4`}
          ></span>
          Additional Practical Tasks
        </li>
        <li className="flex gap-2 items-center">
          <span
            className={`rounded-full ${
              nme == "Start" ? "bg-red-500" : "bg-green-500"
            }  h-4 w-4`}
          ></span>
          Monthly Conferences
        </li>
        <li className="flex gap-2 items-center">
          <span
            className={`rounded-full ${
              nme == "Premium" ? "bg-green-500" : "bg-red-500"
            }  h-4 w-4`}
          ></span>
          Personal Advice From Teacher
        </li>
      </ul>
    </>
  );
};

export default PricingCardListItem;
