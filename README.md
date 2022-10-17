# Be Mobile - Desafio Mobile

O desafio Mobile da Be consiste em montar uma tabela com as informações que virão por uma API simulada escrita em json-server.
A tabela deve conter as seguintes colunas: imagem e nome.
Quando abrir mais informações mostrar: cargo, data de admissão e telefone, com todos os dados devidamente formatados e apresentados como está no figma. Além disso, deve ter a possibilidade de realizar uma pesquisa na tabela por um input. Obs:
[acesse aqui o figma do projeto](https://www.figma.com/file/yw6th52zE9bubewc6ayTg5/Teste---Be-mobile?node-id=0%3A1).

![Screenshot-mobile](https://user-images.githubusercontent.com/1697362/194322705-faf9fbbe-ce38-4c17-93f6-50750e68e542.png)

## 🚀 Como executar o projeto

### Pré-requisitos

Clone este repositório

```bash
gh repo clone joaovitorcl13/desafio-mobile
```

Acesse a pasta do projeto no terminal/cmd

```bash
  cd desafio-mobile
```

Instale as dependências

```bash
yarn
```

Antes de iniciar o json-server, modifique o endereço ip, no arquivo src/services/api.ts

Altere a variável BASE_URL para o seu endereço de IP.

Inicie json-server

```bash
$ json-server --host [SEU IP] --watch server.json
```

Execute a aplicação

```bash
npx expo start
```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Front-end** ([React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/))

- **[Expo](https://expo.dev/)**
- **[Axios](https://github.com/axios/axios)**
- **[Styled Components](https://styled-components.com/docs)**

---

## 📝 Licença

Este projeto esta sobe a licença MIT.

Feito com ❤️ por João Lourenço 👋🏽 [Entre em contato!](https://www.linkedin.com/in/jo%C3%A3o-louren%C3%A7o-398823167/)
