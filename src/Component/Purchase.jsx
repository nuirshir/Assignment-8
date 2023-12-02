import TitleList from "./titleList";
import PropTypes from 'prop-types'

const Purchase = ({names, Credit, Price, remaining}) => {
  return (
    <div className="md:w-1/4 rounded-xl h-min bg-white p-4 shadow-lg hover:shadow-indigo-500/40">

      <p className="text-[#2F80ED] text-lg font-bold pb-4  border-b border-[rgba(28, 27, 27, 0.2)]">
        Credit Hour Remaining {remaining} hr
      </p>
      <p className="text-lg font-bold my-4">Course Name</p>

      <ol className="text-[#1C1B1B99] text-base font-normal">
        {
            names.map((name, i) => <li key={i} > <TitleList name={name}></TitleList> </li>)
        }
      </ol>

      <p className=" text-base font-medium text-[#1C1B1BCC]   py-4 my-4 border-y border-[rgba(28, 27, 27, 0.2)]">
        Total Credit Hour : <span className="text-blue-500">{Credit}hr</span>
      </p>
      <p className=" text-base font-medium text-[#1C1B1BCC]">Total Price :  <span className="text-red-500">{Price.toFixed(2)}</span>USD</p>
    </div>
  );
};

Purchase.propTypes ={
    names: PropTypes.array,
    Credit: PropTypes.number,
    Price: PropTypes.number,
    remaining: PropTypes.number 
}

export default Purchase;
