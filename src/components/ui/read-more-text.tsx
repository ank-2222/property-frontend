import { useState } from "react";

interface ReadMoreTextProps {
  text: string;
}

const ReadMoreText: React.FC<ReadMoreTextProps> = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className="relative">
      <p className={`text-dtext ${isExpanded ? "" : "line-clamp-2"} transition-all`}>
        {text}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-primary font-regular mt-1 block"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default ReadMoreText;
