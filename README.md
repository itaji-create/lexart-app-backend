# Bem vindo ao Projeto Store-Backend

Nste projeto foi construido uma API Rest para criar e manipular as tabelas "Users" e "Products" em um banco de dados.

Foi feito o deploy dessa aplicação no Vercel, você poderá acessar as rotas através do link: [Lexart-backend](https://lexart-app-backend.vercel.app/).

## Pré-requisitos

Para iniciar o projeto é necessario ter instalado em sua máquina as seguintes ferramentas:

- Node versão >= 16.0
- O banco de dados Postgres configurado
- Definir as variáveis de ambiente

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/itaji-create/lexart-app-backend.git
```

2. Acesse o diretório do projeto:
```bash 
cd lexart-app-backend
```
3. Instale as dependências:
```bash
npm install
```
4. Rode a Aplicação:
```bash
npm start
```

## Endpoints disponíveis:


<details>
	<summary><strong>Usuários</strong></summary>

### Cadastrar usuário / POST:
	/user/signUp
```json
body: 
    {
        "name": "itaji",
        "email": "exemplo@gmail.com",
        "password": "123456"
    }
```

### Realizar Login / POST: 
	/user/signIn
```json
body: 
    {
        "email": "exemplo@gmail.com",
        "password": "123456"
    }
```

### Retorna todos os usuários / GET:
	 /user/getUsers		
### Exclui usuário / DELETE:
	 user/delete/{userId}

</details>

<details>
	<summary><strong>Produtos</strong></summary>

⚠️ **Aviso:** Todas as rotas de produtos necessitam do header **Authorization**, em que o usuário deve passar o token que foi retornado ao realizar o login.

ex. 
  - hearders: {Authorization: "{token-do-usuario-logado}"}

### Cria produto / POST: 
    /api/products 

  **Pode receber 3 opções de body:**
```json
body1: {
   "name": "Xiaomi Redmi 9",
   "brand": "Xiaomi",
   "model": "Redmi 9",
   "price":  10000,
   "colo"r: "red"
}
body2: {
   "name": "Xiaomi Redmi 9",
   "details": {
       "brand": "Xiaomi",
       "model": "Redmi 9",
       "color": "red"
   },
   "price":  10000,
}
body3: [  
   {
        "name": "Xiaomi Redmi 9",
        "brand": "Xiaomi",
        "model": "Redmi 9",
        "data": [
           {
        	  "price":  10000,
        	  "color": "red"
           },
          {
        	  "price":  10000,
        	  "color": "blue"
           }
        ]
   },
   {
        "name": "Iphone 14 Pro",
        "brand": "Iphone",
        "model": "14 Pro",
        "data": [
           {
        	  "price":  30000,
	   	      "color": "silver"
           },
          {
        	  "price":  30100,
        	  "color": "gold"
           }
        ]
   }
]
```

### Retorna todos os produtos / GET: 
	/api/produtos

### Retorna produto por Id / GET: 

    /api/products/{productId}

### Retorna pedidos filtrados por nome / GET:

    /api/products/search/{nome-pesquisado}

### Modifica produto / PUT:
    /api/products/{produtoId}
```json
body: {
   "name": "Xiaomi Redmi 9",
   "brand": "Xiaomi",
   "model": "Redmi 9",
   "price":  10000,
   "color": "red"
}
```

### Excluí produto / DELETE:

    /products/{produtoId} 




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
  
## Variáveis de Ambiente e Inicialização

Para que a aplicação rode localmente você deve criar um arquivo .env na raiz do projeto e definir as variáveis de ambiente conforme o exemplo a seguir:

````
PGHOST=
PGDATABASE=
PGUSER=
PGPASSWORD=
PORT=
````
