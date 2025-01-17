import type {
  DefaultThemeLocaleOptions,
  DefaultThemeLocaleData,
} from '../../shared'

const defaultLocaleOptions: DefaultThemeLocaleOptions = {
  // navbar
  navbar: [],
  logo: null,
  darkMode: true,
  repo: null,
  selectLanguageText: 'Languages',
  selectLanguageAriaLabel: 'Select language',

  // sidebar
  sidebar: 'auto',
  sidebarDepth: 2,

  // page meta
  editLink: true,
  editLinkText: 'Edit this page',
  lastUpdated: true,
  lastUpdatedText: 'Last Updated',
  contributors: true,
  contributorsText: 'Contributors',

  // html meta
  themeColor: true,
  themeColorLight: '#3eaf7c',
  themeColorDark: '#22272e',

  // 404 page messages
  notFound: [
    `There's nothing here.`,
    `How did we get here?`,
    `That's a Four-Oh-Four.`,
    `Looks like we've got some broken links.`,
  ],
  backToHome: 'Take me home',

  // a11y
  openInNewWindow: 'open in new window',
  toggleDarkMode: 'toggle dark mode',
  toggleSidebar: 'toggle sidebar',
}

const defaultLocaleData: DefaultThemeLocaleData = {
  // navbar
  selectLanguageName: 'English',
}

/**
 * Assign default options to `themeConfig`
 */
export const assignDefaultLocaleOptions = (
  localeOptions: DefaultThemeLocaleOptions
): void => {
  if (!localeOptions.locales) {
    localeOptions.locales = {}
  }

  if (!localeOptions.locales['/']) {
    localeOptions.locales['/'] = {}
  }

  Object.assign(localeOptions, {
    ...defaultLocaleOptions,
    ...localeOptions,
  })

  Object.assign(localeOptions.locales['/'], {
    ...defaultLocaleData,
    ...localeOptions.locales['/'],
  })
}
