import mongoose,{Schema} from "mongoose";
const listaSchema=new Schema({
    lista:{
       type:String,
       required:true,
       minLength:7,
       maxLength:100,
       unique:true

    }
});
const Lista=mongoose.model("lista",listaSchema);
export default Lista;