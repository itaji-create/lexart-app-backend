# Bem vindo ao Projeto Lexart-Backend

Este projeto faz parte do desafio técnico do empresa Lexart. Nele foi construido uma API Rest para criar e manipular as tabelas "Users" e "Products" em um banco de dados.

Foi feito o deploy dessa aplicação no Vercel, você poderá acessar as rotas através do link: [Lexart-backend](https://lexart-app-backend.vercel.app/).

## Endpoints disponíveis:

Exemplos com aplicação rodando no localhost porta 8080:

<details>
	<summary><strong>Usuários</strong></summary>

	- POST: "/user/signUp"
		(Cria novo usuário)
  <pre>
      ```json
            {
              "name": "itaji",
                "email": "exemplo@gmail.com",
                "password": "123456"
            }
      ```
</pre>
  `{"name": "itaji", "email": "exemplo@gmail.com", "password": "123456"}`
    
	- POST: "/user/signIn"
		(Faz login)
  body:
  `{"name": "itaji", "email": "exemplo@gmail.com", "password": "123456"}`

	- GET: "/user/getUsers"
		(Retorna todos os usuários)
  
	- DELETE: "user/delete/{userId}"
		(Remove um usuário por ID)

</details>


## Tecnologias utilizadas

- Node.js
- Sequelize
- Postgres
- jwt (JSON Web Tokens)
- md5
- dotenv
- cors
- Databese (Neon.tech)
- Deploy (Vercel)
  
Nele o usuário pode:


