function Loading() {
  return (
    <div className="loading-state" role="status" aria-live="polite">
      <span className="spinner" aria-hidden="true" />
      <span>Loading movies...</span>
    </div>
  )
}

export default Loading