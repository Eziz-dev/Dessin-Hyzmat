interface CardProps {
  heading: string;
  src: string;
  alt: string;
  text: string;
}

const Card = ({ heading, src, alt, text }: CardProps) => {
  return (
    <div className="max-w-lg rounded-lg overflow-hidden shadow-lg bg-white">
      <img src={src} alt={alt} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{heading}</h2>
        <p className="text-gray-600 mt-2">{text}</p>
      </div>
    </div>
  );
};

export default Card;
