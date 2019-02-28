export default (state, action) => {
  state = state || {
    money: { amount: 100000 }
  }
  switch (action.type) {
    case '我想花钱':
      return {
        money: {
          amount: state.money.amount - action.payload
        }
      }
    default:
      return state
  }
}