import axios from 'axios';
const apiAxios = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/'

});

export default class api {

  static post(url, body, params) {
    return new Promise(async (resolve, reject) => {
      const config = {
        timeout: 10000
      }
      const abort = axios.CancelToken.source()
      const id = setTimeout(
        () => {
          abort.cancel(`Timeout of ${config.timeout}ms.`)
        }, config.timeout)

      let paramsClone = {}
      if (params) {
        paramsClone = { ...params, cancelToken: abort.token }
      } else {
        paramsClone = { cancelToken: abort.token }
      }

      apiAxios.post(url, body, paramsClone
      ).then(x => {
        clearTimeout(id)
        resolve(x)
      }).catch(e => {
        clearTimeout(id)
        reject(e)
      })
    })
  }

  static put(url, body, params) {
    return new Promise(async (resolve, reject) => {
      const config = {
        timeout: 10000
      }
      const abort = axios.CancelToken.source()
      const id = setTimeout(
        () => {
          abort.cancel(`Timeout of ${config.timeout}ms.`)
        }, config.timeout)

      let paramsClone = {}
      if (params) {
        paramsClone = { ...params, cancelToken: abort.token }
      } else {
        paramsClone = { cancelToken: abort.token }
      }

      apiAxios.put(url, body, paramsClone
      ).then(x => {
        clearTimeout(id)
        resolve(x)
      }).catch(e => {
        clearTimeout(id)
        reject(e)
      })
    })
  }



  static get(url, params) {
    return new Promise(async (resolve, reject) => {
      const config = {
        timeout: 10000
      }
      const abort = axios.CancelToken.source()
      const id = setTimeout(
        () => {
          abort.cancel(`Timeout of ${config.timeout}ms.`)
        }, config.timeout)

      let paramsClone = {}
      if (params) {
        paramsClone = { ...params, cancelToken: abort.token }
      } else {
        paramsClone = { cancelToken: abort.token }
      }

      apiAxios.get(url, paramsClone
      ).then(x => {
        clearTimeout(id)
        resolve(x)
      }).catch(e => {
        clearTimeout(id)
        reject(e)
      })
    })
  }

  static delete(url, params) {
    return new Promise(async (resolve, reject) => {
      const config = {
        timeout: 10000
      }
      const abort = axios.CancelToken.source()
      const id = setTimeout(
        () => {
          abort.cancel(`Timeout of ${config.timeout}ms.`)
        }, config.timeout)

      let paramsClone = {}
      if (params) {
        paramsClone = { ...params, cancelToken: abort.token }
      } else {
        paramsClone = { cancelToken: abort.token }
      }

      apiAxios.delete(url, paramsClone
      ).then(x => {
        clearTimeout(id)
        resolve(x)
      }).catch(e => {
        clearTimeout(id)
        reject(e)
      })
    })
  }
};