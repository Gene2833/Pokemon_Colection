import "./Home.css"
import Menu from "../Menu/Menu"
const Home = () =>{
    return(
      <>
      <Menu/>
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <h1>Bienvenidos a Pokemon collections</h1>
    <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://i.ytimg.com/vi/wP_0_0aQHak/maxresdefault.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.custom-cursor.com/collections/129/cover-pokemon-preview.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://pbs.twimg.com/media/EaQYPppWoAQDShx.jpg:large" className="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
       </>
    )
}

export default Home