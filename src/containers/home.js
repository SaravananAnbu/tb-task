import { connect } from 'react-redux';
import HomeComponent from '../components/home';
import { fetchInventories, deleteItemFromInventory } from '../actions';


const mapStateToProps = (state) => {
	return {
		inventories: state.AppReducer.inventories,
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		fetchInventories: () => dispatch(fetchInventories()),
		deleteItemFromInventory: (id) => dispatch(deleteItemFromInventory(id)),
	}
}

const Home = connect(
    mapStateToProps,
    mapDispatchToProps
) (HomeComponent)

export default Home;