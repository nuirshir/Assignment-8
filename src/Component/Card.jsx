import PropTypes from "prop-types";
import { FaDollarSign } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";

const Card = ({ addList, card }) => {
  const { img, name, price, credit, details } = card;

  return (
    <div className="rounded-xl bg-white p-4 shadow-lg hover:shadow-indigo-500/40">
      <img
        className="rounded-xl shadow-lg hover:shadow-indigo-500/40"
        src={img}
        alt=""
      />

      <div className="">
        <h1 className="text-xl font-semibold mt-4 mb-3 h-14">{name}</h1>
        <p className="text-sm font-normal h-44 text-[rgba(28, 27, 27, 0.6)]">
          {details}
        </p>
      </div>

      <div className="flex mt-4 gap-3 items-center">
        <p className="text-lg">
          <FaDollarSign />
        </p>
        <p className=" text-[rgba(28, 27, 27, 0.6)] text-base font-medium">
          Price: <span className="text-red-500">${price}</span>
        </p>
        <p className=" text-lg ">
          <IoBookOutline />
        </p>
        <p className=" text-[rgba(28, 27, 27, 0.6)] text-base font-medium ">
          Credit: <span className="text-blue-500"> {credit}hr </span>
        </p>
      </div>

      <button
        onClick={() => addList(name, credit, price)}
        className="text-lg font-semibold text-white text-center mt-4 p-2 rounded-xl w-full  
      bg-gradient-to-l hover:bg-gradient-to-t from-cyan-400 to-blue-500 shadow-lg hover:shadow-indigo-500/40"
      >
        Select
      </button>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object,
  addList: PropTypes.func,
};

export default Card;
