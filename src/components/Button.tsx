interface ButtonProps {
  title?: string;
  onClick?: () => void;
  className?: string;
}

const Button = ({
  title,
  onClick,
  className
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={className}
    >
      {title}
    </button>
  );
};

export default Button;
