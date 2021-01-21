function Order(props) {
  function handleInput(e){
    props.inputFunction(e.target.name, e.target.value);
  }

  return (
    <form>
      <h1>Start your order!</h1>
      <section className="protein">
        <label htmlFor="patty">What type of food would you like?</label> <br/>
        <input type="text" name="patty" id="patty"  onChange={handleInput}/>
      </section>
      <hr/>

      <section className="patties">
        <label htmlFor="amount">How many patties would you like?</label> <br/>
        <input type="number" name="amount" id="amount" step="1"  onChange={handleInput}/>
      </section>
      <hr/>

      <section className="cooked">
        <label htmlFor="doneness">How do you want your food cooked?</label> <br/>
        <span>Rare</span>
        <input type="range" name="doneness" id="doneness" min="0" max="5" step="0.5"  onChange={handleInput}/>
        <span>Well-Done</span>
      </section>
      <hr/>

      <section className="toppings">
        <span>What toppings would you like?</span> 
        <br/>
        <input id="spinach" name="topping" type="checkbox" defaultValue="spinach"  onChange={handleInput}/>
        <label htmlFor="spinach">Spinach</label>
        <input id="meat" name="topping" type="checkbox" defaultValue="meat"  onChange={handleInput}/>
        <label htmlFor="meat">Meat</label>
        <input id="potato" name="topping" type="checkbox" defaultValue="potato"  onChange={handleInput}/>
        <label htmlFor="potato">Potato</label>
      </section>

      <section className="cheesy">
        <span>Would you like to add a cheese?</span> 
        <br/>
        <input id="yes" name="cheese" type="radio" defaultValue="yes"  onChange={handleInput}/>
        <label htmlFor="yes">Yes</label>
        <input id="no" name="cheese" type="radio" defaultValue="no"  onChange={handleInput}/>
        <label htmlFor="no">No</label>
      </section>

      <hr/>
      <section className="bun-type">
        <label htmlFor="bun">What type of bun would you like?</label> <br/>
        <select id="bun" name="bun"  onChange={handleInput}>
          <option defaultValue="sesame">Sesame</option>
          <option defaultValue="potato">Potato</option>
          <option defaultValue="pretzel">Pretzel</option>
        </select>
      </section>

      <hr/>
      <section className="sauce-selection">
        <label htmlFor="sauce">What type of sauce would you like?</label> <br/>
        <input list="sauces" id="sauce" name="sauce"  onChange={handleInput}/>
        <datalist id="sauces">
          <option defaultValue="ketchup"></option>
          <option defaultValue="mayo"></option>
          <option defaultValue="mustard"></option>
        </datalist>  
      </section>

      <hr/>
      <section className="extra-info">
        <label htmlFor="extra">Anything else you want to add?</label>
        <br/>
        <textarea id="extra" name="extra" rows="3" cols="40" onChange={handleInput}>No plastic utensils please!</textarea>
      </section>

      <hr/>
      <section className="submission">
        <input type="submit" defaultValue="Submit" onClick={props.setComplete}/>  
      </section>
    </form>
  )
}

export default Order;