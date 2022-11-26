export const hashPass = (str) => {
  let res = "";
  for (let idx in str) {
    res += str.charCodeAt(idx);
  }

  return res;
};
