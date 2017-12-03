/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function dibujar_bars_dom(){
    
    var Localidad = getParameterByName('Localidad');
    //console.log(Localidad);
    
    var archivo2015 = Localidad.concat("2015",".csv");
    var archivo2016 = Localidad.concat("2016",".csv");
    var archivo2017 = Localidad.concat("2017",".csv"); 
    clean_dom_barchart_siniestros()
    var seccion = "ano2015";
    var seccion_infowin = "infowin2015";
    var infoyr = "_yr2015";
    var grados = "degrree2015";
    dibujar_barchart_siniestros(seccion,seccion_infowin,infoyr,grados,archivo2015);    
    var seccion = "ano2016";
    var seccion_infowin = "infowin2016";
    var infoyr = "_yr2016";
    var grados = "degrree2016";
    dibujar_barchart_siniestros(seccion,seccion_infowin,infoyr,grados,archivo2016);
    var seccion = "ano2017";
    var seccion_infowin = "infowin2017";
    var infoyr = "_yr2017";
    var grados = "degrree2017";
    dibujar_barchart_siniestros(seccion,seccion_infowin,infoyr,grados,archivo2017);  
}

function dibujar_lines_dom(){
    
    var Localidad = getParameterByName('Localidad');
    //console.log(Localidad);    
   var archivo2015 = Localidad.concat("2015");
   var archivo2016 = Localidad.concat("2016");
   var archivo2017 = Localidad.concat("2017");    
    clean_dom_barchart_siniestros()
    var seccion = "linechart2015";
    var archivo = archivo2015;
    dibujar_line_chart(seccion,archivo);    
    var seccion = "linechart2016";
    var archivo = archivo2016;
    dibujar_line_chart(seccion,archivo);  
    var seccion = "linechart2017";
    var archivo = archivo2017;
    dibujar_line_chart(seccion,archivo); 
}

function dibujar_bar_comparendos_dom(MesesMouse){
    
   clean_dom_barchart_comparendos();
   var Localidad = getParameterByName('Localidad');
    //console.log(Localidad);   
    
    //var Meses = getParameterByName('Meses');
    //console.log(Meses);   
    var Meses = MesesMouse;
 
   console.log("Se enviara archivo a diburar comparendos: " + Localidad.concat(Meses,"2015"));  
   var archivo2015 = Localidad.concat(Meses,"2015");
     //console.log(archivo2015);   
   var archivo2016 = Localidad.concat(Meses,"2016");
   var archivo2017 = Localidad.concat(Meses,"2017");   
   
    var seccion = "cambio2015";
    dibujar_barchart_comparendos_tipo(seccion,archivo2015);   
    var seccion = "cambio2016";
    dibujar_barchart_comparendos_tipo(seccion,archivo2016);   
    var seccion = "cambio2017";
    dibujar_barchart_comparendos_tipo(seccion,archivo2017);   

}



function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}