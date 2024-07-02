import { FiMessageCircle } from "react-icons/fi";

const Message = ({ message, setMesssage }) => {
  setTimeout(() => {
    setMesssage("");
  }, 5000);
  return (
    <>
      <div className="absolute md:w-1/3 w-full justify-center top-1 p-4 flex items-center gap-2 rounded-sm bg-secondary text-primary z-10000">
        <FiMessageCircle />
        {message}
      </div>
    </>
  );
};

export default Message;
