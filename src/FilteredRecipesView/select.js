const filters = {
  all: recipe => true,
  difficult: recipe => recipe.difficult === 'łatwe',
  time: recipe => recipe.time === '45'
  // gmailUsers: person => person.email.includes('@google.co.uk')
}

export const selectRecipes = (recipes, filterNames) => recipes.filter(
  recipe => filterNames.map(
    filterName => {
      console.log(filterName)
      return filters[filterName](recipe)
    }

  ).every(
    filterResult =>
    filterResult === true
  )
)
