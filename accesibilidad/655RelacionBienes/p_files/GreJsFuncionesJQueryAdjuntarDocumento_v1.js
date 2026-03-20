	
	

	
	//-- -------------------------------------------------------------------------------
	function ventanaInfoAdjuntarDocumentacion() 
	{
		$('#capaCargandoAsistenteADJ').hide();
		$('#capaMensajesError').hide();
		$('#idBotonesDeAsistenteADJ').show();
		
		
		$("#dialgo-AdjuntarDocumentacion").dialog(
			{
				resizable : true,
				height : "auto",
				width : "auto",
				modal : true,
				hide : {
					effect : "explode",
					duration : 1000
				},
				close: accionCerrarDialgoADJ,
				cache: false, 
				buttons : {
					"Continuar" : function() 
					{
						validar();
					}
				}
			}).dialog("open");
	}
	
	//==================================================================================================================================
	function validar() 
	{
		$('#capaMensajesError').hide();
		$('#Continuar').hide();
		
		var formData = buildFormDataGuardarCambios();
		 
		$.ajax(
			{
		    	type: 'post',		    	
		    	url : 'GreSvlAdjuntarDocumentacion',
				data: formData,
				cache: false,
			    contentType: false, 
			    processData: false, 
		    	success: function(respuestaHtml) 
		    	{	
		    		if(respuestaHtml.indexOf('Error') > -1)
		    		{
		    			$('#divErrores').html(respuestaHtml);
		    			$('#capaMensajesError').show();
		    			$('#idAlertaDatosCorrectos').hide();
		    			
		    		}	
		    		else
		    		{
		    			$('#datosDeAsistenteADJ').html(respuestaHtml);
		    			$('#capaCargandoAsistenteADJ').hide();
		    			$('#idAlertaDatosCorrectos').show(); 
		    			$("#dialgo-AdjuntarDocumentacion").dialog("close");
		    		}
		    		
		    		
				},
				error: function(msg) 
		    	{		    		
		    		 
		    		 $('#divErrores').html(agregarError(msg));
		    		 $('#capaMensajesError').show();
		    		 $('#idAlertaDatosCorrectos').hide();
		    		
				}
				
		});
	}	
	
	
		
	function adjuntarDocumento() 
	{
		$('#capaCargandoAsistenteADJ').show();
		$('#capaMensajesError').hide();
		
		
		var formData = buildFormToAdjuntarArchivo();
		 
		$('dialgo-AdjuntarDocumentacion').find('#botonAdjuntarDocumentacion').hide();
		
		$.ajax(
			{
		    	type: 'post',		    	
		    	url : 'GreSvlAdjuntarDocumentacion',
				data: formData,
				cache: false,
			    contentType: false, 
			    processData: false, 
			    //dataType: "json",
		    	success: function(respuestaHtml) 
		    	{	
		    		if(respuestaHtml.indexOf('Error') > -1)
		    		{
		    			$('#divErrores').html(respuestaHtml);
		    			$('#capaMensajesError').show();
		    			$('#idAlertaDatosCorrectos').hide();
		    		}	
		    		else
		    		{
		    			
		    			$('#datosDeAsistenteADJ').html(respuestaHtml);
		    			
		    		}
		    		$('#capaCargandoAsistenteADJ').hide();
				},
				error: function(msg) 
		    	{		    		
		    		 
		    		 $('#divErrores').html(agregarError(msg));
		    		 $('#capaMensajesError').show();
		    		
				}
				
				
		});
		
		$('#botonAdjuntarDocumentacion').show();
		
	}
	
	function eliminarDocumentoAdjuntado(idFile)
	{
		$("#capaMensajesError").hide();
		mostrarDialogoConfirmacionADJ(idFile);
	}
	
	/*
	function eliminarDocumentoAdjuntado()
	{
		$("#capaMensajesError").hide();
		
		$('#botonEliminarDocumento').attr("disabled", 'disabled');
		
		
		var numeroDocumentosSeleccionados = 
						getNumeroDocumentosSeleccionados();
		
		
		if (1 == numeroDocumentosSeleccionados)
		{
			mostrarDialogoConfirmacionADJ();
		}
		if (0 == numeroDocumentosSeleccionados)
		{	
			$("#divErrores").html(agregarError("Es necesario seleccionar un documento."));
			$("#capaMensajesError").show();
			$('#idAlertaDatosCorrectos').hide();
			
		}
		if (1 < numeroDocumentosSeleccionados)
		{
			$("#divErrores").html(agregarError("Sólo se puede seleccionar un documento."));
			$("#capaMensajesError").show();
			$('#idAlertaDatosCorrectos').hide();
		}
		
		$('#botonEliminarDocumento').removeAttr('disabled');
		
	}
	*/
	/*
	function mostrarDialogoConfirmacionADJ()
	{
		$("#dialgo-ConfirmacionBorrarDocumentoADJ").dialog({
		     buttons : {
		       "Si" : function() 
		       {
		   		$(this).dialog("close");
		   		eliminarDocumentoRodal();
		   		
		       },
		       "No" : function() {
		         $(this).dialog("close");
		       }
		     }
		 });
	}
	*/
	function mostrarDialogoConfirmacionADJ(idFile)
	{
		$("#dialgo-ConfirmacionBorrarDocumentoADJ").dialog({
		     buttons : {
		       "Si" : function() 
		       {
		   		$(this).dialog("close");
		   		eliminarDocumentoRodal(idFile);
		   		
		       },
		       "No" : function() {
		         $(this).dialog("close");
		       }
		     }
		 });
	}
	function eliminarDocumentoRodal(idFile) 
	{
		 var formData = buildFormToEliminarDocumento(idFile);
		
		$.ajax(
			{
		    	type: 'post',		    	
		    	url : 'GreSvlAdjuntarDocumentacion',
				data: formData,
				cache: false,
			    contentType: false, 
			    processData: false, 
		    	success: function(respuestaHtml) 
		    	{	
		    		if(respuestaHtml.indexOf('Error') > -1)
		    		{
		    			$("#divErrores").html(respuestaHtml);
		    			$("#capaMensajesError").show();
		    			$('#idAlertaDatosCorrectos').hide();
		    		}	
		    		else
		    		{
		    			$('#datosDeAsistenteADJ').html(respuestaHtml);
		    		}
		    		
				},
				error: function(msg) 
		    	{		    		
					$("#divErrores").html(agregarError(msg));
					$("#capaMensajesError").show();
					$('#idAlertaDatosCorrectos').hide();
				}
				
		});
	}
	
	function getFilaSeleccionada()
	{
		var numeroDocumentos = parseInt($("#numeroDocumetosAdjuntos").val());
   		var idFilaSeleccionada = '';
   		
   		for (var ibuc=0; ibuc < numeroDocumentos; ibuc++)
   		{
   			var nameCheckbox = "#trfila" + ibuc + " input[type=checkbox]";
   			
   			if ($(nameCheckbox).is(':checked'))
   			{
   				idFilaSeleccionada = ibuc;
   			}
   		}
   		return idFilaSeleccionada;
	}
	
	
	function getNumeroDocumentosSeleccionados()
	{
		var numeroDocumentosSeleccionados = 0;
		var numeroDocumentos = parseInt($("#numeroDocumetosAdjuntos").val());
		
		for (var ibuc=0; ibuc < numeroDocumentos; ibuc++)
		{
			var nameCheckbox = "#trfila" + ibuc + " input[type=checkbox]";
			
			if ($(nameCheckbox).is(':checked'))
			{
				numeroDocumentosSeleccionados = numeroDocumentosSeleccionados + 1;
			}
		}
		
		return numeroDocumentosSeleccionados;
	}
	
	
	
	function buildFormDataGuardarCambios()
	{
		var formData = buildFormData();
		formData.append('botonGuardarCambiosUpload', "true");
		 
  	    return formData;
	}
	
	
	function buildFormToAdjuntarArchivo()
	{
		var formData = buildFormData();
		formData.append('archivoAdjuntarUpload', $("#archivoAdjuntar")[0].files[0]);
		formData.append('botonAdjuntarDocumentacionUpload', "true");
		 
		return formData;
	}
	
	function buildFormToEliminarDocumento(idFile)
	{
	   var formData = buildFormData();
	   formData.append('botonEliminarDocumentoUpload', "true");
	   formData.append('idFilaSeleccioandaBorrarUpload', idFile);
	   
	   
	   return formData;
	}
	
	function buildFormData()
	{
		var formData = new FormData();
		formData.append('modeloUpload', "modeloPA"); 
		formData.append('datosAsistenteCumplimentadosUpload', getJSONDatosAsistenteCumplimentados());
		formData.append('datosTableJSONUpload', $("#datosTablaJSON").val());
		formData.append('datosTipoAsistente', $("#tipoAsistente").val())
		 
		 return formData;
	}
	
	
	function agregarError(sError) 
	{
   		
	   	var htmlTags = '<div class=\"fila\">'
					 		+ '<label for=\"Error\">' 
								+ sError 
							+ '</label>'
						+ '</div>';
	   					
	  
		return htmlTags;
	   	
	}
	
	
	//-- -----------------------------------------------------------------------------------------------
	
	function mostrarTablaDocAdjuntos()
	{
		var numeroDocumentos = parseInt($("#numeroDocumetosAdjuntos").val());
		if (numeroDocumentos > 0)
		{
			var htmlTableDocumentosJudiciales = $('#tablaDocumentos').html();
			htmlTableDocumentosJudiciales = htmlTableDocumentosJudiciales.replace("tablaDocumentos", "tablaDocumentosJudiciales");
			
			var numeroMaxDocAdjuntos = parseInt($('#numeroMaximoDoc').val());
			
			var i;
			for (i = 0; i < numeroMaxDocAdjuntos; i++) 
			{
				//var textoRemplazar = "<input name=\"fila"+i+"\" id=\"fila"+i+"\" type=\"checkbox\" value=\"checkbox\">";
				var textoRemplazar = "icono-trash";
				htmlTableDocumentosJudiciales = htmlTableDocumentosJudiciales.replaceAll(textoRemplazar, "novisible");
			}
			
			$('#tablaDocumentosJudiciales').html(htmlTableDocumentosJudiciales);
			$('#tablaDocumentosJudiciales').show();
		}
		else
		{
			$('#tablaDocumentosJudiciales').hide();
		}
	}
	
	//----------------------------------------------------------------------------------------------------------------------

	
	
	function mostrarTablaDocAdjuntosNotariales2()
	{
		var numeroDocumentos = parseInt($("#numeroDocumetosAdjuntos").val());
		if (numeroDocumentos > 0)
		{
			var htmlTableDocumentosNotariales = $('#tablaDocumentos').html();
			htmlTableDocumentosNotariales = htmlTableDocumentosNotariales.replace("tablaDocumentos", "tablaDocumentosNotariales");
			
			
			var numeroMaxDocAdjuntos = parseInt($('#numeroMaximoDoc').val());
			
			var i;
			for (i = 0; i < numeroMaxDocAdjuntos; i++) 
			{
				//var textoRemplazar = "<input name=\"fila"+i+"\" id=\"fila"+i+"\" type=\"checkbox\" value=\"checkbox\">";
				//htmlTableDocumentosNotariales = htmlTableDocumentosNotariales.replace(textoRemplazar, "");
				var textoRemplazar = "icono-trash";
				htmlTableDocumentosNotariales = htmlTableDocumentosNotariales.replaceAll(textoRemplazar, "novisible");
			}
			
			$('#tablaDocumentosNotariales').html(htmlTableDocumentosNotariales);
			$('#tablaDocumentosNotariales').show();
		}
		else
		{
			$('#tablaDocumentosNotariales').hide();
		}
	}
	
	
	
	//-- ------------------------------------------------------------------------------------------
	function mostrarTablaDocAdjuntosVET()
	{
		var numeroDocumentos = parseInt($("#numeroDocumetosAdjuntos").val());
		if (numeroDocumentos > 0)
		{
			var htmlTableDocumentos = $('#tablaDocumentos').html();
			htmlTableDocumentos = htmlTableDocumentos.replace("tablaDocumentos", "tablaDocumentosVET");
			
			
			var numeroMaxDocAdjuntos = parseInt($('#numeroMaximoDoc').val());
			
			var i;
			for (i = 0; i < numeroMaxDocAdjuntos; i++) 
			{
				//var textoRemplazar = "<input name=\"fila"+i+"\" id=\"fila"+i+"\" type=\"checkbox\" value=\"checkbox\">";
				//htmlTableDocumentos = htmlTableDocumentos.replace(textoRemplazar, "");
				var textoRemplazar = "icono-trash";
				htmlTableDocumentos = htmlTableDocumentos.replaceAll(textoRemplazar, "novisible");
			}
			
			$('#tablaDocumentosVET').html(htmlTableDocumentos);
			$('#tablaDocumentosVET').show();
		}
		else
		{
			$('#tablaDocumentosVET').hide();
		}
	}
	
	
	
	function mostrarTablaDocAdjuntosADMINISTRATIVO()
	{
		var numeroDocumentos = parseInt($("#numeroDocumetosAdjuntos").val());
		
		
		if (numeroDocumentos > 0)
		{
			var htmlTableDocumentos = $('#tablaDocumentos').html();
			htmlTableDocumentos = htmlTableDocumentos.replace("tablaDocumentos", "tablaDocumentosADMINISTRATIVO");
			
			
			var numeroMaxDocAdjuntos = parseInt($('#numeroMaximoDoc').val());
			
			var i;
			for (i = 0; i < numeroMaxDocAdjuntos; i++) 
			{
				//var textoRemplazar = "<input name=\"fila"+i+"\" id=\"fila"+i+"\" type=\"checkbox\" value=\"checkbox\">";
				//htmlTableDocumentos = htmlTableDocumentos.replace(textoRemplazar, "");
				var textoRemplazar = "icono-trash";
				htmlTableDocumentos = htmlTableDocumentos.replaceAll(textoRemplazar, "novisible");
			}
			
			$('#tablaDocumentosADMINISTRATIVO').html(htmlTableDocumentos);
			$('#tablaDocumentosADMINISTRATIVO').show();
		}
		else
		{
			$('#tablaDocumentosADMINISTRATIVO').hide();
		}
	}
	
	
	
	function mostrarTablaDocAdjuntosPRIVADO()
	{
	
		var numeroDocumentos = parseInt($("#numeroDocumetosAdjuntos").val());
		
		
		if (numeroDocumentos > 0)
		{
			var htmlTableDocumentos = $('#tablaDocumentos').html();
			htmlTableDocumentos = htmlTableDocumentos.replace("tablaDocumentos", "tablaDocumentosPRIVADO");
			
			
			var numeroMaxDocAdjuntos = parseInt($('#numeroMaximoDoc').val());
			
			var i;
			for (i = 0; i < numeroMaxDocAdjuntos; i++) 
			{
				//var textoRemplazar = "<input name=\"fila"+i+"\" id=\"fila"+i+"\" type=\"checkbox\" value=\"checkbox\">";
				//htmlTableDocumentos = htmlTableDocumentos.replace(textoRemplazar, "");
				var textoRemplazar = "icono-trash";
				htmlTableDocumentos = htmlTableDocumentos.replaceAll(textoRemplazar, "novisible");
			}
			
			$('#tablaDocumentosPRIVADO').html(htmlTableDocumentos);
			$('#tablaDocumentosPRIVADO').show();
		}
		else
		{
			$('#tablaDocumentosPRIVADO').hide();
		}
	}
	
	
	function deshabilitarDatepicker(nameElement)
	{
		$('#' + nameElement + '').datepicker("option", "minDate", -1);
		$('#' + nameElement + '').datepicker("option", "maxDate", -2); 
		
		$('#' + nameElement + '').prop("readonly", 'true');
		$('#' + nameElement + '').addClass('proteger');
	}
	
	
	
	