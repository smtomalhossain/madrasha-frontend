import { JSX } from "react";

interface KnowledgeCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const KnowledgeCard: React.FC<KnowledgeCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <div className="flex items-center gap-4 mb-4">
        {icon}
        <h3 className="text-2xl font-semibold text-gray-800">
          {title}
        </h3>
      </div>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default KnowledgeCard;
