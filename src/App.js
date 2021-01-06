import React, { Component} from 'react'
import { WeatherForm } from './app/components/WeatherForm';
import WeatherInfo from './app/components/WeatherInfo';
import {WEATHER_KEY}from './app/keys'


class App extends Component{

    state={
        temperature:'',
        description:'',
        humidity:'',
        wind_speed:'',
        city:'',
        country:'',
        error:null
    }

    getWeather= async(e)=>{
        e.preventDefault() 
        const{city,country}= e.target.elements
            const cityValue=city.value
            const countryValue=country.value

            if(cityValue&&countryValue){
     
                console.log(cityValue,countryValue)
                const URI = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`;
                 const response= await fetch(URI)
                    const data= await response.json()
                    console.log(this.state)
                    this.setState({
                        temperature:data.main.temp,
                        description:data.weather[0].description,
                        humidity:data.main.humidity,
                        wind_speed:data.wind.speed,
                        city:data.name,
                        country:data.sys.country,
                        error:null
                    })
            }
            else{
                    this.setState({error:'please Enter a city and country'})
            }

       
       
    }

    render(){
        return( <div className='container p-4'>
            <div className='row'>
                <div className='col-md-6 mx-auto'>
                    <WeatherForm getWeather={this.getWeather}></WeatherForm>

                    <WeatherInfo {...this.state}></WeatherInfo>
                </div>

            </div>
        </div>)        
        
    }
}
export default App


 


 