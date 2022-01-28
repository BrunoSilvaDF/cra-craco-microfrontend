import React from 'react'

export default class SafeComponent extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true }
  }

  componentDidCatch() {}

  render() {
    if ((this.state as any).hasError) {
      return <h3>Something went wrong :(</h3>
    }

    return this.props.children
  }
}
