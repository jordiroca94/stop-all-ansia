type Props = {
  children: React.ReactNode;
  className?: string;
};

const Grid = ({ children, className }: Props) => {
  return (
    <div
      className={`${className} grid grid-cols-4 lg:grid-cols-12 gap-4 lg:gap-8`}
    >
      {children}
    </div>
  );
};

export default Grid;
