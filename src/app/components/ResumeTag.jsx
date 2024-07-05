import React from "react";

const ResumeTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-r-2 border-primary-500"
    : "text-[#ADB7BE] border-r-2 border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-sm px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ResumeTag;