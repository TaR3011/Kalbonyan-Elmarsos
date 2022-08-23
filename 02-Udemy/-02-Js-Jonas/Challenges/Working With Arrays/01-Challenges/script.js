const checkDogs = function (julia, kate) {
  const newJulia = julia.slice(1, julia.length - 2);

  const allDogs = newJulia.concat(kate);

  allDogs.forEach(function (dog, i) {
    let isAdult = dog > 3 ? "adult" : "puppy";
    const aboutText = `Dog number ${
      i + 1
    } is an ${isAdult} , and is ${dog} years old`;
    console.log(aboutText);
  });
};

checkDogs([3, 5, 2, 12, 7], [3, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 6, 6, 1, 4]);
