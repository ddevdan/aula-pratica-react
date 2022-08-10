<div align="center">


  <h1>
    Aula prática React - 2022.1 
  </h1>
    <p>
        Engenharia de Software - UFPE
    </p>

<!-- Badges -->


<!-- Table of Contents -->
# :notebook_with_decorative_cover: Table of Contents
- [About the Project](#star2-about-the-project)
  * [Exercicio 1](#exercicio-1)
  * [Exercicio 2](#exercicio-2)
  * [Exercicio 3](#exercicio-3)
  * [Exercicio 4](#exercicio-4)
  * [Exercicio 5](#exercicio-5)
  * [Exercicio 6](#exercicio-6)
  * [Exercicio 7](#exercicio-7)
  

----
<!-- About the Project -->
## :star2: About the Project

Esse projeto busca ensinar conceitos de React por meio de 7 exercícios. Todos os exercícios estão resolvidos na pasta `solved`. 

- Em todo exercício contém uma ToDo list com instruções sobre o que deve ser feito;
- A ideia é que a(o) estudante aprenda, então há dicas de como fazer, incluindo exemplos de código.
    
    
    ----
    
### Exercício 1
#### Crie seu primeiro componente React
Nesse exercício o estudante vai entender a estrutura de um componente React e criar o seu próprio componente


```javascript
    // Localização: 
    src/exercises/exercise-1.js
```
    
**Instruções // TODO**
- Retornar um elemento HTML
----
    
### Exercício 2
#### Passar e receber props
Nesse exercício o estudante vai entender a o que é e como funciona props. A ideia é que insira o parametro props na função do componente e substitua a cor "red" pela props recebida

```javascript
    // Localização: 
    src/exercises/exercise-2.js
```
    
**Instruções // TODO**
- Passe "props" como parametro da função ButtonFilho
- Tente trocar a string "red" por props.cor

    ----
### Exercício 3
#### Lidar com eventos onClick
Nesse exercício o estudante vai entender como passar funções que vão interagir com eventos em React. A ideia é que ele passe o props onClick para o componente botão e ao clicar, um alerta é mostrado.

```javascript
    // Localização: 
    src/exercises/exercise-3.js
```
    
**Instruções // TODO**
- Receba a prop onClick (ou o nome que você escolheu)
- Substitua o conteúdo do onClick pelo nome da prop que você definiu
- Passe a função handleClick como prop do ButtonFilho Ex: `<ButtonFilho onClick={handleClick} />`
    
    ----
### Exercício 4
#### Usar state para 'dar vida' ao componente
Nesse exercício o estudante vai entender como manipular o estado do componente no React. A ideia é que ele use o useState Hook para manipular a cor do botão. 

```javascript
    // Localização: 
    src/exercises/exercise-4.js
```
    
**Instruções // TODO**
- Crie o useState para criar um estado local para o componente
- Esse estado será usado para alterar a cor do botão toda vez que ele for clicado
- Chame a função de alteração do estado aqui e passe a corAtual como parametro `DICA: setCor() ou setState()`
- Passe o state como parametro da prop "cor"
    
    ----
### Exercício 5
#### Renderização condicional
Nesse exercício o estudante vai entender como usar estruturas estrutura condicional no React. A ideia é fazer ela utilizar ternario `true ? "show" : "hide"`, if e outras estruturas para renderizar o componente baseado na cor atual do state.

```javascript
    // Localização: 
    src/exercises/exercise-5.js
```
    
**Instruções // TODO**
- Verifique se a cor === "black", se sim, retorne o botão com a cor "blue" como prop
- Não esqueça de trocar aqui também EX: cor="blue"
- Troque a cor "yellow" por "blue", caso não seja ela, troque por "red"
- Renderize somente se a cor for "pink"
    
    -----
    
### Exercício 6
#### Manipulando Arrays em React
Nesse exercício o estudante vai entender como renderizar Arrays em React e a importância das keys. A ideia é fazer ela utilizar o metodo map renderizar uma lista de imagens.

```javascript
    // Localização: 
    src/exercises/exercise-6.js
```
    
**Instruções // TODO**
- Faça um map na array de fotos que está armazenada na constante PHOTOS. Ex.: PHOTOS.map((pic) => ....
- Não esqueça: cada item precisa retornar um elemento HTML para ser renderizado
- Retorne o componente Item e passe a prop "pic" para ele
- Você precisa criar uma key para cada item, nesse caso você pode tentar usar o id das photos => pic.id
    
    
    
    ----
### Exercício 7
#### JS Async e useEffect
Nesse exercício o estudante vai entender como usar o Hook useEffect para receber dados, além de fazer request ao clicar no botão de refresh. 

```javascript
    // Localização: 
    src/exercises/exercise-7.js
```
    
**Instruções // TODO**
- O fetch deve ser feito aqui EX:  fetch(CAT_URL).then((res) => res.json()).then((response) => setCats(response));
- O fetch deve ser feito aqui também
    
  