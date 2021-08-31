const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

test("Create Manager", () => {
  const manager = new Manager("ManagerName");
});

test("Set Office Number", () => {
  const testValue = 100;
  const e = new Manager("MGT", 1, "manager@email.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("Get Office# with getOfficeNumber() method", () => {
  const testValue = 100;
  const e = new Manager("MGT", 1, "manager@email.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});

test("getRole() return Manager", () => {
  const testValue = "Manager";
  const e = new Manager("MGT", 1, "manager@email.com", 100);
  expect(e.getRole()).toBe(testValue);
});
