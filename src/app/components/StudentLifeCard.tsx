"use client"
import Image from "next/image";

interface studentLifeCardProps {
  icon: string;
  title: string;
  description: string;
  image: string;
}

const StudentLifeCard: React.FC<studentLifeCardProps> = ({
  icon,
  title,
  description,
  image,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col justify-between">
      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
        {icon}
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed mb-4">
        {description}
      </p>
      <Image
        className="w-full h-40 object-cover rounded-md"
        src={image}
        alt=""
        width={300}
        height={200}
      />
    </div>
  );
};

export default StudentLifeCard;
