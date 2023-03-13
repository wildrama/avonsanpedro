const mongoose = require('mongoose');
const { Schema } = mongoose;
const Oferta = require('./ofertas')




const productSchemaAvon = new Schema({
  codigo: {
    type: Number,
    required: true
  },
  numeroDeCampaña: { type: Number, required},
  nombre: {
    type: String,
    required: true
  },

  cantidad: {
    type: Number,
    required: true
  },
  marca: {
    type: String,
    required: true
  },
  categoriaInterna: {

    type: String,
    enum: ['almacen', 'varios', 'fiambreria', 'pañales', 'fideos', 'arroz', 'harina', 'no perecederos', 'articulos de limpieza', 'aceite/vinagre', 'sal', 'higene corporal', 'galletitas', 'articulos del hogar', 'higene femenina', 'panaderia', 'bebida con alcohol', 'bebidas sin alcohol', 'golosinas', 'yerba', 'azucar', 'te cafe', 'verduleria','enlatdos']

  },
  presentacion: {
    type: String
  },
  peso: {
    type: String
  },
  fechaDeVencimiento: {
    type: String

  },

  precioMinorista: {
    type: Number,
    required: true
  },
  precioMayorista: {
    type: Number,
  },
  precioCosto: {
    type: Number,

  },
  impuestoAplicado: {
    type: String,
    enum: ['0', '21', '8', '35']
  },
  cantidadDeVecesVendido: {
    type: Number
  },
  ofertaVigente:{ 
    type: Boolean
  }
},{timestamps:true})

const ProductoAvon = mongoose.model('ProductoAvon', productSchemaAvon);

module.exports = ProductoAvon;

