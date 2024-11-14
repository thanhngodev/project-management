type TabButtonProps = {
  name: string;
  icon: React.ReactNode;
  code: string;
  setActiveTab: (tabName: string) => void;
  activeTab: string;
};

const TabButton = ({
  name,
  icon,
  code,
  setActiveTab,
  activeTab,
}: TabButtonProps) => {
  const isActive = activeTab === code;

  return (
    <button
      className={`relative flex items-center gap-2 px-1 py-2 text-gray-500 transition-colors duration-300 ease-in-out after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-blue-600 after:transition-transform after:duration-300 after:ease-in-out hover:text-blue-600 dark:text-neutral-500 dark:hover:text-white sm:px-2 lg:px-4 ${
        isActive
          ? "text-blue-600 after:scale-x-100 dark:text-white"
          : "after:scale-x-0"
      }`}
      onClick={() => setActiveTab(code)}
    >
      {icon}
      {name}
    </button>
  );
};

export default TabButton;
