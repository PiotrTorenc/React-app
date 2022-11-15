const strContains = (firstString, secondString) => {
  if (firstString.toLowerCase().includes(secondString.toLowerCase())) {
    return true;
  } else {
    return false;
  }
};

export default strContains;
