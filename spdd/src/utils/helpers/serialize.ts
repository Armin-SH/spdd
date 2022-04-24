const Serialize = (obj: object) => {
  let str = [];
  for (let p in obj) {
    if (obj.hasOwnProperty(p)) {
      // @ts-ignore
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  }
  return str.join("&");
}

export default Serialize