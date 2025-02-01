const SERVER_HOST = import.meta.env.VITE_SERVER_HOST
const SERVER_PORT = import.meta.env.VITE_SERVER_PORT
const baseApiUrl = `http://${SERVER_HOST}:${SERVER_PORT}/api`

export { baseApiUrl }