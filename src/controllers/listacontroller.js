import Lista from "../database/model/lista.js";

export const crearLista=async(req,res)=>{
    try{
      const listanueva=new Lista(req.body)
      await listanueva.save()
      res.status(201).json({mensaje:'se creo la lista'})
    }catch(error){
        console.error(error)
   res.status(500).json({
    mensaje:'Ocurrio un Error,no se pudo crear el producto'
   })
    }
}
export const mostrarLista=async(req,res)=>{
    try{
      const lista=await Lista.find()
      res.status(200).json(lista)
      console.log('se encontro la lista')

    }catch(error){
        console.error(error)
   res.status(500).json({
    mensaje:'Ocurrio un Error'
   })
    }
}
export const editarLista=async(req,res)=>{
    try{
        const buscarlist=await Lista.findById(req.params.id)
        if(!buscarlist){
            return res.status(404).json({mensaje:'no se pudo editar la lista'})

        }
        await Lista.findByIdAndUpdate(req.params.id,res.body)
        res.status(200).json({mensaje:'Se edito la lista correctamente'})

    }catch(error){
        console.log(error)
      res.status(500).json({
        mensaje:'Ocurrio un error no se pudo esditar la Lista'
      })
    }
}

export const deleteLista=async(req,res)=>{
    try{
        const dele=await Lista.findById(req.params.id)
        if(!dele){
            return res.status(404).json({mensaje:'no se pudo borrar la lista'})

        }
          await Lista.findByIdAndDelete(req.params.id)
          res.status(200).json({mensaje:'se pudo borrar la Lista'})
    }catch(error){
        console.log(error)
      res.status(500).json({
        mensaje:'Ocurrio un error no se borrar'
      })
    }
}