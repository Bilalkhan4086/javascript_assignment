const make_album = (name, title, numOfTracks) => {
  let album = {
    name,
    title,
  };
  if (numOfTracks) {
    album["noOfTracks"] = numOfTracks;
  }
  return album;
};

console.log(make_album("Atif Aslam", "AA album"));
console.log(make_album("Adba Perveen", "AP album"));
console.log(make_album("Rahat Fateh Ali Khan", "RFAK album", 50));
