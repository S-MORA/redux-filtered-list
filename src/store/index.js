import generate from "../helpers/data";
const initialState = {
  appliedFilters: []
};
const LOAD_DATA = "LOAD_DATA";
const FILTER_BY_VALUE = "FILTER_BY_VALUE";

export const loadData = (payload) => ({
  type: LOAD_DATA,
  payload
});
export const filterByValue = (payload) => ({
  type: FILTER_BY_VALUE,
  payload
});


const filterStore = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_VALUE:
      //clone the state
      let newState = Object.assign({}, state);
      //the value received from our presentational component
      let value = action.payload.value;
      let filteredValues = state.products.filter(product => {
        //look for objects with the received value in their ‘name’ or ‘disicipline’ fields
        return product.name.toLowerCase().includes(value) ||
          product.discipline.toLowerCase().includes(value);
      });

      let appliedFilters = state.appliedFilters;
      //if the value from the input box is not empty
      if (value) {
        //check if the filter already exists in the tracking array, for future implmentation of more filters
        let index = appliedFilters.indexOf(FILTER_BY_VALUE);
        if (index === -1)
          //if it doesn’t, add it.
          appliedFilters.push(FILTER_BY_VALUE);
        //change the filtered products to reflect the change
        newState.filteredProducts = filteredValues;
      } else {
        //if the value is empty, assume everything has been erased
        let index = appliedFilters.indexOf(FILTER_BY_VALUE);
        // remove the current filter
        appliedFilters.splice(index, 1);
        if (appliedFilters.length === 0) {
          //if there are no filters applied, reset the products to normal.
          newState.filteredProducts = newState.products;
        }
      }
      return newState;
    case LOAD_DATA:
      let count = action.payload.count;
      let products = generate(count);
      return {
        ...state,
        products,
        filteredProducts: products
      };
    default:
      return state;
  }
};


export default filterStore;
