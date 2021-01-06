import React from 'react'

export const WeatherForm = (props) => {
    return (
        
        <div className='card card-body'>
            <form onSubmit={props.getWeather}>
                <div className='form-group'>
                <input  type='text' name='city' placeholder='Your city name'className='form-control' autoFocus>
               </input>
                </div>

               <div className='form-group'>
               <input  type='text' name='country' placeholder='Your country name'className='form-control'>
               </input>
               <button className='btn btn-success btn-block'>
                   Get Weather
               </button>

               </div>
            </form>
        </div>
    )
}
