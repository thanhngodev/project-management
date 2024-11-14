import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Header from "../Header";
import { X } from "lucide-react";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  name: string;
};
const Modal = ({ children, isOpen, onClose, name }: Props) => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowAnimation(true);
    } else {
      const timer = setTimeout(() => setShowAnimation(false), 300); // Delay để đợi animation đóng hoàn tất
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen && !showAnimation) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-50 p-4">
      <div
        className={`w-full max-w-2xl rounded-lg bg-white p-4 shadow-lg dark:bg-dark-secondary ${
          isOpen ? "modal-enter" : "modal-exit"
        }`}
      >
        <Header
          name={name}
          buttonComponent={
            <button
              className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-primary text-white hover:bg-blue-600"
              onClick={onClose}
            >
              <X size={18} />
            </button>
          }
          isSmallText
        />
        {children}
      </div>
    </div>,
    document.body,
  );
};
export default Modal;
