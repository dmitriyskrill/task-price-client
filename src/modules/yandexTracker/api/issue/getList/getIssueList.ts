import { yandexTrackerBaseUrl } from '../../constants'
import axios from 'axios'

const taskNumbers = [159, 164, 155, 167, 166, 165]

async function getIssueList() {
  const response = await axios.get(`${yandexTrackerBaseUrl}/issues/list`, {
    params: { keys: taskNumbers.map(number=> `DEVELOPMENT-${number}`)}
  })
  return response.data

}

export {
  getIssueList
}