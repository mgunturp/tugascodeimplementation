const divideAndSort = (number) => {
  const numArray = number.toString().split("0");

  const array = numArray.map((text) => text.split("").sort().join(""));

  const hasil = parseInt(array.join(""));

  return console.log(hasil);
};

divideAndSort(5956560159466056);
