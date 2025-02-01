import { yandexTrackerBaseUrl } from '../constants.js'

async function getMySelf () {
  await fetch(`${yandexTrackerBaseUrl}/myself`)
}

export {
  getMySelf
}