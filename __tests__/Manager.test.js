const Manager = require("../lib/Manager");

test("get managers office #", () => {
    const createManager = new Manager("Chris", 27, "Chrismanfredijr@gmail.com", 666);
    expect(createManager.officeNumber).toEqual(666);

});

test("return managers role", () => {
    const createManager = new Manager("Chris", 27, "Chrismanfredijr@gmail.com", 666);
    expect(createManager.getRole()).toEqual("Manager");
});