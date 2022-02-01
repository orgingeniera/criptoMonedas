import {useEffect, useState} from 'react';
import styled from '@emotion/styled'
import useSelectMonedas from "../hooks/useSelectMonedas"
import {monedas} from "../data/monedas"
import Mensaje from "./mensaje"

const InputSubmit= styled.input`
	background-color: #9497FF;
	border: none;
	width: 100%;
	padding: 10px;
	color: #FFF;
	font-weigth: 700;
	text-transform: uppercase;
	font-size: 20px;
	border-radius: 5px;
	transition: background-color .3s ease;
	margin-top: 30px;

	&:hover{
		background-color: #7A7DFE;
		cursor: pointer;
	}
`

const Formulario = ({setMonedas}) => {
	const [mensaje, setMensaje] = useState('')
	const [criptos, setCriptos] = useState([])
	const [moneda,SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas)
	const [criptomonedas,SelectCriptomonedas] = useSelectMonedas('Elige tu criptomoneda', criptos)
	
	useEffect( () => {
		
		const consultarApi = async() => {
			const url ="https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
			const respuesta = await fetch(url)
			const resultado = await respuesta.json()
			
			const  arrayCriptos = resultado.Data.map( cripto => {
				const object = {
					id: cripto.CoinInfo.Name,
					nombre: cripto.CoinInfo.FullName
				}
				return object;
			})
			setCriptos(arrayCriptos)
		} 
		consultarApi()
	}, [])

	const handleSubmit = (e) => {
		e.preventDefault()
		//validacion
		if([moneda, criptomonedas].includes('')){
			setMensaje('Todos los campos son obligatorios')
			setTimeout( () => {
	  			setMensaje('')
	  			
	  		}, 5000)
			return;
		}
		setMensaje('')
		setMonedas({
			moneda,
			criptomonedas
		})
	}

	return(
		<>
		{mensaje && <Mensaje>{mensaje}</Mensaje>}
		<form onSubmit={handleSubmit}>

			<SelectMonedas />
			<SelectCriptomonedas />
			<InputSubmit type="submit" value="Cotizar"/>
		</form>
		</>
	)

}

export default Formulario