function Foto_SinConstruccion()
{	
	this.copiar2 = copiar2;
	this.restaurar2 = restaurar2;
	
	//------------------------
    this.tipoVia2="0";     
    this.nombreVia2="";
    this.numero2="";
    this.bloque2="";
    this.escalera2="";
    this.planta2="";
    this.puerta2="";
    this.sector2="";
    this.provincia2="0";
    this.municipio2="0"
    this.codigoPostal2=""
    this.referenciaCatastral2=""
    this.valorMercado2="";    	
	
	//---------------
    this.supercifie2=""
    this.planOrdenacion="0"
    this.presupuestoTotalPrevisto=""
    this.porcentajeEjecucionObras=""

	this.usosPermitidos2 = new Array()
	this.edificabilidad2 = new Array()
    
    //----------------------------
    this.instalaciones2 = ""
    this.otrosDatos2 = ""
}


function copiar2(nBien, numFilasUsosPermitidos2)
{		
	//------------------------
    foto2[nBien].tipoVia2 = $('#tipoVia2_'+nBien).val()    
    foto2[nBien].nombreVia2 = $('#nombreVia2_'+nBien).val()
    foto2[nBien].numero2 = $('#numero2_'+nBien).val()
    foto2[nBien].bloque2 = $('#bloque2_'+nBien).val()
    foto2[nBien].escalera2 = $('#escalera2_'+nBien).val()
    foto2[nBien].planta2 = $('#planta2_'+nBien).val()
    foto2[nBien].puerta2 = $('#puerta2_'+nBien).val()
    foto2[nBien].sector2 = $('#sector2_'+nBien).val()
    foto2[nBien].provincia2 = $('#provincia2_'+nBien).val()
    foto2[nBien].municipio2 = $('#municipio2_'+nBien).val()
    foto2[nBien].codigoPostal2 = $('#codigoPostal2_'+nBien).val()
    foto2[nBien].referenciaCatastral2 = $('#referenciaCatastral2_'+nBien).val()
    foto2[nBien].valorMercado2 = $('#valorMercado2_'+nBien).val()
			
	//---------------
    foto2[nBien].supercifie2=$('#supercifie2'+nBien).val()
    foto2[nBien].planOrdenacion=$('#planOrdenacion'+nBien).val()
    foto2[nBien].presupuestoTotalPrevisto=$('#presupuestoTotalPrevisto'+nBien).val()
    foto2[nBien].porcentajeEjecucionObras=$('#porcentajeEjecucionObras'+nBien).val()

	for(var q=0; q<numFilasUsosPermitidos2; q++)
	{
		foto2[nBien].usosPermitidos2[q] = $('#usosPermitidos2'+nBien+'_'+q).val()
		foto2[nBien].edificabilidad2[q] = $('#edificabilidad2'+nBien+'_'+q).val()
	}
    
	//--------------------------
	foto2[nBien].instalaciones = $('#instalaciones2'+nBien).val()
	foto2[nBien].otrosDatos = $('#otrosDatos2'+nBien).val()
}


function restaurar2(nBien, numFilasUsosPermitidos2)
{
	//------------------------
    $('#tipoVia2_'+nBien).val(foto2[nBien].tipoVia2)     
    $('#nombreVia2_'+nBien).val(foto2[nBien].nombreVia2)
    $('#numero2_'+nBien).val(foto2[nBien].numero2)
    $('#bloque2_'+nBien).val(foto2[nBien].bloque2)
    $('#escalera2_'+nBien).val(foto2[nBien].escalera2)
    $('#planta2_'+nBien).val(foto2[nBien].planta2)
    $('#puerta2_'+nBien).val(foto2[nBien].puerta2)
    $('#sector2_'+nBien).val(foto2[nBien].sector2)
    $('#provincia2_'+nBien).val(foto2[nBien].provincia2)
    cargarMunicipiosAjax('provincia2_'+nBien, 'municipio2_'+nBien)
    $('#municipio2_'+nBien).val(foto2[nBien].municipio2)
    $('#codigoPostal2_'+nBien).val(foto2[nBien].codigoPostal2)
    $('#referenciaCatastral2_'+nBien).val(foto2[nBien].referenciaCatastral2)
    $('#valorMercado2_'+nBien).val(foto2[nBien].valorMercado2)
			
	//---------------
    $('#supercifie2'+nBien).val(foto2[nBien].supercifie2)
    $('#planOrdenacion'+nBien).val(foto2[nBien].planOrdenacion)
    $('#presupuestoTotalPrevisto'+nBien).val(foto2[nBien].presupuestoTotalPrevisto)    
    $('#porcentajeEjecucionObras'+nBien).val(foto2[nBien].porcentajeEjecucionObras)

	for(q=0; q<numFilasUsosPermitidos2; q++)
	{
		$('#usosPermitidos2'+nBien+'_'+q).val(foto2[nBien].usosPermitidos2[q])
		$('#edificabilidad2'+nBien+'_'+q).val(foto2[nBien].edificabilidad2[q])
	}
    
	//--------------------------
	 $('#instalaciones2'+nBien).val(foto2[nBien].instalaciones)
	 $('#otrosDatos2'+nBien).val(foto2[nBien].otrosDatos)	
}

