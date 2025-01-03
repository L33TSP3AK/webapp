# Data Search

<div class="search-layout">
  <!-- Blue Container -->
  <div class="member-container">
    <div class="cyber-grid"></div>
    <div class="member-header">
      <div class="status-bar">
        <span class="status-dot active"></span>
        <span class="status-text">MEMBER</span>
      </div>
    </div>
    <div class="search-module">
      <div class="search-bar">
        <input type="text" placeholder="Search data..." class="search-input">
        <button class="search-button">🔍</button>
      </div>
      <div class="filters">
        <select class="filter-select">
          <option value="all">All Types</option>
          <option value="ulp">ULP Data</option>
          <option value="inbox">Inbox Data</option>
          <option value="cookie">Cookie Data</option>
        </select>
        <select class="filter-select">
          <option value="new">Newest First</option>
          <option value="old">Oldest First</option>
        </select>
      </div>
    </div>
    <div class="results-preview">
      <div class="result-count">
        <span class="label">FOUND</span>
        <span class="value">0</span>
      </div>
    </div>
  </div>

  <!-- Red Container -->
  <div class="mirror-container">
    <div class="cyber-grid red"></div>
    <div class="mirror-content">
      <div class="mirror-header">ULP Data</div>
      <div class="mirror-stats">
        <div class="mirror-stat">
          <span class="label">Newest First</span>
          <span class="value">ACTIVE</span>
        </div>
        <div class="mirror-stat">
          <span class="label">FOUND</span>
          <span class="value">0</span>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.search-layout {
  display: flex;
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;
}

.member-container {
  background: #000;
  border-radius: 0.25rem;
  padding: 0.5rem;
  position: relative;
  overflow: hidden;
  border: 1px solid #00e5ff;
  width: 300px;
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

.cyber-grid.red {
  background: 
    linear-gradient(90deg, rgba(255, 0, 0, 0.1) 1px, transparent 1px),
    linear-gradient(rgba(255, 0, 0, 0.1) 1px, transparent 1px);
}

.member-header {
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

.search-module {
  margin: 0.5rem 0;
}

.search-bar {
  display: flex;
  gap: 0.25rem;
}

.search-input {
  flex: 1;
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #00e5ff;
  color: #00e5ff;
  padding: 0.25rem;
  font-size: 0.6rem;
  border-radius: 0.15rem;
}

.search-button {
  background: rgba(0, 229, 255, 0.1);
  border: 1px solid #00e5ff;
  color: #00e5ff;
  padding: 0.25rem;
  font-size: 0.6rem;
  border-radius: 0.15rem;
  cursor: pointer;
}

.filters {
  display: flex;
  gap: 0.25rem;
  margin-top: 0.25rem;
}

.filter-select {
  flex: 1;
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #00e5ff;
  color: #00e5ff;
  padding: 0.15rem;
  font-size: 0.5rem;
  border-radius: 0.15rem;
}

.results-preview {
  margin-top: 0.5rem;
  padding: 0.25rem;
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #00e5ff;
  border-radius: 0.15rem;
}

.result-count {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Mirror Container Styles */
.mirror-container {
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #ff0000;
  border-radius: 0.25rem;
  padding: 0.5rem;
  position: relative;
  overflow: hidden;
  width: 300px;
}

.mirror-content {
  position: relative;
  z-index: 1;
}

.mirror-header {
  text-align: center;
  color: #ff0000;
  font-family: monospace;
  font-size: 0.6rem;
  margin-bottom: 0.25rem;
}

.mirror-stats {
  display: grid;
  gap: 0.25rem;
}

.mirror-stat {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.15rem;
  background: rgba(255, 0, 0, 0.1);
  border-radius: 0.15rem;
}

.label {
  color: #666;
  font-family: monospace;
  font-size: 0.5rem;
}

.value {
  font-family: monospace;
  font-size: 0.5rem;
}

.member-container .value {
  color: #00e5ff;
}

.mirror-container .value {
  color: #ff0000;
}

@keyframes gridScroll {
  0% { transform: translate(0, 0); }
  100% { transform: translate(5px, 5px); }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

@media (max-width: 640px) {
  .search-layout {
    flex-direction: column;
    align-items: center;
  }
}
</style>