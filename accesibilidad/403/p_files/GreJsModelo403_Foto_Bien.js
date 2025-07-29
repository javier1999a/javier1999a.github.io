function Foto_Bien()
{
	this.copiar = copiar;
	this.restaurar = restaurar;
	
    //------------------------------------------------------------------------------------------
    this.provincia="0"; 
    this.municipio="0";
    this.poligono="";
    this.parcela="";
    this.referenciaCatastral="";
    this.supercifieTotal="";
    this.distancia="";
    this.colindancia="0";
    this.dificultad="0";
    this.valorEstimado="";

    //------------------------------------------------------------------------------------------
    this.subParcela = new Array()
    this.cultivo = new Array()
    this.intensidadProductiva = new Array()
    this.supercifieCultivo = new Array()

    //------------------------------------------------------------------------------------------
    this.usoODestino = new Array()
    this.supercifieConstruccion = new Array()
    this.anoConstruccion = new Array()
    this.reforma = new Array()
    this.anoReforma = new Array()
    this.tipoReforma = new Array()
	
    //---------------
    this.instalaciones = ""	
}

//============================================================================================================

function copiar(nBien, numFilasCultivos, numFilasConstrucciones)
{	
	var q
	
	//------------------------
    foto[nBien].provincia=$('#provincia_'+nBien).val()
    foto[nBien].municipio=$('#municipio_'+nBien).val();
    foto[nBien].poligono=$('#poligono_'+nBien).val();
    foto[nBien].parcela=$('#parcela_'+nBien).val();
    foto[nBien].referenciaCatastral=$('#referenciaCatastral_'+nBien).val();
    foto[nBien].supercifieTotal=$('#supercifieTotal_'+nBien).val();
    foto[nBien].distancia=$('#distancia_'+nBien).val();
    foto[nBien].colindancia=$('#colindancia_'+nBien).val();
    foto[nBien].dificultad=$('#dificultad_'+nBien).val();
    foto[nBien].valorEstimado=$('#valorEstimado_'+nBien).val();    
    
    //------------------------------------------------------------------------------------------
    for(q=0; q<numFilasCultivos; q++)
	{	
    	foto[nBien].subParcela[q] = $('#subparcela'+nBien+'_'+q).val()
    	foto[nBien].cultivo[q] = $('#cultivo'+nBien+'_'+q).val()
    	foto[nBien].intensidadProductiva[q] = $('#intensidad'+nBien+'_'+q).val()
    	foto[nBien].supercifieCultivo[q] = $('#supercifieCultivo'+nBien+'_'+q).val()
	}
    
    //------------------------------------------------------------------------------------------
    for(q=0; q<numFilasConstrucciones; q++)
	{	
    	foto[nBien].usoODestino[q] = $('#usoODestino'+nBien+'_'+q).val()
    	foto[nBien].supercifieConstruccion[q] = $('#supercifieConstruccion'+nBien+'_'+q).val()
    	foto[nBien].anoConstruccion[q] = $('#anoConstruccion'+nBien+'_'+q).val()
    	foto[nBien].reforma[q] = $('#reforma'+nBien+'_'+q).val()
    	foto[nBien].anoReforma[q] = $('#anoReforma'+nBien+'_'+q).val()
    	foto[nBien].tipoReforma[q] = $('#tipoReforma'+nBien+'_'+q).val()
	}
    
	//--------------------------
	foto[nBien].instalaciones = $('#instalaciones'+nBien).val()	
}

//============================================================================================================

function restaurar(nBien, numFilasCultivos, numFilasConstrucciones)
{
	//-------------------------
    $('#provincia_'+nBien).val(foto[nBien].provincia)
    cargarMunicipiosAjax('provincia_'+nBien, 'municipio_'+nBien)
    $('#municipio_'+nBien).val(foto[nBien].municipio);
    $('#poligono_'+nBien).val(foto[nBien].poligono);
    $('#parcela_'+nBien).val(foto[nBien].parcela);
    $('#referenciaCatastral_'+nBien).val(foto[nBien].referenciaCatastral);
    $('#supercifieTotal_'+nBien).val(foto[nBien].supercifieTotal);
    $('#distancia_'+nBien).val(foto[nBien].distancia);
    $('#colindancia_'+nBien).val(foto[nBien].colindancia);
    $('#dificultad_'+nBien).val(foto[nBien].dificultad);
    $('#valorEstimado_'+nBien).val(foto[nBien].valorEstimado);    		
	
    //------------------------------------------------------------------------------------------
    for(var q=0; q<numFilasCultivos; q++)
	{	
    	$('#subparcela'+nBien+'_'+q).val(foto[nBien].subParcela[q])
    	$('#cultivo'+nBien+'_'+q).val(foto[nBien].cultivo[q])
    	$('#intensidad'+nBien+'_'+q).val(foto[nBien].intensidadProductiva[q])
    	$('#supercifieCultivo'+nBien+'_'+q).val(foto[nBien].supercifieCultivo[q])
	}
    
    //------------------------------------------------------------------------------------------
    for(q=0; q<numFilasConstrucciones; q++)
	{	
    	$('#usoODestino'+nBien+'_'+q).val(foto[nBien].usoODestino[q])
    	$('#supercifieConstruccion'+nBien+'_'+q).val(foto[nBien].supercifieConstruccion[q])
    	$('#anoConstruccion'+nBien+'_'+q).val(foto[nBien].anoConstruccion[q])
    	$('#reforma'+nBien+'_'+q).val(foto[nBien].reforma[q])
		activacionReforma(nBien, q)
    	$('#anoReforma'+nBien+'_'+q).val(foto[nBien].anoReforma[q])
    	$('#tipoReforma'+nBien+'_'+q).val(foto[nBien].tipoReforma[q])
	}
	
	//--------------------------
	foto[nBien].instalaciones = $('#instalaciones'+nBien).val()		
}

