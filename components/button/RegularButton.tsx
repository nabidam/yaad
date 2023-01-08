const RegularButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="ease-in-out duration-500 max-w-[240px] lg:w-[240px] xs:w-[180px] h-[40px] rounded-[3px] p-[10px] bg-btn-bg text-btn-text text-[16px] flex justify-center align-middle gap-[8px] hover:transition-all hover:bg-btn-bg-hover active:bg-btn-bg-focus">
      {children}
    </button>
  );
};

export default RegularButton;
