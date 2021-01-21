function Summary(props) {
  return (
    <div>
      <h1>Thanks for your order!</h1>
      <p>The food you like: {props.order.patty}</p>
      <p>Number of patties: {props.order.amount}</p>
      <p>Cooked level: {props.order.doneness}</p>
      <p>The topping you choose: {props.order.topping}</p>
      <p>Extra cheese: {props.order.cheese}</p>
      <p>The bun type: {props.order.bun}</p>
      <p>Sauces: {props.order.sauce}</p>
      <p>Anything extra: {props.order.extra}</p>
    </div>
  )
}

export default Summary;