const LoadingSkeleton = ({ className, width, height, radius }) => {
  return (
    <div
      className={`skeleton ${className}`}
      style={{
        height: height,
        width: width || "100%",
        borderRadius: radius,
      }}
    />
  );
};

export default LoadingSkeleton;
