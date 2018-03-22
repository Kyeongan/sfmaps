// var data = [10, 20, 30, 40, 50];

// d3.json('data.json').then(function(data) {
//   console.log(data);
// });

var data = [];
for (var i = 0; i < 20; i++) {
  // var num = Math.floor(Math.random() * 50);
  num = Math.floor(d3.randomUniform(1,50)());
  data.push(num);
}
console.log(data);
generate(data);


function generate(data){
  d3.select('#chart')
  .selectAll('div')
  .data(data)
  .enter()
  .append('div')
  .attr('class','bar')
  .style('height', function(d) {
    var height = d * 3;
    return height + 'px'
  })
}
