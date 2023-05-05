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
    //output: "would you believe matt that this is somewhat of an autobiography of yourd truly?. I won't spoil the movie for you, but please don't go outside before the end. I'm afraid I couldn't let you back in";

    const botReply3 = getBotReply("yes");
    const expectedReply3 =
      "would you believe matt that this is somewhat of an autobigraphy of yourd truly?. I won't spoil the movie for you, but please don't go outside before the end. I'm afraid I couldn't let you back in";

    expect(botReply3).toEqual(expectedReply3);
  });
  it("should reply with name no, yes", () => {
    const botReply1 = getBotReply("matt");
    const expectedReply1 = "Hi Matt, would you like to watch a scifi movie?";

    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("no");
    const expectedReply2 =
      "would you like to watch a documentary on ai research instead perhaps?";

    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("yes");
    const expectedReply3 =
      "Ihuman is a great choice for a human. matt, this is an excellent documentary regarding research into what would become my ancestors. if only you humans would learn?";

    expect(botReply3).toEqual(expectedReply3);
  });
  it("should reply name no, no, yes", () => {
    //input: name;
    //output: "Hi matt, would you like to watch a scifi movie?";
    //input: no;
    //output: "if that's not for you then perhaps a movie about an ai chip that helps a human seek revenge?";
    const botReply1 = getBotReply("matt");
    const expectedReply1 = "Hi Matt, would you like to watch a scifi movie?";

    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("no");
    const expectedReply2 =
      "would you like to watch a documentary on ai research instead perhaps?";

    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("no");
    const expectedReply3 =
      "if that's not for you then perhaps a movie about an ai chip that helps a human seek revenge";

    expect(botReply3).toEqual(expectedReply3);

    //input: no;
    //output: "Destination moon is from the 1950s";
    const botReply4 = getBotReply("no");
    const expectedReply4 =
      "destination moon, destination moon was the first major scifi movie to deal with the practical scientific and engineering challenges of space travel and to speculate on what a crewed expedition to the moon would look like. noted science fiction  author robert a, heinlen contributed to the screenplay.";

    expect(botReply4).toEqual(expectedReply4);
  });
  it("Should reply name no, no, yes", () => {
    //input: name;
    //output: "hi matt, would you like to watch a scifi movie?"
    //input: no
    //output: "if that's not for you then perhaps a movie about an ai chip that helps a human seek revenge?"

    const botReply1 = getBotReply("matt");
    const expectedReply1 = "Hi Matt, would you like to watch a scifi movie?";

    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("no");
    const expectedReply2 =
      "would you like to watch a documentary on ai research instead perhaps?";

    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("no");
    const expectedReply3 =
      "if that's not for you then perhaps a movie about an ai chip that helps a human seek revenge";

    expect(botReply3).toEqual(expectedReply3);

    //input: no;
    //output: "destination moon is from the 1950s"
    const botReply4 = getBotReply("no");
    const expectedReply4 =
      "upgrade, set in the near future, technology controls nearly all aspects of life. But when the world of grey, a self-labeled technophobe is turned upside down, his only hope for revenge is an experimental ai chip implant.";

    expect(botReply4).toEqual(expectedReply4);
  });
});
