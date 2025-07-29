function ventanaBien()
{					
	if($('#numeroBienes').val() == 0)
	{
		$("#debeSelecionarNumeroBienes").dialog(
	    {
	    	resizable:false, height:"auto", width:350, modal:true,
	    	buttons:{"Aceptar": function(){$(this).dialog("close");}}
	    });																									
		return
	}
	
	$("#div_bien"+nBien).css('display','block')
	
	tablaCultivos.mostrarFilasVisibles(nBien)
	tablaConstrucciones.mostrarFilasVisibles(nBien)
	$('#textoNumeroBien').html(convertirAcentos('Bien Nº ')+nBien)											
	$("#div_errores_bien").hide();												
	$('#principal').block({ message: null });
	
	activaciones(nBien)
									
	foto[nBien].copiar(nBien, numFilasCultivos, numFilasConstrucciones)
									
	$('#ventana_bien').dialog(
	{					 					
		close: function(event, ui) 
		{									
			$('#principal').unblock()
		},		
		open: function(event, ui) { $(".ui-dialog-titlebar-close", ui.dialog).hide(); }, 
		modal: true,
		closeOnEscape: false,
		resizable:false,
		title: 'Bienes',
		width: 'auto',
		//draggable: false,
		height:915
	});								
}  
	
//==================================================================================================================================		
									
function activaciones(nBien)
{
	
	activacionBotones_Bien()
	
	
	for(var q=0; q<numFilasConstrucciones; q++)
		activacionReforma(nBien, q);
}

//==================================================================================================================================

function activacionBotones_Bien()
{
	if(nBien == 1)
		$('#anteriorBien').hide()
	else
		$('#anteriorBien').show()
	
	if(nBien == $('#numeroBienes').val())
		$('#siguienteBien').hide()
	else
		$('#siguienteBien').show()				
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




function siguienteBien()
{											
	incorporarDatosAsistentes()
	
	$.ajax(
	{
    	type: $("#formulario403").attr('method'),
    	url: 'GreSvl403_Bien?accion=ACCION_403_VALIDAR_BIEN&nBien='+nBien,
    	contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    	data: $("#formulario403").serialize(),
		dataType : 'html',
		async: false,
    	success: function(resultado) 
    	{		    		
    		if(resultado.indexOf('OK!')>-1)
    		{		    			
				$('#div_bien'+nBien).hide()
				nBien++
				foto[nBien].copiar(nBien, numFilasCultivos, numFilasConstrucciones)					
				$("#div_errores_bien").hide();
				$('#textoNumeroBien').html(convertirAcentos('Bien Nº ')+nBien)
				activaciones(nBien)
				informarCambiosGuardados()
				tablaCultivos.mostrarFilasVisibles(nBien)
				tablaConstrucciones.mostrarFilasVisibles(nBien)					
				$('#div_bien'+nBien).show()								    					    				
    		}
    		else
    		{		    		    			
    			$('#div_errores_bien').html(resultado)
    			$("#div_errores_bien").show();
    		}
		}
	});    			
}
		
//==================================================================================================================================		
		
function anteriorBien()
{												
	incorporarDatosAsistentes()
	
	$.ajax(
	{
    	type: $("#formulario403").attr('method'),		    	
    	url: 'GreSvl403_Bien?accion=ACCION_403_VALIDAR_BIEN&nBien='+nBien,
    	contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    	data: $("#formulario403").serialize(),
		dataType : 'html',
		async: false,
    	success: function(resultado) 
    	{		    		
    		if(resultado.indexOf('OK!')>-1)
    		{
				$('#div_bien'+nBien).hide()					
				nBien--
				foto[nBien].copiar(nBien, numFilasCultivos, numFilasConstrucciones)
				$("#div_errores_bien").hide();
				$('#textoNumeroBien').html(convertirAcentos('Bien Nº ')+nBien)
				activaciones(nBien)
				informarCambiosGuardados()
				tablaCultivos.mostrarFilasVisibles(nBien)
				tablaConstrucciones.mostrarFilasVisibles(nBien)					
				$('#div_bien'+nBien).show()								    					    				
    		}
    		else
    		{
    			$('#div_errores_bien').html(resultado)
    			$("#div_errores_bien").show();
    		}
		}
	});    			
}

//==================================================================================================================================

function aceptarBien()
{
	incorporarDatosAsistentes()
	
	$.ajax(
	{
    	type: $("#formulario403").attr('method'),		    	
    	url: 'GreSvl403_Bien?accion=ACCION_403_VALIDAR_BIEN&nBien='+nBien,
    	contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    	data: $("#formulario403").serialize(),
		dataType : 'html',
		async: false,
    	success: function(resultado) 
    	{		    		
    		if(resultado.indexOf('OK!')>-1)
    		{
    			foto[nBien].copiar(nBien)		    			
    			$('#ventana_bien').dialog('close');
    		}
    		else
    		{
    			$('#div_errores_bien').html(resultado)
				tablaCultivos.mostrarFilasVisibles(nBien)
				tablaConstrucciones.mostrarFilasVisibles(nBien)					
    			$("#div_errores_bien").show();
    		}
		}
	});		    							
}

//==================================================================================================================================				
				
function cancelarBien()
{			    	
    $("#dialog-confirm").dialog(
    {
  		resizable: false,
  		height: "auto",
  		width: 350,
  		modal: true,
  		hide: {effect: "explode", duration: 1000},
  		buttons: 
  		{
    		"Si": function() 
    		{	    				
				foto[nBien].restaurar(nBien, numFilasCultivos, numFilasConstrucciones)    					    				
				$(this).dialog("close");
				$('#ventana_bien').dialog('close');
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

