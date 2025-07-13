'use client';

import Image from 'next/image';

interface ButtonProps {
  label: string;
  iconURL?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  fullWidth?: boolean;
  onClick?: () => void;
}

const Button = ({
  label,
  iconURL,
  backgroundColor = "bg-coral-red",
  textColor = "text-white",
  borderColor = "border-coral-red",
  fullWidth,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-body-regular
      ${backgroundColor} ${textColor} ${borderColor} rounded-full ${fullWidth ? 'w-full' : ''}`}
      onClick={onClick}
    >
      {label}
      {iconURL && (
        <Image
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full bg-white w-6 h-6"
          width={24}
          height={24}
        />
      )}
    </button>
  );
};

export default Button; 