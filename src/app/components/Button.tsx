interface ButtonProps {
    handleClick: () => void;
  }
  
  const Button: React.FC<ButtonProps> = ({ handleClick }) => {
    return (
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Show Student List
      </button>
    );
  };
  
  export default Button;
  