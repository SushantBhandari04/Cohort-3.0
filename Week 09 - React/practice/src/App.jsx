import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const services = [
  {
    title: "Web Design",
    path: "/web-design"
  },
  {
    title: "Web Development",
    subItems: [
      {
        title: "Frontend",
        path: "/frontend"
      },
      {
        title: "Backend",
        path: "/backend"
      }
    ]
  },
  {
    title: "SEO",
    path: "/seo"
  }
];

const about = [
  {
    title: "Who we are",
    path: "/who-we-are"
  },
  {
    title: "Our values",
    path: "/our-values"
  }
]

function App() {
  return (
    <BrowserRouter>
      <div >
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/backend" element={<Backend />} />
          <Route path="/seo" element={<Seo />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/our-values" element={<OurValues />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function NavBar(){
  return <div className="navBar">
    <div>Logo</div>
    <Link to="/home">Home</Link>
    <DropDown title="Services" items={services}/>
    <DropDown title="About" items={about}/>
  </div>
}

function DropDown({ title, items }) {
  const [open, setOpen] = useState(false);

  function onMouseEnter(){
    setOpen(true);
  }

  function onMouseLeave(){
    setOpen(false);
  }
  return (
    <div className="dropdown" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="dropdown-title">{title}</div>
      <ul onClick={onMouseLeave} className="dropdown-content">
        {open && items.map((item, index) => (
          <li key={item.path || index}>
            <DropDownItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function DropDownItem({ item }) {
  const [open, setOpen] = useState(false);

  function onMouseEnter(){
    setOpen(true);
  }

  function onMouseLeave(){
    setOpen(false);
  }

  return (
    <div className="dropdown-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {open && item.subItems ? (
        <>
          <div className="subitem-title" >{item.title}</div>
          <ul className="dropdown-subitems">
            {item.subItems.map((subItem, index) => (
              <li key={subItem.path || index}>
                <DropDownItem item={subItem} />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Link onClick={onMouseLeave} to={item.path}>{item.title}</Link>
      )}
    </div>
  );
}

function Home() {
  return <div className="content">Home</div>;
}

function WebDesign() {
  return <div className="content">Web Design</div>;
}

function Frontend() {
  return <div className="content">Frontend</div>;
}

function Backend() {
  return <div className="content">Backend</div>;
}

function Seo() {
  return <div className="content">SEO</div>;
}

function WhoWeAre() {
  return <div className="content">Who we are</div>;
}

function OurValues() {
  return <div className="content">Our values</div>;
}




export default App;
