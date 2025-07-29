

function TablaDinamica(idTr, numFilas, idCampos, valorVacio, idObligatorios, idBorrar, excepcionTablaDistribucion401, excepcionTablaConstrucciones403)
{
	this.idTr = idTr 
	this.numFilas = numFilas 
	this.idCampos = idCampos   
	this.valorVacio = valorVacio 
	this.idObligatorios = idObligatorios 
	this.idBorrar = idBorrar  
	this.excepcionTablaDistribucion401 = excepcionTablaDistribucion401
	this.excepcionTablaConstrucciones403 = excepcionTablaConstrucciones403
	
	this.borrarFila = borrarFila 
	this.activarFila = activarFila
	this.ultimaFilaVisible = ultimaFilaVisible
	this.mostrarFilasVisibles = mostrarFilasVisibles
	
	this.__noSePuedeAgregarFila = __noSePuedeAgregarFila
	this.__borrarFila = __borrarFila
	this.__mostrarFila = __mostrarFila
	this.__ocultarFila = __ocultarFila
	this.__tieneDatosFila = __tieneDatosFila
	this.__camposObligatoriosRellenosFila = __camposObligatoriosRellenosFila
	this.__visibleFila = __visibleFila
}
	
//==================================================================================================================================		

function borrarFila(nObj, nFila)
{	
	var q, w, e;
	
	this.__borrarFila(nObj, nFila)
	
	var aux = new Array(this.numFilas)
		
	for(q=0,w=0; q<this.numFilas; q++)
	{				
		if(this.__tieneDatosFila(nObj, q))
		{		
			aux[w] = new Array(this.idCampos.length)
			for(e=0; e<this.idCampos.length; e++)
				aux[w][e] = $("#"+this.idCampos[e]+nObj+"_"+q).val()
			w++								
		}					
	}
	
	for(q=0; q<this.numFilas; q++)
		this.__borrarFila(nObj, q)		
	
	for(q=0; q<this.numFilas; q++)
	{
		if(aux[q] != null)
		{
			for(e=0; e<this.idCampos.length; e++)					
				$("#"+this.idCampos[e]+nObj+"_"+q).val(aux[q][e])
		}
	}
			
	this.mostrarFilasVisibles(nObj)					
}

//==================================================================================================================================

function ultimaFilaVisible(nObj)
{
	nFila=0;					
	while(nFila!=this.numFilas && this.__visibleFila(nObj, nFila))
		nFila++
	
	return nFila					
}
	
//==================================================================================================================================
	
function activarFila(nObj, nFila, divAMostrarFaltanDatos, divAMostrarNoMasFilas)
{			
	if(nFila==-1)
	{		
		nFila=0;					
		while(nFila!=this.numFilas && this.__visibleFila(nObj, nFila))
			nFila++				
	}				
						
	if(nFila==this.numFilas)  	
	{
		if(divAMostrarNoMasFilas)		  		
			$('#'+divAMostrarNoMasFilas).show(); //Pinta error haciendo visible el div que recibe como parametro
		else
			this.__noSePuedeAgregarFila(true)
		return;
	}
	else				
	if(!this.__camposObligatoriosRellenosFila(nObj, nFila-1)) 
	{
		if(divAMostrarFaltanDatos)
		{		
			$('#'+divAMostrarFaltanDatos).show(); //Pinta error haciendo visible el div que recibe como parametro
		}
		else		
			this.__noSePuedeAgregarFila(false)
		return;
	}
	
	if(divAMostrarFaltanDatos)
		$('#'+divAMostrarFaltanDatos).hide(); //Oculta el error que pudiera haber pintado en algun otro momento

	if(divAMostrarNoMasFilas)
		$('#'+divAMostrarNoMasFilas).hide(); //Oculta el error que pudiera haber pintado en algun otro momento		
		
	this.__mostrarFila(nObj, nFila)
}

//==================================================================================================================================

function mostrarFilasVisibles(nObj)
{
	var algunaVisible=false
	for(var q=0; q<this.numFilas; q++)
	{
		if(this.__tieneDatosFila(nObj, q))
		{
			this.__mostrarFila(nObj, q)
			algunaVisible=true
		}
		else
		{
			this.__ocultarFila(nObj, q)
		}
			
	}		
	if(!algunaVisible)
		this.__mostrarFila(nObj, 0)
}

//==================================================================================================================================

function __noSePuedeAgregarFila(limiteFilas)
{
	if(limiteFilas)
	{
		$("#noSePuedeLimite").dialog(
	    {
	    	resizable:false, height:"auto", width:350, modal:true,
	    	buttons:{"Aceptar": function(){$(this).dialog("close");}}
	    });																						
	}
	else
	{
		$("#noSePuede").dialog(
	    {
	    	resizable:false, height:"auto", width:350, modal:true,
	    	buttons:{"Aceptar": function(){$(this).dialog("close");}}		    
	    });																			
	}
}

//==================================================================================================================================

function __borrarFila(nObj, nFila)
{
	var e
	
	for(e=0; e<this.idCampos.length; e++)					
		$("#"+this.idCampos[e]+nObj+"_"+nFila).val(this.valorVacio[e])			
}

//==================================================================================================================================

function __mostrarFila(nObj, nFila)
{
	$("#"+this.idTr+nObj+"_"+nFila).show()
}

//==================================================================================================================================

function __ocultarFila(nObj, nFila)
{	
	$("#"+this.idTr+nObj+"_"+nFila).hide()
}	

//==================================================================================================================================

function __tieneDatosFila(nObj, nFila)
{	
	for(var e=0; e<this.idCampos.length; e++)
	{		
		if($.trim($("#"+this.idCampos[e]+nObj+"_"+nFila).val())!=this.valorVacio[e])
			return true;
	}
				
	return false;
}

//==================================================================================================================================

function __camposObligatoriosRellenosFila(nObj, nFila)
{
	var e, auxIdObligatorios=this.idObligatorios;
	
	if(this.excepcionTablaDistribucion401)
	{
		if($.trim($("#"+this.idCampos[3]+nObj+"_"+nFila).val())=="N") 
			auxIdObligatorios = [0, 1, 6]			
	}
	
	if(this.excepcionTablaConstrucciones403)
	{
		if($.trim($("#"+this.idCampos[3]+nObj+"_"+nFila).val())!="") 
			auxIdObligatorios = [0, 1, 2, 3]			
	}	
	
	for(e=0; e<auxIdObligatorios.length; e++)
	{
		if($.trim($("#"+this.idCampos[auxIdObligatorios[e]]+nObj+"_"+nFila).val())==this.valorVacio[auxIdObligatorios[e]])
			return false;
	}
	
	return true;
}

//==================================================================================================================================

function __visibleFila(nObj, nFila)
{
	if($("#"+this.idTr+nObj+"_"+nFila).is(':visible'))	
		return true;
	
	return false;		
}	
	

 
