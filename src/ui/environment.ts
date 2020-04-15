/**
 * @param config 
 */
export function setEnvironment(config: any) {
  config.environment = window.location.hostname === "localhost" ? "DEVELOPMENT" : "PRODUCTION";

  if (config.environment === "DEVELOPMENT") {
    const dev = document.createElement("div");
    dev.classList.add("dev-mode");
    dev.textContent = config.environment;
    document.body.appendChild(dev);
	}
}