const Employee = require("../lib/Employee");

test("creates a new Employee and test constructor", () => {
    var createEmployee = new Employee('Chris', 27, 'Chrismanfredijr@gmail.com');

    expect(createEmployee.name).toEqual('Chris');
    expect(createEmployee.id).toEqual(27)
    expect(createEmployee.email).toEqual('Chrismanfredijr@gmail.com');
})

test("returns employee name", () => {
    var createEmployee = new Employee('Chris', 27, 'Chrismanfredijr@gmail.com');
    expect(createEmployee.getName()).toEqual('Chris');
})

test("returns employee ID", () => {
    var createEmployee = new Employee('Chris', 27, 'Chrismanfredijr@gmail.com');
    expect(createEmployee.getId()).toEqual(27);
})

test("returns employee email", () => {
    var createEmployee = new Employee('Chris', 27, 'Chrismanfredijr@gmail.com');
    expect(createEmployee.getEmail()).toEqual('Chrismanfredijr@gmail.com');
})

test("returns Employee role", () => {
    var createEmployee = new Employee('Chris', 27, 'Chrismanfredijr@gmail.com');
    expect(createEmployee.getRole()).toEqual('Employee');
})