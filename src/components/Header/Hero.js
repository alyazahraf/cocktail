import { useRef } from "react";
import "./HeroStyles.css";

function Hero (props){
    const searchValue = useRef();
    
    

    return(
    <>
        <div className={props.cName}>
            <img alt="HerpImg" src={props.heroImg} />
        
        <div className="hero-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
        {/* <section className="search">
            <form className="search-form">
                <div className="form-control">
                    <h1>Search Cocktail</h1>
                    <input type="text" name="name" id="name" ref={searchValue}/>
                </div>
            </form>
        </section> */}
        
        </div>       
       </> 
    )
}

export default Hero;