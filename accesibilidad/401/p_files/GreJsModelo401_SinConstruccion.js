 
function ventanaSinConstruccion()
{				
	if($('#numeroSuelosUrbanosSinConstruccion').val() == '0')
	{
		$("#debeSelecionarNumeroSuelosUrbanos").dialog(
	    {
	    	resizable:false, height:"auto", width:350, modal:true,
	    	buttons:{"Aceptar": function(){$(this).dialog("close");}}
	    });
		
		return
	}		
		
	$("#div_sueloSinConstruccion"+nSueloSinConstruccion).css('display','block')	
	
	tablaUsosPermitidos2.mostrarFilasVisibles(nSueloSinConstruccion)			
	$('#textoNumeroSuelo').html(convertirAcentos('Suelo Nº ')+nSueloSinConstruccion)											
	activacionBotones_SinConstruccion()				
	$("#div_errores_sinConstruccion").hide();												
	$('#principal').block({ message: null });
					
	foto2[nSueloSinConstruccion].copiar2(nSueloSinConstruccion, numFilasUsosPermitidos2)
									
	$('#ventana_sinConstruccion').dialog(
	{					 					
		close: function(event, ui) 
		{									
			$('#principal').unblock()
		},		
		open: function(event, ui) { $(".ui-dialog-titlebar-close", ui.dialog).hide(); }, 
		modal: true,
		closeOnEscape: false,
		resizable:false,
		title: convertirAcentos('Suelos Urbanos sin Construcción'),
		width:'auto', //688, //998
		height:540
	});								
}  
	
//==================================================================================================================================

function activacionBotones_SinConstruccion()
{
	if(nSueloSinConstruccion == 1)
		$('#anteriorSueloSinConstruccion').hide()
	else
		$('#anteriorSueloSinConstruccion').show()
	
	if(nSueloSinConstruccion == $('#numeroSuelosUrbanosSinConstruccion').val())
		$('#siguienteSueloSinConstruccion').hide()
	else
		$('#siguienteSueloSinConstruccion').show()				
}
	
//==================================================================================================================================	

function siguienteSueloSinConstruccion()
{	
	incorporarDatosAsistentes()
		
	$.ajax(
	{
    	type: $("#formulario401").attr('method'),
    	url: 'GreSvl401_SinConstruccion?accion=ACCION_401_VALIDAR_SIN_CONSTRUCCION&nSuelo='+nSueloSinConstruccion,
    	contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    	data: $("#formulario401").serialize(),
		dataType : 'html',
		async: false,
    	success: function(resultado) 
    	{		    		
    		if(resultado.indexOf('OK!')>-1)
    		{		    
				$('#div_sueloSinConstruccion'+nSueloSinConstruccion).hide()				
				nSueloSinConstruccion++				
				foto2[nSueloSinConstruccion].copiar2(nSueloSinConstruccion, numFilasUsosPermitidos2)				
				$("#div_errores_sinConstruccion").hide();    			
				$('#textoNumeroSuelo').html(convertirAcentos('Suelo Nº ')+nSueloSinConstruccion)				
				activacionBotones_SinConstruccion()				
				informarCambiosGuardados2()				
				tablaUsosPermitidos2.mostrarFilasVisibles(nSueloSinConstruccion)
				$('#div_sueloSinConstruccion'+nSueloSinConstruccion).show()
    		}
    		else
    		{		    
    			$('#div_errores_sinConstruccion').html(resultado)
    			$("#div_errores_sinConstruccion").show();
    		}
		}
	});		    			
}
		
//==================================================================================================================================		

function anteriorSueloSinConstruccion()
{												
	incorporarDatosAsistentes()
	
	$.ajax(
	{
    	type: $("#formulario401").attr('method'),		    	
    	url: 'GreSvl401_SinConstruccion?accion=ACCION_401_VALIDAR_SIN_CONSTRUCCION&nSuelo='+nSueloSinConstruccion,
    	contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    	data: $("#formulario401").serialize(),
		dataType : 'html',
		async: false,
    	success: function(resultado) 
    	{		    		
    		if(resultado.indexOf('OK!')>-1)
    		{		    			
				$('#div_sueloSinConstruccion'+nSueloSinConstruccion).hide()
				nSueloSinConstruccion--
				foto2[nSueloSinConstruccion].copiar2(nSueloSinConstruccion, numFilasUsosPermitidos2)					
				$("#div_errores_sinConstruccion").hide();
				$('#textoNumeroSuelo').html(convertirAcentos('Suelo Nº ')+nSueloSinConstruccion)
				activacionBotones_SinConstruccion()
				informarCambiosGuardados2()
				tablaUsosPermitidos2.mostrarFilasVisibles(nSueloSinConstruccion)
				$('#div_sueloSinConstruccion'+nSueloSinConstruccion).show()
    		}
    		else
    		{
    			$('#div_errores_sinConstruccion').html(resultado)
    			$("#div_errores_sinConstruccion").show();
    		}
		}
	});    			
}		

//==================================================================================================================================
	
function aceptarSueloSinConstruccion()
{			
	var q;
	for(q=1; q<=$('#numeroSuelosUrbanosSinConstruccion').val(); q++)
		$("#municipio2Desc_"+q).val($("#municipio2_"+q+" option:selected").text())			

	incorporarDatosAsistentes()			
		
	$.ajax(
	{
    	type: $("#formulario401").attr('method'),		    	
    	url: 'GreSvl401_SinConstruccion?accion=ACCION_401_VALIDAR_SIN_CONSTRUCCION&nSuelo='+nSueloSinConstruccion,
    	contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    	data: $("#formulario401").serialize(),
		dataType : 'html',
		async: false,
    	success: function(resultado) 
    	{		    		
    		if(resultado.indexOf('OK!')>-1)
    		{
    			foto2[nSueloSinConstruccion].copiar2(nSueloSinConstruccion)		    			
    			$('#ventana_sinConstruccion').dialog('close');
    		}
    		else
    		{
    			$('#div_errores_sinConstruccion').html(resultado)
    			tablaUsosPermitidos2.mostrarFilasVisibles(nSueloSinConstruccion)
    			$("#div_errores_sinConstruccion").show();
    		}
		}
	});		    							
}			

//==================================================================================================================================
	
function cancelarSueloSinConstruccion()
{			    	
    $("#dialog-confirm2").dialog(
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
				foto2[nSueloSinConstruccion].restaurar2(nSueloSinConstruccion, numFilasUsosPermitidos2)    					    			
				$(this).dialog("close");
				$('#ventana_sinConstruccion').dialog('close');
    		},
    		"No": function() 
    		{
      			$(this).dialog("destroy");
    		}
  		}
	});									
}

//==================================================================================================================================
									
function informarCambiosGuardados2()
{
	$("#cambiosGuardados2").fadeToggle(2000);
	$("#cambiosGuardados2").fadeToggle(2000);
}	

