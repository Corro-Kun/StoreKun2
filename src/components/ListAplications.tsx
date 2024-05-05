import {useEffect, useState, useRef} from "preact/hooks";
import {data} from "../data/Aplications.ts";
import "./ListAplications.css";

export default function ListAplications(){
    const link = useRef(null);
    const [Applications, setApplications] = useState([]);

    useEffect(()=>{
        setApplications(data);
    },[]);

    function filterAplications(event){
        const value = event.target.value;
        const filter = data.filter((data)=>(
            data.title.toLowerCase().includes(value.toLowerCase())
        ));
        setApplications(filter);
    }

    return(
        <div className="ListAplication-Div" >
            <div className="ListAplication-Bar" >
                <h2>Filtrar</h2>
                <div className="ListAplication-Filter" >
                    <input type="checkbox" id="filter1" />
                    <label htmlFor="filter1" >Filtro 1</label>
                </div>
            </div>
            <div className="ListAplication-Content" >
                <div className="ListAplication-Title" >
                    <h2>Aplicaciones</h2>
                    <input type="text" placeholder="Buscar" onChange={(e)=> filterAplications(e)} />
                </div>
                <div className="ListAplication-List" >
                    {
                        Applications.map((data)=>(
                            <div className="ListAplication-Ficha" onClick={()=> link.current.click()} >
                                <picture>
                                    <img src={data.image} alt={data.title} />
                                </picture>
                                <div>
                                    <h3>{data.title}</h3>
                                    <a ref={link} href={`/aplication/${data.id}`} style={{display: "none"}} ></a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}