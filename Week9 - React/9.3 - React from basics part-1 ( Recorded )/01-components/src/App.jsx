function App() {
    return <div style={{display:"flex", justifyContent:"space-between"}}>
            <div>
                <div style={{display:"flex",}}>
                <ProfileComponent/>
                </div>
            </div>
            
            <div style={{display:"flex", justifyContent:"center"}}>
                <div>
                <PostComponent/>
                <PostComponent/>
                <PostComponent/>
                </div>
            </div>

            <div>
            </div>

        </div>
}

function PostComponent(){
    return <div style={{backgroundColor:"white", borderRadius:10, padding:20, marginBottom:20}} >
        <div style={{ display:"flex" }}>
            
            <img src="https://th.bing.com/th/id/OIP.m62jw_NCB4OtcMCaylETMgHaFj?rs=1&pid=ImgDetMain" style={{height:40, width:40 ,borderRadius:100 }} />
            
            <div style={{fontSize:12, marginLeft:10}}>
                <b>Naruto</b>
                <div>33,567 followers</div>
                <div>12m</div>
            </div>
        </div>
        <br />
        <div style={{fontSize: 15}}>
            Naruto new season release! Are you excited?
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
