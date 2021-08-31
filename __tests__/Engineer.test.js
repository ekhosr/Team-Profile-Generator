const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

test("Create Engineer", () => {
  const engineer = new Engineer("EngineerName");
});

test("Set Github Account", () => {
  const testValue = "GitHubAccount";
  const e = new Engineer("Eng", 1, "engineer@email.com", testValue);
  expect(e.github).toBe(testValue);
});

test("Get Github Account ", () => {
  const testValue = "GitHubAccount";
  const e = new Engineer("Eng", 1, "engineer@email.com", testValue);
  expect(e.getGitHub()).toBe(testValue);
});

test("getRole() return Engineer", () => {
  const testValue = "Engineer";
  const e = new Engineer("Eng", 1, "engineer@email.com", "GitHubAccount");
  expect(e.getRole()).toBe(testValue);
});
