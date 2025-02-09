interface IslamicVideoCardProps {
    link: string;
    icon: string;
    title: string;
    boldTitle: string;
    description: string;
}

const IslamicVideoCard:React.FC<IslamicVideoCardProps> = ({link, icon, title, boldTitle, description}) => {
  return (
    <div className="relative bg-white rounded-lg shadow-md p-4 border border-gray-200">
      <iframe
        className="w-full h-56 rounded-md"
        src={link}
        title={title}
        // frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        // allowfullscreen="flash"
      ></iframe>
      <div className="mt-4">
        <h3 className="text-xl font-bold flex items-center gap-2">
          {icon}
          {title}
        </h3>
        <p className="text-gray-500">
            <strong>{boldTitle} </strong>
            {description}
        </p>
      </div>
    </div>
  );
};

export default IslamicVideoCard;
