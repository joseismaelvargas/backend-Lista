import { Router } from "express";
import { crearLista,mostrarLista,editarLista,deleteLista} from "../controllers/listacontroller.js";
const ruta=Router();
// ruta.route('/prueba').get(prueba)
// ruta.route('/crearlista').post(crearLista)
ruta.route('/verLista').get(mostrarLista).post(crearLista)

ruta.route('/verLista/editlista/:id').put(editarLista).delete(deleteLista)

export default ruta
