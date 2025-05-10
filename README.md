
# DNC sales dashboard rodrigo

Sistema completo para gerenciamento de leads e painel de vendas, com autenticação via JWT, cadastro, listagem, exclusão e atualização de dados de usuário. Construído com React, TypeScript e Material UI, utilizando arquitetura baseada em hooks customizados e componentes reutilizáveis.


## Rodando localmente

1. Clone o projeto

```bash
  git clone https://github.com/RodrigoSobralM/dnc-sales-dashboard-rodrigo.git
```

2. Entre no diretório do projeto

```bash
  cd dnc-sales-dashboard-rodrigo
```

3. Instale as dependências

```bash
  npm install
```

4. Configure o arquivo `.env` com a URL da API. O projeto já possui uma API configurada, mas caso deseje utilizar outra, basta alterar a URL no arquivo `.env`.

```bash
  VITE_API_BASE_URL=[SUA API]
```

5. Inicie o servidor

```bash
  npm run dev
```


## 🚀 Como Executar o Projeto

1. Clone o repositório:

```bash
  git clone https://github.com/RodrigoSobralM/dnc-sales-dashboard-rodrigo.git
  cd dnc-sales-dashboard-rodrigo
```
2. Instale as dependências:

```bash
  npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
  npm run dev
```

    
## 🔧 Tecnologias Utilizadas

- [React](https://reactjs.org/) com [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material UI](https://mui.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router DOM](https://reactrouter.com/)
- [Axios](https://axios-http.com/) com hooks personalizados
- [js-cookie](https://github.com/js-cookie/js-cookie) para manipulação de cookies JWT



## 🧪 Funcionalidades
🔐 Login com autenticação JWT e cookies seguros

➕ Cadastro de novos leads

📄 Listagem de leads cadastrados

🗑️ Exclusão de leads

✍️ Edição de dados do perfil

🎨 Alternância entre temas claro e escuro com Context API

📦 Integração com API REST para persistência dos dados

---


## ✅ Requisitos

- [Node.js 18+](https://nodejs.org/)
- Gerenciador de pacotes: **npm** ou **yarn**
- Back-end compatível com as seguintes rotas:

  - `POST /login`

  - `POST /leads/create`

  - `GET /leads`

  - `DELETE /leads/delete`

  - `GET /profile`

  - `PUT /profile/update`

## 🛡️ Segurança
- Tokens são salvos em cookies com secure: true

- Validação de campos obrigatórios em todos os formulários

- Redirecionamento automático se o usuário não estiver logado
## 🤝 Contribuição
Contribuições são bem-vindas!
Sinta-se à vontade para abrir issues e pull requests.


## 📄 Licença
Este projeto está sob a licença [MIT](https://choosealicense.com/licenses/mit/)

