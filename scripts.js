// window.scroll({
//     top: 0,
//     behavior: 'smooth'
// })

const sections = document.querySelectorAll(".section")
let currentSectionIndex = 0

window.addEventListener("wheel", (event) => {
	// console.log(window)

	if (event.deltaY > 0) {
		// Scroll para baixo
		currentSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1)
	} else if (event.deltaY < 0) {
		// Scroll para cima
		currentSectionIndex = Math.max(currentSectionIndex - 1, 0)
	}

	sections[currentSectionIndex].scrollIntoView({
		behavior: "smooth",
		block: "start",
	})
})

function scrollToSection(sectionId) {
	const section = document.getElementById(sectionId)
	section.scrollIntoView({
		behavior: "smooth",
		block: "start",
	})
}

const menuTopo = document.getElementById("menu-topo")

window.addEventListener("scroll", () => {
	if (window.scrollY > 50) {
		menuTopo.classList.add("scrolled")
	} else {
		menuTopo.classList.remove("scrolled")
	}
})


//Esconder projetos
const siag = document.getElementById("siag")
const severo = document.getElementById("severo")
const gimoveis = document.getElementById("gimoveis")

const miniSevero = document.getElementById("mini-severo")
const miniGimoveis = document.getElementById("mini-gimoveis")
const miniSiag = document.getElementById("mini-siag")

miniSevero.addEventListener("click",() => {
	siag.classList.add("hidden")
	gimoveis.classList.add("hidden")
	miniGimoveis.classList.remove("hidden")
	miniSiag.classList.remove("hidden")

	severo.classList.remove("hidden")
	miniSevero.classList.add("hidden")
})

miniGimoveis.addEventListener("click", () => {
	siag.classList.add("hidden")
	severo.classList.add("hidden")
	miniSevero.classList.remove("hidden")
	miniSiag.classList.remove("hidden")

	gimoveis.classList.remove("hidden")
	miniGimoveis.classList.add("hidden")
})

miniSiag.addEventListener("click", () => {
	gimoveis.classList.add("hidden")
	severo.classList.add("hidden")
	miniSevero.classList.remove("hidden")
	miniGimoveis.classList.remove("hidden")

	siag.classList.remove("hidden")
	miniSiag.classList.add("hidden")
})
