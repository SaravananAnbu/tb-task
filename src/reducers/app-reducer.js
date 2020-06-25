
const defaultState = {
    inventories: [],
    inventory: {}
};
  
const AppReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'FETCH_INVENTORY_LIST': 
            return Object.assign({}, state, {
                inventories: action.inventories,
            });
        case 'FETCH_INVENTORY': 
            return Object.assign({}, state, {
                inventory: action.inventory,
            });

        default:
            return state;
    }
};

export default AppReducer;
  