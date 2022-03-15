
import api from './api';

export default class TokenService {

  getWeather(latitude, longitude) {
     return new Promise((resolve , reject)=>{

      api.get('onecall',{params: {lat: latitude , lon: longitude, exclude: 'hourly,daily', APPID: '4ec4cde06604a2e00447035e73ce0e75'}})
          .then(weather =>{
            resolve(weather.data);
             
        }).catch(e =>{
          console.log('erro', e);
        })
    })
  }










}