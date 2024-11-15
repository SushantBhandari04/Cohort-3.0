import React from 'react';

// fragments

// function App(){
//   return (
//     no extra div is added
//     <> 
//       <div>Hi there</div>
//       <div>Hello</div>
//     </>
//   )
// }



// Error Boundary
function App(){
  return (
    <div>
      <ErrorBoundary>
        <Card />
      </ErrorBoundary>
    </div>
  )
}

function Card(){
  throw new Error("Error");

  return <div style={{backgroundColor: "lightgray", color:"blue",display:"inline-block", padding:10, margin:10, borderRadius:10}}>
    This is a card.
  </div>
}

class ErrorBoundary extends React.Component {
  constructor(props) {
      super(props);
      this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
      return { hasError: true };
  }

  componentDidCatch(error, info) {
      console.error("Error caught:", error, info);
  }

  render() {
      if (this.state.hasError) {
          return <h1>Something went wrong.</h1>;
      }

      return this.props.children; 
  }
}

export default App;