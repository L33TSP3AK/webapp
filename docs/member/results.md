# Search Results

<div class="results-container">
  <div class="cyber-grid"></div>
  
  <div class="results-header">
    <div class="status-bar">
      <span class="status-dot active"></span>
      <span class="status-text">RESULTS</span>
    </div>
  </div>

  <div class="results-grid">
    <div class="result-card" v-for="i in 3">
      <div class="result-type">ULP</div>
      <div class="result-content">
        <div class="data-row">
          <span class="label">ID</span>
          <span class="value">****</span>
        </div>
        <div class="data-row">
          <span class="label">DATE</span>
          <span class="value">****</span>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.results-container {
  background: #000;
  border-radius: 0.25rem;
  padding: 0.5rem;
  position: relative;
  overflow: hidden;
  border: 1px solid #00e5ff;
  max-width: 300px;
  margin: 0 auto;
}

.cyber-grid {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(90deg, rgba(0, 229, 255, 0.1) 1px, transparent 1px),
    linear-gradient(rgba(0, 229, 255, 0.1) 1px, transparent 1px);
  background-size: 5px 5px;
  animation: gridScroll 20s linear infinite;
  pointer-events: none;
}

.results-header {
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 1;
}

.status-bar {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  justify-content: center;
}

.status-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #00e5ff;
  animation: blink 2s infinite;
}

.status-text {
  font-size: 0.6rem;
  color: #00e5ff;
  font-family: monospace;
}

.results-grid {
  display: grid;
  gap: 0.25rem;
}

.result-card {
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #00e5ff;
  border-radius: 0.15rem;
  padding: 0.25rem;
}

.result-type {
  font-size: 0.5rem;
  color: #00e5ff;
  font-family: monospace;
  margin-bottom: 0.25rem;
}

.data-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.5rem;
}

.label {
  color: #666;
  font-family: monospace;
}

.value {
  color: #00e5ff;
  font-family: monospace;
}

@keyframes gridScroll {
  0% { transform: translate(0, 0); }
  100% { transform: translate(5px, 5px); }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
</style>