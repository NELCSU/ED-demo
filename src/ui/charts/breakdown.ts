import { drawColumnChart } from "../charts/column";
import type { TConfig } from "../../typings/ED";

/**
 * @param config 
 */
export function initBreakdown(config: TConfig) {
	const container = document.querySelector(".breakdown");
	container?.addEventListener("click", e => e.stopImmediatePropagation());
	const message = container?.querySelector(".breakdown-message") as HTMLDivElement;
	const chart1 = container?.querySelector(".breakdown-chart1") as HTMLDivElement;
	const chart2 = container?.querySelector(".breakdown-chart2") as HTMLDivElement;

  const close = document.createElement("div");
  close.classList.add("breakdown-close");
  close.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    hide(config);
  });
	container?.appendChild(close);

	function clear() {
		if (message) {
			message.innerHTML = "";
		}
		if (chart1) {
			chart1.innerHTML = "";
			chart1.style.display = "";
		}
		if (chart2) {
			chart2.innerHTML = "";
			chart1.style.display = "";
		}
	}
  
  /**
   * @param config 
   */
	function hide (config: TConfig) {
		container?.classList.add("ready");
		if (config.chart.highlighted) {
      config.chart.highlighted.style('opacity', config.filters.opacity.low);
      config.chart.highlighted = undefined;
		}
		setTimeout(() => clear(), 500);
	}

	/**
	 * @param config
	 */
	function displayBreakdown(config: TConfig) {
		clear();
		
		if (message) {
			message.innerHTML = config.breakdown.message;
		}

		if (config.breakdown.chart2.length === 0) {
			chart2.style.display = "none";
		}

		if (config.breakdown.chart1.length === 0) {
			chart1.style.display = "none";
		}

		if (chart2 && config.breakdown.chart2.length > 0) {
			chart2.innerHTML = " ";
			drawColumnChart(chart2, config.breakdown.chart2);
		}

		if (chart1 && config.breakdown.chart1.length > 0) {
			chart1.innerHTML = " ";
			drawColumnChart(chart1, config.breakdown.chart1);
		}

		container?.classList.remove("ready");
		window.dispatchEvent(new CustomEvent("hide-menu"));
	}

	/**
	 * @param config
	 */
	function displayStatus(config: TConfig) {
		clear();
		
		if (message) {
			message.innerHTML = config.status.message;
		}

		chart2.style.display = "none";
		chart1.style.display = "none";

		container?.classList.remove("ready");
		window.dispatchEvent(new CustomEvent("hide-menu"));
	}

	window.addEventListener("hide-breakdown", () => hide(config));
	window.addEventListener("show-status", () => displayStatus(config));
  window.addEventListener("show-breakdown", () => displayBreakdown(config));
}