import { useState } from "preact/hooks";

export default function WallpaperDinamic({wallpapers}){
    const [index, setIndex] = useState(0);
    let variables = Math.floor(Math.random() * wallpapers.length);
    setIndex(variables);
    return(
        <video autoplay muted loop style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            objectFit: "cover",
        }} >
            <source src={wallpapers[index]} type="video/mp4" />
        </video>
    );
}