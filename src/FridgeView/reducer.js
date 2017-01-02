
//dupa
const initialState = {
    selectedIngredients:[],
    haveSelectedIngredients:false

}

export default ( state = initialState,action ) => {
    switch (action.type) {
        case 'ADD_SELECTED_INGREDIENT':
            return {
                ...state,
                selectedIngredients: state.selectedIngredients.concat(action.ingredient),
                haveSelectedIngredients:true

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
