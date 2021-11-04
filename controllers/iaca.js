module.exports = app => {
    app.get('/iaca', (req,res)=> res.send('bakayarou konoyarou'))

    app.post('/iaca', (req,res) => {
        console.log(req.body)
        res.send('aoba')

    })
}