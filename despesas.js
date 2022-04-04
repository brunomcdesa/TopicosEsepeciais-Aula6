//npm install consign


module.exports = app => {
    app.get('/despesas', (req,res) => res.send('Você está em /despesas via GET') )
    app.post('/despesas', (req,res) => res.send('Você está em /despesas via POST'))

}