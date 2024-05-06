import {useState} from "preact/hooks";
import "./Images.css";

export default function Images({images}) {
    const [indexImages, setIndexImages] = useState(0);

    function changeImage(index) {
        setIndexImages(index);
    }

    return(
        <>
            <div className="Images-Div-Render" >
                <picture className="Images-Img-Main" >
                    <img src={images[indexImages]} alt="" loading={"lazy"} />
                </picture>
                <div className="Images-Div-Imgs" >
                    {
                        images.map((item, i)=>(
                            <picture onClick={()=>changeImage(i)} >
                                <img src={item} alt="" loading="lazy" />
                            </picture>
                        ))
                    }
                </div>
            </div>
        </>
    );
}