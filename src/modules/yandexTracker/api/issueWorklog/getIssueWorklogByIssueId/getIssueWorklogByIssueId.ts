import { yandexTrackerBaseUrl } from '../../constants.js'
import axios from 'axios'
import dayjs from 'dayjs'

async function getIssueWorklogByIssueId (issueId: any) {
  if (!issueId) return
  const response = await axios.get(`${yandexTrackerBaseUrl}/issues/worklog/byIssueId/${issueId}`, {})
  //@ts-ignore
  const list = response.data.map((worklog) => {
    //@ts-ignore
    const someData = dayjs.duration(worklog.duration)
    return {
      ...worklog,
      //@ts-ignore
      hours: someData?.$d.hours,
    }
  })

}

export { getIssueWorklogByIssueId }