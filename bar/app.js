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

// Bind Data and Create Bars
svg.selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('x', function(d, i) {
    return i * (chart_width / data.length);
  })
  .attr('y', function(d) {
    return chart_height - d * 5;
  })
  .attr('width', function() {
    return chart_width / data.length - bar_padding;
  })
  .attr('height', function(d) {
    return d * 5;
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
    return i * (chart_width / data.length) +
      (chart_width / data.length - bar_padding) / 2;
  })
  .attr('y', function(d) {
    return chart_height - d * 5 + 15;
  })
  .attr('font-size', 12)
  .attr('fill', '#ffffff')
  .attr('text-anchor', 'middle')
