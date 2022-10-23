import React,{useState} from "react";
import "../../styles/index.css"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (color1) => {
	const [color, setColor]=useState();

		const cambiaRojo=()=>{
			setColor("rojo");
		}
		const cambiaVerde=()=>{
			setColor("verde");
		}
		const cambiaAmarillo=()=>{
			setColor("amarillo");
		};
		
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">color que esta seleccionado:{color}</h1>
			<button className={color=="rojo"?"rojo":""} onClick={cambiaRojo}></button>
			<button className={color=="verde"?"verde":""} onClick={cambiaVerde}></button>
			<button className={color=="amarillo"?"amarillo":""} onClick={cambiaAmarillo}></button>

			</div>
	);
};

export default Home;
