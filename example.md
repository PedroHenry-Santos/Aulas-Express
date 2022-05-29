 1.  Protocolo HTTP:
  - GET - Para toda e qualquer busca de informação (Buscar)
  - POST - Para criar uma nova informação (Criar)
  - PUT - Quando voce quer atualizar varias/todas informação (Atualizar varias)
  - PATCH - Quando voce quer atualizar  um pouco de informação (Atualizar algumas)
  - DELETE - Quando voce quer deletar uma informação (DELETAR)

2. Rest:
 - tem que seguir os padrões HTTP

3. RestFull
 - Tem que seguir todos os padrões HTTP

4. Envio de informações:
 - Route params (+) (Todos os verbos HTTP) - Ele utilizado para fazer roteamentos/identificar de recursos
 - Query params (+) (Todos os verbos HTTP) - Enviar parâmetros de formatação e seleção de dados - Ex.: Paginação, Filtros e etc...
 - Body params (+) (POST, PUT, PATCH) - Ele e utilizado para enviar dados
 - Header - Passar configurações/autorização para o servidor. Ex.: Token de autenticação, a linguagem escolhida, formato da resposta etc...
 - Cookies - Preferencia de usuário