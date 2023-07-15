# SilliconWebStore
### Projeto Loja de periféricos e outros eletrônicos

# Funcionamento da aplicação

- A aplicação deve ser um e-commerce, de peças de computadores, periféricos e outros artigos de tecnologia
- Deve possuir comunicação com o banco de dados.
- Deve possuir tela de revendedor,
- Deve possuir tela de adm geral
- Deve possuir todos os processor de um grande e-commerce

# Processos de  desenvolvimento do Sillicon

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

SELECT * FROM PERSON