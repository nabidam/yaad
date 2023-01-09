const Option = ({ children, value, changeHandler }: any) => {
  return (
    <div
      className="ease-in-out duration-300 p-[10px] bg-option-bg cursor-pointer hover:bg-option-bg-hover"
      onClick={() => changeHandler(value)}
    >
      {children}
    </div>
  );
};

export default Option;
