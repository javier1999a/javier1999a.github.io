
		var booVersionPublico = false;
			
		var defaulFontSize = "size_1";
		var cookie = readCookie("style");
		var title = cookie ? cookie : getPreferredStyleSheet();
		setActiveStyleSheet(title);
		
	

		engine = null;
		if (window.navigator.appName == "Microsoft Internet Explorer")
		{
		   if (document.documentMode) 
		      engine = document.documentMode;
		   else 
		   {
		      engine = 5; 
		      if (document.compatMode)
		      {
		         if (document.compatMode == "CSS1Compat")
		            engine = 7; 
		      }
		   }
		}	
				
		
		
		var getBrowserInfo = function() {
		    var ua= navigator.userAgent, tem, 
		    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
		    if(/trident/i.test(M[1])){
		        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
		        return 'IE '+(tem[1] || '');
		    }
		    if(M[1]=== 'Chrome'){
		        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
		        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
		    }
		    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
		    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
		    return M.join(' ');
		};
		
		if(!String.prototype.trim) {  
		     String.prototype.trim = function () {  
		       return this.replace(/^\s+|\s+$/g,'');  
		     };  
		} 
		
		function navegadorOk()
		{
			var versionNavegador = getBrowserInfo();
			
					 			
			if(versionNavegador == 'MSIE 8')
			{
				alert('Esta utilizando Microsoft Internet Explorer 8.\nSi accede desde GRECO actualice Explorer a version 9 o superior.\nSi accede desde Web puede utilizar tambien: Edge, FireFox, o Chrome.')
				return false;
			}
			else
			if(versionNavegador == 'MSIE 7' || versionNavegador == 'MSIE 6' || versionNavegador == 'MSIE 5')
			{
				alert('Esta utilizando Internet Explorer 7 o anterior.\nSi accede desde GRECO actualice Explorer a version 9 o superior.\nSi accede desde Web puede utilizar tambien: Edge, FireFox, o Chrome.')				
				return false;
			}
			else
			if(versionNavegador.trim() == '')
			{
				alert('La version de su navegador esta obsoleta.\nSi accede desde GRECO actualice Explorer a version 9 o superior.\nSi accede desde Web puede utilizar tambien: Edge, FireFox, o Chrome.')				
				return false;				
			}
			
			return true;
		}
		
		
		function posicionarFoco(){
			if(document.forms[0].posicionFoco != 'null')
			{
				if(document.forms[0].posicionFoco.value != 'null')
				{
					if(document.getElementById(document.forms[0].posicionFoco.value) != null)
					{
						document.getElementById(document.forms[0].posicionFoco.value).focus();
					}
				}
			}
			document.forms[0].posicionFoco.value = null;
		}
	
		function alamacenarPosicionFoco(element){
			document.forms[0].posicionFoco.value=element;
		}	


		function posicionarScroll()
		{
		  this.window.focus()	
		  window.focus();
		  this.focus();

		  posicionarFoco();
		  var offsetScroll = document.forms[0].posicionScroll.value;
		  window.scrollTo(0, offsetScroll);
		  document.forms[0].posicionScroll.value = 0;
		 
		}
		
		function submitWithPosicionScroll(element) 
		{
			alamacenarPosicionFoco(element);
			var offsetScroll = 0;
			offsetScroll = xScrollTop(window, true);
			document.forms[0].posicionScroll.value = offsetScroll;
			
			
			document.forms[0].submit();
				
			if (booVersionPublico)
			{
				mostrarBarraDeCarga();
			}
			
			if(element == "botonDatosVehiculoDGT")
			{
				document.forms[0].botonDatosVehiculoDGT.className = "buscando";
			}
			if(element == "botonMostrarVehiculoManual")
			{
				document.forms[0].botonMostrarVehiculoManual.className = "buscando";
			}
			
			
			  var cookie = readCookie("style"); 
			  var title = cookie? cookie : getPreferredStyleSheet(); 
			  setActiveStyleSheet(title); 
			
		}
				
		
		function sinSubmitWithPosicionScroll(element) 
		{
			alamacenarPosicionFoco(element);
			var offsetScroll = 0;
			offsetScroll = xScrollTop(window, true);
			document.forms[0].posicionScroll.value = offsetScroll;
			
			if (booVersionPublico)
			{
				mostrarBarraDeCarga();
			}
			
			if(element == "botonDatosVehiculoDGT")
			{
				document.forms[0].botonDatosVehiculoDGT.className = "buscando";
			}
			if(element == "botonMostrarVehiculoManual")
			{
				document.forms[0].botonMostrarVehiculoManual.className = "buscando";
			}	
			
		}
		
		
		function barraDeCargaOnsubmit()
		{
			if (booVersionPublico)
			{
				mostrarBarraDeCarga();
			}
		}
		
		function doUnload()
		{
			if (booVersionPublico)
			{
				ocultarBarraDeCarga();
			}
			
			var title = getActiveStyleSheet(); 
			createCookie("style", title, 365); 
		}
		
		

		function almacenarPosicionScroll(element)
		{
			alamacenarPosicionFoco(element);		
			var offsetScroll = 0;
			offsetScroll = xScrollTop(window, true);
			document.forms[0].posicionScroll.value = offsetScroll;
		}

		function xScrollTop(e, bWin)
		{
		  var offset=0;
		  if (!xDef(e) || bWin || e == document || e.tagName.toLowerCase() == 'html' || e.tagName.toLowerCase() == 'body') {
		    var w = window;
		    if (bWin && e) w = e;
		    if(w.document.documentElement && w.document.documentElement.scrollTop) offset=w.document.documentElement.scrollTop;
		    else if(w.document.body && xDef(w.document.body.scrollTop)) offset=w.document.body.scrollTop;
		  }
		  else {
		    e = xGetElementById(e);
		    if (e && xNum(e.scrollTop)) offset = e.scrollTop;
		  }
		  return offset;
		}
		
		function xGetElementById(e)
		{
		  if(typeof(e)=='string') {
		    if(document.getElementById) e=document.getElementById(e);
		    else if(document.all) e=document.all[e];
		    else e=null;
		  }
		  return e;
		}
		
		function xDef()
		{
			for(var i=0; i<arguments.length; ++i){
						if(typeof(arguments[i])=='undefined') 
							return false;
			}
			return true;
		}
		
		function xNum()
		{
		  for(var i=0; i<arguments.length; ++i){if(isNaN(arguments[i]) || typeof(arguments[i])!='number') return false;}
		  return true;
		}
		
		function setActiveStyleSheet(title) {
		  var i, a, main;
		  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
		    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
		      a.disabled = true;
		      if(a.getAttribute("title") == title) a.disabled = false;
		    }
		  }
		}
		
		function getActiveStyleSheet() {
		  var i, a;
		  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
		    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
		  }
		  return null;
		}
		
		function getPreferredStyleSheet() 
		{
		  var i, a;
		  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
		    if(a.getAttribute("rel").indexOf("style") != -1
		       && a.getAttribute("rel").indexOf("alt") == -1
		       && a.getAttribute("title")
		       ) return a.getAttribute("title");
		  }
		  return null;
		}
		
		function createCookie(name,value,days) 
		{
		  if (days) 
		  {
		    var date = new Date();
		    date.setTime(date.getTime()+(days*24*60*60*1000));
		    var expires = "; expires="+date.toGMTString();
		  }
		  else expires = "";
		  document.cookie = name+"="+value+expires+"; path=/";
		}
		
		function readCookie(name) 
		{
		  var nameEQ = name + "=";
		  var ca = document.cookie.split(';');
		  for(var i=0;i < ca.length;i++) {
		    var c = ca[i];
		    while (c.charAt(0)==' ') c = c.substring(1,c.length);
		    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		  }
		  return null;
		}
		
		
	
			var duration = 10 
			var _progressWidth = 100;	
			var _progressBar = "|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||"
			var _progressEnd = 4;
			var _progressAt = 0;
	
			function ProgressCreate(end) {
				_progressEnd = end;
				_progressAt = 0;
		
				if (document.all) 
				{	
					progress.className = 'show';
					progress.style.top = 65+"%";
					progress.style.left = (document.body.clientWidth/2) - (progress.offsetWidth/2);
					
				} 
				else if (document.layers) 
				{	
					document.progress.visibility = true;
					document.progress.top = 65+"%";
					document.progress.left = (window.innerWidth/2) - 200+"px";
					
				} 
				else if (document.getElementById)  
				{	
					document.getElementById("progress").className = 'show';
					document.getElementById("progress").style.top = 65+"%";
					document.getElementById("progress").style.left = (window.innerWidth/2)- 200+"px";
					
				}
			
				ProgressUpdate();	
			}
			
			function ProgressDestroy() 
			{
				if (document.all) 
				{	
					progress.className = 'hide';
					
				} 
				else if (document.layers) 
				{	
					document.progress.visibility = false;
					
				} 
				else if (document.getElementById)  
				{	
					document.getElementById("progress").className = 'hide';
					
				}
			}
			
			function ProgressStepIt() 
			{
				_progressAt++;
				if(_progressAt > _progressEnd) 
				{
					_progressAt = _progressAt % _progressEnd;
				}
				ProgressUpdate();
			}
			
			function ProgressUpdate() 
			{
				var n = (_progressWidth / _progressEnd) * _progressAt;
				
				if (document.all) 
				{	
					var bar = document.forms[0].bar;
			 	} 
			 	else if (document.layers) 
			 	{	
					var bar = document.layers["progress"].document.forms[0].bar;
					n = n * 0.55;	
				}
				else if (document.getElementById)
				{
			                var bar=document.getElementById("bar")
			    }
				
				var temp = _progressBar.substring(0, n);
				bar.value = temp;
			}
			
			function mostrarBarraProgreso() {
				ProgressCreate(10);
				window.setTimeout("Click()", 100);
			}
			
			function Click() {
				if(_progressAt >= _progressEnd) {
					_progressAt = 0;
					ProgressStepIt();
				}
				ProgressStepIt();
				window.setTimeout("Click()", (duration-1)*1000/10);
			}






	function mostrarBarraDeCarga()
	{
			
			var offsetScroll = document.forms[0].posicionScroll.value;
			if (document.all) 
			{				
			
				loading.style.top = eval(40 + offsetScroll/10)+"%";
				loading.style.display = "block";

				background.style.display = "block";
				loading.className = 'show';
				background.className = 'capaFondoDisabledAsistente';
				ocultarCombobox();				
			} 
			else if (document.layers)  
			{	
				document.loading.top = eval(40 + offsetScroll/10)+"%";
				document.loading.style.display = "block";
				document.background.style.display = "block";
				document.loading.visibility = true;
				document.background.visibility = true;
			} 
			else if (document.getElementById) 
			{	
				document.getElementById("loading").style.top = eval(40 + offsetScroll/10)+"%";
				document.getElementById("loading").style.display = "block";
				if(document.getElementById("background")!=null)
					document.getElementById("background").style.display = "block";
				document.getElementById("loading").className = 'show';
				if(document.getElementById("background")!=null)
					document.getElementById("background").className = 'capaFondoDisabledAsistente';
			}
	}

	function ocultarBarraDeCarga()
	{
		try
		{
			if (document.all) 
			{	
				loading.className = 'hide';
				background.className = 'hide';
			} 
			else if (document.layers) 
			{	
				document.loading.visibility = false;
				document.background.visibility = false;
			} 
			else if (document.getElementById) 
			{	
				document.getElementById("loading").className = 'hide';
				document.getElementById("background").className = 'hide';
			}
		}
		catch(err)
		{}
	}


	function ocultarCombobox() 
	{
	    //var combos = document.getElementsByTagName('select');
	    //for(i = 0; i < combos.length; i++) 
	    //{
	       // combos[i].style.display = 'none'; 
	    //}
	}

	function caracteresAlfaNumericosPermitiendoEspacios(evt)
	{
		if (evt.keyCode) code = evt.keyCode;
		else if (evt.which) code = evt.which;

		if(code != 32 && code != 45) //32 => espacio en blanco, 45 => -		
			caracteresAlfaNumericos(evt)		
	}
	
	function caracteresAlfaNumericos(evt)
	{
		if (evt.keyCode) code = evt.keyCode;
		else if (evt.which) code = evt.which;
		
		
		if ((48 > code) //0-9
			|| (57 < code && 65 > code)//A-Z
			|| (90 < code && 97 > code)//a-z
			|| (122 < code)) 
		{
			if (8 != code && 9 != code && 209 != code && 241 != code)
			{
				evitaEvento(evt);
			}
		}
		 
	
	}
	
	
	 function evitaEvento(evt) 
	 { 
			evt.cancelBubble = true; 
			evt.returnValue = false;
			if (evt.stopPropagation) { 
	  			evt.preventDefault();  
			} 
	 } 
	 	
	
	 function imposeMaxLength(texto, maxlong)
	 {
		 var tecla, int_value, out_value;

		 if (texto.value.length > maxlong)
		 {
			
			 in_value = texto.value;
			 out_value = in_value.substring(0,maxlong);
			 texto.value = out_value;
		 return false;
		 }
		 return true;
	 }

	 
	
	 var procesando = false;
	 function procesarPeticion()
	{
		
		var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
		var is_safari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;    
		 
		if (procesando)
		{
			alert('La operacion se esta procesando. Espere ... ');
			return false;
		}
		else
		{
			procesando = true;
			if (is_chrome || is_safari)
			{
			}
			else
			{
			}
			
		}
	}
	 
	function modificarSubmit()
	{
		var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1; 
		var is_safari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;    
		if (is_chrome || is_safari)
		{
			document.forms[0].target = "_self";
			submit();
		}
		else
		{
			document.forms[0].target = "_self";
			document.forms[0].submit();
		}
		
	}
	
	
	function modificarTarget() {
		
		document.forms[0].target = "_self";
		
	}
	
	
	function impresionBlancoSubmit()
	{
		
		document.forms[0].target = "_blank";
		
	}
	
	
	function highlightItemIndex(element)
	{
		
		element.className = "btnItemIndexAdminHighlight";
		
	}
	function downlightItemIndex(element)
	{
		
		element.className = "btnItemIndexAdmin";
		
	}
	function highlightItemIndexSUB(element)
	{
		
		element.className = "btnItemIndexAdminHighlight subrayado";
		
	}
	function downlightItemIndexSUB(element)
	{
		
		element.className = "btnItemIndexAdmin subrayado";
		
	}
	
	
	function isCookiesEnabled()
	{
		var cookieEnabled = (navigator.cookieEnabled) ? true : false;

		if (typeof navigator.cookieEnabled == "undefined" && !cookieEnabled)
		{ 
			document.cookie="testcookie";
			cookieEnabled = (document.cookie.indexOf("testcookie") != -1) ? true : false;
		}
		return (cookieEnabled);
	}
	
	
	function checkCookie(url)
	{
		if (!isCookiesEnabled())
		{
			window.location = url +"/html/errorCookiesDesactivadas.html";
		}
	}
	
	
	
	function submitBotonAceptarBuscarViasCatastro()
	{
		if(document.forms[0].botonAceptarBuscarViasCatastro != null)
		{
			document.forms[0].botonAceptarBuscarViasCatastro.click();
			$("#botonAceptarBuscarViasCatastro").click();
		}
		else if(document.getElementById('botonAceptarBuscarViasCatastro') != null)
		{
			document.getElementById('botonAceptarBuscarViasCatastro').click();
			$("#botonAceptarBuscarViasCatastro").click();
		}
	}
	

	function sendFormPlataformaPagos(entorno, sUrl)
	{		
		//var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1; 
		//var is_safari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;    
		if(entorno == "DES")				
		{
			document.forms[0].target = "_self";
		}
		else
		{
			window.open(sUrl, 'NuevaPaginaModoKiosco', 'scrollbars=1,resizable=1,titlebar=1,menubar=1'); 
			//document.forms[0].target = "NuevaPaginaModoKiosco";
		}		
	}
	
	var urlPeticionAjax = null;	
	var tiempoEjecutarFuncion = null;	
	var intervalIdAviso = null;
	var intervalIdFinalizada = null;
	var tiempoMaximoInactividadMilisegundos = null;
	
	function controlarSesion(urlParam) {		
		urlPeticionAjax = urlParam;
		var tiempoMaximoInactividad = null;			
		var tiempoMostrarAvisoSesion = null;		
		var peticion = obtenerPeticionAjax();	
		var parametrosPeticion = "accion=" + encodeURIComponent('acc_controlar');
		peticion.onreadystatechange = obtenerEstadoPeticion;
		peticion.send(parametrosPeticion);						
		function obtenerEstadoPeticion() {			
			var readyState = peticion.readyState;			
			if(null != readyState && readyState != '' && readyState == '4') {				
				var respuesta = peticion.responseText;				
				if(null != respuesta && respuesta != '') {					
					var arrDatos = respuesta.split('|');
					tiempoMaximoInactividad = parseInt(arrDatos[0]);					
					tiempoMostrarAvisoSesion = parseInt(arrDatos[1]);										
					tiempoEjecutarFuncion = (tiempoMaximoInactividad - tiempoMostrarAvisoSesion) * 60 * 1000;	// EN MILISEGUNDOS					
					intervalIdAviso = setInterval('mostrarAvisoSesion()', tiempoEjecutarFuncion);
					tiempoMaximoInactividadMilisegundos = tiempoMaximoInactividad * 60 * 1000;					
					intervalIdFinalizada = setInterval('mostrarAvisoSesionFinalizada()', tiempoMaximoInactividadMilisegundos);
				}
			}			
		}
	}	
	
	function mostrarAvisoSesion() {		
		document.getElementById('capaMensajeSesion').className = 'capaAsistenteMensajeSesion asistenteVisible';
		document.getElementById('capaFondoMensajeSesion').className = 'capaFondoDisabledAsistenteMensajeSesion asistenteVisible';
		clearInterval(intervalIdAviso);	
	}
	
	function mostrarAvisoSesionFinalizada() {		
		document.getElementById('capaMensajeSesion').className = 'capaAsistenteMensajeSesion';
		document.getElementById('capaMensajeSesionFinalizada').className = 'capaAsistenteMensajeSesion asistenteVisible';
		clearInterval(intervalIdFinalizada);
	}
	
	function continuarSesionActiva() {
		document.getElementById('capaMensajeSesion').className = 'capaAsistenteMensajeSesion';
		document.getElementById('capaFondoMensajeSesion').className = 'capaFondoDisabledAsistenteMensajeSesion';
		var peticion = obtenerPeticionAjax();		
		var parametrosPeticion = "accion=" + encodeURIComponent('acc_continuar');
		peticion.send(parametrosPeticion);						
		intervalIdAviso = setInterval('mostrarAvisoSesion()', tiempoEjecutarFuncion);	
		clearInterval(intervalIdFinalizada);
		intervalIdFinalizada = setInterval('mostrarAvisoSesionFinalizada()', tiempoMaximoInactividadMilisegundos);
	}
	
	function salirAplicacion() {		
		window.close();
	}
	
	function obtenerPeticionAjax() {
		var peticion = null;
		if(window.XMLHttpRequest) {			
			peticion = new XMLHttpRequest();					// IE7+, Firefox, Chrome, Opera, Safari
		} else {			
			peticion = new ActiveXObject("Microsoft.XMLHTTP");	// IE6, IE5
		}
		peticion.open('POST', urlPeticionAjax, true);
		peticion.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		return peticion;
	}
	
	
	function deshabilitarElementoPorId(idElemento) 
	{
		if (null != document.getElementById(idElemento))
		{
			document.getElementById(idElemento).setAttribute("disabled","disabled");
		}
	}
		
	function habilitarElementoPorId(idElemento) 
	{
		if (null != document.getElementById(idElemento))
		{
			document.getElementById(idElemento).removeAttribute("disabled");
		}
	}
	
	function convertirAcentos(cad)
	{
		cad = cad.replace('á', '\u00e1');
		cad = cad.replace('é', '\u00e9');
		cad = cad.replace('í', '\u00ed');
		cad = cad.replace('ó', '\u00f3');
		cad = cad.replace('ú', '\u00fa');
		cad = cad.replace('Á', '\u00c1');
		cad = cad.replace('É', '\u00c9');
		cad = cad.replace('Í', '\u00cd');
		cad = cad.replace('Ó', '\u00d3');
		cad = cad.replace('Ú', '\u00da');
		cad = cad.replace('ñ', '\u00f1');
		cad = cad.replace('Ñ', '\u00d1');
		cad = cad.replace('º', '\u00ba');
		
		return cad;
	}
	
	
	
	function redirigirCASClave(url)
	{
		document.forms[0].action= url;
		document.forms[0].submit();
	}
	
	function cerrarSessionCASCLAVE(url)
	{
		window.open(url, '_blank', 'scrollbars=1,resizable=1,titlebar=1,menubar=1,width=500,height=600');
	}
	
	