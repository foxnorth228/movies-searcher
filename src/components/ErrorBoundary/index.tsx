import { IErrorBoundaryProps, IErrorBoundaryState } from '@components/ErrorBoundary/types';
import React from 'react';

import * as styled from './styled';

class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props: IErrorBoundaryProps) {
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
        <styled.ErrorBoundary>
          <h1>{this.state.errorMessage}</h1>
        </styled.ErrorBoundary>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
