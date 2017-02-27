/*--------Gestion de pedidos--------
Fecha:27/02/2017
Autor: Andrea González Pérez.
Descripcion: Archivo para pedir datos de un pedido.
Datos que se recogen:
- Una fecha de pedido
- Un número total de artículos
- Un total de pedido - Una dirección de entrega
- Una dirección de facturación
-----------------------------------*/
function Pedido(fecha,numeroarticulos,total,direccionentrega,direccionfacturacion){
	this.fecha = fecha;
	this.numeroarticulos = numeroarticulos;
	this.total = total;
	this.direccionentrega = direccionentrega;
	this.direccionfacturacion = direccionfacturacion;
 // fecha
this.getfecha = function(){
	return this.getfecha;
};
this.setfecha = function(fecha){
 this.fecha = fecha;
};
// numero de articulo
this.getnumeroarticulos = function(){
	return this.numeroarticulos;
};
this.setnumeroarticulos = function(numeroarticulos){
 this.numeroarticulos = numeroarticulos;
};
// total
this.gettotal = function(){
	return this.total;
};
this.settotal = function(total){
 this.total = total;
};
// direccion de entrega
this.getdireccionentrega = function(){
	return this.direccionentrega;
};
this.setdireccionentrega = function(direccionentrega){
	this.direccionentrega = direccionentrega;
};
// direccion e facturacion
this.getdireccionfacturacion = function(){
	return this.direccionfacturacion;
};
this.setdireccionfacturacion = function(direccionfacturacion){
 this.direccionfacturacion = direccionfacturacion;
};
}
