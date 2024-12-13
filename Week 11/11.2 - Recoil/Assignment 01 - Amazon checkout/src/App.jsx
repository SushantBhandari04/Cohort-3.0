import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { checkoutSelector, itemAtomFamily } from "./Store/Atoms/atom"

function App(){
  return <div style={{display:"flex"}}>
    <RecoilRoot>
      <div>
      <Item id={1}/>
      <Item id={2}/>
      <Item id={3}/>
      </div>
      <Checkout/>

    </RecoilRoot>
  </div>
}

function Item({id}){
  const [item, setItem] = useRecoilState(itemAtomFamily(id));

  const title = item.title;
  const price = item.price;
  const quantity = item.quantity;

  function increase(){
    setItem(currentItem => ({...currentItem, quantity: currentItem.quantity+1}))
  }

  function decrease(){
    setItem(currentItem => ({...currentItem, quantity: currentItem.quantity-1}))
  }


return (
  <div style={{display:"flex", justifyContent:"space-between", borderRadius:10, height:100, width:700, backgroundColor:"white"}}>

    <div style={{display:"flex", marginLeft:10}}>
      <div style={{alignContent:"center"}}>
        <img style={{height:65, width:72}} src={item.img} alt="" />
      </div>
      
      <div style={{marginLeft:15, marginBottom:10, marginTop:20}}>
        <div> {title}</div>
       
        <br />
        <button  onClick = {decrease} style={{cursor:"pointer", marginRight:5, alignContent:"center", paddingTop:0, paddingBottom:0, paddingLeft:3, paddingRight:3, width:17, backgroundColor:"lightGray", border:"none"}}>-</button>
        {quantity}
        <button onClick={increase} style={{cursor:"pointer", marginLeft:5, alignContent:"center", width:17, paddingTop:0, paddingBottom:0, paddingLeft:3, paddingRight:3, border:"none", backgroundColor:"lightGray"}}>+</button>
      </div>
    </div>
    

    <div style={{marginRight:20, alignContent:"center"}}>
      {price*quantity}
    </div>
  </div>
)
}

function Checkout(){
  const checkout = useRecoilValue(checkoutSelector);

  return <div style={{backgroundColor:"white", paddingBottom:30, paddingLeft:19, paddingTop:15, paddingRight:19, borderRadius:10, width:350, margin:20}}>
    <div style={{fontSize:18}}><h2>Order Summary</h2></div>
    <div style={{display:"flex", justifyContent:"space-between"}}>
      <div>Items ({checkout.totalQuantity}): </div>
      <div>{checkout.totalPrice}</div>
    </div>
    <div style={{display:"flex", justifyContent:"space-between"}}>
      <div><h3>Order Total:</h3> </div>
      <div><h3>{checkout.totalPrice}</h3></div>
    </div>

    <div>
      <button style={{width:"100%", height:30, backgroundColor:"lightOrange", border:"none"}}>Proceed to buy</button>
    </div>
    
  </div>

}

export default App