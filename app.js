//Importar el modulo express js
const express = require('express');

//Iniciar la funcionalidad express js
const app = express();

//definir el puerto que vamos a usar
const PORT = 3000;

const books = {
    '1': { 'title': 'El Quijote' },
    '2': { 'title': 'La Iliada' },
    '3': { 'title': 'La Odisea' },
    '4': { 'title': 'La Divina Comedia' }
}


//creamos peticiones 
app.get('/', (request, response) => {
    response.send('<h1>Buenos días</h1><p>Has recibido una respuesta del servidor</p>');
});

app.get('/frutas', (req, res) => {
    res.send(`<ul>
                <li>Manzana</li>
                <li>Naranja</li>
                <li>Pera</li>
                <li>Fresas</li>
            </ul>`)
});

app.get('/formulario', (req, res) => {
    res.send(`   
    <form id="formularioEstudiante">
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required>

    <label for="edad">Edad:</label>
    <input type="number" id="edad" name="edad" required>

    <label for="carrera">Carrera:</label>
    <select id="carrera" name="carrera">
        <option value="informatica">Informática</option>
        <option value="matematicas">Matemáticas</option>
        <option value="fisica">Física</option>
    </select>

    <button type="submit">Enviar</button>
</form>
    
    `)
});

app.get('/imagen', (req, res) => {
    res.send(` 
    <img src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png" alt="Logo Google"
    width="100" height="100">
    <audio src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" controls></audio>
    <video src="https://www.w3schools.com/html/mov_bbb.mp4" controls></video>
    `)
});


app.get('/getbook/:id', (req, res) => {
    // obtengo el parametro id que me mandan en la request
    const id = req.params.id;
    // devuelvo el dato que se me pide
    res.send(books[id]);
});

app.get('/portres/:num', (req, res) => {
    const num = req.params.num;
    const intNum = parseInt(num)
    const newNum = intNum * 3;
    const numStr = newNum.toString()
    res.send(numStr);
})




//indicamos al servidor que puerto tiene que escuchar
app.listen(PORT, () => {
    console.log(`se ha iniciado el servidor en el puerto: ${PORT}`) 
})

