import {useState} from "preact/hooks"

export default function Images({images}) {
    const [indexImages, setIndexImages] = useState(0);

    function changeImage(index) {
        setIndexImages(index);
    }

    return(
        <>
            <div style={{
                display: "flex",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
            }}>
                <picture style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "5px",
                    overflow: "hidden",
                }}>
                    <img style={{
                        height: "300px",
                    }} src={images[indexImages]} alt="" loading={"lazy"} />
                </picture>
                <div style={{
                    marginTop: "20px",
                    display: "flex",
                    height: "210px",
                    width: "90%",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "10px",
                }}>
                    {
                        images.map((item, i)=>(
                            <picture style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                cursor: "pointer",
                                overflow: "hidden",
                                borderRadius: "5px",
                            }} onClick={()=>changeImage(i)} >
                                <img style={{
                                    height: "100px",
                                }} src={item} alt="" loading={"lazy"} />
                            </picture>
                        ))
                    }
                </div>
            </div>
        </>
    );
}