export const getImgUrl = (url: string): string => {
  console.log(process.env.API_URL);
  return `${process.env.API_URL}${url}`;
};
