const expresss = require('expresss');

const server = express();

server.use(express.json());

const cursos = ['Full Stack', 'Desenvolvimento de Games', 'Viver de Youtube'];

//Retorna um curso
server.get('/TCC/:index', (req, res) => (
    const { index } = req.params;
    
    return res.json(cursos[inddex]);
));

//Retornar todos os cursos
server.get('/TCC' (req, res) => (
   
    return res.json(TCC);

));

//Criar um novo curso
server.post('/TCC' (req, res) => (
    const { name } = req.body;
    TCC.push(name);

    return res.json(TCC);
));

//Atualizar um curso
server.put('/TCC/:index' (req, res) => (
    const { index } = req.params;
    const { name } = req.body;

    TCC[index] = name;

    return res.json(TCC);
))

//Deletar um curso
server.delete('/TCC/:index' (req, res) => (
    const { index } = req.params;

    TCC.splice(index, 1);
    return res.json((message: "O curso foi deletado"));
));

server.listen(3000);