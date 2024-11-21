
import { Header, sidebar, toggleTheme } from "./header.js";
import { renderCanvas } from "./render-canvas.js";


document.addEventListener('DomContentLoaded', new Header())
document.addEventListener('DomContentLoaded', codingWith())
document.addEventListener('DomContentLoaded', sidebar())
document.addEventListener('DomContentLoaded', renderCanvas())


if (typeof window !== "undefined") {
    window.renderCanvas = renderCanvas
}