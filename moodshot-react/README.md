# Moodshot

Moodshot é uma aplicação de câmera fictícia que sugere modos de captura de acordo com o "mood" do momento (Alegria, Calma, Intensidade, Natureza, Nostalgia). O projeto foi originalmente prototipado em HTML/CSS/JS puro e migrado para React nesta sprint, utilizando componentes funcionais, estrutura de pai para filho, localStorage e operações com Math.

## Estrutura do projeto

```
App (raiz)
├── Login          → tela de autenticação
└── Home
    ├── Header      → nome do usuário + botão sair
    ├── Slideshow   → modos em destaque (autoplay a cada 3s)
    ├── ModosGrid
    │   └── ModoCard  → cada card recebe os dados do modo via props
    ├── Captura     → simula captura de foto e salva histórico
    └── Footer
```

## Tecnologias utilizadas
- HTML5
- React
- Vite
- JavaScript (ES6+)
- CSS3
- LocalStorage (persistência de dados no navegador)
- Git / GitHub

## Como instalar as dependências

```bash
npm install
```

## Como executar o projeto

```bash
npm run dev
```

O projeto abrirá em `http://localhost:5173` (ou outra porta indicada no terminal).

## Usuários e senha para teste

- **Email:** demo@moodshot.com
- **Senha:** 123456

## Uso de localStorage

O histórico de fotos capturadas é salvo em `localStorage` (componente `Captura.jsx`), sob a chave `moodshot_capturas`. Cada captura é convertida para texto com `JSON.stringify()` antes de salvar, e recuperada com `JSON.parse()` quando o app carrega novamente — permitindo que o usuário veja capturas anteriores mesmo após recarregar a página ou fechar o navegador.

## Uso de Math

- `Math.random()` é usado no componente `Captura.jsx` para gerar uma "intensidade de filtro" aleatória a cada captura.
- `Math.round()` arredonda esse valor para um número inteiro percentual (ex: 87%), evitando casas decimais na exibição.

## Uso de Inteligência Artificial

A IA (Claude, da Anthropic) foi utilizada como tutora ao longo do desenvolvimento: explicando conceitos de React (JSX, componentes, props, useState/useEffect), ajudando a identificar e corrigir erros e orientando a estrutura do projeto.A lógica e o código foi escrito pelo próprio integrante, seguindo as explicações fornecidas pela IA como guia de aprendizado, não como gerador automático do produto final.

## Repositório

https://github.com/mateustavaresw/Moodshot_web

## Deploy (Vercel)

