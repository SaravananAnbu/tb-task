import { connect } from 'react-redux';
import InventoryComponent from '../components/inventory';
import { fetchInventorybyId, deleteItemFromInventory, createItemToInventory } from '../actions/inventory';


const mapStateToProps = (state) => {
	return {
		inventory: state.AppReducer.inventory,
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		fetchInventorybyId: (id) => dispatch(fetchInventorybyId(id)),
		createItemToInventory: (data) => dispatch(createItemToInventory(data)),
		deleteItemFromInventory: (id) => dispatch(deleteItemFromInventory(id)),
	}
}

const Inventory = connect(
    mapStateToProps,
    mapDispatchToProps
) (InventoryComponent)

export default Inventory;
