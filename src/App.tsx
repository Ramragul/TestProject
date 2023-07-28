import { useState } from 'react'
import LikeButton from "./Components/LikeButton"
import Navbar from './Components/navbar'
import Cart from './Components/Cart'
import ExpandableText from './Components/ExpandableText'
import Form from './Components/Form'
import Form1 from './Components/Form1'
import ExpenseTracker from './Components/ExpenseForm'
import ExpenseTable from './Components/ExpenseTable'
import { produce } from 'immer'
import ExpenseFilter from './Components/ExpenseFilter'
import ExpenseForm from './Components/ExpenseForm'

export const categories =  ["Groceries" , "Utilities" , "Entertainment"]
function App() {
// const[cart,setCart] = useState({
//   discount : .5,
//   items: [
//     {
//       id:1 , title: "Product1" , quantity : 1
//     },
//     {
//       id:2 , title: "Product2" , quantity : 1
//     }
//   ]
// })



const [expenses,setExpenses] = useState([
  {id:1 , description:"Milk", amount:25 , category:'Groceries'},
  {id:2 , description:"Cricket Bat", amount:150 , category:'Sports'},
  {id:3 , description:"GameDvd", amount:100 , category:'Entertainment'},
  {id:4 , description:"Sugar", amount:55 , category:'Groceries'},
  {id:5 , description:"EB Bill", amount:475 , category:'Utilities'},

])

const [selectedCategory,setSelectedCategory] = useState ("")

const [cartItems,setCartItems] = useState([{'description': "",'amount': "",'category': ""}])

  const [count, setCount] = useState(0)
  //const[cartItems,setCartItems] = useState(["Books","Electronics","Groceries","HealthCare","Cosmetics","Fitness","Lifestyle"])

  // const clickEvent = ()=> {
  //   console.log("Icon CLicked")
  //   setCart({
  //     ...cart,items: cart.items.map(item=> item.id ===1 ?{...item, quantity:item.quantity+1} :item)
  //   })
  //   console.log(cart)
  // }
  const onClear = () => {
    console.log("Clear Initiated")
    setCartItems([])
  }

  // const addCartItem = (data:typeof cartItems) => {
  //  // console.log({addCartItem})
  //   // setCartItems(produce (draft=> {
  //   //   draft.find(item=> item.description === "Milk" ? item.description ="Paal" : data)
  //   // }))
  //   // console.log("Item Added")
  
  //   setCartItems( cartItems=> [{...cartItems,data})

  //   console.log("Cart Value From App")
  //   console.log(cartItems)

  // }

  const visibleExpenses = selectedCategory ? expenses.filter((e)=> e.category === selectedCategory) : expenses

  return (
    <>
  {/* <LikeButton onClick={clickEvent}/>
  <Navbar cartItemsCount = {cartItems.length}/>
  <Cart cartItems={cartItems} onClear={onClear}/> */}
  {/* <ExpandableText>
   Hello World
  </ExpandableText> */}
  {/* <Form/> */}
  {/* <ExpenseTracker items = {cartItems}   addCartItem={addCartItem}/> */}
  <div className="mb-5"><ExpenseForm onSubmit={expense=>setExpenses([...expenses,{...expense,id:expenses.length+1}])}/></div>
<ExpenseFilter onSelectCategory={(value)=> setSelectedCategory(value)}/>
<ExpenseTable expenses={visibleExpenses} onDelete={(id)=>setExpenses(expenses.filter((e)=>e.id !== id ))}/>
    </>
  )
}

export default App
