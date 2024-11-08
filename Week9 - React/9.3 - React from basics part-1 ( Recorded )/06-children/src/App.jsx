function App(){
  return <div>
    <Card>
    <div>
      <b>Card 1</b>
      <br />
      This is card 1.
    </div>
  </Card>
  <Card>
  <div>
      <b>Card 1</b>
      <br />
      <input type="text" />
    </div>
  </Card>
  </div>
  
}

const Card = ( {children} ) => {
  return <div style={{
    borderColor: "gray",
    backgroundColor: "lightblue",
    color:"black",
    padding:10,
    borderRadius: 10,
    margin:10
  }}>
    {children}
  </div>
}

export default App;