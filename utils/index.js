export const checkImageURL = (url) => {
  if (!url) return false;
  else {
    const regex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;
    return regex.test(url);
  }
};
