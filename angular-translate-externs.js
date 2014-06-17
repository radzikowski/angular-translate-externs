/**
 * Externs file for angular-translate (http://github.com/PascalPrecht/angular-translate)
 * for Google Closure Compiler
 */

/**
 * @type {Object}
 * @const
 */
var angular = angular || {}

/**
 * @type {Object}
 * @const
 */
angular.$translateProvider;

/**
 * @param {object} factory
 * @return {!angular.$translateProvider}
 */
angular.$translateProvider.addInterpolation= function (factory) {}

/**
 * @param {string} name
 * @return {string||!angular.$translateProvider}
 */
angular.$translateProvider.cloakClassName= function (name) {}

/** 
 * @param {object=} fn
 * @return {!angular.$translateProvider}
 */
angular.$translateProvider.determinePreferredLanguage= function (fn) {}

/**
 * @param {string||array} langKey
 * @return {!angular.$translateProvider}
 */
angular.$translateProvider.fallbackLanguage= function (langKey) {}

/**
 * @param {string} langKey
 * @return {!angular.$translateProvider}
 */
angular.$translateProvider.preferredLanguage= function (langKey) {}

/**
 * @param {object} languageKeys
 * @param {object=} aliases
 * @return {!angular.$translateProvider||object}
 */
angular.$translateProvider.registerAvailableLanguageKeys= function (languageKeys, aliases) {}

/**
 * @param {string} key
 * @return {null||string}
 */
angular.$translateProvider.storageKey= function (key) {}

/* 
 * @param {string} prefix
 * @return {string||!angular.$translateProvider}
 */
angular.$translateProvider.storagePrefix= function (prefix) {}

/**
 * @param {string} indicator
 * @return {!angular.$translateProvider}
 */
angular.$translateProvider.translationNotFoundIndicator= function (indicator) {}

/**
 * @param {string} indicator
 * @return {!angular.$translateProvider}
 */
angular.$translateProvider.translationNotFoundIndicatorLeft= function (indicator) {}

/**
 * @param {string} indicator
 * @return {!angular.$translateProvider}
 */
angular.$translateProvider.translationNotFoundIndicatorRight= function (indicator) {}

/**
 * @param {string} langKey
 * @param {object} translationTable
 * @return {object||!angular.$translateProvider}
 */
angular.$translateProvider.translations= function (langKey, translationTable) {}

/**
 * @param {string} langKey
 * @return {!angular.$translateProvider}
 */
angular.$translateProvider.use= function (langKey) {}

/**
 * @return {!angular.$translateProvider}
 */
angular.$translateProvider.useCookieStorage= function () {}

/**
 * @param {object} factory
 * @return {!angular.$translateProvider}
 */
angular.$translateProvider.useInterpolation= function (factory) {}

/** 
 * @param {string} loaderFactory
 * @param {Object=} options
 * @return {!angular.$translateProvider}
 */
angular.$translateProvider.useLoader= function (loaderFactory, options) {}

/** 
 * @return {!angular.translateProvider}
 */
angular.$translateProvider.useLocalStorage= function () {}

/**
 * @return {!angular.$translateProvider}
 */
angular.$translateProvider.useMessageFormatInterpolation= function () {}

/**
 * @param {string} factory
 * @return {!angular.$translateProvider}
 */
angular.$translateProvider.useMissingTranslationHandler= function (factory) {}

/**
 * @return {!angular.$translateProvider}
 */
angular.$translateProvider.useMissingTranslationHandlerLog= function () {}

/**
 * @param {string} value
 * @return {!angular.$translateProvider}
 */
angular.$translateProvider.usePostCompiling= function (value) {} 

/**
 * @param {string} value
 * @return {!angular.$translateProvider}
 */
angular.$translateProvider.useSanitizeValueStrategy= function (value) {}

/**
 * @param {Object=} options
 * @return {!angular.$translateStaticFilesLoader}
 */
angular.$translateProvider.useStaticFilesLoader= function (options) {}

/**
 * @return {!angular.$translateProvider}
 */
angular.$translateProvider.useStorage= function (storageFactory) {}

/**
 * @param {string} url
 * @return {!angular.$translateUrlLoader}
 */
angular.$translateProvider.useUrlLoader= function (url) {}

