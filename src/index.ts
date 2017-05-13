import * as tauCharts from "tauCharts";
import { line } from "britecharts";
import * as d3 from "d3";

console.log("Hello World");

//tslint:disable  


var datasource = [{
  type: 'us', count: 0, date: '12-2013'
}, {
  type: 'us', count: 10, date: '01-2014'
}, {
  type: 'us', count: 15, date: '02-2014'
}, {
  type: 'us', count: 12, date: '03-2014'
}, {
  type: 'us', count: 16, date: '04-2014'
}, {
  type: 'us', count: 13, date: '05-2014'
}, {
  type: 'bug', count: 21, date: '01-2014'
}, {
  type: 'bug', count: 19, date: '02-2014'
}, {
  type: 'bug', count: 23, date: '03-2014'
}, {
  type: 'bug', count: 26, date: '04-2014'
}, {
  type: 'bug', count: 23, date: '05-2014'
}];

var chart = new tauCharts.Chart({
  data: datasource,
  type: "line",
  x: "date",
  y: "count",
  color: "type" // there will be two lines with different colors on the chart
});

chart.renderTo("#viz");



let bsData = { 
  "dataByTopic": 
  [{ "topic": -1, "topicName": "Quantity", "dates": 
    [{ "date": "31-Jul-16", "value": 0, "fullDate": "2016-07-31T00:00:00-07:00" }
    , { "date": "1-Aug-16", "value": 0, "fullDate": "2016-08-01T00:00:00-07:00" }
    , { "date": "2-Aug-16", "value": 3, "fullDate": "2016-08-02T00:00:00-07:00" }
    , { "date": "3-Aug-16", "value": 1, "fullDate": "2016-08-03T00:00:00-07:00" }
    , { "date": "4-Aug-16", "value": 3, "fullDate": "2016-08-04T00:00:00-07:00" }
    , { "date": "5-Aug-16", "value": 3, "fullDate": "2016-08-05T00:00:00-07:00" }
    , { "date": "6-Aug-16", "value": 0, "fullDate": "2016-08-06T00:00:00-07:00" }
    , { "date": "7-Aug-16", "value": 1, "fullDate": "2016-08-07T00:00:00-07:00" }
    , { "date": "8-Aug-16", "value": 1, "fullDate": "2016-08-08T00:00:00-07:00" }
    , { "date": "9-Aug-16", "value": 0, "fullDate": "2016-08-09T00:00:00-07:00" }
    , { "date": "10-Aug-16", "value": 3, "fullDate": "2016-08-10T00:00:00-07:00" }
    , { "date": "11-Aug-16", "value": 4, "fullDate": "2016-08-11T00:00:00-07:00" }
    , { "date": "12-Aug-16", "value": 4, "fullDate": "2016-08-12T00:00:00-07:00" }
    , { "date": "13-Aug-16", "value": 2, "fullDate": "2016-08-13T00:00:00-07:00" }
    , { "date": "14-Aug-16", "value": 3, "fullDate": "2016-08-14T00:00:00-07:00" }
    , { "date": "15-Aug-16", "value": 0, "fullDate": "2016-08-15T00:00:00-07:00" }
    , { "date": "16-Aug-16", "value": 1, "fullDate": "2016-08-16T00:00:00-07:00" }
    , { "date": "17-Aug-16", "value": 0, "fullDate": "2016-08-17T00:00:00-07:00" }
    , { "date": "18-Aug-16", "value": 2, "fullDate": "2016-08-18T00:00:00-07:00" }
    , { "date": "19-Aug-16", "value": 5, "fullDate": "2016-08-19T00:00:00-07:00" }
    , { "date": "20-Aug-16", "value": 1, "fullDate": "2016-08-20T00:00:00-07:00" }
    , { "date": "21-Aug-16", "value": 2, "fullDate": "2016-08-21T00:00:00-07:00" }
    , { "date": "22-Aug-16", "value": 9, "fullDate": "2016-08-22T00:00:00-07:00" }
    , { "date": "23-Aug-16", "value": 4, "fullDate": "2016-08-23T00:00:00-07:00" }
    , { "date": "24-Aug-16", "value": 3, "fullDate": "2016-08-24T00:00:00-07:00" }
    , { "date": "25-Aug-16", "value": 2, "fullDate": "2016-08-25T00:00:00-07:00" }
    , { "date": "26-Aug-16", "value": 5, "fullDate": "2016-08-26T00:00:00-07:00" }
    ] 
  }]
};




var myLine = new line();
myLine.width(700);
myLine.height(500);
let lineContainer = d3.select("body")
  .append("div")
  .attr("id", "bca");
lineContainer.datum(bsData)
  .call(myLine as any);
