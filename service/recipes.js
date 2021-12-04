module.exports = (recipe) => {
  const { name, preparation, ingredients } = recipe;
  if (!name || !preparation || !ingredients) {
    return ({ message: 'Invalid entries. Try again.' });
  }
  return null;
};