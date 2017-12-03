/* global seccion_infowin */

function dibujar_barchart_siniestros(seccion, seccion_infowin, info_yr,grados, archivo){
var margin = {
        top: 10,
        right: 10,
        bottom: 20,
        left: 30
    },
    width = 450 - margin.left - margin.right,
    height = 250 - margin.top - margin.bottom;

var y = d3.scale.linear()
    .range([height, 0]);

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .2);


var xAxisScale = d3.scale.linear()
    //.domain([1, 12])
    .range([ 0, width]);

var xAxis = d3.svg.axis()
    .scale(xAxisScale)
    .orient("bottom")
    .tickFormat(d3.format("d"));

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");
    
    var ruta = "data/bars/";
    var archivo_procesar= ruta.concat(archivo);
 console.log("Cargado en deltas siniestros:" + archivo_procesar);   
d3.csv(archivo_procesar, type, function(error, data) {
    x.domain(data.map(function(d) {
        return d.Year;
    }));
    y.domain(d3.extent(data, function(d) {
        return d.Celsius;
    })).nice();

    var signo = "#"
    var seccion_svg = signo.concat(seccion);
    //console.log("Seccion para barcharts:" + seccion_svg);
    
    var svg = d3.select(seccion_svg).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .attr("class","svg_bars")
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    svg.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("id",function(d){
            return d.Year;
        })
        .attr("class", function(d) {

            if (d.Celsius < 0){
                return "bar negative";
            } else {
                return "bar positive";
            }

        })
        .attr("fill", function(d) {

            if (d.Celsius < 0){
                return "darkred";
            } else {
                return "darkblue";
            }

        })
        .attr("opacity", "0.5")
        .attr("data-yr", function(d){
            return d.Year;
        })
        .attr("data-c", function(d){
            return d.Celsius;
        })
        .attr("title", function(d){
            return (d.Year + ": " + d.Celsius + " °C")
        })
        .attr("y", function(d) {

            if (d.Celsius > 0){
                return y(d.Celsius);
            } else {
                return y(0);
            }

        })
        .attr("x", function(d) {
            return x(d.Year);
        })
        .attr("width", x.rangeBand())
        .attr("height", function(d) {
            return Math.abs(y(d.Celsius) - y(0));
        })
        .on("mouseover", function(d){
            var signo = "#"
            var yr = signo.concat(info_yr);
            var degrree = signo.concat(grados)
            d3.select(yr)
                .text("Mes: " + d.Year);
            d3.select(degrree)
                .text(d.Celsius + " Siniestros");
        })
        
    ;    
     svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);

    svg.append("g")
        .attr("class", "y axis")
        .append("text")
        .text("Delta_Siniestros")
        .attr("transform", "translate(15, 75), rotate(-90)")

    svg.append("g")
        .attr("class", "X axis")
        .attr("transform", "translate(" + (margin.left - 6.5) + "," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "x axis")
        .append("line")
        .attr("y1", y(0))
        .attr("y2", y(0))
        .attr("x2", width);

    svg.append("g")
        .attr("class", seccion_infowin)
        .attr("transform", "translate(70, 5)")
        .append("text")
        .attr("id", info_yr);

    svg.append("g")
        .attr("class", seccion_infowin)
        .attr("transform", "translate(140, 5)")
        .append("text")
        .attr("id",grados); 

});


function type(d) {
    d.Celsius = +d.Celsius;
    return d;
}
}


function mostrar_et (){
    var signo = "#"
            var yr = signo.concat(info_yr);
            var degrree = signo.concat(grados)
            d3.select(yr)
                .text("Mes: " + d.Year);
            d3.select(degrree)
                .text(d.Celsius + " Siniestros");
}