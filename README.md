# Starwars Planets Search
# Single Page Application applying Context API and React Hooks!

## Desenvolvimento

Este repositório já contém um _template_ de uma aplicação React criado e configurado. Após clonar o projeto e instalar as dependências (mais sobre isso abaixo), você **poderá** criara a sua branch e iniciar o trabalho.

## Linter

Para garantir a qualidade do seu código de forma a tê-lo mais legível, de mais fácil manutenção e seguindo as boas práticas de desenvolvimento nós utilizamos neste projeto o linter `ESLint` e o `Stylelint`. Para rodar o linter localmente no seu projeto, execute o comando abaixo:

```bash
npm run lint
npm run lint:styles
```
## Execução de testes unitários

Neste projeto utilizamos a [React Testing Library (RTL)](https://testing-library.com/docs/react-testing-library/intro) para execução dos testes unitários.

Em alguns dos [Requisitos do projeto](#requisitos-do-projeto) será pedido que você coloque o atributo `data-testid` nos elementos HTML. Isso acontece pois a RTL utiliza esse atributo para poder verificar a solução proposta.

Para verificar se seu projeto atende aos requisitos, você pode executar todos os testes unitários localmente, executando o comando:

```bash
npm test
```

### Dica: desativando testes

Para rodar apenas um teste, basta a utilização da função `.only` após o describe. Com isso, será possível que apenas um requisito rode localmente e seja avaliado.

![image](describe-only.png)
![image](only-all-green.png)

Caso queira avaliar apenas um tópico do requisito, você também pode usar o `.only` após o `it`.

![image](it-only.png)
![image](only-one-green.png)
