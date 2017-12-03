/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function clean_dom_barchart_siniestros(){
    
    var elementos = d3.selectAll(".svg_bars");
    elementos.remove();

}

function clean_dom_barchart_comparendos(){
    

    var elementos = d3.selectAll(".svg_comparendos");
    elementos.remove();
}

