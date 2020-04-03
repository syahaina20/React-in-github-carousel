import React,{useState} from "react";
import "./slider.scss";
import ImageComp from "./ImageComp";
import a1 from "./pics/naruto.png";
import a2 from "./pics/silentvoice.jpg";
import a3 from "./pics/spiritedaway.jpg";
import a4 from "./pics/weatheringwithyou.jpg";
import a5 from "./pics/yourname.png";

function Slider() {

    // create an array for component to show inside the slider
    // add components to the array
    const [x, setX] = useState(0); //useState is a hook function that allows us to have state variables in functional components. we can create a piece of state without switching to class components.
    let sliderArr = [
        <ImageComp src={a1} />, 
        <ImageComp src={a2} />,
        <ImageComp src={a3} />,
        <ImageComp src={a4} />,
        <ImageComp src={a5} />
    ];

    const goLeft = () => {
        // console.log(x);
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
        // setX(x + 100);
    };

    const goRight = () => {
        // console.log(x);
        // sliderArr.length was used so the input can be dynamic
        (x=== -100 * (sliderArr.length-1)) ? setX(0) : setX(x - 100);
    };
    

    return (

        <div className="slider">

            {/* map method handles array elements which creates a new array. the index is uded inside map() method to state the position of each element in an array but doesn't change the original array. */}
            {sliderArr.map((item,index)=>{

                return(

                    // transform property allows us to DeviceRotationRate, scale, move, etc...
                    // translateX() function is a 2D transform function used to translate an element along the x-axis.
                    <div key={index} className="slide" style={{transform:`translateX(${x}%)`}}> 
                        {item}
                    </div>

                );

            })}

            <button id="goLeft" onClick={goLeft}>
                <i class="fas fa-chevron-left"></i>
            </button> 

            <button id="goRight" onClick={goRight}>
                <i class="fas fa-chevron-right"></i>
            </button>  

        </div>

    );


}

export default Slider;