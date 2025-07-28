function ventanaConConstruccion()
{					
	if($('#numeroBienesUrbanosConConstruccion').val() == 0)
	{
		$("#debeSelecionarNumeroBienesUrbanos").dialog(
	    {
	    	resizable:false, height:"auto", width:350, modal:true,
	    	buttons:{"Aceptar": function(){$(this).dialog("close");}}
	    });																									
		return
	}
	
	$("#div_bienConConstruccion"+nBienConConstruccion).css('display','block')
	
	tablaDistribucion.mostrarFilasVisibles(nBienConConstruccion)
	tablaUsosPermitidos.mostrarFilasVisibles(nBienConConstruccion)
	$('#textoNumeroBien').html(convertirAcentos('Bien Nº ')+nBienConConstruccion)											
	$("#div_errores_conConstruccion").hide();												
	$('#principal').block({ message: null });
	
	activaciones(nBienConConstruccion)
									
	foto1[nBienConConstruccion].copiar(nBienConConstruccion, numFilasDistribucion, numFilasUsosPermitidos)
									
	$('#ventana_conConstruccion').dialog(
	{					 					
		close: function(event, ui) 
		{									
			$('#principal').unblock()
		},		
		open: function(event, ui) { $(".ui-dialog-titlebar-close", ui.dialog).hide(); }, 
		modal: true,
		closeOnEscape: false,
		title: convertirAcentos('Bienes Urbanos con Construcción'),
		width:'auto',
		height:540
	});								
}  
	
//==================================================================================================================================		
									
function activaciones(nBien)
{
	var q
	
	activacionBotones_ConConstruccion()
	habilitarONoDescripcionTipologiaPredominante(nBien)
	activacionSupercifies(nBien)
	for(q=0; q<numFilasDistribucion; q++)
		activacionReforma(nBien, q);
}

//==================================================================================================================================

function activacionBotones_ConConstruccion()
{
	if(nBienConConstruccion == 1)
		$('#anteriorBienConConstruccion').hide()
	else
		$('#anteriorBienConConstruccion').show()
	
	if(nBienConConstruccion == $('#numeroBienesUrbanosConConstruccion').val())
		$('#siguienteBienConConstruccion').hide()
	else
		$('#siguienteBienConConstruccion').show()				
}
	
//==================================================================================================================================

function habilitarONoDescripcionTipologiaPredominante(nConstruccion)
{ 						
	var codigoTipologia = $("#tipologiaPredominante"+(nConstruccion)).val()
	if(codigoTipologia == '11.0. OTROS')
	{
		$("#denominacionTipologiaPredominante"+(nConstruccion)).prop('disabled', false)
	}
	else
	{
		$("#denominacionTipologiaPredominante"+(nConstruccion)).val("")
		$("#denominacionTipologiaPredominante"+(nConstruccion)).prop('disabled', true)					
	}
}

//==================================================================================================================================

function activacionReforma(nConstruccion, nFila)
{
	var reforma = $("#reforma"+(nConstruccion)+"_"+nFila).val();
	
	if(reforma == 'S')
	{
		$("#anoReforma"+nConstruccion+"_"+nFila).prop("disabled", false);	
		$("#tipoReforma"+nConstruccion+"_"+nFila).prop("disabled", false);
	}
	else
	{
		$("#anoReforma"+nConstruccion+"_"+nFila).val("0")
		$("#tipoReforma"+nConstruccion+"_"+nFila).val("0")
		$("#anoReforma"+nConstruccion+"_"+nFila).prop("disabled", true);	
		$("#tipoReforma"+nConstruccion+"_"+nFila).prop("disabled", true);		
	}
}

//==================================================================================================================================

function activacionSupercifies(nConstruccion)
{			
	var q
	var disponeParcelaUsoPrivativo = $("#disponeParcelaUsoPrivativo"+(nConstruccion)).val();	
	
	var botonAnadirMasUsos = $("#botonAnadirMasUsos"+(nConstruccion)) 
	var supercifieConstruidaBajoRasante = $("#supercifieConstruidaBajoRasante"+(nConstruccion))
	var supercifieConstruidaSobreRasante = $("#supercifieConstruidaSobreRasante"+(nConstruccion))
	var supercifieParcela = $("#supercifieParcela"+(nConstruccion))				

	if(disponeParcelaUsoPrivativo == 'S')
	{			
		botonAnadirMasUsos.show()
		supercifieConstruidaBajoRasante.prop("disabled", false);				
		supercifieConstruidaSobreRasante.prop("disabled", false);
		supercifieParcela.prop( "disabled", false);

		for(q=0;q<numFilasUsosPermitidos;q++)
		{
			$("#usosPermitidos"+nConstruccion+"_"+q).prop("disabled", false);
			$("#edificabilidad"+nConstruccion+"_"+q).prop("disabled", false);
		}
	}
	else
	{
		botonAnadirMasUsos.hide()
		supercifieConstruidaBajoRasante.prop("disabled", true).val('');				
		supercifieConstruidaSobreRasante.prop("disabled", true).val('');
		supercifieParcela.prop("disabled", true).val('');
		
		var q
		for(q=0;q<numFilasUsosPermitidos;q++)
		{ 
			$("#usosPermitidos"+nConstruccion+"_"+q).prop("disabled", true).val('');
			$("#edificabilidad"+nConstruccion+"_"+q).prop("disabled", true).val('');
		}					
	}
}

//==================================================================================================================================

function siguienteBienConConstruccion()
{											
	incorporarDatosAsistentes()
	
	$.ajax(
	{
    	type: $("#formulario401").attr('method'),
    	url: 'GreSvl401_ConConstruccion?accion=ACCION_401_VALIDAR_CON_CONSTRUCCION&nBien='+nBienConConstruccion,
    	contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    	data: $("#formulario401").serialize(),
		dataType : 'html',
		async: false,
    	success: function(resultado) 
    	{		    		
    		if(resultado.indexOf('OK!')>-1)
    		{		    			
				$('#div_bienConConstruccion'+nBienConConstruccion).hide()
				nBienConConstruccion++
				foto1[nBienConConstruccion].copiar(nBienConConstruccion, numFilasDistribucion, numFilasUsosPermitidos)					
				$("#div_errores_conConstruccion").hide();
				$('#textoNumeroBien').html(convertirAcentos('Bien Nº ')+nBienConConstruccion)
				activaciones(nBienConConstruccion)
				informarCambiosGuardados()
				tablaDistribucion.mostrarFilasVisibles(nBienConConstruccion)
				tablaUsosPermitidos.mostrarFilasVisibles(nBienConConstruccion)					
				$('#div_bienConConstruccion'+nBienConConstruccion).show()								    					    				
    		}
    		else
    		{		    		    			
    			$('#div_errores_conConstruccion').html(resultado)
    			$("#div_errores_conConstruccion").show();
    		}
		}
	});    			
}
		
//==================================================================================================================================		
		
function anteriorBienConConstruccion()
{												
	incorporarDatosAsistentes()
	
	$.ajax(
	{
    	type: $("#formulario401").attr('method'),		    	
    	url: 'GreSvl401_ConConstruccion?accion=ACCION_401_VALIDAR_CON_CONSTRUCCION&nBien='+nBienConConstruccion,
    	contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    	data: $("#formulario401").serialize(),
		dataType : 'html',
		async: false,
    	success: function(resultado) 
    	{		    		
    		if(resultado.indexOf('OK!')>-1)
    		{
				$('#div_bienConConstruccion'+nBienConConstruccion).hide()					
				nBienConConstruccion--
				foto1[nBienConConstruccion].copiar(nBienConConstruccion, numFilasDistribucion, numFilasUsosPermitidos)
				$("#div_errores_conConstruccion").hide();
				$('#textoNumeroBien').html(convertirAcentos('Bien Nº ')+nBienConConstruccion)
				activaciones(nBienConConstruccion)
				informarCambiosGuardados()
				tablaDistribucion.mostrarFilasVisibles(nBienConConstruccion)
				tablaUsosPermitidos.mostrarFilasVisibles(nBienConConstruccion)					
				$('#div_bienConConstruccion'+nBienConConstruccion).show()								    					    				
    		}
    		else
    		{
    			$('#div_errores_conConstruccion').html(resultado)
    			$("#div_errores_conConstruccion").show();
    		}
		}
	});    			
}

//==================================================================================================================================

function aceptarBienConConstruccion()
{	
	var q;
	for(q=1; q<=$('#numeroBienesUrbanosConConstruccion').val(); q++)
		$("#municipio1Desc_"+q).val($("#municipio1_"+q+" option:selected").text())			
	         		
	incorporarDatosAsistentes()
		
	$.ajax(
	{
    	type: $("#formulario401").attr('method'),		    	
    	url: 'GreSvl401_ConConstruccion?accion=ACCION_401_VALIDAR_CON_CONSTRUCCION&nBien='+nBienConConstruccion,
    	contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    	data: $("#formulario401").serialize(),
		dataType : 'html',
		async: false,
    	success: function(resultado) 
    	{		    		
    		if(resultado.indexOf('OK!')>-1)
    		{
    			foto1[nBienConConstruccion].copiar(nBienConConstruccion)		    			
    			$('#ventana_conConstruccion').dialog('close');
    		}
    		else
    		{
    			$('#div_errores_conConstruccion').html(resultado)
				tablaDistribucion.mostrarFilasVisibles(nBienConConstruccion)
				tablaUsosPermitidos.mostrarFilasVisibles(nBienConConstruccion)					
    			$("#div_errores_conConstruccion").show();
    		}
		}
	});		    							
}

//==================================================================================================================================				
				
function cancelarBienConConstruccion()
{			    	
    $("#dialog-confirm").dialog(
    {
  		resizable: false,
  		height: "auto",
  		width: "auto",
  		modal: true,
  		hide: {effect: "explode", duration: 1000},
  		buttons: 
  		{
    		"Si": function() 
    		{	    				
				foto1[nBienConConstruccion].restaurar(nBienConConstruccion, numFilasDistribucion, numFilasUsosPermitidos)    					    				
				$(this).dialog("close");
				$('#ventana_conConstruccion').dialog('close');
    		},
    		"No": function() 
    		{
      			$(this).dialog("destroy");      			
    		}
  		}
	});									
}

//==================================================================================================================================
									
function informarCambiosGuardados()
{
	$("#cambiosGuardados").fadeToggle(2000);
	$("#cambiosGuardados").fadeToggle(2000);
}

//==================================================================================================================================			
	
function actualizarSupercifieTotal(nConstruccion)
{				
	var totalAux = "0"
	var q
	var sup
		
	for(q=0;q<numFilasDistribucion;q++)
	{
		sup = $.trim($("#supercifie"+nConstruccion+"_"+q).val()).replace(',','.')
		
		if(sup=='' || !decimalValido(sup))
			sup="0"
		
		totalAux = parseFloat(totalAux) + parseFloat(sup)			
	}

	totalAux = totalAux.toString().replace('.',',')
	$("#supercifieTotalConstruida"+nConstruccion).val(totalAux)
}
	
	