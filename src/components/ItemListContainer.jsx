const BotonB = (props) => { //componente 1
    console.log(props)
    
    const busqueda = () => {
        alert('Lo siento, no pudimos realizar su busqueda')
      }
    
  return(
      <div style={{display:"flex", justifyContent: "right"}}>
          <button onClick = {busqueda} style={{fontSize: 20, marginRight: 25}}>Buscar</button>
      </div>
  )
}
export default BotonB