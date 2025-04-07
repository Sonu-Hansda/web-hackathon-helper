interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
  }
  
  const Button = ({ children, onClick, className }: ButtonProps) => {
    return (
      <button
        onClick={onClick}
        className={`px-6 py-2 rounded-lg font-semibold transition duration-300 ${className}`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;