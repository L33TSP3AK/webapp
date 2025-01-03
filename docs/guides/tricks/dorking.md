<div class="guide-container">
  <div class="cyber-grid"></div>
  <div class="guide-header">
    <div class="neon-text">DORKING<br><tab>MASTERY</div>
    <div class="cyber-line"></div>
  </div>
  <div class="guide-content">
    <AccordionItem type="cyber" title="Dorking Basics" icon="🔍" status="ACTIVE">
      <div class="dork-operators">
        <div class="operator">
          <code>site:</code>
          <span>Limit search to specific domain</span>
        </div>
        <div class="operator">
          <code>inurl:</code>
          <span>Search in URL path</span>
        </div>
        <div class="operator">
          <code>filetype:</code>
          <span>Search for file types</span>
        </div>
        <div class="operator">
          <code>intitle:</code>
          <span>Search in page title</span>
        </div>
      </div>
    </AccordionItem>
    <AccordionItem type="neon" title="Advanced Techniques" icon="⚡" status="PRO">
      <div class="techniques-grid">
        <div class="technique">
          <h4>Database Files</h4>
          <code>filetype:sql intext:password</code>
          <p>Find exposed database files</p>
        </div>
        <div class="technique">
          <h4>Config Files</h4>
          <code>filetype:env OR filetype:cfg</code>
          <p>Locate configuration files</p>
        </div>
        <div class="technique">
          <h4>Admin Panels</h4>
          <code>inurl:admin intitle:login</code>
          <p>Discover admin login pages</p>
        </div>
      </div>
    </AccordionItem>
    <AccordionItem type="hologram" title="Search Patterns" icon="📋" status="GUIDE">
      <div class="patterns-list">
        <div class="pattern">
          <div class="pattern-header">
            <h4>Exposed Credentials</h4>
            <code>intext:"username" AND intext:"password"</code>
          </div>
          <div class="pattern-notes">
            <span class="note">Check file permissions</span>
            <span class="note">Verify access</span>
          </div>
        </div>
        <div class="pattern">
          <div class="pattern-header">
            <h4>API Endpoints</h4>
            <code>inurl:api ext:php OR ext:asp</code>
          </div>
          <div class="pattern-notes">
            <span class="note">Test endpoints</span>
            <span class="note">Check methods</span>
          </div>
        </div>
        <div class="pattern">
          <div class="pattern-header">
            <h4>Backup Files</h4>
            <code>filetype:bak OR filetype:backup</code>
          </div>
          <div class="pattern-notes">
            <span class="note">Verify dates</span>
            <span class="note">Check contents</span>
          </div>
        </div>
      </div>
    </AccordionItem>
  </div>
</div>

<style>
/* Base styles from token-dumping.md */
.guide-container {
  position: relative;
  padding: 2rem;
  background: linear-gradient(45deg, #000, #1a1a1a);
  border-radius: 1rem;
  margin: 2rem 0;
  overflow: hidden;
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
  background-size: 20px 20px;
  animation: gridScroll 20s linear infinite;
}

/* Additional styles specific to dorking */
.dork-operators {
  display: grid;
  gap: 1rem;
}

.operator {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 255, 0, 0.2);
}

.operator code {
  color: #00ff00;
  font-family: monospace;
  padding: 0.25rem 0.5rem;
  background: rgba(0, 255, 0, 0.1);
  border-radius: 0.25rem;
}

.techniques-grid {
  display: grid;
  gap: 1rem;
}

.technique {
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 255, 0, 0.2);
}

.technique code {
  display: block;
  margin: 0.5rem 0;
  padding: 0.5rem;
  background: rgba(0, 255, 0, 0.1);
  border-radius: 0.25rem;
  color: #00ff00;
  font-family: monospace;
}

.patterns-list {
  display: grid;
  gap: 1rem;
}

.pattern {
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 255, 0, 0.2);
}

.pattern-header code {
  display: block;
  margin: 0.5rem 0;
  padding: 0.5rem;
  background: rgba(0, 255, 0, 0.1);
  border-radius: 0.25rem;
  color: #00ff00;
  font-family: monospace;
}

.pattern-notes {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.note {
  padding: 0.25rem 0.75rem;
  background: rgba(0, 255, 0, 0.1);
  border-radius: 1rem;
  font-size: 0.8rem;
  color: #00ff00;
}

@keyframes gridScroll {
  0% { transform: translate(0, 0); }
  100% { transform: translate(20px, 20px); }
}
</style>