import * as d3 from "d3";
import { Legend } from "../lib/legend.es";
import { Contour } from "../lib/contour.es";
import { Plot } from "../lib/plot.es";
import { Line } from "../lib/line.es";
import { kde, kernelEpanechnikov } from "../lib/kde.es";
import { getJSON} from "../lib/get-json.es";

const plot = new Plot("mainPlot", "scatterPlot");
const lineTop = new Line("topPlot", "lineTopPlot");
const lineSide = new Line("sidePlot", "lineSidePlot");

const legend = new Legend(plot);
legend
  .node("g.series")
  .icon(n => {
    const d = legend.datum(n);
    const path = plot.scale.s(d.shape);
    const shape = plot.shapes.find(sh => sh.path === path);
    return shape.name;
  })
  .label(n => {
    const d = legend.datum(n);
    return d.label + " " + d.shape;
  });

const contour = new Contour(plot);

getJSON("data/slide4.json", data => {
  const contourData = flatten(data);
  contour.data(contourData);
  plot.data(data).draw();
  lineTop.margin = plot.margin;

  lineTop
    .data(transformLineX(data, plot.innerWidth()))
    .points()
    .draw();

  lineTop.svg
    .selectAll(".data-item")
    .each(function (dt: any, j: number) {
      const node = d3.select(this);
      if (j > 0 && j % 9 !== 0) {
        node.remove();
      }
    });

  lineSide
    .area(false)
    .flipAxis(true)
    .points(true)
    .data(transformLineY(data, plot.innerHeight()))
    .draw();

  lineSide.svg
    .selectAll(".data-item")
    .each(function (dt: any, j: number) {
      const node = d3.select(this);
      if (j > 0 && j % 9 !== 0) {
        node.remove();
      }
    });

  legend.toggle();
});

function flatten(data: any): any[] {
  const f = [];
  data.series.forEach(s => s.values.forEach(v => f.push(v)));
  return f;
}

function transformLineX(data: any, width: number): any {
  const r = {
    series: [
      { label: "ED-based", shape: "circle", values: [] },
      { label: "UCC-based", shape: "circle", values: [] }
    ]
  };

  data.series.forEach(s => {
    const i = s.label === "UCC-based" ? 1 : 0;
    s.values.forEach(v => {
      // x100 required to make density function input values
      r.series[i].values.push(v[0] * 100.0);
    });
  });

  r.series.forEach(s => {
    const scale = d3.scaleLinear()
      .domain(d3.extent(s.values))
      .range([0, width]);
    const ticks = scale.ticks(s.values.length * 0.2);
    const res = kde(kernelEpanechnikov(7), ticks)(s.values);
    res.forEach(re => re[0] /= 100.0);
    s.values = res;
  });

  return r;
}

function transformLineY(data: any, width: number) {
  const r = {
    series: [
      { fill: "#666", label: "GP", shape: "GP", values: [] },
      { fill: "#666", label: "Nurse", shape: "Nurse", values: [] }
    ]
  };

  data.series.forEach(s => {
    const i = s.shape === "Nurse" ? 1 : 0;
    s.values.forEach(v => {
      // x1000 required to make density function input values
      r.series[i].values.push(v[1] * 1000.0);
    });
  });

  r.series.forEach(s => {
    const scale = d3.scaleLinear()
      .domain(d3.extent(s.values))
      .range([0, width]);
    const ticks = scale.ticks(s.values.length * 0.2);
    const res = kde(kernelEpanechnikov(7), ticks)(s.values);
    res.forEach(re => re[0] /= 1000.0);
    s.values = res;
  });

  return r;
}

document.querySelector(".ask")
  .addEventListener("click", e => {
    const note = document.querySelector(".note") as HTMLElement;
    note.style.display = "block";
    setTimeout(() => note.style.opacity = "1", 10);
  });

document.querySelector(".close")
  .addEventListener("click", e => {
    const note = document.querySelector(".note") as HTMLElement;
    note.style.opacity = null;
    setTimeout(() => note.style.display = "none", 600);
  });