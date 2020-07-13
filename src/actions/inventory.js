import axios from 'axios';

export const getInventories = (inventories) => {
	return {
		type: 'FETCH_INVENTORY_LIST',
		inventories
	}
}

export const getInventory = (inventory) => {
	return {
		type: 'FETCH_INVENTORY',
		inventory
	}
}

export function fetchInventories() {
	return (dispatch) => {
		return axios.get('https://5ef3901dac6d1e00168c96ef.mockapi.io/api/inventory').then(
			(res) => {
				dispatch(getInventories(res.data))
			}
		)
	}
}

export function fetchInventorybyId(id) {
	return (dispatch) => {
		return axios.get(`https://5ef3901dac6d1e00168c96ef.mockapi.io/api/inventory/${id}`).then(
			(res) => {
				dispatch(getInventory(res.data))
			}
		)
	}
}

export function deleteItemFromInventory(id) {
	return (dispatch) => {
		return axios.delete(`https://5ef3901dac6d1e00168c96ef.mockapi.io/api/inventory/${id}`).then(
			(res) => {
				dispatch(fetchInventories())
			}
		)
	}
}

export function createItemToInventory(data) {
	return (dispatch) => {
		return axios.post(`https://5ef3901dac6d1e00168c96ef.mockapi.io/api/inventory/`).then(
			(res) => {
				return res
			}
		)
	}
}
