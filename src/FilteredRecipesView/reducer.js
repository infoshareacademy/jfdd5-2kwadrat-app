import recipes from '../data/recipes'

const initialState = {
  recipes: recipes,
  filterNames: ['all'],
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        filterNames: state.filterNames.concat(action.filterName)
      }
    case 'RESET_FILTERS':
      return {
        ...state,
        filterNames: ['all']
      }
    default:
      return state
  }
}