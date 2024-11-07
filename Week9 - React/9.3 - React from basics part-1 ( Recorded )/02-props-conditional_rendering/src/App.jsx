function App() {
  return <div style={{display:"flex", justifyContent:"space-between"}}>
          <div>
              <div style={{display:"flex",}}>
              <ProfileComponent/>
              </div>
          </div>
          
          <div style={{display:"flex", justifyContent:"center"}}>
              <div>
              <PostComponent 
                name={"Naruto"}
                image={"https://th.bing.com/th/id/OIP.m62jw_NCB4OtcMCaylETMgHaFj?rs=1&pid=ImgDetMain"}
                subtitle={"33,567 followers"}
                time={"12m"}
                description={"Naruto new season release! Are you excited?"}/>
              <PostComponent
                name={"Naruto"}
                image={"https://th.bing.com/th/id/OIP.m62jw_NCB4OtcMCaylETMgHaFj?rs=1&pid=ImgDetMain"}
                // subtitle={"33,567 followers"}
                // time={"12m"}
                description={"Naruto new season release! Are you excited?"}
              />
              </div>
          </div>

          <div>
          </div>

      </div>
}

function PostComponent({ name, image, subtitle, time, description}){
  return <div style={{backgroundColor:"white", borderRadius:10, padding:20, marginBottom:20}} >
      <div style={{ display:"flex" }}>
          
          <img src={image} style={{height:40, width:40 ,borderRadius:100 }} />
          
          <div style={{fontSize:12, marginLeft:10}}>
              <b>{name}</b>

              
              {(subtitle!==undefined) ? 
              <div>
              <div>{subtitle}</div>

              {(time!==undefined) ? <div style={{display:"flex"}}>
                <div>{time}</div>
                <img src="https://th.bing.com/th/id/R.b8e179274921309fb9c2ed538df87e77?rik=DOV8vEoX7L%2fgnA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fdT8%2fpej%2fdT8pejEAc.jpg&ehk=xfYYetSKQzvVVEdCoiJ06rsHWGvNpyyRmKjw47UrE2s%3d&risl=&pid=ImgRaw&r=0" style={{height:11, width:11, marginLeft:5}} /> 
              </div>: null}
              </div>
              :<div>Promoted</div>}

          </div>
      </div>
      <br />
      <div style={{fontSize: 15}}>
          {description}
      </div>
  </div>
}

function ProfileComponent(){
  return <div style={{ backgroundColor:"white", padding:20, borderRadius:15}}>
      <div style={{display:"flex", flexDirection: "column", alignItems: "center"}}>
                  <img style={{height:60, width:60, borderRadius:200}} src="https://th.bing.com/th/id/R.5321df72fdc504bcf15e911df7578dce?rik=UKFCE7QzV7Qjkg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f7%2fa%2f9%2f1322228-naruto-uzumaki-wallpaper-2048x1501-windows-10.jpg&ehk=USfGJGVbXHxJvrVUIPvp7WQNw3GLsLQgfawVjZHa5rU%3d&risl=&pid=ImgRaw&r=0" />
              
                  <b>Naruto Uzumaki</b>
                  <span>Hokage of hidden leaf village</span>
              </div>

              <div style={{fontSize:13}}>
              <p style={{display: "flex", justifyContent:"space-between"}}>
                  <span>Profile viewers</span>
                  <span style={{color:"blue", fontSize:12}}>41392</span>
              </p>
              <p style={{display: "flex", justifyContent:"space-between"}}>
                  <span>Post impressions</span>
                  <span style={{color:"blue", fontSize:12}}>2194</span>
              </p>
          </div>
  </div>
}

export default App
