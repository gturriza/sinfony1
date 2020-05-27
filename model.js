let mongoose = require('mongoose');
let bcrypt = require('bcryptjs');

mongoose.Promise = global.Promise;


let perfilSchema = mongoose.Schema({
	nombre: { type : String },
	fecha: { type : String },
	nivel: {type : String},
	experiencia: {type : String},
	satisfaccion: {type: String}
});

// let userSchema = mongoose.Schema({
// 	username : { type : String, 
// 				 required : true, 
// 				 unique : true },
// 	password : { type : String,
// 				 required : true }
// })

let Vicepresidencia = mongoose.model( 'perfil', perfilSchema );
// let User = mongoose.model( 'User', userSchema );

// let UserList = {
// 	register : function( user ){
// 		return User.find( {username : user.username} )
// 			.then( checkUser => {
// 				if ( checkUser.length == 0 ){
// 					return bcrypt.hash(user.password, 10)
// 				}
// 			})
// 			.then( hashPassword =>{
// 				return User.create({
// 					username : user.username, 
// 					password : hashPassword
// 				})
// 				.then( newUser => {
// 					return newUser;
// 				})
// 				.catch( error => {
// 					throw Error( error );
// 				});
// 			})
// 			.catch( error => {
// 				throw Error( error );
// 			});
// 	},
// 	login : function( user ){
// 		return User.findOne( {username : user.username} )
// 			.then( checkUser => {
// 				if ( checkUser ){
// 					return bcrypt.compare(user.password, checkUser.password)
// 				}
// 			})
// 			.then( validUser => {
// 				if( validUser ){
// 					return "Valid User";
// 				}
// 				else{
// 					throw Error("Invalid User");
// 				}
// 			})
// 			.catch( error => {
// 				throw Error( error );
// 			});
// 	}
// }


let VPList = {
	get : function(){
		return Vicepresidencia.find()
				.then( datosVP => {
					return datosVP;
				})
				.catch( error => {
					throw Error( error );
				});
	}
	,
	 postNivel: function(id, nivel){
		 return Vicepresidencia.findOneAndUpdate({nombre: id}, {nivel: nivel}, (err) =>{
			 if(err){
				 throw Error(error);
			 }
		 });
	 },
	postSatisfaccion: function(id, satisfac){
		 return Vicepresidencia.findOneAndUpdate({nombre: id}, {satisfaccion: satisfac}, (err) =>{
			 if(err){
				 throw Error(error);
			 }
		 });
	 },
	 postTiempoAcum: function(id, experi){
		 return Vicepresidencia.findOneAndUpdate({nombre: id}, {experiencia: experi}, (err) =>{
			 if(err){
				 throw Error(error);
			 }
		 });
	 },
	
};

module.exports = { VPList };


