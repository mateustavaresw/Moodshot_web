import { useState } from "react"

function Login (){
    const[email,setEmail] = useState('') // cria variavel especial email e setEmail para mudar valor do email 
    const [senha, setSenha] = useState('')
    return(
        <div className="login-container">
            <h1>Moodshot</h1>
            <p>A câmera que sente o momento</p>
            <div className="form-group">
                <label>E-mail:</label>
                <input
                type="text"
                value={email} //mostra o que esta guardado no email 
                onChange={(e)=> setEmail(e.target.value)} //atualiza o estado com novo valor
                placeholder="seu@email.com"
                />
                
            </div>
            <div className="form-group">
                <label>Senha:</label>
                <input
                type="password"
                value={senha}
                onChange={(e)=>setSenha(e.target.value)}
                placeholder="Sua senha"
                />

            </div>
            
        </div>
    )
}

export default Login