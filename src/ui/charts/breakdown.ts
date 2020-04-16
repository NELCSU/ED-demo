/**
 * @param config 
 */
export function initBreakdown(config: any) {
  const body = document.querySelector("body") as HTMLBodyElement;

  const container = document.createElement("div");
  container.classList.add("breakdown", "left");
  container.style.opacity = "0";
  container.addEventListener("click", e => e.stopImmediatePropagation());
  body.appendChild(container);

  const close = document.createElement("div");
  close.classList.add("breakdown-close");
  close.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    hide(config);
  });
	container.appendChild(close);
		
  const text = document.createElement("div");
  text.classList.add("breakdown-message");
  container.appendChild(text);

  const chartContainer = document.createElement("div");
  chartContainer.classList.add("breakdown-charts");
  chartContainer.style.height = Math.min(config.chart.height - 100, config.chart.width) + "px";
  container.appendChild(chartContainer);

  const chart1 = document.createElement("div");
  chart1.classList.add("breakdown-primary");
  chart1.style.display = "none";
  chartContainer.appendChild(chart1);

  const svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg1.style.height = "200px";
  svg1.style.width = "200px";
  chart1.appendChild(svg1);

  const chart2 = document.createElement("div");
  chart2.classList.add("breakdown-secondary");
  chart2.style.display = "none";
  chartContainer.appendChild(chart2);

  const svg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg2.style.height = "200px";
  svg2.style.width = "200px";
  chart2.appendChild(svg2);		
  
  /**
   * @param config 
   */
	function hide (config: any) {
		container.style.opacity = "0";
		container.style.zIndex = "-10";
		if (config.chart.highlighted) {
      config.chart.highlighted.style('opacity', config.filters.opacity.low);
      config.chart.highlighted = undefined;
    }
    svg1.innerHTML = "";
    svg2.innerHTML = "";
	}

  /**
   * @param d 
   */
	function show (d: any) {
    if (d.x || d.y) {
      container.classList.remove("right");
      container.classList.remove("left");
      container.style.left = d.x + "px";
      container.style.top = d.y + "px";
    } else if (d.mouseX > window.innerWidth * 0.5) {			
      container.classList.remove("right");
      container.classList.add("left");
		} else {
			container.classList.add("right");
      container.classList.remove("left");
		}
		
		chartContainer.style.display = d.chart ? "" : "none";
		container.style.opacity = "1";
		container.style.zIndex = "10";
	
		text.innerHTML = `<table style="text-align:center;">${d.text}</table>`;
	}

  window.addEventListener("show-breakdown", (e: any) => show(e.detail));
  window.addEventListener("hide-breakdown", () => hide(config));
}