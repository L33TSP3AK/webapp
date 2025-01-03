# Statistics

<div class="stats-container">
  <div class="cyber-grid"></div>
  
  <div class="stats-header">
    <div class="status-bar">
      <span class="status-dot active"></span>
      <span class="status-text">STATS</span>
    </div>
  </div>

  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-header">📊</div>
      <div class="stat-content">
        <div class="stat-row">
          <span class="label">SEARCHES</span>
          <span class="value">52</span>
        </div>
        <div class="stat-row">
          <span class="label">FOUND</span>
          <span class="value">1.2k</span>
        </div>
        <div class="stat-row">
          <span class="label">SUCCESS</span>
          <span class="value">89%</span>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.stats-container {
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

.stats-header {
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

.stats-grid {
  display: grid;
  gap: 0.25rem;
}

.stat-card {
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #00e5ff;
  border-radius: 0.15rem;
  padding: 0.25rem;
}

.stat-header {
  text-align: center;
  font-size: 0.6rem;
  margin-bottom: 0.25rem;
}

.stat-content {
  display: grid;
  gap: 0.15rem;
}

.stat-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.15rem;
  background: rgba(0, 229, 255, 0.1);
  border-radius: 0.15rem;
}

.label {
  color: #666;
  font-family: monospace;
  font-size: 0.5rem;
}

.value {
  color: #00e5ff;
  font-family: monospace;
  font-size: 0.5rem;
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