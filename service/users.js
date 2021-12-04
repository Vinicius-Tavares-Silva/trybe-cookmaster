const model = require('../model/users');

// Regex obtida no StackOverflow: https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
const emailRegex = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);

const userValidations = (user) => {
  const { name, email, password } = user;
  if (!name || !email || !password || !emailRegex.test(email)) {
    return ({ message: 'Invalid entries. Try again.' });
  }
  return null;
};

const emailValidation = async (user) => {
  const { email } = user;
  const uniqueEmail = await model.findByEmail(email);
  if (uniqueEmail) {
    return ({ message: 'Email already registered' });
  }
  return null;
};

module.exports = {
  userValidations,
  emailValidation,
};