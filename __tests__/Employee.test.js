const Employee = require("../lib/Employee");

test("create employee", () => {
  const employee = new Employee("EmployeeName");
});

test("Set id", () => {
  const testValue = 100;
  const e = new Employee("Emp", testValue);
  expect(e.id).toBe(testValue);
});

test("Set Email", () => {
  const testValue = "employee@email.com";
  const e = new Employee("Emp", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("getRole() return Employee", () => {
  const testValue = "Employee";
  const e = new Employee("EmployeeName", 1, "employee@email.com");
  expect(e.getRole()).toBe(testValue);
});
