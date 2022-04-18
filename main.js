const express = require('express')
const app = express()
const path = require('path')


var installCss = path.join(__dirname, 'css')
var installimg = path.join(__dirname, 'img')
var installfont = path.join(__dirname, 'font')

app.use('/css', express.static(installCss))
app.use('/img', express.static(installimg))
app.use('/font', express.static(installfont))


//link index html
app.get('/index', (req, res) => {
    var index = path.join(__dirname, 'index.html')

    res.sendFile(index)
})

//link education html
app.get('/education', (req, res) => {
    var education = path.join(__dirname, 'html/Education.html')

    res.sendFile(education)
})

//link target html
app.get('/target', (req, res) => {
    var target = path.join(__dirname, 'html/target.html')

    res.sendFile(target)
})

//link hobby html
app.get('/hobby', (req, res) => {
    var hobby = path.join(__dirname, 'html/hobby.html')

    res.sendFile(hobby)
})

app.listen(3000)