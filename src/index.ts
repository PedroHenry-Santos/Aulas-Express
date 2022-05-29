import express from 'express';

const app = express();

app.use(express.json())

interface UserType {
  id: number;
  name: string;
  age?: number;
}

let users: UserType[] = [
  {
    id: 1,
    name: 'John Doe',
    age: 17
  },
  {
    id: 2,
    name: 'Arthur',
    age: 15
  },
  {
    id: 3,
    name: 'Wallace',
    age: 17
  },
  {
    id: 4,
    name: 'Wallace',
    age: 10
  },
  {
    id: 5,
    name: 'Wallace',
    age: 17
  }
]



app.get('/users', (request, response) => {
  const { name, age } = request.query;

  const usersList = users.filter(user => user.name === name && (user.age && user.age >= Number(age)));
  
  response.send(usersList);
})

app.get('/users/:id', (request, response) => {
  const { id } = request.params;

  const user = users.find(user => user.id === +id);

  if (!user) {
    response.send({error: 'User not found'});
  }

  response.send(user);
})

app.post('/users', (request, response) => {
  const {id, name} = request.body;

  users.push({id, name})

  response.send({id, name});
})

app.put('/users/:id', (request, response) => {
  const { id } = request.params;

  const index = users.findIndex(banana => banana.id === +id);

  if (index === -1) {
    response.send({error: 'User not found'});
  }

  users[index] = {id: request.body.id, name: request.body.name};

  response.send(users[index]);
})

app.delete('/users/:id', (request, response) => {
  const { id } = request.params;

  const index = users.findIndex(banana => banana.id === +id);

  if (index === -1) {
    response.send({error: 'User not found'});
  }

  users = users.filter(banana => banana.id !== +id);

  response.send(users[index - 1]);
})


app.listen(3333, () => console.log('Example app listening on port 3000!'));