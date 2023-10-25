# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# SilliconWebStore

### Projeto Loja de periféricos e outros eletrônicos

# Funcionamento da aplicação

- A aplicação deve ser um e-commerce, de peças de computadores, periféricos e outros artigos de tecnologia
- Deve possuir comunicação com o banco de dados.
- Deve possuir tela de revendedor,
- Deve possuir tela de adm geral
- Deve possuir todos os processor de um grande e-commerce

# Processos de desenvolvimento do Sillicon

- Levantamento de regras de usabilidade, regras de negócio.
- Lista de funcionalidades principais presentes na aplicação
- Diagrama de Entidade Relacionamento (DER)
- Construção do Banco de Dados (mySql)
- Desenvolvimento da API (provável linguagem será python)
- Construção do Layout e design das telas e da identidade visual da aplicação para web
- Desenvolvimento do Front-end
- Validação das funcionalidades e manutenção do site
- Layout da versão mobile da aplicação
- Porte da aplicação web para app mobile

# Paleta de cores para a marca

- Roxo escuro: #010f20
- Roxo: #5B43D6
- Rosa claro: #E859CE
- Rosa choque: #F406D7
- Ciano: #02EFDF
- Cinza: #C1C5D6
- Preto: #000000
- Branco: #FFFFFF

![Paleta de cores](./LOGO/PALETA.png)

# Tabelas do banco de dados

## category

uuid
nome_categoria

## product

uuid int not null
nome string
imagens
marca
descricao
fabricante
preco
juros

## person

uuid
nome
cpf
rg
email

## vendedor

## MySQL

CREATE TABLE PERSON (
ID INT NOT NULL,
NAME VARCHAR(100) NOT NULL,
CPF VARCHAR(14) UNIQUE NOT NULL,
EMAIL VARCHAR(70) UNIQUE NOT NULL,
NASCIMENTO DATE NOT NULL,
TELEFONE VARCHAR(15),
SENHA VARCHAR(255) NOT NULL,
PRIMARY KEY(ID)
);

INSERT INTO PERSON (ID, NAME, CPF, EMAIL, NASCIMENTO, TELEFONE, SENHA) VALUES (0, 'Lucas Ferreira Silva', '520.945.658-74', 'lucas.lfs2004@gmail.com', '2004-06-19', '(11) 97968-4799', 'GallardoLP-570');

SELECT \* FROM PERSON
