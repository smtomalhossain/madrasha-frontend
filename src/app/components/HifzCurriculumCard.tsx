interface HifzCurriculumCardProps {
    title: string;
    description: string;
    time: string;
  }
  
  const HifzCurriculumCard: React.FC<HifzCurriculumCardProps> = ({title, description, time}) => {
    return (
      <div className="bg-white border rounded-lg shadow-lg p-6 flex flex-col hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-xl font-semibold text-green-700 mb-2">
          {title}
        </h2>
        <p className="text-gray-700 mb-4">
          {description}
        </p>
        <div className="mt-auto">
          <span className="text-sm font-medium text-green-500">
         {time}
          </span>
        </div>
      </div>
    );
  };
  
  export default HifzCurriculumCard;
  