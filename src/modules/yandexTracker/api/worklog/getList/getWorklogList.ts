import { yandexTrackerBaseUrl } from '../../constants.js'
import axios from 'axios'

async function getWorklogList () {
  const response = await axios.get(`${yandexTrackerBaseUrl}/worklog/list`, {})
  return response.data

}

export { getWorklogList }