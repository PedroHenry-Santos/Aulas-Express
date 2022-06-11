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

 SERVICES:

 1. Students

  - Criar o estudante - POST
  - Listar os estudantes - GET
  - Trazer **somente um** estudante - GET(**:id**)
  - Atualizar **um** estudante - PUT(**:id**)
  - Apagar **um** estudante - DELETE(**:id**)


  - Sync: Executa passo a passo (linha por linha) do código e espera o retorno
  - Async: Executa mas nao espera o retorno do código, a menos que voce diga diga para esperar
      obs.: Em umn código assíncrono, eu nao tenho controle de quanto tempo demora para executar

CODE:

**CASE 1**
sync - *
sync - *
sync - *
sync - *
async - @
sync - *
sync - *
sync - *

**CASE 2**
sync - *
sync - *
sync - *
sync - *
espera async - @ -> *
sync - *
sync - *
sync - *

**CASE 3**
sync - *
sync - *
sync - *
sync - *
(Quando concluir imprima na tela ola) async - @
sync - *
sync - *
sync - *
@ -> => imprimir ola


Promise - Promessa


Ex.:

**Sync**
````javascript
function Ex1() {
  console.log('Iniciou Ex1');
  console.log('Aguardando.');
  console.log('Aguardando..');
  console.log('Aguardando...');
  console.log('Finalizou Ex1');
}

function Ex2() {
  console.log('Iniciou Ex2');
  console.log('Aguardando.');
  console.log('Aguardando..');
  console.log('Aguardando...');
  console.log('Finalizou Ex2');
}

function Ex3() {
  console.log('Iniciou Ex3');
  console.log('Aguardando.');
  console.log('Aguardando..');
  console.log('Aguardando...');
  console.log('Finalizou Ex3');
}

function Ex4() {
  console.log('Iniciou Ex4');
  console.log('Aguardando.');
  console.log('Aguardando..');
  console.log('Aguardando...');
  console.log('Finalizou Ex4');
}

console.log('Iniciou o código')
Ex1();
Ex2();
Ex3();
Ex4();
console.log('Finalizou o código')
````

**Case1**

````javascript
function Ex1() {
  console.log('Iniciou Ex1');
  console.log('Aguardando.');
  console.log('Aguardando..');
  console.log('Aguardando...');
  console.log('Finalizou Ex1');
}

function Ex2() {
  console.log('Iniciou Ex2');
  console.log('Aguardando.');
  console.log('Aguardando..');
  console.log('Aguardando...');
  console.log('Finalizou Ex2');
}

function Ex3() {
  console.log('Iniciou Ex3');
  console.log('Aguardando.');
  console.log('Aguardando..');
  console.log('Aguardando...');
  console.log('Finalizou Ex3');
}

function Ex4() {
  setTimeout(() => {
  console.log('Iniciou Ex4');
  console.log('Aguardando.');
  console.log('Aguardando..');
  console.log('Aguardando...');
  console.log('Finalizou Ex4');
  }, 600)
}

console.log('Iniciou o código')
Ex1();
Ex2();
Ex5();
Ex3();
Ex4();
console.log('Finalizou o código')
````

**Case2**

````javascript
import timer from 'timers/promises';

async function Ex5() {
  await new Promise(async (resolve, reject) => {
    const test = () => {
      console.log('Iniciou Ex5');
      console.log('Aguardando.');
      console.log('Aguardando..');
      console.log('Aguardando...');
      console.log('Finalizou Ex5');
    }
    await timer.setTimeout(500)
    resolve(test());
  })
  
}

function Ex1() {
  console.log('Iniciou Ex1');
  console.log('Aguardando.');
  console.log('Aguardando..');
  console.log('Aguardando...');
  console.log('Finalizou Ex1');
}

function Ex2() {
  console.log('Iniciou Ex2');
  console.log('Aguardando.');
  console.log('Aguardando..');
  console.log('Aguardando...');
  console.log('Finalizou Ex2');
}

function Ex3() {
  console.log('Iniciou Ex3');
  console.log('Aguardando.');
  console.log('Aguardando..');
  console.log('Aguardando...');
  console.log('Finalizou Ex3');
}

function Ex4() {
  console.log('Iniciou Ex4');
  console.log('Aguardando.');
  console.log('Aguardando..');
  console.log('Aguardando...');
  console.log('Finalizou Ex4');
}

(async () => {
  console.log('Iniciou o código')
  Ex1();
  Ex2();
  await Ex5();
  Ex3();
  Ex4();
  console.log('Finalizou o código')
})()
````

**Case3**

````javascript
import timer from 'timers/promises';

async function Ex5() {
  return await new Promise(async (resolve, reject) => {
    const num = new Date().getTime();
    const test = (param = '') => {
      console.log(`Iniciou Ex5 ${param}`);
      console.log(`Aguardando. ${param}`);
      console.log(`Aguardando.. ${param}`);
      console.log(`Aguardando... ${param}`);
      console.log(`Finalizou Ex5 ${param}`);
    }
    await timer.setTimeout(500)
    if (num % 2 === 0) resolve(test)
    reject(test);
  })
  
}

function Ex1() {
  console.log('Iniciou Ex1');
  console.log('Aguardando.');
  console.log('Aguardando..');
  console.log('Aguardando...');
  console.log('Finalizou Ex1');
}

function Ex2() {
  console.log('Iniciou Ex2');
  console.log('Aguardando.');
  console.log('Aguardando..');
  console.log('Aguardando...');
  console.log('Finalizou Ex2');
}

function Ex3() {
  console.log('Iniciou Ex3');
  console.log('Aguardando.');
  console.log('Aguardando..');
  console.log('Aguardando...');
  console.log('Finalizou Ex3');
}

function Ex4() {
  console.log('Iniciou Ex4');
  console.log('Aguardando.');
  console.log('Aguardando..');
  console.log('Aguardando...');
  console.log('Finalizou Ex4');
}

(async () => {
  console.log('Iniciou o código')
  Ex1();
  Ex2();
  Ex5().then(test => console.log(test('Aceitou'))).catch(test => console.log(test('Rejeitou'))).finally(() => console.log('ACABOU!!!!'));
  Ex3();
  Ex4();
  console.log('Finalizou o código')
})()
````