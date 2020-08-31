describe("Login Test", () => {
  it("Correct username,Correct password", () => {
    let username = "rahul";
    let password = "abc";
    expect(checkCredentials(username, password)).toBe(true);
  });

  it("Incorrect username,incorrect password", () => {
    let username = "rahul_new";
    let password = "my_pass";
    expect(checkCredentials(username, password)).toBe(true);
  });

  it("Incorrect username,correct password", () => {
    let username = "rahulM";
    let password = "rr";
    expect(checkCredentials(username, password)).toBe(true);
  });

  it("correct username,incorrect password", () => {
    let username = "ra";
    let password = "kv";
    expect(checkCredentials(username, password)).toBe(true);
  });

  it("valid username and empty password", () => {
    let username = "sm";
    let password = "";
    expect(checkCredentials(username, password)).toBe(true);
  });

  it("empty username and valid password", () => {
    let username = "";
    let password = "ll";
    expect(checkCredentials(username, password)).toBe(true);
  });

  it("case changed username /password", () => {
    let username = "Rahul";
    let password = "Abc";
    expect(checkCredentials(username, password)).toBe(true);
  });
});
