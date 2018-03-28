// var data = [10, 20, 30, 40, 50];

// d3.json('data.json').then(function(data) {
//   console.log(data);
// });

var data = [];
for (var i = 0; i < 30; i++) {
    // var num = Math.floor(Math.random() * 50);
    num = Math.floor(d3.randomUniform(1, 50)());
    data.push(num);
}
console.log(data);

// Create SVG Element
var chart_width = 800;
var chart_height = 400;
var bar_padding = 5;

var svg = d3.select('#chart')
    .append('svg')
    .attr('width', chart_width)
    .attr('height', chart_height);

// Create Scales
var x_scale = d3.scaleBand()
    .domain(d3.range(data.length))
    .rangeRound([0, chart_width])
    .paddingInner(0.05);

var y_scale = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, chart_height]);

// Bind Data and Create Bars
svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', function(d, i) {
        return x_scale(i);
    })
    .attr('y', function(d) {
        return chart_height - y_scale(d);
    })
    .attr('width', x_scale.bandwidth())
    .attr('height', function(d) {
        return y_scale(d);
    })
    .attr('fill', '#71adde');


// Create Labels
svg.selectAll('text')
    .data(data)
    .enter()
    .append('text')
    .text(function(d) {
        return d
    })
    .attr('x', function(d, i) {
        return x_scale(i) + x_scale.bandwidth() / 2;
    })
    .attr('y', function(d) {
        return chart_height - y_scale(d) + 15;
    })
    .attr('font-size', 12)
    .attr('fill', '#ffffff')
    .attr('text-anchor', 'middle')

// Events
d3.select('button').on('click', function() {
    data.reverse();
    svg.selectAll('rect')
        .data(data)
        .attr('y', function(d) {
            return chart_height - y_scale(d);
        })
        .attr('height', function(d) {
            return y_scale(d);
        })
    svg.selectAll('text')
        .data(data)
        .text(function(d) {
            return d
        })
        .attr('x', function(d, i) {
            return x_scale(i) + x_scale.bandwidth() / 2;
        })
        .attr('y', function(d) {
            return chart_height - y_scale(d) + 15;
        })
});
