import {useEffect, useState} from "react";
import {data} from "../data/Aplications.ts";
import {type AppDetails} from "../types/Aplication.ts";
import "./ListAplications.css";
import { set } from "astro:schema";


export default function ListAplications(){
    const [Applications, setApplications] = useState<AppDetails[]>([]);
    const [Platform, setPlatform] = useState<{ [key: string]: boolean }>({
        android: false,
        pc: false
    });

    useEffect(()=>{
        let cache: AppDetails[] = data;
        setApplications(cache);
    },[]);

    function filterAplications(event: any){
        const value = event.target.value;
        const filter: AppDetails[] = data.filter((data)=>(
            data.title.toLowerCase().includes(value.toLowerCase())
        ));
        setApplications(filter);
    }

    function filterPlatform(event: any){
        const value = event.target.value;
        const checked = event.target.checked;
        let cache1 = Platform;
        cache1[value] = checked;
        let cache: AppDetails[] = data;
        if(cache1.android){
            cache = cache.filter((data)=>(data.platform === "Android"));
        }else if(cache1.pc){
            cache = cache.filter((data)=>(data.platform === "Pc"));
        }
        setApplications(cache);
        setPlatform(cache1);
    }

    return(
        <div className="ListAplication-Div" >
            <div className="ListAplication-Bar" >
                <h2>Filtrar</h2>
                <div className="ListAplication-Filter" >
                    <div>
                        <input type="checkbox" id="filter1" value="android" onClick={(e)=> filterPlatform(e)} />
                        <label htmlFor="filter1" >Android</label>
                    </div>
                    <div>
                        <input type="checkbox" id="filter2" value="pc" onClick={(e)=> filterPlatform(e)} />
                        <label htmlFor="filter2" >Pc</label>
                    </div>
                </div>
            </div>
            <div className="ListAplication-Content" >
                <div className="ListAplication-Title" >
                    <h2>Aplicaciones</h2>
                    <input type="text" placeholder="Buscar" onChange={(e)=> filterAplications(e)} />
                </div>
                <div className="ListAplication-List" >
                    {
                        Applications.map((data: AppDetails,i)=>(
                            <div className="ListAplication-Ficha" key={i} onClick={()=> {
                                const a = document.getElementById(`ListAplication-Url-${i}`) as HTMLAnchorElement;
                                a.click();
                            }} >
                                <picture>
                                    <img src={data.image} alt={data.title} loading="lazy" />
                                </picture>
                                <div>
                                    <h3>{data.title}</h3>
                                    <a id={`ListAplication-Url-${i}`} href={`/aplication/${data.id}`} style={{display: "none"}} ></a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}