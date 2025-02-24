import { JSX } from "react";

interface OurHeritageProps {
icon: JSX.Element;
title: string;
description: string;
}

const OurHeritage: React.FC<OurHeritageProps> = ({icon, title, description}) => {
    return (
            <div className="bg-white shadow-lg rounded-lg p-8 text-center">
                {icon}
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
    );
}

export default OurHeritage;
