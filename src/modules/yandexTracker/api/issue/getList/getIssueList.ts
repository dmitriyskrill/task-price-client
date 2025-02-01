import { yandexTrackerBaseUrl } from '../../constants.js'
import axios from 'axios'

async function getIssueList() {
  console.log('getIssueList', yandexTrackerBaseUrl)
  const response = await axios.get(`${yandexTrackerBaseUrl}/issues/list`, {
    params: { keys: ['DEVELOPMENT-164', 'DEVELOPMENT-159'] }
  })
  return response.data

}

export {
  getIssueList
}