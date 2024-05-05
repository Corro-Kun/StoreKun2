import {useEffect, useState} from "preact/hooks";
import {data} from "../data/Aplications.ts";
import "./ListAplications.css";

export default function ListAplications(){
    return(
        <div className="ListAplication-Div" >
            <div className="ListAplication-Bar" >
                <h2>Filtrar</h2>
            </div>
            <div className="ListAplication-Content" >
                <div className="ListAplication-Title" >
                    <h2>Aplicaciones</h2>
                    <input type="text" placeholder="Buscar" />
                </div>
                <div className="ListAplication-List" >
                    
                </div>
            </div>
        </div>
    );
}