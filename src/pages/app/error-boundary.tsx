import React, { ReactNode } from 'react';

class ErrorBoundary extends React.Component<
  { children: ReactNode },
  { hasError: boolean; errorMessage: string }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, errorMessage: error.message };
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="errorBoundary">
          <h1 className="errorBoundary__text">{this.state.errorMessage}</h1>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
