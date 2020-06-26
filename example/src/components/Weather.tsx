import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import useVigilante from '@mollycule/vigilante'
import { Grid, Cell } from '../shared/Grid'
import Spinner from '../shared/Spinner'
import WeatherItem from './WeatherItem'
import { useWeather, useGeoLocation, createSourcesLinks } from './hooks'

const Holder = styled(Grid)``

const POLL_INTERVAL = 5000

const WeatherComp = () => {
  const latLong = useGeoLocation()
  const { getWeather, weatherData } = useWeather(latLong)

  const [timesRefreshed, setTimesRefreshed] = useState(0)
  const newArr = [] as any[]

  useVigilante('Weather Component', { latLong, weatherData, getWeather, timesRefreshed, newArr })

  useEffect(() => {
    /** Setup Polling */
    const ajaxPollingInterval = setInterval(() => {
      if (latLong) {
        // getWeather(latLong)
        setTimesRefreshed((num) => ++num)
      }
    }, POLL_INTERVAL)
    return () => {
      clearInterval(ajaxPollingInterval)
    }
  }, [getWeather, latLong])

  return (
    <Holder columns={12} flow='row' margin='100px auto' width='60vw'>
      {weatherData ? (
        <>
          <Cell width={12} fontSize='22px'>
            {weatherData.title}
          </Cell>
          <Cell width={12} fontSize='12px'>
            {new Date(weatherData.time).toLocaleString()}
          </Cell>
          <Cell width={12} fontSize='12px'>
            Source: {createSourcesLinks(weatherData)}
          </Cell>
          <Cell width={12} fontSize='10px'>
            Times Refreshed: {timesRefreshed}
          </Cell>
          <Cell width={12}>
            <Grid
              flow='column'
              columns={`repeat(${weatherData.consolidated_weather.length}, minmax(200px, 300px))`}
              overflowX='auto'
              mt={20}
            >
              {weatherData.consolidated_weather.map((cWeather, index) => (
                <WeatherItem weatherData={cWeather} key={index} />
              ))}
            </Grid>
          </Cell>
        </>
      ) : (
        <Cell top={5} left={6}>
          <Spinner />
        </Cell>
      )}
    </Holder>
  )
}

export default WeatherComp
