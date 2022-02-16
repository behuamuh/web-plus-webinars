import * as api from '../../api';

export function addItem(item) {
  return {
    type: 'SHOP_ADD_ITEM',
    payload: { item }
  }
}

export function setItems(items) {
  return {
    type: 'SHOP_SET_ITEMS',
    payload: { items }
  }
}

export function deleteItem(id) {
  return {
    type: 'SHOP_DELETE_ITEM',
    payload: { id }
  }
}

export function getAllItemsStart() {
  return {
    type: 'SHOP_ITEMS_FETCH_START',
  }
}

// async
export function getAllItems() {
  return async dispatch => {
    dispatch(getAllItemsStart());

    const data = await api.getAllItems();
    dispatch(setItems(data));
  }
}
