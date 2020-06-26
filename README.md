# @mollycule/vigilante

> A React hook to keep a watch on the changing props or state variables of a React component/hook.

<!-- PROJECT SHIELDS -->

[![NPM](https://img.shields.io/npm/v/@mollycule/vigilante.svg?style=for-the-badge)](https://www.npmjs.com/package/@mollycule/vigilante)
[![Build Status][build-shield]]()
[![MIT License][license-shield]][license-url]
[![Contributors][contributors-shield]]()
<img src="https://img.badgesize.io/paramsinghvc/vigilante/master/dist/index.js?style=for-the-badge&compression=gzip&label=gzip+size&max=3000&softmax=2000">
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/paramsinghvc/vigilante">
    <img src="https://user-images.githubusercontent.com/4329912/85897764-e29b0400-b7f2-11ea-9734-23e2140f0067.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">useVigilante React Hook</h3>

  <p align="center">
    Making redux easy to use with React Hooks Api
    <br />
    <a href="https://www.npmjs.com/package/@mollycule/vigilante"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://codesandbox.io/s/vigilante-demo-yfpb1?fontsize=14">View Demo</a>
    ·
    <a href="https://github.com/paramsinghvc/vigilante/issues">Report Bug</a>
    ·
    <a href="https://github.com/paramsinghvc/vigilante/issues">Request Feature</a>
    .
    <a href="https://www.npmjs.com/package/@mollycule/vigilante">NPM Link</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

**`useVigilante`** is a simple plug and play React hook to keep a watch on the changing props or state variables of a React component/hook.

```
useVigilante('Weather Component', { latLong, weatherData, getWeather })
```

It gives the console output as below whenever any change in the listed variables happen in the given component or hook.
<img src="https://user-images.githubusercontent.com/4329912/85898978-36a6e800-b7f5-11ea-9a46-0295c02c0e57.png" alt="Logo">

### Built With

- [TypeScript](https://www.typescriptlang.org/)
- [Create React Library](https://www.npmjs.com/package/create-react-library)

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

Following Peer Dependencies are required for using useVigilante package:

- react: "^16.0.0"

## Install

```bash
npm install --save @mollycule/vigilante

yarn add @mollycule/vigilante
```

## Usage

```
useVigilante(<Component or Hook Name>, { <prop1>, <state1>, <prop2>, ...  })
```

Detailed Usage

```tsx
import React, { useEffect } from 'react'

import useVigilante from '@mollycule/vigilante'

const WeatherComp = () => {
  const latLong = useGeoLocation()
  const { getWeather, weatherData } = useWeather()

  useVigilante('Weather Component', { latLong, weatherData, getWeather })

  useEffect(() => {
    getWeather(latLong);
  }, [getWeather, latLong])

  return (
    <Holder>
      {...}
    </Holder>
  )
}
```

## License

MIT © [paramsinghvc](https://github.com/paramsinghvc)

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Param Singh - [@paramsinghvc](https://github.com/paramsinghvc) - paramsinghvc@gmail.com

Project Link: [https://github.com/paramsinghvc/vigilante](https://github.com/paramsinghvc/vigilante)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [WDYR - Why Did You Render](https://github.com/welldone-software/why-did-you-render)
- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Img Shields](https://shields.io)

<!-- MARKDOWN LINKS & IMAGES -->

[build-shield]: https://img.shields.io/badge/build-passing-brightgreen.svg?style=for-the-badge
[contributors-shield]: https://img.shields.io/badge/contributors-1-orange.svg?style=for-the-badge
[license-shield]: https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge
[license-url]: https://choosealicense.com/licenses/mit
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=0077B5
[linkedin-url]: https://www.linkedin.com/in/paramsinghvc
[product-screenshot]: https://user-images.githubusercontent.com/4329912/57970750-b895d200-79a2-11e9-9fdf-fcf80c8fce28.png
