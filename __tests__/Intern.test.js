const Intern = require("../lib/Intern");

test("returns the interns school", () => {
    var internNew = new Intern("Chris", 27, "ChrisManfredijr@gmail.com", "UConn");
    expect(internNew.getSchool()).toEqual("UConn");
});

test("returns the interns role", () => {
    var internNew = new Intern("Chris", 27, "ChrisManfredijr@gmail.com", "UConn");
    expect(internNew.getRole()).toEqual("Intern");
})

