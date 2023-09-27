let yearsOfExperience = 5;
if (yearsOfExperience <= 0.5) {
  console.log("Salary = 0, Bonus =", (0 / 100) * 0, "percent");
} else if ((yearsOfExperience > 0.5, yearsOfExperience <= 1)) {
  console.log("Salary = 100 pounds, Bonus =", (100 / 100) * 1, "percent");
} else if ((yearsOfExperience > 1, yearsOfExperience <= 2)) {
  console.log("Salary = 333 pounds, Bonus =", (333 / 100) * 3, "percent");
} else if ((yearsOfExperience > 2, yearsOfExperience <= 4)) {
  console.log("Salary = 555 pounds, Bonus =", (555 / 100) * 4, "percent");
} else if (yearsOfExperience > 4) {
  console.log(
    "Salary = 667 pounds, Bonus =",
    yearsOfExperience * 667,
    "pounds"
  );
}
