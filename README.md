# OZlib

Olá, avaliadores! :D

O meu projeto tem a intenção de se tornar um biblioteca.
A ideia é que num projeto interno, seja possível fazer a importação da biblioteca 'ozlib' e possa importar o método 'importAndUploadData', onde uma api pode consumir essa ilb e método, podendo assim fazer a importação de dados passando como parâmetro: o caminho da planilha e os dados da credencial do mongo, que estará rodando em um container.

Dessa forma, os dados da planilha vão para o mongo, já com todos os tratamentos realizados, faltando apenas ser feito uma iteração pelos registros contidos no DB e sendo feito após, o upload das informações via api.

Devido ao fato de precisar das respectivas caixas cadastradas, para o cadastramento das Splitters e dos Clients (ou Imóveis), é necessário incluir primeiro os Boxes para depois importar as outras entidades.

## Configurando

Para testar, é necessário alterar o arquivo index.ts, e passar os respectivos: caminho da planilha e credenciais para incuir a informação no MongoDB.

## Executando

O projeto foi feito utilizando npm, e para testá-lo, basta rodar os seguintes comandos:

* npm install
* npm run dev

## Escolhas

Para esse pojeto decidi criar um arquivo 'types.ts' onde conterão todas as tipagens do projeto, que seriam exportados na lib, de forma a permitir que outros devs possam utilizar as tipagens em seus projetos.
Sobre as bibliotecas, decidi utlizar o axios por ser uma biblioteca simples para fazer as requisições, e a lib 'xlsx' para fazer a importação dos dados pois se demonstrou extremamente simples, e permite utilizar o JS da melhor forma. Da mesma forma, escolhi o mongoose, pois é um biblioteca direta para acesso ao MongoDB, que me permite explorar as tipages de maneiras inteligentes, e permitindo um desenvolvimento melhor.

## Futuro

Se tivesse mais tempo, implementaria o log solicitado, e quanto ao pedido de incluir uma forma de visualizar os log, eu faria um script que criaria um simples arquivo html junto com o log, assim como acontecem algumas bibliotecas de cobertura de testes. O Javascript os montaria dinamicamente conforme a alteração do log, e geraria um arquivo .html, sem a necessidade de utilizar nenhuma biblioteca ou framework para isso.

Também não foi possível implementar os testes automatizados, e com certeza seria um passo a ser feito, no caso desse Desafio, o faria por úlitmo.

## Agradecimentos

Agradeço a oportunidade, e creio que foi um desafio interessante, e bem diferente do que eu imaginava.