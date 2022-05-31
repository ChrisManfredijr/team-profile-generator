const Engineer = require("../lib/Engineer");

test("Get's the Engineers Github username", () => {
    const engineerNew = new Engineer("Chris", 27, "Chrismanfredijr@gmail.com", "chrismanfredijr");

    expect(engineerNew.github).toEqual("chrismanfredijr");
});

test("get the Engineers role", () => {
    const engineerNew = new Engineer("Chris", 27, "Chrismanfredijr@gmail.com", "chrismanfredijr");

    expect(engineerNew.getRole()).toEqual("Engineer");
})