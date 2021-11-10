
function Button({variant,handleClick,d,children}){
  
  function click(){
          handleClick(); 
          console.log("tenzel")
  }
  return <button disabled={(d==-1)} onClick={click} style={{background:(variant)?"blue":'',color:(variant)?"orange":''}} className="button" >{children} </button>
}



export default Button;