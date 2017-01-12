const filters = {
  all: recipe => true,
  difficultEase: recipe => recipe.difficult === 'łatwe',
  difficultMedium: recipe => recipe.difficult === 'średnie',
  difficultHard: recipe => recipe.difficult === 'trudne',
  timeShort: recipe => recipe.time >= 20 && recipe.time <= 30,
  timeMedium: recipe => recipe.time >= 40 && recipe.time <= 50,
  timeLong: recipe => recipe.time >= 60 && recipe.time <= 70
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
