export const arraySortByNumber = (arr) => {
  return arr.sort((a, b) => a - b);
};

export const stringToLink = (str) => {
  const value = str.split(" ").join("-");
  return value;
};

export const linkToString = (link) => {
  const value = link.split("-").join(" ");
  return value;
};

export const setSessionStorage = (name, value) => {
  sessionStorage.setItem(name, JSON.stringify(value));
};

export const getSessionStorage = (name) => {
  return JSON.parse(sessionStorage.getItem(name));
};

export const pathnameFilter = (str) => {
  const value = str.split("/").filter((el) => el != "");
  return value; // array
};
