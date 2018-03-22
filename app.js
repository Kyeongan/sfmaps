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
