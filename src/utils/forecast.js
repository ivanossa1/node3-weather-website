const request = require('request')

const forecast = (latitude, longitude, callback) => {
         const url = 'http://api.weatherstack.com/current?access_key=e4ead67ea6be23514f1675e41adf8c7e&query=' + latitude + ',' + longitude +'&units=f'

         request({ url, json: true }, (error, { body }) => {
              if (error) {
                     callback('Unable to connect to Weather Service!!', undefined)       
              } else if (body.error) {
                     callback('Unable to Find Location', undefined)
              } else {
                     callback(undefined, body.current.weather_descriptions + ' La temperatura afuera es de ' + body.current.temperature + ' grados. Hay un ' + body.current.precip + '% de probabilidad de lluvia')
              }
         })
}

module.exports = forecast
