const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.listen(process.env.PORT, () => console.log('app started'));

const users = [{
  username: 'scars',
  password: '1234567',
  name: '史帝芬賴',
  },
  {
    username: 'charlie',
    password: '7654321',
    name: '查理辛'
  }
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => (
    u.username === username && u.password === password
  ));
  if(user) {
    res.json({
      success: true,
      name: user.name
    })
  } else {
    res.json({
      success: false
    })
  }
});

app.get('/exist/:username', (req, res) => {
  const { username } = req.params;
  const user = users.find(u => u.username === username);
  res.json({
    exists: user !== undefined
  })
})