import {useEffect, useState} from "react";
import {data} from "../data/Aplications.ts";
import {type AppDetails} from "../types/Aplication.ts";
import "./ListAplications.css";


export default function ListAplications(){
    const [Applications, setApplications] = useState<AppDetails[]>([]);

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
        const filter  = data.filter((data)=>(
            data.platform.toLowerCase().includes(value.toLowerCase())
        ));
        setApplications(filter);
    }

    return(
        <div className="ListAplication-Div" >
            <div className="ListAplication-Bar" >
                <h2>Filtrar</h2>
                <div className="ListAplication-Filter" >
                    <div>
                        <input type="checkbox" id="filter1" value="Android" onClick={(e)=> filterPlatform(e)} />
                        <label htmlFor="filter1" >Android</label>
                    </div>
                    <div>
                        <input type="checkbox" id="filter2" value="Pc" onClick={(e)=> filterPlatform(e)} />
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
                            <div className="ListAplication-Ficha" onClick={()=> {
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