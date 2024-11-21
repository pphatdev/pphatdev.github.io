import { modules as pages } from "./data.js"
import { minify } from "./minify.js"
export class Header {

    constructor() {
        this.#navigation()
        this.sidebar()
    }

    /**
     * Create Munu List
     * @returns
     */
    #menu = () => {
        return (
            minify(
                String(`
                    <ul role="menu" class="items-center justify-end gap-1 hidden sm:flex">
                        ${String(pages.map(
                    page => {
                        const path = window.location.pathname
                        const activeByMenu = (
                            path.replaceAll('/', '').toLocaleLowerCase() == (page.route).toLocaleLowerCase() ||
                            path.replaceAll('/', '').toLocaleLowerCase() == "" && (page.route).toLocaleLowerCase() == "home"
                        ) ? "active" : null
                        return (`
                                    <li role="presentation">
                                        <a role="menuitem" href="/${page?.route == "home" ? '' : page?.route}" data-route-name="${page?.route}" class="${activeByMenu} justify-center flex gap-x-2 relative px-2 py-1.5 text-sm font-semibold leading-6 text-gray-900 transition-all rounded-md group whitespace-nowrap hover:ring-black/10 hover:ring-1 hover:dark:ring-white/20 hover:backdrop-blur-sm dark:hover:bg-white/10 dark:text-slate-100 hover:bg-white/20">
                                            ${page?.name}
                                        </a>
                                    </li>
                                `)
                    }
                ))}
                    </ul>
                `)
            )
        )
    }

    /**
     * Brand Logo
     * @returns
     */
    #logo = () => {
        return (`
            <div class="flex-shrink-0 w-16 px-4 py-2">
                <a href="/" class="pb-2" aria-label="Logo Leat Sophat">
                    <svg class="inline-block w-full h-8 align-middle sm:h-14 sm:w-14 dark:text-white text-slate-950" viewBox="0 0 512 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="mt-2" fill="currentColor"
                            d="M48.25 308.581c-1.165 0-2.162.554-2.993 1.662-.776 1.053-1.164 3.963-1.164 8.728 0 4.766.388
                            7.703 1.164 8.811.83 1.053 1.828 1.58 2.992 1.58s2.134-.527 2.91-1.58c.83-1.108
                            1.246-4.045 1.246-8.811 0-4.765-.415-7.675-1.247-8.728-.775-1.108-1.745-1.662-2.909-1.662Zm120.527-62.342c0-3.879-4.156-8.035-12.468-12.469v-8.312c0-8.312 4.156-12.468 12.468-12.468h12.469v8.312h-12.469c-2.771
                            0-4.156 1.385-4.156 4.156v4.156c8.312 4.434 12.469 9.975 12.469 16.625v49.874c0 27.707-12.469
                            41.561-37.406 41.561-24.937 0-37.405-13.854-37.405-41.561v-16.625c0-22.166-9.698-33.249-29.093-33.249s-29.093
                            11.083-29.093 33.249V301.1c1.274-.554 2.66-.831 4.156-.831 3.491 0 6.428 1.496 8.811 4.488 2.438 2.937 3.658 7.675 3.658 14.214 0 6.539-1.22
                            11.305-3.658 14.298-2.383 2.937-5.32 4.405-8.81 4.405-3.492 0-6.457-1.468-8.895-4.405-2.383-2.993-3.574-7.759-3.574-14.298v-39.483c0-18.73
                            5.07-31.143 15.211-37.239-1.828-2.715-5.514-5.542-11.055-8.479v-8.312c0-8.312 4.156-12.468 12.468-12.468h45.718v8.312H52.405c-2.77 0-4.156 1.385-4.156 4.156v4.156c5.098
                            2.716 8.645 5.874 10.64 9.476 3.048-.775 7.813-1.163 14.297-1.163 24.937 0 37.405 13.853 37.405 41.561v16.625c0 22.166 9.698 33.249 29.093 33.249 19.396 0 29.093-11.083
                            29.093-33.249v-49.874Zm8.313 99.747v45.718h-8.313v-45.718h8.313Zm112.215-91.435c-1.163 0-2.161.554-2.992 1.663-.776 1.053-1.164 2.576-1.164 4.571 0 1.995.388 3.547 1.164
                            4.655.831 1.053 1.829 1.58 2.992 1.58 1.164 0 2.134-.527 2.91-1.58.831-1.108 1.246-2.66 1.246-4.655s-.415-3.518-1.246-4.571c-.776-1.109-1.746-1.663-2.91-1.663Zm4.156
                            74.811V274.75c-1.274.388-2.659.582-4.156.582-4.045 0-7.148-1.33-9.309-3.99-2.106-2.715-3.159-6.234-3.159-10.557 0-4.322 1.053-7.813 3.159-10.473 2.161-2.715 5.264-4.073 9.309-4.073 4.046 0 7.121 1.358
                            9.227 4.073 2.161 2.66 3.242 6.151 3.242 10.473v76.889h-12.469l-29.093-24.937-29.093 24.937h-12.468v-91.435c0-3.879-1.385-8.035-4.156-12.469v-4.156c0-11.083 5.541-16.624 16.624-16.624h24.937l19.118 12.468h12.469c3.879 0
                            5.818-1.939 5.818-5.818v-19.119h8.313v19.119c0 9.42-4.711 14.13-14.131 14.13h-14.962l-19.118-12.468h-22.444c-5.541 0-8.312 2.771-8.312 8.312v.832c2.771 4.433 4.156 9.697 4.156 15.793v83.123l33.249-29.093 33.249 29.093Zm8.313-116.372h16.624c22.166 0 33.249 11.083
                            33.249 33.249v91.435h-8.312v-91.435c0-16.625-8.312-24.937-24.937-24.937h-16.624v-8.312Zm103.903 95.591c-1.163 0-2.161.554-2.992 1.662-.776 1.053-1.164 3.963-1.164 8.728 0 4.766.388 7.703 1.164 8.811.831 1.053 1.829 1.58 2.992 1.58 1.164 0 2.134-.527 2.91-1.58.831-1.108
                            1.246-4.045 1.246-8.811 0-4.765-.415-7.675-1.246-8.728-.776-1.108-1.746-1.662-2.91-1.662Zm70.655-95.591v8.312h-83.123v-8.312h83.123Zm-83.123 66.498c0-27.708 13.854-41.561 41.561-41.561 27.708 0 41.562 13.853 41.562 41.561v58.186h-8.313v-58.186c0-22.166-11.083-33.249-33.249-33.249-22.166
                            0-33.249 11.083-33.249 33.249V301.1c1.275-.554 2.66-.831 4.156-.831 3.491 0 6.428 1.496 8.811 4.488 2.439 2.937 3.658 7.675 3.658 14.214 0 6.539-1.219 11.305-3.658 14.298-2.383 2.937-5.32 4.405-8.811 4.405-3.491
                            0-6.428-1.496-8.811-4.489-1.884-2.272-3.048-5.624-3.491-10.057h-.166v-43.64ZM52.405 171.786c1.718 0 2.826-.36 3.325-1.081.554-.775.831-1.967.831-3.574 0-1.662-.277-2.854-.83-3.574-.5-.721-1.608-1.136-3.326-1.247v9.476Zm-16.624-68.909c0-27.707
                            14.075-41.561 42.226-41.561 28.096 0 42.143 13.854 42.143 41.561v41.562c0 16.624 7.62 24.936 22.859 24.936 13.3 0 19.95-8.312 19.95-24.936V94.565c0-4.544-2.771-9.033-8.313-13.466v-7.315c0-8.312 5.265-12.468
                            15.794-12.468h17.455V77.94h-14.13v.998c6.649 4.433 9.974 9.642 9.974 15.627v49.874c0 27.707-13.576 41.561-40.73 41.561-29.093 0-43.64-13.854-43.64-41.561v-41.562c0-16.624-7.12-24.937-21.362-24.937-14.297 0-21.446 8.313-21.446 24.937v45.219c4.212.332 7.343
                            1.995 9.393 4.987 2.05 2.937 3.076 7.675 3.076 14.214 0 5.431-1.441 9.92-4.323 13.466-2.881 3.491-6.982 5.237-12.302 5.237-5.32 0-9.42-1.607-12.302-4.821-2.882-3.27-4.322-7.897-4.322-13.882v-64.42Zm147.958-41.561h19.95c28.262 0 42.392 11.083 42.392 33.249V186h-20.78V94.565c0-11.083-7.204-16.625-21.612-16.625h-19.95V61.316Zm120.528 110.47c1.718 0
                            2.827-.36 3.325-1.081.555-.775.832-1.967.832-3.574 0-1.662-.277-2.854-.832-3.574-.498-.721-1.607-1.136-3.325-1.247v9.476Zm73.149-110.47V77.94h-89.773V61.316h89.773Zm-89.773 66.498c0-27.708 14.962-41.561 44.886-41.561 29.924 0 44.887 13.853 44.887 41.561V186h-20.781v-58.186c0-16.625-8.035-24.937-24.106-24.937-16.07 0-24.105
                            8.312-24.105 24.937v20.282c4.211.332 7.342 1.995 9.392 4.987 2.051 2.937 3.076 7.675 3.076 14.214 0 5.431-1.441 9.92-4.322 13.466-2.882 3.491-6.983 5.237-12.303 5.237-5.319 0-9.42-1.607-12.302-4.821-2.881-3.27-4.322-7.897-4.322-13.882v-39.483Z">
                        </path>
                    </svg>
                </a>
            </div>
        `)
    }


    /**
     * Right Navigation
     * @returns
     */
    #rightNavigation = () => {
        return (`
            <div class="flex items-center justify-end gap-3 mr-4">
                <button type="button" onclick="toggleTheme()" class="px-3 py-1 text-sm transition-colors border rounded-full border-stone-200 drop-shadow-sm text-stone-800 dark:text-white bg-white/40 dark:bg-black/20 backdrop-blur-lg hover:border-stone-300 dark:border-stone-500 dark:hover:border-stone-400">🌞</button>
                <button data-sidebar-toggle aria-label="Menu" class="px-2 py-2 text-sm transition-colors border rounded-full sm:hidden border-stone-200 drop-shadow-sm text-stone-800 dark:text-white bg-white/40 dark:bg-black/20 backdrop-blur-lg hover:border-stone-300 dark:border-stone-500 dark:hover:border-stone-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 512 512">
                        <circle cx="256" cy="256" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" />
                        <circle cx="256" cy="416" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" />
                        <circle cx="256" cy="96" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" />
                    </svg>
                </button>
                <a href="https://github.com/pphatdev" target="_blank" class="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6 dark:text-white" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                </a>
            </div>
        `)
    }

    /**
     * Menu List Item
     * @returns
     */
    menuList = () => {
        return String(pages.map(
            page => {
                const path = window.location.pathname
                const activeByMenu = (
                    path.replaceAll('/', '').toLocaleLowerCase() == (page.route).toLocaleLowerCase() ||
                    path.replaceAll('/', '').toLocaleLowerCase() == "" && (page.route).toLocaleLowerCase() == "home"
                ) ? "text-primary" : ""
                return (`
                    <li>
                        <a class="hover:text-primary-500 ${activeByMenu} dark:hover:text-primary-400" href="/${page.route == "home" ? '' : page?.route}">${page?.name}</a>
                    </li>
                `)
            }
        ))
    }

    /**
     * Apply sidebar
     */
    sidebar = () => {
        const sidebar = document.querySelector('#menu')
        sidebar.innerHTML = minify(String(this.menuList()))
    }

    /**
     * Main Header Navigation
     */
    #navigation = () => {
        try {
            const header = document.querySelector('#header')
            header.innerHTML = minify(`
            <nav class="flex items-center justify-between w-full max-w-6xl mx-auto">
                ${this.#logo()}
                ${this.#menu()}
                ${this.#rightNavigation()}
            </nav>
        `)
        } catch (error) {

        }
    }
}


export const activeHeader = () => {
    const currentURL = window.location.pathname
    const header = document.querySelector('#header')
    const match = header.querySelectorAll('ul>li [href]')
    const sidebar = document.querySelector('[data-sidebar-target]')
    const sidebarMatch = document.querySelectorAll('[data-sidebar-target] ul>li>a')
    Array.from(match).forEach(element => {
        const matchURL = element.getAttribute('href')
        const div = element.querySelector('a>div')
        if (matchURL.replaceAll('/', '') === currentURL.replaceAll('/', '')) {
            element.classList.add('active')
            div.classList.remove('hidden')
            div.classList.remove('translate-y-[14px]')
            div.classList.add('translate-y-8', 'hover:translate-y-[14px]')
        }
    })

    Array.from(sidebarMatch).forEach(element => {
        const match = element.getAttribute('href')
        if (match.replaceAll('/', '') === currentURL.replaceAll('/', '')) {
            element.classList.add('active')
        }
    })
}

export const sidebar = () => {
    const buttons = document.querySelectorAll('[data-sidebar-toggle]')


    Array.from(buttons).forEach(button => {
        button.addEventListener('click', () => {
            const backdrop = document.querySelector('[data-sidebar-backdrop]')
            const content = document.querySelector('[data-sidebar-target]')
            try {
                if (content.classList.contains('hidden')) {
                    backdrop.classList.remove('hidden')
                    content.classList.remove('hidden')
                }
                else {
                    backdrop.classList.add('hidden')
                    content.classList.add('hidden')
                }
            } catch (error) {
                console.log(error);
            }
        })
    })
}


export const toggleTheme = () => {
    if (document.querySelector('html').classList.contains("dark"))
        document.querySelector('html').classList.remove("dark");
    else
        document.querySelector('html').classList.add("dark");
}