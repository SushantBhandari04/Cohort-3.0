function App(){
  return <div className="h-screen dark:bg-black dark:text-white">
    <button onClick={()=>document.documentElement.classList.toggle("dark")} className="dark: bg-white">Toggle</button>
    Hello</div>
}

export default App