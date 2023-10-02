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
 * Implementação de um logger, com logs disponibilizados em uma interface externa para consulta;
 * Arquivo read.me com instruções de como executar a aplicação, e configurações disponíveis;
 * Exportação de relatórios de execução (csv);
 * Deploy da aplicação;
  IMPORTANTE: A aplicação deve ser capaz de gerenciar grandes volumes de dados e executar operações de forma eficiente, considerando que a máquina onde está a base OZmap pode possuir recursos limitados. Além disso, como a linguagem Node.js permite a execução simultânea de múltiplas threads nativamente, sem a necessidade de módulos externos, projete sua aplicação de modo que cada thread seja responsável por um conjunto específico de tarefas, visando uma melhor utilização de recursos do sistema;
 
<a id="instrucoes"></a>
## 2. Instruções

 O tipo dos elementos a serem criados na base OZmap é definido pelo nome de cada tabela do arquivo XLS. Os elementos devem ser criados no MongoDB em coleções separadas para cada tipo. O atributo “project” deve ser preenchido com o ID do projeto OZmap fornecido ao candidato (fornecemos o nome do projeto, o candidato precisa encontrar o ID do projeto utilizando a API OZmap). Sobre os elementos a serem criados na base OZmap:
 * A sequencia de criação deve ser: Boxes, Splitters, Clients;
 * Para criação de Boxes:
   * As coordenadas devem ser enviadas somente pelos atributos lng e lat;
   * Enviar o atributo implanted sempre com valor "true";
   * Os IDs dos tipos de caixa devem ser buscados pela api: /box-types
   * Exemplo de atributos a serem enviados: name, lat, lng, boxType (ID), implanted=true, project (ID), hierarchyLevel;
 * Para criação de Splitters:
   * A coluna “Box” se refere ao atributor "parent" dos splitters, preenchido por um id de box;
   * Os IDs dos tipos de splitter devem ser buscados pela api: /splitter-types
   * Os dados das colunas Inputs e Outputs devem ser enviados pelo atributo "ratio", da seguinte forma:
     "ratio": {
       "output": “coluna Outputs” ,
       "input": “coluna Inputs” 
     }
   * Exemplo de atributos a serem enviados: implanted, isDrop, parent (ID da box), project (ID), name, splitterType (ID), ratio;
 * Para a criação de clientes:
   * Para criação de um cliente completo no OZmap, é necessário realizar a criação de um imóvel, no qual é possível enviar os dados do cliente a ser criado;
   * Os dados de name, code e address devem ser buscados em uma API externa fornecida abaixo, que gera usuários randômicos;
   * Atributos variáveis do imóvel/cliente a ser criado, buscados na api externa: address = location.street.name + location.street.number + location.postcode + location.city + location.state + location.country; client.name = name.first + name.last; client.code = name.first + "." + name.last (tudo em minúsculo);
   * As coordenadas devem ser enviadas somente pelos atributos lng e lat;
   * O Status deve ser enviado 0 (OK) ou 1 (ERROR);
   * Enviar os atributos force e auto_connect sempre com valor "true";
   * Exemplo de atributos a serem enviados: address (api externa), project (ID), box (ID), lat, lng, force=true, auto_connect=true, client.implanted, client.name (api externa), client.code (api externa), client.status (1 ou 0);

<a id="dados"></a>
## 3. Dados necessários
* API externa: https://randomuser.me/api
* Documentação API OZmap: https://ozmap.stoplight.io/docs/ozmap/3qm4gmpe6lh1q-ferramentas-de-pesquisa
* URL da base OZmap: https://data-manipulation-6.ozmap.com.br:9994
* Credenciais OZmap e nome do projeto: Fornecidos individualmente;
* Arquivo XLS disponivel no diretório “files”;

<a id="submissao"></a>
## 4. Submissão da solução

Para que sua solução possa ser avaliada, ela precisa ser submetida de acordo com as estipulações listadas abaixo:

* Realize o fork deste repositório.
* Faça os commits da sua solução em um branch com o seguinte formato de nome: `solution/[your-github-username]`.
