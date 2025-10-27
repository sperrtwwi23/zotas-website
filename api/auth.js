export default function handler(req, res) {
  const auth = req.headers.authorization

  // Benutzername + Passwort anpassen:
  const username = 'zotas'
  const password = 'zayan'

  if (!auth || auth.indexOf('Basic ') === -1) {
    res.setHeader('WWW-Authenticate', 'Basic realm="Zotas Preview"')
    res.status(401).end('Authentication required.')
    return
  }

  // Base64 decodieren
  const credentials = Buffer.from(auth.split(' ')[1], 'base64')
    .toString()
    .split(':')
  const [user, pass] = credentials

  if (user === username && pass === password) {
    res.status(200).end('OK')
  } else {
    res.setHeader('WWW-Authenticate', 'Basic realm="Zotas Preview"')
    res.status(401).end('Access denied.')
  }
}
