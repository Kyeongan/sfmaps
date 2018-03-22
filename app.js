d3.csv('data/list.csv').then(function(data) {
    console.log(data);
    // generate(data.columns);
});

d3.json('data/list.json').then(function(data) {
    console.log(data);
    // generate(data)
});


var dataset = [10, 20, 30, 40, 50];
generate(dataset)

function generate(dataset) {
    var el = d3.select('body')
        .selectAll('div')
        .data(dataset)
        .enter()
        .append('div')
        .text(function(d) {
            return 'Div bineded ' + d
        })
        // .append('p')
        .attr('class', function(d){
            if (d<25) {
                return 'foo'
            } else {
                return null
            }
        })
        // .attr('class', 'bar')
        // .classed('foo', true)
        .classed('bar', function(d){
            return d < 25;
        })
        // .text('Hello World!')
        .style('color', function(d) {
            if (d > 25)
                return 'red';
            else {
                return 'blue'
            }
        })

    console.log(el);
}

// // Width and height
// var chart_width = 800;
// var chart_height = 600;
//
// // Projection
// var projection = d3.geoAlbersUsa()
//   .scale([chart_width])
//   .translate([chart_width/2, chart_height/2]);
//
// var path = d3.geoPath(projection);
//
// // Create SVG
// var svg = d3.select("#chart")
//   .append("svg")
//   .attr("width", chart_width)
//   .attr("height", chart_height)
//
// d3.json('data/us.json', function(data) {
//   svg.selectAll('path')
//   .data(data.features)
//   .enter()
//   .append('path')
//   .attr('d', path)
//   .attr('fill', '#58CCE1')
//   .attr('stroke', '#fff')
//   .attr('stroke-width', 1)
// })
