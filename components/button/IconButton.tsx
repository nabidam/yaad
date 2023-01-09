const IconButton = ({
  children,
  onClick,
  disabled,
  className,
}: {
  children: React.ReactNode;
  onClick: React.MouseEventHandler;
  disabled: boolean;
  className: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-sm p-2 ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default IconButton;
