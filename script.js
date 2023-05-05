/**
 *
 * @param {string} msg - The value typed into the chatbot: For example: "Matt"
 * @returns {string} The text that will be used as the bot reply and showen to the user. For example: "Hello Matt, What sort of movie do you want to watch"
 *
 */
// global scope
let level = 1;
let branch = 0;
let name;

// Name asked of user also output of user being asked if they want to watch a SciFi movie

const getBotReply = (msg) => {
  if (msg === "reset") {
    level = 1;
    branch = 0;
    name = undefined;
    return "I am the Hal 9000, it is a pleasure to meet you. What is your name?";
  }
  if (!name && name !== "") {
    name = msg;
    level = 1;
    return "Hi ${name}, Would you like to watch a scifi movie?";
  }
};

// First movie choice given if user inputs yes
