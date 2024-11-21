import { Header, sidebar } from "./header.js"
import { renderCanvas } from "./render-canvas.js"

// document.querySelector('[data-image]').innerHTML = showProfile(fav512)
const buttonToggle = document.querySelectorAll('[data-toggle]')
document.addEventListener('DomContentLoaded', new Header())
document.addEventListener('DomContentLoaded', Array.from(buttonToggle).forEach(button => button.addEventListener('click', toggleTheme)))
document.addEventListener('DomContentLoaded', sidebar())
document.addEventListener('DomContentLoaded', renderCanvas())
