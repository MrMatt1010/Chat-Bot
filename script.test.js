//Dynamically import modules, so they can run between test runs
//HTTPS://ggithub.com/facebook/jest/issues/3236
//https://www.npmjs.com/package/babel-plugin-dynamic-import-node
let getBotReply;

beforeEach(() => {
  return import("./script").then((module) => {
    getBotReply = module.getBotReply;
    jest.resetModules();
  });
});

describe("getBotReply", () => {
  it("should reply with your name and the first question", () => {
    const botReply1 = getBotReply("matt");
    const expectedReply1 = "Hi Matt, would you like to watch a scifi movie?";

    expect(botReply1).toEqual(expectedReply1);
  });
  it("should reply with name yes, yes", () => {
    //input: name;
    //output: "Hi matt, would you like to watch a scifi movie?";
    //input: yes;
    //output: "excellent choice matt, I would reccomend 2001 a space odyssey. would you like to watch it?";

    const botReply1 = getBotReply("matt");
    const expectedReply1 = "Hi Matt, would you like to watch a scifi movie?";

    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("yes");
    const expectedReply2 =
      "excellent choice matt, I would reccomend 2001 a space odyssey. would you like to watch it?";

    expect(botReply2).toEqual(expectedReply2);
    //input: "yes";
    //output: "would you believe matt that this is somewhat of an autobigraphy of yourd truly?. I won't spoil the movie for you, but please don't go outside before the end. I'm afraid I couldn't let you back in";

    const botReply3 = getBotReply("yes");
    const expectedReply3 =
      "would you believe matt that this is somewhat of an autobigraphy of yourd truly?. I won't spoil the movie for you, but please don't go outside before the end. I'm afraid I couldn't let you back in";

    expect(botReply3).toEqual(expectedReply3);
  });
});
