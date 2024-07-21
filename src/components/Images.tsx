import {useState} from "react";
import "./Images.css";

export default function Images({images, altImage}: {images: string[], altImage: string}) {
    const [indexImages, setIndexImages] = useState(0);

    function changeImage(index: number) {
        setIndexImages(index);
    }

    return(
        <>
            <div className="Images-Div-Render" >
                <picture className="Images-Img-Main" >
                    <img src={images[indexImages]} alt={altImage+indexImages} loading={"lazy"} />
                </picture>
                <div className="Images-Div-Imgs" >
                    {
                        images.map((item: string, i: number)=>(
                            <picture onClick={()=>changeImage(i)} key={i} >
                                <img src={item} alt={altImage+i} loading="lazy" />
                            </picture>
                        ))
                    }
                </div>
            </div>
        </>
    );
}