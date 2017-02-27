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

this.getfecha = function(){
	return this.getfecha;
};
this.getnumeroarticulos = function(){
	return this.numeroarticulos;
};
this.gettotal = function(){
	return this.total;
};
this.getdireccionentrega = function(){
	return this.direccionentrega;
};
this.getdireccionfacturacion = function(){
	return this.direccionfacturacion;
};
this.setdireccionentrega = function(direccionentrega){
	this.direccionentrega = direccionentrega;
};
this.setdireccionfacturacion = function(){
 this.direccionfacturacion = direccionfacturacion;
};
}
