import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center pb-1 pt-5">
        <h2 className="uppercase font-semibold">Unititied Quiz</h2>
        <button className="border uppercase rounded-md bg-slate-300 p-2">
          save & proceed
        </button>
      </div>
      <div className="border-spacing-1 w-auto bg-black h-1"></div>
    </div>
  );
};

export default Header;
