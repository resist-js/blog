import axios from "axios"

import { APP_NAME } from "$lib/Utils"

/**
 * When an API error occurs.
 * If it's a 401 response then delete the User Cookie.
 *
 * @param {!object} error The error object.
 *
 * @private
 */
const onError = error => {
  return {
    data: error.response?.data,
    error:
      error.response?.data?.data?.message ??
      error.response?.data?.message ??
      error.response?.message ??
      error.message ??
      error.toString(),
  }
}

/**
 * Builds and returns an api client.
 *
 * @param {!string} customBaseUrl The base url.
 * @param {string} token The token for Bearer.
 *
 * @returns {!object} The api instance.
 *
 * @private
 */
const apiClientBuilder = (customBaseUrl, noJwt) => {
  let baseURL =
    import.meta.env.VITE_ENV === "development"
      ? `https://prod-staging.${APP_NAME.toLowerCase()}.com`
      : `https://prod.${APP_NAME.toLowerCase()}.com/`

  if (APP_NAME === "gogopdf") {
    baseURL =
      import.meta.env.VITE_ENV === "development"
        ? `https://api-staging.${APP_NAME.toLowerCase()}.com`
        : `https://api.${APP_NAME.toLowerCase()}.com/`
  }

  const options = {
    baseURL: baseURL,
    crossdomain: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }
  const api = axios.create(options)

  return api
}

/**
 * @param method
 * @param url
 * @param token
 * @param data
 * @param options
 * @param customBaseUrl
 */
function methodCall(method, url, data?, options?, customBaseUrl?, noJwt = false) {
  const api = apiClientBuilder(customBaseUrl, noJwt)

  if (url.includes("amazonaws")) {
    // @ts-ignore
    delete api.defaults.headers.Authorization
  }

  try {
    return api[method](url, data, options, customBaseUrl)
      .then(response => {
        response.error = response.data?.message ?? response.message ?? !response.success
        if (response.success === true) response.error = null

        return response.data
      })
      .catch(onError)
  } catch (err) {
    return onError(err)
  }
}

export const apiGet = url => {
  return methodCall("get", url)
}

export const apiPostWithoutJwt = (url, data, options = {}) => {
  return methodCall("post", url, data, options, null, true)
}

export const apiPost = (url, data = {}, options?, customBaseUrl?) => {
  return methodCall("post", url, data, options, customBaseUrl)
}

export const apiPut = (url, data, options) => {
  return methodCall("put", url, data, options, null, true)
}

export const apiPutWithJwt = (url, data, options?) => {
  return methodCall("put", url, data, options, null)
}

export const apiDeleteWithoutJwt = (url, data = {}, options = {}) => {
  return methodCall("delete", url, data, options, null, true)
}

export const apiDelete = (url, data = {}, options = {}) => {
  return methodCall("delete", url, data, options, null)
}
