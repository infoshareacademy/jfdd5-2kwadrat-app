const filters = {
  all: person => true,
  female: person => person.gender === 'Female',
  male: person => person.gender === 'Male',
  gmailUsers: person => person.email.includes('@google.co.uk')
}

export const selectRecipes = (recipes, filterNames) => recipes.filter(
  recipe => filterNames.map(
    filterName =>
      filters[filterName](recipe)
  ).every(
    filterResult =>
    filterResult === true
  )
)
