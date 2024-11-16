const ChartCard: React.FC<{
  title: string;
  children: React.ReactNode;
  className?: string;
}> = ({ title, children, className = "" }) => {
  return (
    <div
      className={`rounded-lg bg-white p-4 shadow dark:bg-dark-secondary ${className}`}
    >
      <h3 className="mb-4 text-lg font-semibold dark:text-white">{title}</h3>
      {children}
    </div>
  );
};

export default ChartCard;
