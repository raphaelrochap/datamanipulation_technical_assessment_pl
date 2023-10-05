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

Olá, candidato!

Bem-vindo ao nosso teste técnico para desenvolvedor pleno. Este teste é uma oportunidade para você demonstrar suas habilidades no campo de manipulação de dados. O objetivo é avaliar a solução que você desenvolverá para um problema específico.

A tarefa consiste em criar uma aplicação backend em Typescript que realizará as seguintes ações:

1. Ler um arquivo XLS fornecido.
2. Salvar os dados lidos em um banco de dados MongoDB.
3. Criar diversos elementos via API em uma base OZmap com base nos dados salvos no banco.

Além disso, temos alguns requisitos adicionais:

* A aplicação deve ser executada em um contêiner Docker.
* Deve haver uma conexão com o MongoDB via contêiner.
* É necessário implementar testes automatizados.
* Antes de criar elementos na base OZmap, os dados lidos devem ser validados.
* A aplicação deve ter um sistema de tratamento de erros para lidar com possíveis falhas nas APIs externas ou na lógica da aplicação.
* Deve ser utilizado um sistema de logs para a aplicação, e como diferencial, disponibilizar uma interface externa para consulta desses logs.
* Você deve incluir um arquivo read.me com instruções sobre como executar a aplicação e informações de configuração.
* A aplicação deve ser capaz de exportar relatórios de execução no formato CSV.
* É necessário realizar o deploy da aplicação.

Importante: A aplicação deve ser eficiente e capaz de lidar com grandes volumes de dados, considerando que a máquina onde está a base OZmap pode ter recursos limitados. Além disso, aproveite a capacidade do Node.js para executar múltiplas threads nativamente, sem a necessidade de módulos externos, para otimizar o uso dos recursos do sistema.

Boa sorte e divirta-se desenvolvendo a solução!
 
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
   * Enviar os atributos force, auto_connect e client.implanted sempre com valor "true";
   * Exemplo de atributos a serem enviados: address (api externa), project (ID), box (ID), lat, lng, force=true, auto_connect=true, client.implanted=true, client.name (api externa), client.code (api externa), client.status (1 ou 0);

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
