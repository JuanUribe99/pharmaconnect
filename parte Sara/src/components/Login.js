import React from "react"

function Login() {
    return (
       <div className= "form-container">
           <form>
               <div><label htmlFor="name">Usuario:</label></div>
               <div><input type="name"/></div>
               <div><label htmlfor="username">contraseña:</label></div>
                <input type="password"/>
                <div class="btn"><button name="Ingresar" type="button">Ingresar</button></div>  

           </form>
       </div> 
  )
}
export default Login