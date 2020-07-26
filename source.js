// // //  // d3 sorting.js



// var count = 1 + nRadius,//number of rects to show
//   durationTime = 4000 / count, //execution time of steps
//   array = d3.shuffle(d3.range(1, count)),
//   unsortedArray = [...array],
//   sortedArray = [],
//   stop = false,
//   steps = 0,
//   bogoShuffles = 0;

// var margin = { top: 40, right: 40, bottom: 180, left: 40 },
//   width = 760 - margin.left - margin.right,
//   height = 5000 - margin.top - margin.bottom;


// var barWidth = width / count; //change the width of rects depending of the number of rects

// var y = d3.scaleLinear()
//   .domain([0, count])
//   .range([0, width]);


var svg = d3.select("body").append("svg")
  .attr("width", 500)
  .attr("height", 300)
  // .append("g")
//   .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
  
  
  

// // ////
// var rects = svg.append("g")
//   .attr("transform", "translate(" + barWidth + ",2)")
//   .selectAll("rect")
//   .data(unsortedArray)
//   .enter().append("rect")



// var labels = svg.selectAll("text")
//   .data(unsortedArray)
//   .enter().append("text")

// labels.attr("id", function (d) { return "text" + d })
//   .attr("transform", function (d, i) { return "translate(" + y(i) + ",0)" })
//   .html(function (d) { return d; })

// rects.attr("id", function (d) { return "rect" + d })
//   .attr("transform", function (d, i) { return "translate(" + (y(i) - barWidth) + ",0)" })
//   .attr("width", barWidth * .9)
//   .attr("height", function (d) { return d * barWidth / 3 })
  

  


//demo

// when the input range changes update the rects
d3.select("#nRadius").on("input", function () {
  update(+this.value);
  
});

// Initial starting of rects
//update(4);



// update the elements
function update(nRadius) {
  // adjust the text on the range slider
  d3.select("#nRadius-value").text(nRadius);
  d3.select("#nRadius").property("value", nRadius);
  
 
 
 
  
 
  // update the circle radius
  var count = 1 + nRadius;//number of rects to show
  var dataset = [];
  dataset.push(count);
  durationTime = 4000 / count, //execution time of steps
  array = d3.shuffle(d3.range(1, count)),
  unsortedArray = [...array],
  sortedArray = [],
  stop = false,
  steps = 0,
  bogoShuffles = 0;

  //sortedArray.push(count);
  
 

 
  
  


  var margin = { top: 40, right: 40, bottom: 180, left: 40 },
    width = 760 - margin.left - margin.right,
    height = 5000 - margin.top - margin.bottom;

  // var barWidth = width / count; //change the width of rects depending of the number of rects
  // var y = d3.scaleLinear()
  //   .domain([0, count])
  //   .range([0, width]);



    // var svg = d3.select("body").append("svg")
    // .attr("width", width + margin.top + margin.right)
    // .attr("height", height + margin.top + margin.bottom)
    // .append("g")
    // .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    

    
  
  ////
  // var rects = svg.append("g")
  //   .attr("transform", "translate(" + barWidth + ",2)")
  //   .selectAll("rect")
  //   .data(unsortedArray)
  //   .enter()
  //   .append("rect")
    
    

  var labels = svg.selectAll("text")
    .data(unsortedArray)
    .enter().append("text")

  var rects = svg.selectAll("rect")
    .data(unsortedArray)
    .enter()
    .append("rect");
    
   
   

    
    



  // labels.attr("id", function (d) { return "text" + d })
  //   .attr("transform", function (d, i) { return "translate(" + y(i) + ",0)" })
  //   .html(function (d) { return d; })
    
    


    rects.attr("width", 20)
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

    
    

  

  


   
    

    
    
 




  d3.select("#counter").html(steps = 0)

  labels.attr("class", "")
    .transition().duration(1000)
    .attr("transform", function (d, i) { return "translate(" + (y(i)) + ", 0)" })


  rects.attr("class", "")
    .transition().duration(1000)
    .attr("transform", function (d, i) { return "translate(" + (y(i)) + ", 0)" })
    .attr("width", barWidth * .9)
    .attr("height", function (d) { return d * barWidth / 3 })
  
  
  
  


}


// function removeElement(nRadius) {
//   d3.event.stopPropagation();
//   unsortedArray = unsortedArray.filter(function(e){
//   return e != d;
//   });
//   d3.select(this)
//     .remove("rect");
// } 







// //buttons reset
function reset() { //bring back rects in random order
  unsortedArray = [...array];
  sortedArray = [];
  stop = false;

  d3.select("#counter").html(steps = 0)

  labels.attr("class", "")
    .transition().duration(1000)
    .attr("transform", function (d, i) { return "translate(" + (x(i)) + ", 0)" })
    .exit()
    .remove()

  rects.attr("class", "")
    .transition().duration(1000)
    .attr("transform", function (d, i) { return "translate(" + (x(i - 1)) + ", 0)" })

}




// //functions////
function insertionSort() {

  var value = unsortedArray.shift();
  sortedArray.push(value);
  reArrange(sortedArray.length - 1);

  function reArrange(n) {
    if (stop) return stop = false;

    d3.selectAll("rect").attr("class", "")
    d3.select("#rect" + value).attr("class", "testing")
    d3.select("#text" + value).attr("class", "sorted")
    d3.select("#counter").html(++steps);

    if (n > 0 && sortedArray[n - 1] > value) {
      d3.timeout(function () {
        sortedArray.splice(n, 1);
        sortedArray.splice(n - 1, 0, value);

        slide(sortedArray[n], n);
        slide(sortedArray[n - 1], n - 1);

        reArrange(--n)
      }, durationTime * 2);
    } else if (unsortedArray.length) {
      d3.timeout(function () { insertionSort() }, durationTime * 2);
    } else {

      return d3.selectAll("rect").attr("class", "")
    }
  }
}

function selectionSort() {
  var min = count,
    spliceIndex,
    i = 0;

  function findMin() {
    if (stop) return stop = false;

    d3.timeout(function () {

      if (i <= unsortedArray.length) {

        d3.select("#rect" + unsortedArray[i]).attr("class", "testing")

        d3.timeout(function () {

          d3.select("#rect" + unsortedArray[i]).attr("class", "")

          if (unsortedArray[i] < min) {
            d3.select("#rect" + unsortedArray[i]).attr("class", "min")
            d3.select("#rect" + min).attr("class", "")
            min = unsortedArray[spliceIndex = i]
          }

          d3.select("#counter").html(++steps);
          i++;

          d3.timeout(function () { return findMin() }, durationTime / 2);

        }, durationTime / 2);

      } else {

        sortedArray.push(min);
        unsortedArray.splice(spliceIndex, 1);

        d3.select("#counter").html(++steps);

        rects.transition().duration(durationTime * 4)
          .attr("transform", function (d) {
            var xVal = sortedArray.indexOf(d) > -1 ? sortedArray.indexOf(d) : unsortedArray.indexOf(d) + sortedArray.length;
            return "translate(" + x(xVal - 1) + ",0)"
          })

        labels
          .classed("sorted", function (d) { return sortedArray.indexOf(d) == d - 1; })
          .transition().duration(durationTime * 4)
          .attr("transform", function (d) {
            var xVal = sortedArray.indexOf(d) > -1 ? sortedArray.indexOf(d) : unsortedArray.indexOf(d) + sortedArray.length;
            return "translate(" + x(xVal) + ",0)"
          })

        rects.attr("class", "")

        d3.timeout(function () {
          if (unsortedArray.length > 0) selectionSort();
        }, durationTime);
        return;
      }
    })
  }
  findMin();
}

function bubbleSort() {
  var sortedCount = 0;

  function sortPass(i) {
    if (!unsortedArray.length || stop) return stop = false

    if (i <= unsortedArray.length) {
      if (unsortedArray[i] < unsortedArray[i - 1]) {

        d3.select("#rect" + unsortedArray[i]).attr("class", "testing")
        d3.select("#rect" + unsortedArray[i - 1]).attr("class", "testing")

        d3.timeout(function () {
          d3.select("#rect" + unsortedArray[i]).attr("class", "")
          d3.select("#rect" + unsortedArray[i - 1]).attr("class", "")
        }, durationTime);

        var temp = unsortedArray[i - 1];
        unsortedArray[i - 1] = unsortedArray[i];
        unsortedArray[i] = temp;

        slide(unsortedArray[i], i + sortedArray);
        slide(unsortedArray[i - 1], i - 1 + sortedArray);

        d3.select("#counter").html(++steps);

        d3.timeout(function () { return sortPass(++i) }, durationTime);

      } else if (i == unsortedArray.length) {

        for (n = i; n == unsortedArray[n - 1]; n--) {
          d3.select("#text" + n).attr("class", "sorted")
          unsortedArray.pop();
        }

        sortPass(++i);
      } else {
        sortPass(++i);
      }

    } else {
      bubbleSort();
    }
  }
  sortPass(1);
}

function bogoSort() {
  d3.select("#counter").html("<span id='steps'></span> shuffles: <span id='shuffles'></span>")

  var bogoArray = d3.shuffle(d3.range(1, count));

  function bogoShuffle() {

    d3.select("#shuffles").html(++bogoShuffles)

    for (i = 0; i < bogoArray.length; i++) {

      d3.select("#text" + bogoArray[i])
        .datum(bogoArray[i])
        .attr("class", "")
        .attr("transform", function (d) { return "translate(" + (x(i)) + ", 0)" })

      d3.select("#rect" + bogoArray[i])
        .datum(bogoArray[i])
        .attr("class", "")
        .attr("transform", function (d) { return "translate(" + (x(i - 1)) + ", 0)" })
    }
  }

  bogoShuffle();

  var sorted = true;
  var i = 0;
  testNum();

  if (stop) {
    bogoShuffles = 0;
    return stop = false;
  }

  function testNum() {
    if (stop) return;

    if (i == bogoArray.length) {
      if (sorted != true) {
        return bogoSort();
      } else {
        console.log("sorted?!?!?!?")
        bogoShuffles = 0;
        steps = 0;
        return;
      }
    }

    d3.select("#rect" + bogoArray[i]).attr("class", "testing")
    d3.select("#steps").html(++steps)

    d3.timeout(function () {
      if (bogoArray[i] != i + 1) { sorted = false; }
      i++;
      d3.selectAll("rect").attr("class", "")
      testNum();
    }, durationTime / 20)
  }
}

function mergeSort() {
  var mergeReps = (unsortedArray.length).toString(2).length + 1;
  var mergeArrays = [[...unsortedArray], []];

  for (i = 0; i < unsortedArray.length; i += 2) {
    mergeArrays[1].push(mergeTwo([unsortedArray[i]], [unsortedArray[i + 1]]))
  }
  for (n = 2; n < mergeReps; n++) {
    mergeArrays[n] = [];
    var unMerged = mergeArrays[n - 1];
    for (i = 0; i < unMerged.length; i += 2) {
      mergeArrays[n].push(mergeTwo(unMerged[i], unMerged[i + 1] ? unMerged[i + 1] : []))
    }
  }
  for (i = 1; i < mergeArrays.length; i++) {
    mergeArrays[i] = d3.merge(mergeArrays[i])
  }
  mergeMove(0);

  function mergeTwo(iArray, nArray) {
    var newArray = [];
    for (var i = 0, n = 0; i < iArray.length || n < nArray.length;) {
      if (iArray[i] < nArray[n]) {
        newArray.push(iArray[i++])
      } else if (iArray[i] > nArray[n]) {
        newArray.push(nArray[n++])
      } else if (!(iArray[i])) {
        newArray.push(nArray[n++])
      } else if (!(nArray[n])) {
        newArray.push(iArray[i++])
      }
    }
    return newArray;
  }

  function mergeMove(j) {
    var oldArray = mergeArrays[j],
      newArray = [...mergeArrays[j + 1]],
      sortedArray = [];

    moveStep(0);

    function moveStep(n) {
      if (stop) return stop = false;
      d3.selectAll("rect").attr("class", "")

      d3.select("#counter").html(++steps);
      d3.select("#rect" + newArray[n]).attr("class", "testing")

      sortedArray.push(newArray[n])
      oldArray.shift()

      rects.transition().duration(durationTime)
        .attr("transform", function (d) {
          var xVal = sortedArray.indexOf(d) > -1 ? sortedArray.indexOf(d) : oldArray.indexOf(d) + sortedArray.length;
          return "translate(" + x(xVal - 1) + ",0)"
        })

      labels
        .classed("sorted", function (d) {
          return !mergeArrays[j + 2] && sortedArray.indexOf(d) == d - 1;
        })
        .transition().duration(durationTime)
        .attr("transform", function (d) {
          var xVal = sortedArray.indexOf(d) > -1 ? sortedArray.indexOf(d) : oldArray.indexOf(d) + sortedArray.length;
          return "translate(" + x(xVal) + ",0)"
        })

      d3.timeout(function () {
        if (oldArray.length > 0) {
          moveStep(++n)
        } else if (mergeArrays[j + 2]) {
          mergeMove(++j)
        } else {
          rects.classed("testing", false)
        }
      }, durationTime);
    }
  }
}


function slide(d, i) {
  d3.select("#text" + d)
    .transition().duration(durationTime)
    .attr("transform", function (d) { return "translate(" + (x(i)) + ", 0)" })

  d3.select("#rect" + d)
    .transition().duration(durationTime)
    .attr("transform", function (d) { return "translate(" + (x(i - 1)) + ", 0)" })
}




