import React, { JSX } from "react";

interface servicesCardProps {
  icon: JSX.Element;
  title: string;
  subTitle: string;
}

const ServicesCard: React.FC<servicesCardProps> = ({
  icon,
  title,
  subTitle,
}) => {
  return (
    <div className="p-2 sm:p-4 border cursor-pointer rounded-md border-green-500 shadow-md flex flex-col items-center text-center bg-white hover:bg-gray-100 transition duration-300">
      {icon}
      <h3 className="text-xl sm:text-2xl font-semibold mb-2">{title}</h3>
      <p className=" sm:text-lg text-gray-600">{subTitle}</p>
    </div>
  );
};

export default ServicesCard;
