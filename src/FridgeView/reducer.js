const initialState = {
    selectedIngredients:[]

}

export default ( state = initialState,action ) => {
    switch (action.type) {
        case 'ADD_SELECTED_INGREDIENT':
            return {
                ...state,
                selectedIngredients: state.selectedIngredients.concat(action.ingredient)

            }
        case 'REMOVE_SELECTED_INGREDIENT':
            return {
                ...state,
                selectedIngredients : state.selectedIngredients.filter( ingredient =>
                ingredient.id !== action.ingredientId
                )
            }
        default:
            return state
    }
}
