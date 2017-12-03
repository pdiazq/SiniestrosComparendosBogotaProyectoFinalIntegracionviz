/* global d3 */

function dibujar_line_chart(seccion,archivo){

// Set the dimensions of the canvas / graph
var margin = {  top: 10,
                right: 10,
                bottom: 20,
                left: 30},
    width = 450 - margin.left - margin.right,
    height = 250 - margin.top - margin.bottom;

// Parse the date / time
var parseDate = d3.time.format("%d/%m/%y").parse;
var formatTime = d3.time.format("%e %B");

// Set the ranges
var x = d3.time.scale().range([0, width]);
var y = d3.scale.linear().range([height, 0]);

// Define the axes
var xAxis = d3.svg.axis().scale(x)
    .orient("bottom").ticks(5);

var yAxis = d3.svg.axis().scale(y)
    .orient("left").ticks(5);

// Define the line
var valueline = d3.svg.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.close); });

// Define the div for the tooltip
/*var div = d3.select("body").append("div")	
    .attr("class", "tooltip")				
    .style("opacity", 0);*/

// Adds the svg canvas

var signo ="#";
var seccion_dibujar = signo.concat(seccion);
console.log(seccion_dibujar);
console.log("Seccion para lines:" + seccion_dibujar);

var svg = d3.select(seccion_dibujar)
    .append("svg")
    .attr("id", "id_linechart")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");

// Get the data

var ruta = "data/lines/";
var arc_proc = ruta.concat(archivo,".csv");
console.log(arc_proc);
d3.csv(arc_proc, function(error, data) {
    data.forEach(function(d) {
        d.date = parseDate(d.date);
        d.close = +d.close;
        //console.log(d.meses);
    });
    
   

    // Scale the range of the data
    x.domain(d3.extent(data, function(d) { return d.date; }));
    y.domain([0, d3.max(data, function(d) { return d.close; })]);

    // Add the valueline path.
    svg.append("path")
        .attr("class", "line")
        .attr("d", valueline(data));

    // Add the scatterplot
    svg.selectAll("dot")	
        .data(data)			
    .enter().append("circle")	
        .attr("id", function(d) {
                    //console.log(d.meses);
                    return d.meses; 
                }
         )
        .attr("r", 4)		
        .attr("cx", function(d) { return x(d.date); })		 
        .attr("cy", function(d) { return y(d.close); })		
        .on("mouseover", function(d) {	
            
            var signo = "#";
    
            var div = d3.selectAll("body").append("div")	
                    .attr("class", "tooltip")
                    .style("opacity", 0);
            
            div.transition()		
                .duration(200)		
                .style("opacity", .9)
            ;		
            div.html(formatTime(d.date) + "<br/>"  + d.close)	
                .style("left", (d3.event.pageX) + "px")		
                .style("top", (d3.event.pageY - 28) + "px");	
        
           
            //console.log(signo.concat(d.meses));
           
    
           d3.select("body")
              .selectAll(signo.concat(d.meses))
              .attr("opacity", "1")
              .attr("r",9)
      
       .on("mouseout", function(d) {
                var signo = "#";
            //console.log(signo.concat(d.meses));
            d3.select("body")
              .selectAll(signo.concat(d.meses))
              .attr("opacity", "0.5")
              .attr("r",4)
      
      var div = d3.select("body").selectAll(".tooltip");
            div.remove();
              
         })
              ;              
           
          
          dibujar_bar_comparendos_dom(d.meses);   
          
            })					
        .on("mouseout", function(d) {		
            div.transition()		
                .duration(500)		
                .style("opacity", 0);	
        });

    // Add the X Axis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    // Add the Y Axis
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);

});
}