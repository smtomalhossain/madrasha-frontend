interface qaumiMadrasaCurriculumCardProps {
    title: string;
    description: string;
    time: string;
  }
  
  const qaumiMadrasaCurriculumCard: React.FC<qaumiMadrasaCurriculumCardProps> = ({title, description, time}) => {
    return (
      <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
        <h2 className="text-2xl font-semibold text-green-600 mb-3">
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
  
  export default qaumiMadrasaCurriculumCard;
  