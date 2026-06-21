# 🔎 Busca de Pokémon

Uma aplicação web simples e intuitiva para pesquisar Pokémon utilizando a **PokéAPI**. O usuário pode buscar um Pokémon pelo nome (em inglês) e visualizar diversas informações em um card organizado.

## 📋 Funcionalidades

* Pesquisa de Pokémon pelo nome.
* Exibição da imagem do Pokémon.
* Exibição do nome do Pokémon.
* Exibição dos tipos do Pokémon.
* Exibição dos principais status:

  * HP
  * Attack (ATK)
  * Special Defense (SP. DEF)
  * Special Attack (SP. ATK)
  * Speed (SPD)
* Exibição do peso.
* Exibição da altura.
* Exibição das habilidades do Pokémon.
* Interface simples.

## 🚀 Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript
* PokéAPI

## 🌐 API Utilizada

Este projeto utiliza a API pública da PokéAPI para obter os dados dos Pokémon.

Documentação oficial:

https://pokeapi.co/

Endpoint utilizado:

```http
https://pokeapi.co/api/v2/pokemon/{nome-do-pokemon}
```

Exemplo:

```http
https://pokeapi.co/api/v2/pokemon/pikachu
```

## Exemplo de Uso

Digite o nome de um Pokémon em inglês no campo de busca:

```
pikachu
```

Resultado exibido:

* Nome: Pikachu
* Tipo: Electric
* HP: 35
* ATK: 55
* SP. ATK: 50
* SP. DEF: 40
* Speed: 90
* Peso: 6
* Altura: 4
* Habilidades:

  * Static
  * Lightning Rod

## 📂 Estrutura do Projeto

```
Busca-de-Pokemon/
│
├── assets/
│   └── imagens
├── home.html
├── index.css
├── main.js
└── README.md
```

## ⚙️ Como Executar

Acesse o link do repositório:
```
https://github.com/josefhsilva815-byte/busca-de-pokemon.git
```

`
OU
`

1. Clone o repositório:

```
git clone https://github.com/josefhsilva815-byte/busca-de-pokemon.git
```

2. Entre na pasta do projeto:

```
cd busca-de-pokemon
```

3. Abra o arquivo `home.html` em seu navegador.

Ou utilize uma extensão como **Live Server** para uma melhor experiência de desenvolvimento.

## 📝 Observações

* Os nomes dos Pokémon devem ser digitados em inglês.
* A pesquisa diferencia nomes válidos e inválidos.
* Os dados são obtidos em tempo real através da PokéAPI.
* É necessário conexão com a internet para realizar as consultas.

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com o objetivo de praticar:

* Consumo de APIs REST.
* Manipulação do DOM com JavaScript.
* Requisições assíncronas utilizando Fetch API.
* Tratamento de respostas e erros.
* Organização de interfaces web responsivas.

## 📄 Licença

Este projeto está disponível para fins de estudo e aprendizado.
