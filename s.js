$("#slider").slider({
    max: 50
});

$("#slider").slider({
    min: 10
});


$("#slider").slider({
    slide: function (event, ui) {
        var selection = $("#slider").slider("value");
        console.log(selection);

        //Width and height
        var w = 500;
        var h = 50;

        //Data
        var dataset = [];

        dataset.push(selection);

        console.log(dataset);

        var rectangle = svg.selectAll("rect")
            .data(dataset);

        rectangle
            .enter()
            .append("rect");

        rectangle.attr("width", 20)
            .attr("height", function (d) {
                console.log('d is ' + d);
                return d;
            })
            .attr("x", function (d) {
                return 20;
            })
            .attr("y", function (d) {
                return 20;
            });


    }
});

//Create SVG element
var svg = d3.select("body")
    .append("svg")
    .attr("width", 500)
    .attr("height", 300);