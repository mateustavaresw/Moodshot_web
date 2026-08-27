import { useState } from "react"

function Login({ onLoginSuccess }) {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState('')
    function handleSubmit(e) {
        e.preventDefault()
        if (!nome || !email || !senha) {
            setErro('Preencha nome, e-mail e senha.')
            return
        }
        if (email === 'demo@moodshot.com' && senha === '123456') {
            setErro('')
            onLoginSuccess(email, nome)
        } else {
            setErro('E-mail ou senha incorretos.')
        }
    }
    return (
        <div className="login-container">
            <h1>Moodshot</h1>
            <p>A câmera que sente o momento</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nome de usuário:</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Como podemos te chamar?"
                    />
                </div>
                <div className="form-group">
                    <label>E-mail:</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="seu@email.com"
                    />
                </div>
                <div className="form-group">
                    <label>Senha:</label>
                    <input
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        placeholder="Sua senha"
                    />
                </div>
                {erro && <p className="erro">{erro}</p>}
                <button type="submit">Entrar</button>
            </form>
            <p className="dica-teste">
                Use <strong>demo@moodshot.com</strong> / <strong>123456</strong> para testar
            </p>
        </div>
    )
}

export default Login