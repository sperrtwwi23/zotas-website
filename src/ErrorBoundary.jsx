import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }
  componentDidCatch(error, info) {
    console.error('Runtime error caught by ErrorBoundary:', error, info)
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24 }}>
          <h1>Uups – da ist etwas schiefgelaufen.</h1>
          <p>Bitte prüfe die Browser-Konsole (F12) für Details.</p>
          <pre style={{ whiteSpace: 'pre-wrap', background: '#fff', padding: 12, borderRadius: 8 }}>
{String(this.state.error)}
          </pre>
        </div>
      )
    }
    return this.props.children
  }
}
