import styled from '@emotion/styled'

const Contenedor = styled.div`
	color: #FFF;
	font-family : fantasy;

	display: flex;
	align-items: center;
	gap: 3rem;
	margin-top: 30px;

`
const Texto = styled.p`
font-size: 18px;
 span{
 	 font-weigth: 700;
 }
`
const Imagen = styled.img`
display: block;
width: 120px;

`
const Precio = styled.p`

 font-size: 22px;
 span{
 	 font-weigth: 700;
 }

`
const Resultado = ({resultado}) => {
	const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
	return(
		<Contenedor>
		<Imagen alt='cripto' src={`https://cryptocompare.com/${IMAGEURL}`} />
			<div>
				<Precio>El precio es de: <span>{PRICE}</span></Precio>
				<Texto>El precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
				<Texto>El precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
				<Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
				<Texto>Última actualización:<span>{LASTUPDATE}</span></Texto>
			</div>	
		</Contenedor>
	)

}

export default Resultado