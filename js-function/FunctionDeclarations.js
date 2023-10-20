function repairFunctionCourse0(numA, numB) {
  console.log(numA * numB);
}
repairFunctionCourse0(17, 752);

function repairFunctionCourse1(messageHead, messageMidle, messageEnd) {
  console.log(messageHead + messageMidle + messageEnd);
}
repairFunctionCourse1("Welcome ", " to ", "JavaScript");

function repairFunctionCourse2(numA, numB) {
  return numA * numB;
}
let returnRepairFunctionCourse0 = repairFunctionCourse2(17, 752);
console.log(returnRepairFunctionCourse0);

function repairFunctionCourse3(messageHead, messageMidle, messageEnd) {
  return messageHead, messageMidle, messageEnd;
}
let returnRepairFunctionCourse1 = repairFunctionCourse3(
  "Welcome",
  "to",
  "JavaScript"
);
console.log(returnRepairFunctionCourse1);
