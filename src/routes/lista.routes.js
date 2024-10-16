import { Router } from "express";
import { crearLista,mostrarLista,editarLista,deleteLista} from "../controllers/listacontroller.js";
const ruta=Router();
// ruta.route('/prueba').get(prueba)
ruta.route('/crearlista').post(crearLista)
ruta.route('/verLista').post(crearLista).get(mostrarLista)
ruta.route('/editlista/:id').put(editarLista).delete(deleteLista)

export default ruta