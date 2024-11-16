import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil"
import { itemAtom } from "./Store/Atoms/itemAtom"

function App(){
  return <div>
    <RecoilRoot>

    
    <div style={{display:"flex",justifyContent:"space-between", alignContent:"center"}}>
    <div>
      <Item title={"Shoes"} price={1000} quantity={2}/>
      <Item title={"Shoes"} price={1000} quantity={2}/>
      <Item title={"Shoes"} price={1000} quantity={2}/>
      <CartItems/>
    </div>
    <div>
      <Checkout items={2} total={3000}/>
    </div>
    
  </div>
  <AddItems/>
  </RecoilRoot>
  </div>
}

function CartItems(){
  const items = useRecoilValue(itemAtom);

  const itemComponents = items.map((item)=>{
    <Item title={item.title} price={item.price} quantity={item.quantity}/>
  })

  return (<div>
    {itemComponents}
  </div>
  );
}

function Item({title, price, quantity}){
  function increase(){

  }
  return (
    <div style={{display:"flex", justifyContent:"space-between", borderRadius:10, height:100, width:700, backgroundColor:"white"}}>

      <div style={{display:"flex", marginLeft:10}}>
        <div style={{alignContent:"center"}}>
          <img style={{height:65, width:72}} src="https://cdn.shopify.com/s/files/1/0665/5171/files/air-jordan-1-unc-1_1024x1024.jpg?2095653669182594769" alt="" />
        </div>
        
        <div style={{marginLeft:15, marginBottom:10, marginTop:20}}>
          <div> {title}</div>
         
          <br />
          <button onClick={increase} style={{ marginRight:5, alignContent:"center", paddingTop:0, paddingBottom:0, paddingLeft:3, paddingRight:3, width:17, border:"none", backgroundColor:"lightGray"}}>-</button>
          {quantity}
          <button style={{ marginLeft:5, alignContent:"center", width:17, paddingTop:0, paddingBottom:0, paddingLeft:3, paddingRight:3, border:"none", backgroundColor:"lightGray"}}>+</button>
        </div>
      </div>
      

      <div style={{marginRight:20, alignContent:"center"}}>
        {price}
      </div>
    </div>
  )
}


function Checkout({items, total}){
  return <div style={{backgroundColor:"white", paddingBottom:30, paddingLeft:19, paddingTop:15, paddingRight:19, borderRadius:10, width:350, margin:20}}>
    <div style={{fontSize:18}}><h2>Order Summary</h2></div>
    <div style={{display:"flex", justifyContent:"space-between"}}>
      <div>Items ({items}): </div>
      <div>{total}</div>
    </div>
    <div style={{display:"flex", justifyContent:"space-between"}}>
      <div><h3>Order Total:</h3> </div>
      <div><h3>{total}</h3></div>
    </div>

    <div>
      <button style={{width:"100%", height:30, backgroundColor:"lightOrange", border:"none"}}>Proceed to buy</button>
    </div>
    
  </div>

}

function AddItems(){
  const items = useRecoilValue(itemAtom);
  const setItems = useSetRecoilState(itemAtom);

  function addItem(){
    setItems([...items, {
      title: "Shoes",
      price: 100,
      quantity: 1
    }])
  }

  return <div>
    <button onClick={addItem}>Add item</button>
  </div>
}


export default App