import { useState } from "react"

function Login ({onLoginSucess}){
    const[email,setEmail] = useState('') // cria variavel especial email e setEmail para mudar valor do email 
    const [senha, setSenha] = useState('')
    const [erro,setErro] = useState('')
    function handleSubmit(e){
        e.preventDefault()
        if(!email ||!senha){
            setErro('Preencha e-mail e senha.')
            onLoginSucess
        }
        if(email === 'demo@moodshot.com' && senha === '123456'){
            setErro('')
            onLoginSucess()

        }else{
            setErro('E-mail ou senha incorretos.')
        }
    }
    return(
        <div className="login-container">
            <h1>Moodshot</h1>
            <p>A câmera que sente o momento</p>
            <form onSubmit={handleSubmit}>
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
                {erro && <p className="erro">{erro}</p>}
                <button type = "submit">Entrar</button>
            </form>
        </div>
    )
}

export default Login