import React, { useEffect, useState, Fragment, useCallback } from 'react'
import * as R from 'ramda'
import { Weather, Source } from './types'

export type LatLong = Pick<Position['coords'], 'latitude' | 'longitude'>
export function useGeoLocation() {
  const [latLong, setLatLong] = useState<LatLong>()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback)

    function successCallback({ coords: { latitude, longitude } }: Position) {
      setLatLong({ latitude, longitude })
    }

    function errorCallback() {
      console.warn('Unable to receive location')
    }
  }, [])

  return latLong
}

const fetchConfig = {
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
}
/** Where on Earth ID */
async function fetchWeather(woeid: number) {
  const result = await fetch(
    `https://cors-anywhere.herokuapp.com/http://www.metaweather.com/api/location/${woeid}/`,
    fetchConfig
  )
  return await result.json()
}

async function getWoeidFromLatlong({ latitude, longitude }: LatLong) {
  const result = await fetch(
    `https://cors-anywhere.herokuapp.com/http://www.metaweather.com/api/location/search/?lattlong=${latitude},${longitude}`,
    fetchConfig
  )
  return await result.json()
}

export function useWeather(latLong?: LatLong) {
  const [weatherData, setWeatherData] = useState<Weather>()
  const getWeather = useCallback(async (latLong: LatLong) => {
    try {
      const geoResult = await getWoeidFromLatlong(latLong)
      const data = await fetchWeather(geoResult?.[0]?.woeid)
      setWeatherData(data)
    } catch (e) {
      console.error(e.message)
    }
  }, [])
  useEffect(() => {
    if (latLong) {
      getWeather(latLong)
    }
  }, [latLong, getWeather])

  return {
    getWeather,
    weatherData
  }
}

/* Helper method for rendering */
export function createSourcesLinks(weatherData: Weather) {
  const joinByComma = R.addIndex<JSX.Element, JSX.Element[]>(R.reduce)(
    (prev, curr, index) => [
      ...prev,
      prev.length === 0 ? (
        <Fragment key={index}></Fragment>
      ) : (
        <span key={index}>, </span>
      ),
      curr
    ],
    []
  )

  const makeLink = R.map<Source, JSX.Element>(({ title, url }) => (
    <a href={url} rel='noopener noreferrer' target='_blank' key={title}>
      {title}
    </a>
  ))

  const getJoinedLinks = R.pipe(makeLink, joinByComma)
  return getJoinedLinks(weatherData.sources)
}
