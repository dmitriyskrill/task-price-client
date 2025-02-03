import { yandexTrackerBaseUrl } from '../../constants.js'

async function getIssueById (issueId: string): Promise<Response | undefined> {
  if (!issueId) return
  return await fetch(`${yandexTrackerBaseUrl}/issues/byIssueId/${issueId}`)
}

export {
  getIssueById,
}