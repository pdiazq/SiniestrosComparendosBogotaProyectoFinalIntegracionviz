/* global d3 */

function dibujar_barchart_comparendos_tipo(seccion,archivo){
    

var margin = {top: 10,
                right: 10,
                bottom: 20,
                left: 30},
    width = 450 - margin.left - margin.right,
    height = 250 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .range([0, width]);

var y = d3.scale.ordinal()
    .rangeRoundBands([0, height], 0.1);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickSize(0)
    .tickPadding(1);

 var signo = "#";
 var seccion_compa = signo.concat(seccion);
  //console.log("Seccion para comparendos:" + seccion_compa);

var contenedor = d3.select(seccion_compa);
var svg = contenedor.append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("class","svg_comparendos")
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var ruta = "data/bar_comp/";
    var archivo_procesar= ruta.concat(archivo,".csv");
    
console.log("Cargado en comparendos:" + archivo_procesar);    

d3.csv(archivo_procesar, type, function(error, data) {
  x.domain(d3.extent(data, function(d) { return d.value; })).nice();
  y.domain(data.map(function(d) { return d.name; }));

/* original
  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", function(d) { return "bar bar--" + (d.value < 0 ? "negative" : "positive"); })
      .attr("x", function(d) { return x(Math.min(0, d.value)); })
      .attr("y", function(d) { return y(d.name); })
      .attr("width", function(d) { return Math.abs(x(d.value) - x(0)); })
      .attr("height", y.rangeBand());
*/

//Pablo Andres Baoda : modificada la creacion anterior para poder seleccionar los comparendos de la misma clase en todos los años y resaltarlos
svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("id", function(d) { 
          var clase = d.name;
          var crear_clase = clase.replace("'", "").replace("'", "");
          //console.log("va a crear id" + crear_clase);
          return crear_clase;          
      })
      .attr("class", function(d) { return "bar bar--" + (d.value < 0 ? "negative" : "positive"); })
      .attr("x", function(d) { return x(Math.min(0, d.value)); })
      .attr("fill","steelblue")
      .attr("y", function(d) { return y(d.name); })
      .attr("width", function(d) { return Math.abs(x(d.value) - x(0)); })
      .attr("height", y.rangeBand())
      .on("mouseover",function(d) {
          var signo = "#";
           //console.log("mov mouse barra: " + signo.concat(d.name.replace("'", "").replace("'", "")));
           d3.selectAll("body")
              .selectAll(signo.concat(d.name.replace("'", "").replace("'", "")))
              .attr("fill","red")
              ;})
        .on("mouseout", function(d) {
                d3.selectAll("body")
                      .selectAll(signo.concat(d.name.replace("'", "").replace("'", "")))
                      .attr("fill","steelblue");
         })
    ;
      
      
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + x(0) + ",0)")
      .call(yAxis);
});

function type(d) {
  d.value = +d.value;
  return d;
}
}


function datos_bar_delta(archivo){
    
    
    
    
}