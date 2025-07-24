
//===========================================================================================================
$(function() 
{
	var navegador = BrowserDetect.browser;
	if(isInternetExplorer() || isOldInternetExplorer())
	{
		$("input[type=checkbox]").addClass("form-check-input");
	}
	$.datepicker.setDefaults( {regional:"es", showButtonPanel:true, showOtherMonths: true, selectOtherMonths: true, changeMonth:true, changeYear:true} );
	$.datepicker.formatDate( "dd/mm/yyyy", new Date() );
});



//===========================================================================================================
function obtenerRealPath()
{		
	$.ajax(
	{
    	type: 'get',
    	url: './GreSvlAccionesValoracion?obtenerRealPath=Si',
    	contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
	});							
}	


//===========================================================================================================
jQuery.fn.ForceNumericOnly =
function()
{
    return this.each(function()
    {
        $(this).keydown(function(e)
        {
            var key = e.charCode || e.keyCode || 0;
            
            return (
                key == 8 || 
                key == 9 ||
                key == 13 ||
                key == 46 ||
                key == 110 ||
                //'.' key == 190 || 
                (key >= 35 && key <= 40) ||
                (key >= 48 && key <= 57) ||
                (key >= 96 && key <= 105));
        });
    });
};


//===========================================================================================================





//===========================================================================================================

$.datepicker._gotoToday = function(id) {
    var target = $(id);
    var inst = this._getInst(target[0]);
    if (this._get(inst, 'gotoCurrent') && inst.currentDay) {
            inst.selectedDay = inst.currentDay;
            inst.drawMonth = inst.selectedMonth = inst.currentMonth;
            inst.drawYear = inst.selectedYear = inst.currentYear;
    }
    else {
            var date = new Date();
            inst.selectedDay = date.getDate();
            inst.drawMonth = inst.selectedMonth = date.getMonth();
            inst.drawYear = inst.selectedYear = date.getFullYear();
            this._setDateDatepicker(target, date);
            this._selectDate(id, this._getDateDatepicker(target));
    }
    this._notifyChange(inst);
    this._adjustDate(target);
}

//===========================================================================================================

function cargarMunicipiosAjax(selectProvincia, selectMunicipio)
{
	if($("#"+selectProvincia).val()=='0')
	{
		$("#"+selectMunicipio).empty();
		return;
	}		
	
	$.ajax(
	{
    	type: 'post',		    	
    	url: 'GreSvlPeticionesJSON?accion=ACCION_CARGAR_MUNICIPIOS&provincia='+$("#"+selectProvincia).val(),
    	contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    	async: false,
    	dataType: "json",
    	success: function(listaJSON) 
    	{		    			
    		$("#"+selectMunicipio).empty();
    		$("#"+selectMunicipio).append('<option value="0">SELECCIONE UNA OPCI&Oacute;N</option>')
    		
    		for(var q=0; q<listaJSON.codigos.length; q++)
    		{
    			$("#"+selectMunicipio).append('<option value="'+listaJSON.codigos[q]+'">'+listaJSON.descripciones[q]+'</option>')
    		}	    			    		
		}
	});
}

//===========================================================================================================

function obtenerDireccionReferenciaCatastralAjax(referenciaCatastral)
{	
	var solucion = "";
	
	$.ajax(  
	{
	 	type: 'post',		    	
	 	url: 'GreSvlPeticionesJSON?accion=ACCION_CARGAR_DIRECCION_REFERENCIA_CATASTRAL&referenciaCatastral='+referenciaCatastral,
	 	contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
	 	async: false,
	 	dataType: "json",
	 	success: function(listaJSON) 
	 	{				
	 		solucion = listaJSON
	 	}
	});
	
	return solucion;
}

//===========================================================================================================

function obtenerValorClaveJSON(clave, cadenaJSON, numeroClaves)
{
	var q;
	
	if(cadenaJSON==undefined || cadenaJSON=="")
		return "";
	
	for(q=0; q<numeroClaves; q++)
		if(cadenaJSON[q]!=undefined && cadenaJSON[q].clave == clave)
			return cadenaJSON[q].valor;
	
	return "";
}


//===========================================================================================================

function alertJQuery(mensaje) {
		
	$("#mensajeAlert").html(mensaje);
	
	$("#alertJQuery").dialog(
		{
			resizable:false, height:"auto", width:600, modal:true, buttons:{"Aceptar": function(){$(this).dialog("close");}}
		}
	);		
		
}


//===========================================================================================================

function avisoObligatoriedadPresentacionTelematica()
{
	$("#avisoObligatoriedadPresentacionTelematica").dialog(
	{
	   	resizable:false, height:"auto", width:'auto', modal:true,
		open: function(event, ui) { $(".ui-dialog-titlebar-close", ui.dialog).hide(); }, //oculta boton de cerrar ventana
	   	buttons:{"Continuar": function(){$(this).dialog("close"); $("#botonIzquierda").trigger("click");}, 
                 "Cancelar" : function(){$(this).dialog("close");}}
	});																										
}

//===========================================================================================================
function avisoNoObligadoPresentacionTelematicaPeroConDocAdjunta()
{
	$("#avisoNoObligadoPresentacionTelematicaPeroConDocAdjunta").dialog(
	{
	   	resizable:false, height:"auto", width:550, modal:true,
		open: function(event, ui) { $(".ui-dialog-titlebar-close", ui.dialog).hide(); }, //oculta boton de cerrar ventana
	   	buttons:{"Continuar": function(){$(this).dialog("close"); $("#botonIzquierda").trigger("click");}, 
	             "Cancelar" : function(){$(this).dialog("close");}}
	});																										
}

function avisoSinIngresoNoObligadoPresentacionTelematicaPeroConDocAdjunta()
{
	$("#avisoSinIngresoNoObligadoPresentacionTelematicaPeroConDocAdjunta").dialog(
	{
	   	resizable:false, height:"auto", width:550, modal:true,
		open: function(event, ui) { $(".ui-dialog-titlebar-close", ui.dialog).hide(); }, //oculta boton de cerrar ventana
	   	buttons:{"Continuar": function(){$(this).dialog("close"); $("#botonIzquierda").trigger("click");}, 
	             "Cancelar" : function(){$(this).dialog("close");}}
	});																										
}

//===========================================================================================================

function cargarUnidadesAjax(modelo, selectDestinatario, selectUnidad, codigoUnidad)
{
	if($("#"+selectDestinatario).val()=='0')
	{
		$("#"+selectUnidad).empty();
		$("#"+selectUnidad).attr('disabled','disabled');
		return;
	}		
		
	$("#"+selectUnidad).removeAttr('disabled');	
		
	$.ajax(
	{
    	type: 'post',		    	
    	url: 'GreSvlPeticionesJSON?accion=ACCION_CARGAR_UNIDADES&modelo='+modelo+'&destinatario='+$("#"+selectDestinatario).val(),
    	contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    	async: false,
    	dataType: "json",
    	success: function(listaJSON) 
    	{		    		
    		$("#"+selectUnidad).empty();
    		$("#"+selectUnidad).append('<option selected value="0">SELECCIONE UNA OPCI&Oacute;N</option>')
    		
    		/*for(var q=0; q<listaJSON.length; q++)
    		{
				if(listaJSON[q].clave == codigoUnidad)
					$("#"+selectUnidad).append('<option selected value="'+listaJSON[q].clave+'">'+listaJSON[q].valor+'</option>')
				else
    				$("#"+selectUnidad).append('<option value="'+listaJSON[q].clave+'">'+listaJSON[q].valor+'</option>')
    		}*/

    		for(var q=0; q<listaJSON.codigos.length; q++)
    		{
				if(listaJSON.codigos[q] == codigoUnidad)
    				$("#"+selectUnidad).append('<option selected value="'+listaJSON.codigos[q]+'">'+listaJSON.descripciones[q]+'</option>')
				else
					$("#"+selectUnidad).append('<option value="'+listaJSON.codigos[q]+'">'+listaJSON.descripciones[q]+'</option>')				
    		}	    			    			    			    		
		}
	});
}

//===========================================================================================================

function cargarOrganosGestoresAjax(selectCentro, selectOrganoGestor, inputCodigoTerritorial, codigoOrganoGestor, modelo801)
{
	if(modelo801 == null)
		accion = "ACCION_CARGAR_ORGANOS_GESTORES";
	else
		accion = "ACCION_CARGAR_ORGANOS_GESTORES801";
	
	if($("#"+selectCentro).val()=='0')
	{
		$("#"+inputCodigoTerritorial).val('');
		$("#"+selectOrganoGestor).empty();
		$("#"+selectOrganoGestor).attr('disabled','disabled');
		return;
	}		
		
	$("#"+selectOrganoGestor).removeAttr('disabled');	
		
	$.ajax(
	{
    	type: 'post',		    	
    	url: 'GreSvlPeticionesJSON?accion='+accion+'&codigoCentro='+$("#"+selectCentro).val(),
    	contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    	async: false,
    	dataType: "json",
    	success: function(listaJSON) 
    	{		    		    		
			$("#"+inputCodigoTerritorial).val('');
			$("#"+selectOrganoGestor).empty();
    		$("#"+selectOrganoGestor).append('<option selected value="0">SELECCIONE UNA OPCI&Oacute;N</option>')						
    		
    		/*for(var q=0; q<listaJSON.length; q++)
    		{
				if(listaJSON[q].clave == codigoOrganoGestor)
					$("#"+selectOrganoGestor).append('<option selected value="'+listaJSON[q].clave+'">'+listaJSON[q].valor+'</option>')
				else
    				$("#"+selectOrganoGestor).append('<option value="'+listaJSON[q].clave+'">'+listaJSON[q].valor+'</option>')
    		}*/

    		for(var q=0; q<listaJSON.codigos.length; q++)
    		{
				if(listaJSON.codigos[q] == codigoOrganoGestor)
    				$("#"+selectOrganoGestor).append('<option selected value="'+listaJSON.codigos[q]+'">'+listaJSON.descripciones[q]+'</option>')
				else
					$("#"+selectOrganoGestor).append('<option value="'+listaJSON.codigos[q]+'">'+listaJSON.descripciones[q]+'</option>')				
    		}	    			    			    			    			    			    		
		}
				
	});
}


//===========================================================================================================

function cargarConceptosAjax(modelo, selectConceptos, codigoTerritorial, codigoConcepto)
{	
	//alert('codigoTerritorial='+codigoTerritorial+'  codigoConcepto='+codigoConcepto)
	
	if(codigoTerritorial == null)
	{
		return;
	}
		
	$.ajax(
	{
    	type: 'post',		    	
    	url: 'GreSvlPeticionesJSON?accion=ACCION_CARGAR_CONCEPTOS_MODELO'+modelo+'&codigoTerritorial='+codigoTerritorial,
    	contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    	async: false,
    	dataType: "json",
    	success: function(listaJSON) 
    	{					    		    	
			//$("#concepto").val("");
			$("#"+selectConceptos).empty();
    		$("#"+selectConceptos).append('<option selected value="0">SELECCIONE UNA OPCI&Oacute;N</option>')						
    		
			if(listaJSON != null)
			{
	    		for(var q=0; q<listaJSON.codigos.length; q++)
	    		{
					if(listaJSON.codigos[q] == codigoConcepto)
	    				$("#"+selectConceptos).append('<option selected value="'+listaJSON.codigos[q]+'">'+listaJSON.descripciones[q]+'</option>')
					else
						$("#"+selectConceptos).append('<option value="'+listaJSON.codigos[q]+'">'+listaJSON.descripciones[q]+'</option>')				
	    		}	    	

				$('#auSelectCodigo').change();		    			    			    		
    		}	    		
		}				
	});
}


//===========================================================================================================

function registrarEnLogPulsacionBoton(botonPulsado, esVersionAdmin)
{	
	$.ajax(
	{
    	type: 'post',		    	
    	url: 'GreSvlPeticionesJSON?accion=ACCION_REGISTRAR_EN_LOG_PULSACION_BOTON&botonPulsado='+botonPulsado+'&esVersionAdmin='+esVersionAdmin,
    	contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    	async: false,
    	dataType: "json",
    	success: function() 
    	{					    		    	
		}
				
	});
}

// --------------------------------------------------------------------------------------------------------------

function comprobarIdentificacionElectronica(datosCenso, iBuc, origen) {
		
	$.ajax({
    	type: 'post',		    	
    	url: 'GreSvlPeticionesJSON?accion=ACCION_COMPROBAR_IDENTIFICACION_ELECTRONICA&datosCenso=' + datosCenso,
    	contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    	async: false,
    	dataType: "json",
    	success: function(data) {			
			var vResponse = data.responseIdentificacionElectronica;
			var bSubmitForm = false;			
			if(datosCenso == false) {				
				// VERSION WEB
				if(vResponse == "N") {					
					// N - NO SE HA IDENTIFICADO ELECTRONICAMENTE					
					dialogCatastroIdentificacion();									
				} else {					
					// S - SI SE HA IDENTIFICADO ELECTRONICAMENTE
					bSubmitForm = true;
				}
			} else {				
				// VERSION ADM
				bSubmitForm = true;
			}			
			if(bSubmitForm) {				
				if(origen == 'U') {
					document.getElementById("botonDatosCatastro" + iBuc).click();
				} else if(origen == 'R') {
					document.getElementById("botonDatosCatastroRusticos" + iBuc).click();
				}				
			}
		}				
	});

}

function dialogCatastroIdentificacion() {		
	var vDialogo = $("#dialogo-catastro-ie");
	vDialogo.dialog(
		{
			resizable: false, 
			height: 'auto', 
			width: 500, 
			modal: true,
			create: function(event, ui) {
						vDialogo.parent('.ui-dialog').css('zIndex', 2002).nextAll('.ui-widget-overlay').css('zIndex', 2001);
					},
			buttons: { "Aceptar": function() { $(this).dialog("close"); } }			
		}
	);	
}

// --------------------------------------------------------------------------------------------------------------
