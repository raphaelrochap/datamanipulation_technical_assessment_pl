# Avaliação Técnica

<a id="sumario"></a>
## Sumário

<!-- TOC -->
  * [Tarefa](#tarefa)
  * [Instruções](#instrucoes)
  * [Dados necessários](#dados)
  * [Submissão da solução](#submissao)
<!-- /TOC -->

<a id="tarefa"></a>
## 1. Tarefa

  A avaliação envolve a execução de algumas tarefas desempenhadas no setor de manipulação de dados da empresa, com o objetivo de avaliar a solução desenvolvida pelo candidato para o problema proposto. 
  A tarefa consiste no desenvolvimento de uma aplicação backend em Typescript que deverá realizar a leitura de um arquivo XLS fornecido, salvar os dados lidos em um banco de dados MongoDB, e a partir destes dados salvos no banco, realizar a criação de diversos elementos via API em uma base OZmap. Além disso, são requisitos adicionais:
 * Aplicação deve rodar em docker;
 * Conexão com mongodb via container;
 * Implementação de testes automatizados;
 * Validação dos dados lidos sobre cada elemento antes de realizar a criação na base OZmap;
 * A aplicação deverá possuir um sistema robusto de tratamento de erros para lidar com possíveis falhas nas APIs externas ou na própria lógica da aplicação;
 * Implementação de um logger, disponibilizados em uma interface externa para consulta;
 * Arquivo read.me com instruções de como executar a aplicação, e configurações disponíveis;
 * Exportação de relatórios de execução (csv);
 * Deploy da aplicação;
  IMPORTANTE: A aplicação deve ser capaz de gerenciar grandes volumes de dados e executar operações de forma eficiente, considerando que a máquina onde está a base OZmap pode possuir recursos limitados. Considerando que a linguagem Node.js permite a execução simultânea de múltiplas threads nativamente, sem a necessidade de módulos externos, projete sua aplicação de modo que cada thread seja responsável por um conjunto específico de tarefas, visando uma melhor utilização de recursos do sistema;
 
<a id="instrucoes"></a>
## 2. Instruções

 A API externa consultada retorna um usuário aleatório a cada requisição. Na primeira execução da aplicação, ela deve consultar a API externa e usar os dados obtidos para criar um imóvel com cliente no OZmap. Nas execuções seguintes, a aplicação deve tentar criar dois imóveis com cliente no OZmap: um com os mesmos dados da execução anterior e outro com novos dados coletados novamente na API externa. Para definir os atributos do imóvel com cliente no OZmap, considere as seguintes orientações:
 * Dados fixos: box = 64ac62633f250c0014f65dc2, auto_connect = false, force = true;
 * Dados variáveis:
   address = location.street.name + location.street.number + location.postcode + location.city + location.state + location.country;
   client.name = name.first + name.last;
   client.code = name.first + "." + name.last (tudo em minúsculo);
   client.observation = email;

<a id="dados"></a>
## 3. Dados necessários
* API externa: https://randomuser.me/api
* Documentação API OZmap: https://ozmap.stoplight.io/docs/ozmap/3qm4gmpe6lh1q-ferramentas-de-pesquisa
* URL da base OZmap: https://data-manipulation-6.ozmap.com.br:9994
* Nome do projeto: Fornecido individualmente;
* Arquivo XLS disponivel no diretório “files”;

<a id="submissao"></a>
## 4. Submissão da solução

Para que sua solução possa ser avaliada, ela precisa ser submetida de acordo com as estipulações listadas abaixo:

* Realize o fork deste repositório.
* Faça os commits da sua solução em um branch com o seguinte formato de nome: `solution/[your-github-username]`.
