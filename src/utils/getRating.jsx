export const getRating = (rating = "") => {
  if (!rating) return "";
  return rating.split(" ")[0];
};
