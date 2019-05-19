import React from 'react'
import styles from './LoadingIndicator.module.scss'

interface LoadingIndicatorProps {
  active?: boolean
  className?: string
  style?: React.CSSProperties
}

function LoadingIndicator({ active, className, style }: LoadingIndicatorProps) {
  return (
    <div
      className={`
        ${styles.LoadingIndicator}
        ${active ? styles.active : ''}
        ${className}
      `}
      style={style}
    />
  )
}

export default LoadingIndicator
