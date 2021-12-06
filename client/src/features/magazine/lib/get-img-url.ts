export const getImgUrl = (url: string): string => {
  const baseUrl = process.env.API_URL || 'http://admin.localhost:8080';
  return `${baseUrl}${url}`;
};
