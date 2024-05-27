import { useState, useEffect } from "react";

export default function WallpaperDinamic({wallpapers}: {wallpapers: string[]}){
    const [wallpaper, setWallpaper] = useState(wallpapers[0]);
    useEffect(()=>{
        let variables = Math.floor(Math.random() * wallpapers.length);
        setWallpaper(wallpapers[variables]);
    },[wallpapers]);
    return(
        <video autoPlay muted loop style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            objectFit: "cover",
        }} >
            <source src={"https://res.cloudinary.com/daqrkk4sr/video/upload/"+`q_auto,f_auto,h_${window.innerHeight},w_${window.innerWidth}`+"/"+wallpaper.split("/")[1]} type="video/mp4" />
        </video>
    );
}