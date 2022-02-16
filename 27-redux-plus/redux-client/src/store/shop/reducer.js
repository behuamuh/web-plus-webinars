const initialState = { data: [], loading: false }

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOP_SET_ITEMS':
      return {
        loading: false,
        data: action.payload.items,
      }
    case 'SHOP_ADD_ITEM':
      return {
        ...state,
        data: [...state.data, action.payload.item]
      }
    case 'SHOP_DELETE_ITEM':
      return {
        ...state,
        data: state.data.filter(item => item.id !== action.payload.id)
      }
    case 'SHOP_ITEMS_FETCH_START':
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}

export default shopReducer

