let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];

// TASK 1
const showGryffindor = (peopleAtHogwarts) => {
  let names = peopleAtHogwarts
    .filter((wizard) => wizard.house === "Gryffindor")
    .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  console.log("\n", "Task 1:", "\n", names);
  return names;
};

showGryffindor(hogwarts);

// TASK 2
const showPetOwnerTeachers = (peopleAtHogwarts) => {
  let names = peopleAtHogwarts
    .filter((magicUsers) => magicUsers.occupation === "Teacher")
    .filter((teacher) => teacher.pet !== null)
    .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  console.log("\n", "Task 2:", "\n", names, "\n");
  return names;
};

showPetOwnerTeachers(hogwarts);
