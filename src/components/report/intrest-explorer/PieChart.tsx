"use client";

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

interface DataItem {
  name: string;
  value: number;
}

interface DonutChartProps {
  data: DataItem[];
  radius?: number; // Added a radius prop
}

const DonutChart: React.FC<DonutChartProps> = ({ data, radius = 100 }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    d3.select(chartRef.current).selectAll("*").remove();

    const container = chartRef.current;
    const containerWidth = container.clientWidth || 200;
    const containerHeight = container.clientHeight || 200;

    const thickness = radius * 0.3; // Thickness is now relative to the radius

    // Create SVG
    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("class", "w-full h-auto")
      .attr("width", containerWidth)
      .attr("height", containerHeight)
      .attr("viewBox", `0 0 ${2 * radius} ${2 * radius}`)
      .attr("preserveAspectRatio", "xMidYMid meet");

    // Create group element
    const g = svg
      .append("g")
      .attr("transform", `translate(${radius}, ${radius})`);

    // Define color scale
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    // Define arc generator
    const arc = d3
      .arc<d3.PieArcDatum<DataItem>>()
      .innerRadius(radius - thickness)
      .outerRadius(radius);

    // Define pie generator
    const pie = d3
      .pie<DataItem>()
      .value((d) => d.value)
      .sort(null);

    // Generate segments
    const segments = g.selectAll("path").data(pie(data)).enter().append("g");

    segments
      .append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => color(i.toString()))
      .style("transition", "fill 0.3s")
      .on("mouseover", function (event, d) {
        d3.select(this)
          .style("cursor", "pointer")
          .style(
            "fill",
            d3
              .rgb(color(data.indexOf(d.data).toString()))
              .darker(0.7)
              .toString()
          );

        // showTooltip(x, y, d);
      })
      .on("mouseout", function () {
        d3.select(this)
          .style("cursor", "default")
          .style("margin", "20px")
          .style("fill", (d) =>
            d3.rgb(color(data.indexOf((d as d3.PieArcDatum<DataItem>).data).toString())).toString()
          );

        hideTooltip();
      });

    segments
      .append("text")
      .attr("class", "text-xs md:text-sm text-white font-sans")
      .attr("transform", (d) => {
        const centroid = arc.centroid(d);
        return `translate(${centroid[0]}, ${centroid[1]})`;
      })
      .attr("text-anchor", "middle")
      .text((d) => d.data.name)
      .style("transition", "opacity 0.8s")
      .style("font-size", `${radius * 0.1}px`)
      .style("opacity", 0.9);

    const tooltip = svg
      .append("g")
      .attr("class", "tooltip")
      .style("opacity", 0)
      .style("pointer-events", "none");

    function hideTooltip() {
      tooltip.style("opacity", 0);
    }
  }, [data, radius]);

  return (
    <div
      ref={chartRef}
      className="w-full h-full min-h-[300px] flex justify-center items-center text-white"
    />
  );
};

export default DonutChart;
