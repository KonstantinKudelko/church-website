export const getImgUrl = (url: string): string =>
  `${process.env.NEXT_PUBLIC_STATIC_URL}${url}`;
