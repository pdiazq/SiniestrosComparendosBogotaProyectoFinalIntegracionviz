function my_filter(){
    $.ajax({
        url: 'data_MJ/data2.csv',
        dataType: 'text',
    }).done(successFunction);
    function successFunction(data) {
        var categorias=["A","B","C","D","E","F","G","H","I"];
        var array_meses=["ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"];
        var filter_localidad = document.getElementById("my_select_1").value;
        var filter_year = document.getElementById("my_select_2").value;
        //var LOCALIDAD[],CATEGORIA;ANO;MES;NUMERO_COMPARENDOS
        var localidad=[],categoria=[],ano=[],mes=[],numero_comparendo=[];
        var localidad_1=[],categoria_1=[],ano_1=[],mes_1=[],numero_comparendo_1=[];

        var n_comparedos_x_a=[],n_comparedos_x_b=[],n_comparedos_x_c=[],n_comparedos_x_d=[],n_comparedos_x_e=[],n_comparedos_x_f=[],n_comparedos_x_g=[],n_comparedos_x_h=[],n_comparedos_x_i=[];
        var n_comparedos_y_a=[],n_comparedos_y_b=[],n_comparedos_y_c=[],n_comparedos_y_d=[],n_comparedos_y_e=[],n_comparedos_y_f=[],n_comparedos_y_g=[],n_comparedos_y_h=[],n_comparedos_y_i=[];
        //alert(data);
        var allRows = data.split(/\r?\n|\r/);
        for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
            var rowCells = allRows[singleRow].split(';');
            for (var n_categoria = 0; n_categoria < categorias.length; n_categoria++) {
                if((rowCells[0].localeCompare(filter_localidad)===0)&&(rowCells[2].localeCompare(filter_year)===0)&&(rowCells[1].localeCompare(categorias[n_categoria])===0)){
                    for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
                        if(rowCell===0){
                            localidad.push(rowCells[rowCell]);
                        }else if (rowCell===1) {
                            categoria.push(rowCells[rowCell]);
                        }else if (rowCell===2) {
                            ano.push(rowCells[rowCell]);
                        }if (rowCell===3) {
                            mes.push(rowCells[rowCell]);
                        } else if (rowCell===4) {
                            numero_comparendo.push(rowCells[rowCell]);
                        }
                    }
                }
            }
        }

        var arreglo_datos=Array(localidad,categoria,ano,mes,numero_comparendo); 
        numero_comparendo="";
        //var arreglo_datos_1=Array([],[],[],[],[]);
        var dimensions = [ arreglo_datos.length, arreglo_datos[0].length ];
        for (var i = 0; i < categorias.length; i++) {
            for (var j = 0; j < array_meses.length; j++) {
                //$("#valores").append(dimensions[1]+" categorias="+categorias[i]+" array_meses="+array_meses[j]+"<br>");
                for (var k = 0; k < dimensions[1]; k++) {
                    //var compara_meses= categorias.localeCompare(arreglo_datos[1][k]);
                    if ((arreglo_datos[1][k]===categorias[i])&&(arreglo_datos[3][k]===array_meses[j])) {
                        //$("#valores").append(arreglo_datos[0][k]+" "+arreglo_datos[1][k]+" "+arreglo_datos[2][k]+" "+arreglo_datos[3][k]+" "+arreglo_datos[4][k]+"<br>");
                        localidad_1.push(arreglo_datos[0][k]);
                        categoria_1.push(arreglo_datos[1][k]);
                        ano_1.push(arreglo_datos[2][k]);
                        mes_1.push(arreglo_datos[3][k]);
                        numero_comparendo_1.push(arreglo_datos[4][k]);
                    }
                }               
            }
            //$("#valores").append("<br>");
        }
        var arreglo_datos_1=Array(localidad_1,categoria_1,ano_1,mes_1,numero_comparendo_1);      

        var pointer_a=0,pointer_b=0,pointer_c=0,pointer_d=0,pointer_e=0,pointer_f=0,pointer_g=0,pointer_h=0,pointer_i=0;

        var todos_comparendo=[];

        for (var i = 0; i <dimensions[1] ; i++) {
            todos_comparendo.push(arreglo_datos_1[4][i]);
            if(arreglo_datos_1[1][i]==="A"){
                n_comparedos_y_a.push(arreglo_datos_1[4][i]);
                n_comparedos_x_a.push(pointer_a);
                pointer_a++;
            }

            if(arreglo_datos_1[1][i]==="B"){
                n_comparedos_y_b.push(arreglo_datos_1[4][i]);
                n_comparedos_x_b.push(pointer_b);
                pointer_b++;
            }

            if(arreglo_datos_1[1][i]==="C"){
                n_comparedos_y_c.push(arreglo_datos_1[4][i]);
                n_comparedos_x_c.push(pointer_c);
                pointer_c++;
            }
            if(arreglo_datos_1[1][i]==="D"){
                n_comparedos_y_d.push(arreglo_datos_1[4][i]);
                n_comparedos_x_d.push(pointer_d);
                pointer_d++;
            }

            if(arreglo_datos_1[1][i]==="E"){
                n_comparedos_y_e.push(arreglo_datos_1[4][i]);
                n_comparedos_x_e.push(pointer_e);
                pointer_e++;
            }

            if(arreglo_datos_1[1][i]==="F"){
                n_comparedos_y_f.push(arreglo_datos_1[4][i]);
                n_comparedos_x_f.push(pointer_f);
                pointer_f++;
            }

            if(arreglo_datos_1[1][i]==="G"){
                n_comparedos_y_g.push(arreglo_datos_1[4][i]);
                n_comparedos_x_g.push(pointer_g);
                pointer_g++;
            }

            if(arreglo_datos_1[1][i]==="H"){
                n_comparedos_y_h.push(arreglo_datos_1[4][i]);
                n_comparedos_x_h.push(pointer_h);
                pointer_h++;
            }

            if(arreglo_datos_1[1][i]==="I"){
                n_comparedos_y_i.push(arreglo_datos_1[4][i]);
                n_comparedos_x_i.push(pointer_i);
                pointer_h++;
            }

        }


        var min=Math.min.apply(null, todos_comparendo);
        var max=Math.max.apply(null, todos_comparendo);
        //alert(todos_comparendo);
        //alert(max);

        //alert(n_comparedos_x_e + "  "+ n_comparedos_y_e)
        //vector_x=[ { label: "Data Set 1",x: n_comparedos_x_a,y: n_comparedos_y_a },{ label: "Data Set 2",x: n_comparedos_x_b,y: n_comparedos_y_b },{ label: "Data Set 3",x:n_comparedos_x_c,y:n_comparedos_y_c},{ label: "Data Set 4",x:n_comparedos_x_d,y:n_comparedos_y_d},{ label: "Data Set 5",x:n_comparedos_x_e,y:n_comparedos_y_e},{ label: "data 4",x: [0], y: [max]}] ;
        vector_x=[ { label: "A",x: n_comparedos_x_a,y: n_comparedos_y_a },{ label: "B",x: n_comparedos_x_b,y: n_comparedos_y_b },{ label: "C",x: n_comparedos_x_c,y: n_comparedos_y_c },{ label: "D",x: n_comparedos_x_d,y: n_comparedos_y_d },{ label: "F",x: n_comparedos_x_f,y: n_comparedos_y_f },{ label: "G",x: n_comparedos_x_g,y: n_comparedos_y_g },{ label: "H",x: n_comparedos_x_h,y: n_comparedos_y_h },{ label: "I",x: n_comparedos_x_i,y: n_comparedos_y_i },{ label: "",x: [0], y: [max]}] ;
        grafica_legend(n_comparedos_x_a,n_comparedos_x_b,n_comparedos_x_c,n_comparedos_x_d,n_comparedos_x_e,n_comparedos_x_f,n_comparedos_x_g,n_comparedos_x_h,n_comparedos_x_i,   n_comparedos_y_a,n_comparedos_y_b,n_comparedos_y_c,n_comparedos_y_d,n_comparedos_y_e,n_comparedos_y_f,n_comparedos_y_g,n_comparedos_y_h,n_comparedos_y_i,max);
    }
    ///////////////////////////////////////////

    function grafica_legend(x_a,x_b,x_c,x_d,x_e,x_f,x_g,x_h,x_i,y_a,y_b,y_c,y_d,y_e,y_f,y_g,y_h,y_i,limit) {
        ////////////////////////////
        var chart;
        var data;
        var legendPosition = "top";

        var randomizeFillOpacity = function() {
        var rand = Math.random(0,1);
        for (var i = 0; i < 100; i++) { // modify sine amplitude
            data[4].values[i].y = Math.sin(i/(5 + rand)) * .4 * rand - .25;
        }
        data[4].fillOpacity = rand;
        chart.update();
    };

    var toggleLegend = function() {
        if (legendPosition == "top") {
            legendPosition = "bottom";
        } else {
            legendPosition = "top";
        }
        chart.legendPosition(legendPosition);
        chart.update();
    };

    nv.addGraph(function() {
        chart = nv.models.lineChart()
            .options({
                duration: 300,
                useInteractiveGuideline: true
            })
        ;

        // chart sub-models (ie. xAxis, yAxis, etc) when accessed directly, return themselves, not the parent chart, so need to chain separately
        chart.xAxis
            .axisLabel("Mes")
            .tickFormat(d3.format(',.1f'))
            .staggerLabels(true)
        ;
        chart.yAxis
            .axisLabel('Cantidad de Comparendos')
            .tickFormat(function(d) {
                if (d == null) {
                    return 'N/A';
                }
                return d3.format(',.2f')(d);
            })
        ;

        data_a=[];
        for (var i = 0; i < x_a.length; i++) {
            data_a.push({x:i,y:y_a[i]});
        }

        data_b=[];
        for (var i = 0; i < x_b.length; i++) {
            data_b.push({x:i,y:y_b[i]});
        }

        data_c=[];
        for (var i = 0; i < x_c.length; i++) {
            data_c.push({x:i,y:y_c[i]});
        }

        data_d=[];
        for (var i = 0; i < x_d.length; i++) {
            data_d.push({x:i,y:y_d[i]});
        }

        data_e=[];
        if (x_e.length>0) {
            for (var i = 0; i < x_e.length; i++) {
                data_e.push({x:i,y:y_e[i]});
            }
        } else {
            data_e.push({x:0,y:0});
        }

        data_f=[];
        if (x_f.length>0) {
            for (var i = 0; i < x_f.length; i++) {
                data_f.push({x:i,y:y_f[i]});
            }
        } else {
            data_f.push({x:0,y:0});
        }

        data_g=[];
        if (x_g.length>0) {
            for (var i = 0; i < x_g.length; i++) {
                data_g.push({x:i,y:y_g[i]});
            }
        } else {
            data_g.push({x:0,y:0});
        }

        data_h=[];
        if (x_h.length>0) {
            for (var i = 0; i < x_h.length; i++) {
                data_h.push({x:i,y:y_h[i]});
            }
        } else {
            data_h.push({x:0,y:0});
        }

        data_i=[];
        if (x_i.length>0) {
            for (var i = 0; i < x_i.length; i++) {
                data_i.push({x:i,y:y_i[i]});
            }
        } else {
            data_i.push({x:0,y:0});
        }



        var limite=[];
        limite.push({x:0,y:limit+5});

        data = sinAndCos(data_a,data_b,data_c,data_d,data_e,data_f,data_g,data_h,data_i,limite);

        //alert(data);

        d3.select('#chart1').html('svg')
            .datum(data)
            .call(chart);

        nv.utils.windowResize(chart.update);

        return chart;
    });

    function sinAndCos(a,b,c,d,e,f,g,h,i,lim) {
        var comparendo_a=a,comparendo_b=b,comparendo_c=c,comparendo_d=d,comparendo_e=e,comparendo_f=f,
            comparendo_g=g,comparendo_h=h,comparendo_i=i,limi=lim;

        return [
            {
                values: comparendo_a,
                key: "A",
                color: "#ff0000"
            },
            {
                values: comparendo_b,
                key: "B",
                color: "#00ff00"
            },
            {
                values: comparendo_c,
                key: "C",
                color: "#0000ff"
            },
            {
                values: comparendo_d,
                key: "D",
                color: "#ff00c3"
            },
            {
                values: comparendo_e,
                key: "E",
                color: ""
            },
            {
                values: comparendo_f,
                key: "F",
                color: "#00ffc7"
            },
            {
                values: comparendo_g,
                key: "G",
                color: "#d1104d"
            },
            {
                values: comparendo_h,
                key: "H",
                color: "#ffea99"
            },
            {
                values: comparendo_i,
                key: "I",
                color: "#a08343"
            },
            {
                values: limi,
                key: "",
                color: "#ffffff"
            }
            
        ];
    }

        ///////////////////////////

        // body...
    }

    ///////////////////////////////////////////
}



