import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import sendEmail from './api/send-email.js'

function localEmailApi(env) {
  return {
    name: 'local-email-api',
    configureServer(server) {
      Object.assign(process.env, env)
      server.middlewares.use('/api/send-email', async (request, response) => {
        if (request.method !== 'POST') {
          response.statusCode = 405
          response.setHeader('Content-Type', 'application/json')
          response.end(JSON.stringify({ error: 'Method not allowed' }))
          return
        }

        let rawBody = ''
        request.on('data', (chunk) => {
          rawBody += chunk
        })
        request.on('end', async () => {
          let body
          try {
            body = JSON.parse(rawBody)
          } catch {
            response.statusCode = 400
            response.setHeader('Content-Type', 'application/json')
            response.end(JSON.stringify({ error: 'Invalid request body.' }))
            return
          }

          const apiResponse = {
            status(code) {
              response.statusCode = code
              return apiResponse
            },
            json(payload) {
              response.setHeader('Content-Type', 'application/json')
              response.end(JSON.stringify(payload))
            },
          }

          await sendEmail({ method: 'POST', body }, apiResponse)
        })
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), localEmailApi(env)],
  }
})
