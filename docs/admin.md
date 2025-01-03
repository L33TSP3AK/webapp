<div class="admin-container">
  <div class="cyber-grid"></div>
  <div class="admin-header">
    <div class="status-bar">
      <span class="status-dot active"></span>
      <span class="status-text">ADMIN</span>
    </div>
  </div>

  <div class="modules-grid">
    <div class="module" data-type="system">
      <div class="module-header">⚡</div>
      <div class="stats-grid">
        <div class="stat">
          <span class="label">USR</span>
          <span class="value">1.2k</span>
        </div>
        <div class="stat">
          <span class="label">PRE</span>
          <span class="value">521</span>
        </div>
        <div class="stat">
          <span class="label">BLK</span>
          <span class="value">23</span>
        </div>
      </div>
    </div>
    <div class="module" data-type="security">
      <div class="module-header">🔒</div>
      <div class="stats-grid">
        <div class="stat">
          <span class="label">TOT</span>
          <span class="value">2.1k</span>
        </div>
        <div class="stat">
          <span class="label">ACT</span>
          <span class="value">143</span>
        </div>
        <div class="stat">
          <span class="label">CLS</span>
          <span class="value">2k</span>
        </div>
      </div>
    </div>
    <div class="module" data-type="data">
      <div class="module-header">📊</div>
      <div class="stats-grid">
        <div class="stat">
          <span class="label">ULP</span>
          <span class="value">52k</span>
        </div>
        <div class="stat">
          <span class="label">INB</span>
          <span class="value">521</span>
        </div>
        <div class="stat">
          <span class="label">COK</span>
          <span class="value">45</span>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.admin-container {
  background: #000;
  border-radius: 0.25rem;
  padding: 0.5rem;
  position: relative;
  overflow: hidden;
  border: 1px solid #00ff00;
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
    linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px),
    linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px);
  background-size: 5px 5px;
  animation: gridScroll 20s linear infinite;
  pointer-events: none;
}

.admin-header {
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
  background: #00ff00;
  animation: blink 2s infinite;
}

.status-text {
  font-size: 0.6rem;
  color: #00ff00;
  font-family: monospace;
}

.modules-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.25rem;
  position: relative;
  z-index: 1;
}

.module {
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #00ff00;
  border-radius: 0.15rem;
  padding: 0.25rem;
  position: relative;
}

.module-header {
  text-align: center;
  font-size: 0.6rem;
  margin-bottom: 0.25rem;
}

.stats-grid {
  display: grid;
  gap: 0.15rem;
}

.stat {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.15rem;
  background: rgba(0, 255, 0, 0.1);
  border-radius: 0.15rem;
}

.label {
  color: #666;
  font-family: monospace;
  font-size: 0.5rem;
}

.value {
  color: #00ff00;
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

[data-type="system"] { border-color: #00ff00; }
[data-type="security"] { border-color: #ff0000; }
[data-type="data"] { border-color: #00e5ff; }
</style>