const DetailStatus = ({ type, content, className }) => {
  return (
    <span className={`flex gap-x-2 ${className}`}>
      <span className="font-semibold text-white">{type}: </span>
      <span className="opacity-75">{content}</span>
    </span>
  );
};

export default DetailStatus;
