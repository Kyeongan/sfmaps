// The local ice cream shop keeps track of
// how much ice cream they sell versus the noon temperature on that day.
// Here are their figures for the last 12 days
// var data = [
//   [14.2, 215],
//   [16.4, 325],
//   [11.9, 185],
//   [15.2, 332],
//   [18.5, 406],
//   [22.1, 522],
//   [19.4, 412],
//   [25.1, 614],
//   [23.4, 544],
//   [18.1, 421],
//   [22.6, 445],
//   [17.2, 408],
// ];

var data = [
  [400, 200],
  [210, 140],
  [722, 300],
  [70, 160],
  [250, 50],
  [110, 280],
  [699, 225],
  [90, 220]
];

var chart_width = 800;
var chart_height = 400;

// Create SVG Element
var svg = d3.select('#chart')
  .append('svg')
  .attr('width', chart_width)
  .attr('height', chart_height);

// Create Circles
svg.selectAll('circle')
  .data(data)
  .enter().append('circle')
  .attr('cx', function(d) {
    return d[0]
  })
  .attr('cy', function(d) {
    return d[1]
  })
  .attr('r', function(d) {
    return d[1] / 10;
  })
  .attr('fill', '#BA8D1E');

// Create Labels
svg.selectAll('text')
  .data(data)
  .enter()
  .append('text')
  .text(function(d) {
    return d.join(', ')
  })
  .attr('font-size', 12)
  .attr('x', function(d) {
    return d[0]
  })
  .attr('y', function(d) {
    return d[1]
  });
