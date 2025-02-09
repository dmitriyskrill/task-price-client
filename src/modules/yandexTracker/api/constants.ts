const YANDEX_TRACKER_SERVER_HOST = import.meta.env.VITE_YANDEX_TRACKER_SERVER_HOST
const YANDEX_TRACKER_SERVER_PORT = import.meta.env.VITE_YANDEX_TRACKER_SERVER_PORT
const baseApiUrl = `http://${YANDEX_TRACKER_SERVER_HOST}:${YANDEX_TRACKER_SERVER_PORT}/api`

const yandexTrackerBaseUrl = `${baseApiUrl}/yandexTracker`;

export {
  yandexTrackerBaseUrl
}