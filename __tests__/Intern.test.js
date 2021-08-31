const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

test("Create Intern", () => {
  const intern = new Intern("InternName");
});

test("Set School", () => {
  const testValue = "GeorgiaTech";
  const e = new Intern("Int", 1, "intern@email.com", testValue);
  expect(e.school).toBe(testValue);
});

test("Get School with getSchool() method", () => {
  const testValue = "GeorgiaTech";
  const e = new Intern("Int", 1, "intern@email.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});

test("getRole() return Intern", () => {
  const testValue = "Intern";
  const e = new Intern("Int", 1, "intern@email.com", "GeorgiaTech");
  expect(e.getRole()).toBe(testValue);
});
