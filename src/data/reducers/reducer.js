export default function increaseReducer (state = { num: 5 }, action) {
  switch (action.type) {
    case "INCREASE":
      return Object.assign({}, state, {
        num: state.num + action.num
      })
    default:
      return state
  }
}