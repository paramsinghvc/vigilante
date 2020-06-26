import React, { FC } from 'react'
import { ConsolidatedWeather } from './types'
import { Grid, Cell } from '../shared/Grid'

const WeatherItem: FC<{ weatherData: ConsolidatedWeather }> = ({
  weatherData
}) => {
  return (
    <Cell>
      <Grid columns={12}>
        <Cell width={12} fontSize='14px'>
          {weatherData.applicable_date}
        </Cell>
        <Cell width={2} fontSize='14px'>
          <img
            src={`https://www.metaweather.com/static/img/weather/${weatherData.weather_state_abbr}.svg`}
            width={30}
            alt='weather state'
          />
        </Cell>
        <Cell width={8} fontSize='14px' left={4}>
          {weatherData.weather_state_name}
        </Cell>
        <Cell width={12} fontSize='12px'>
          Min: {Math.round(weatherData.min_temp)}°C
        </Cell>
        <Cell width={12} fontSize='12px'>
          Max: {Math.round(weatherData.max_temp)}°C
        </Cell>
      </Grid>
    </Cell>
  )
}

export default WeatherItem
