function Foto_ConConstruccion()
{
	this.copiar = copiar;
	this.restaurar = restaurar;
	
	//------------------------
	this.tipoVia1="0";
	this.nombreVia1="";
	this.numero1="";
	this.bloque1="";
	this.escalera1="";
	this.planta1="";
	this.puerta1="";
	this.sector1="";
	this.provincia1="0";
	this.municipio1=""; 
	this.codigoPostal1="";
	this.referenciaCatastral1="";
	this.valorMercado1="";
	
	//---------------
	this.tipologiaPredominante = "0"
	this.denominacionTipologiaPredominante = ""; 

	this.usoODestino = new Array()   							 											
	this.plantaEnQueSeSitua = new Array() 
	this.anoConstruccion = new Array()
	this.reforma = new Array()
	this.anoReforma = new Array()
	this.tipoReforma = new Array()
	this.supercifie = new Array()

	this.supercifieTotalConstruida = ""
	this.supercifieParcela = ""
	this.situacionInteriorUsoPrincipal = "0" 
	this.disponeDeAscensor = "0"
	this.numeroFachadas = "0"
	this.supercifieComunRepercutida = ""
	this.disponeParcelaUsoPrivativo = "0" 
	this.supercifieConstruidaSobreRasante = "" 
	this.supercifieConstruidaBajoRasante = ""
	
	this.usosPermitidos = new Array()
	this.edificabilidad = new Array()
	
    //----------------------------
    this.instalaciones = ""
    this.otrosDatos = ""	
}

//============================================================================================================

function copiar(nBien, numFilasDistribucion, numFilasUsosPermitidos)
{	
	//------------------------
	foto1[nBien].tipoVia1=$('#tipoVia1_'+nBien).val()
	foto1[nBien].nombreVia1=$('#nombreVia1_'+nBien).val()
	foto1[nBien].numero1=$('#numero1_'+nBien).val()
	foto1[nBien].bloque1=$('#bloque1_'+nBien).val()
	foto1[nBien].escalera1=$('#escalera1_'+nBien).val()
	foto1[nBien].planta1=$('#planta1_'+nBien).val()
	foto1[nBien].puerta1=$('#puerta1_'+nBien).val()
	foto1[nBien].sector1=$('#sector1_'+nBien).val()
	foto1[nBien].provincia1=$('#provincia1_'+nBien).val()
	foto1[nBien].municipio1=$('#municipio1_'+nBien).val() 
	foto1[nBien].codigoPostal1=$('#codigoPostal1_'+nBien).val()
	foto1[nBien].referenciaCatastral1=$('#referenciaCatastral1_'+nBien).val()
	foto1[nBien].valorMercado1=$('#valorMercado1_'+nBien).val()
	
	//---------------
	foto1[nBien].tipologiaPredominante = $('#tipologiaPredominante'+nBien).val()
	foto1[nBien].denominacionTipologiaPredominante = $('#denominacionTipologiaPredominante'+nBien).val()
	
	for(var q=0; q<numFilasDistribucion; q++)
	{	
		foto1[nBien].usoODestino[q] = $('#usoODestino'+nBien+'_'+q).val()   							 											
		foto1[nBien].plantaEnQueSeSitua[q] = $('#plantaEnQueSeSitua'+nBien+'_'+q).val() 
		foto1[nBien].anoConstruccion[q] = $('#anoConstruccion'+nBien+'_'+q).val()
		foto1[nBien].reforma[q] = $('#reforma'+nBien+'_'+q).val()
		foto1[nBien].anoReforma[q] = $('#anoReforma'+nBien+'_'+q).val()
		foto1[nBien].tipoReforma[q] = $('#tipoReforma'+nBien+'_'+q).val()
		foto1[nBien].supercifie[q] = $('#supercifie'+nBien+'_'+q).val()
	}
	
	foto1[nBien].supercifieTotalConstruida = $('#supercifieTotalConstruida'+nBien).val()
	foto1[nBien].supercifieParcela = $('#supercifieParcela'+nBien).val()
	foto1[nBien].situacionInteriorUsoPrincipal = $('#situacionInteriorUsoPrincipal'+nBien).val()
	foto1[nBien].disponeDeAscensor = $('#disponeDeAscensor'+nBien).val()
	foto1[nBien].numeroFachadas = $('#numeroFachadas'+nBien).val()
	foto1[nBien].supercifieComunRepercutida = $('#supercifieComunRepercutida'+nBien).val()
	foto1[nBien].disponeParcelaUsoPrivativo = $('#disponeParcelaUsoPrivativo'+nBien).val()
	foto1[nBien].supercifieConstruidaSobreRasante = $('#supercifieConstruidaSobreRasante'+nBien).val()
	foto1[nBien].supercifieConstruidaBajoRasante = $('#supercifieConstruidaBajoRasante'+nBien).val()

	for(q=0; q<numFilasUsosPermitidos; q++)
	{
		foto1[nBien].usosPermitidos[q] = $('#usosPermitidos'+nBien+'_'+q).val(); 		
		foto1[nBien].edificabilidad[q] = $('#edificabilidad'+nBien+'_'+q).val();  
	}
		
	//--------------------------
	foto1[nBien].instalaciones = $('#instalaciones'+nBien).val()
	foto1[nBien].otrosDatos = $('#otrosDatos'+nBien).val()	
}

//============================================================================================================

function restaurar(nBien, numFilasDistribucion, numFilasUsosPermitidos)
{
	//-------------------------
	$('#tipoVia1_'+nBien).val(foto1[nBien].tipoVia1);  
	$('#nombreVia1_'+nBien).val(foto1[nBien].nombreVia1); 
	$('#numero1_'+nBien).val(foto1[nBien].numero1);  
	$('#bloque1_'+nBien).val(foto1[nBien].bloque1)
	$('#escalera1_'+nBien).val(foto1[nBien].escalera1)
	$('#planta1_'+nBien).val(foto1[nBien].planta1)
	$('#puerta1_'+nBien).val(foto1[nBien].puerta1)
	$('#sector1_'+nBien).val(foto1[nBien].sector1)
	$('#provincia1_'+nBien).val(foto1[nBien].provincia1)
	cargarMunicipiosAjax('provincia1_'+nBien, 'municipio1_'+nBien)
	$('#municipio1_'+nBien).val(foto1[nBien].municipio1) 
	$('#codigoPostal1_'+nBien).val(foto1[nBien].codigoPostal1)
	$('#referenciaCatastral1_'+nBien).val(foto1[nBien].referenciaCatastral1)
	$('#valorMercado1_'+nBien).val(foto1[nBien].valorMercado1)
	
	//---------------
	$('#tipologiaPredominante'+nBien).val(foto1[nBien].tipologiaPredominante)
	habilitarONoDescripcionTipologiaPredominante(nBien)
	$('#denominacionTipologiaPredominante'+nBien).val(foto1[nBien].denominacionTipologiaPredominante)

	for(q=0; q<=numFilasDistribucion; q++)
	{	
		$('#usoODestino'+nBien+'_'+q).val(foto1[nBien].usoODestino[q])   							 											
		$('#plantaEnQueSeSitua'+nBien+'_'+q).val(foto1[nBien].plantaEnQueSeSitua[q]) 
		$('#anoConstruccion'+nBien+'_'+q).val(foto1[nBien].anoConstruccion[q])
		$('#reforma'+nBien+'_'+q).val(foto1[nBien].reforma[q])
		activacionReforma(nBien, q)
		$('#anoReforma'+nBien+'_'+q).val(foto1[nBien].anoReforma[q])
		$('#tipoReforma'+nBien+'_'+q).val(foto1[nBien].tipoReforma[q])
		$('#supercifie'+nBien+'_'+q).val(foto1[nBien].supercifie[q])
	}
	
	$('#supercifieTotalConstruida'+nBien).val(foto1[nBien].supercifieTotalConstruida)
	$('#supercifieParcela'+nBien).val(foto1[nBien].supercifieParcela)
	$('#situacionInteriorUsoPrincipal'+nBien).val(foto1[nBien].situacionInteriorUsoPrincipal)
	$('#disponeDeAscensor'+nBien).val(foto1[nBien].disponeDeAscensor)
	$('#numeroFachadas'+nBien).val(foto1[nBien].numeroFachadas)
	$('#supercifieComunRepercutida'+nBien).val(foto1[nBien].supercifieComunRepercutida)
	$('#disponeParcelaUsoPrivativo'+nBien).val(foto1[nBien].disponeParcelaUsoPrivativo)
	activacionSupercifies(nBien)
	$('#supercifieConstruidaSobreRasante'+nBien).val(foto1[nBien].supercifieConstruidaSobreRasante)
	$('#supercifieConstruidaBajoRasante'+nBien).val(foto1[nBien].supercifieConstruidaBajoRasante)

	for(q=0; q<numFilasUsosPermitidos; q++)
	{
		$('#usosPermitidos'+nBien+'_'+q).val(foto1[nBien].usosPermitidos[q]); 
		$('#edificabilidad'+nBien+'_'+q).val(foto1[nBien].edificabilidad[q]);  
	}
	
	//--------------------------
	foto1[nBien].instalaciones = $('#instalaciones'+nBien).val()
	foto1[nBien].otrosDatos = $('#otrosDatos'+nBien).val()		
}

