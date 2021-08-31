const Employee = require("../lib/Employee");

test("create employee", () => {
  const employee = new Employee("Ehsan");
});

test("Set id", () => {
  const testValue = 100;
  const e = new Employee("Ehsan", testValue);
  expect(e.id).toBe(testValue);
});

test("Set Email ", () => {
  const testValue = "ehsan@email.com";
  const e = new Employee("Ehsan", 1, testValue);
  expect(e.email).toBe(testValue);
});

// Test if the getRole() value is Employee
test("getRole() return Employee", () => {
  const testValue = "Employee";
  const e = new Employee("Ehsan", 1, "ehsan@email.com");
  expect(e.getRole()).toBe(testValue);
});
