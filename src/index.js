import express from "express" //=const express = require("express")
// import ejs from "ejs" -- puedo obviar la importacion por que esta integrado en EXPRESS
import { dirname, join } from "path" //importo solo algunas funciones del modulo PATH
import { allowedNodeEnvironmentFlags } from "process"
import { fileURLToPath } from "url"
import indexRoutes from  "./routes/index.js" //importo todas las rutas declaradas

/* -------------------- */


//armo el path absoluto de la APP
const __dirname = dirname(fileURLToPath(import.meta.url)) 


// declaro la APP y sus atributos, propiedades, funciones, etc, etc
const app = express()
app.set("views", join(__dirname, "views")) //le indico cual es la carpeta y su ruta donde estan las views(htmls templates)
app.set("view engine", "ejs") //le digo que voy a utilizar este motor de plantillas

app.use(indexRoutes) //le indico que se este set de rutas
app.use(express.static(join(__dirname, "public"))) //desde esta URLL se sirven los archivos estaticos


app.listen(3000) //lanzo el servidor
console.log("server corriendo en el puerto> ", 3000)
