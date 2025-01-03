<div class="hero-section">
  <div class="cyber-grid"></div>
  <h1 class="neon-text">ELITE MENTORING</h1>
  <div class="cyber-line"></div>
</div>

## Comprehensive Training

<div class="services-grid">
  <Feature
    icon="💻"
    title="Hacking & Security"
    details="Advanced penetration testing, vulnerability assessment, and exploit development"
  />
  <Feature
    icon="🔐"
    title="Cracking Techniques"
    details="Software reverse engineering, protection bypass, and advanced debugging"
  />
  <Feature
    icon="💳"
    title="Financial Operations"
    details="Card operations, bank verification systems, and advanced processing methods"
  />
  <Feature
    icon="⚡"
    title="Development"
    details="Custom tool development, automation systems, and advanced programming"
  />
  <Feature
    icon="📈"
    title="Marketing"
    details="Traffic generation, conversion optimization, and audience targeting"
  />
  <Feature
    icon="🎯"
    title="Exploitation"
    details="System vulnerability analysis and advanced exploitation techniques"
  />
</div>

## Program Benefits

<div class="benefits-grid">
  <Card title="1-on-1 Training" icon="👨‍🏫">
    <Badge type="tip" text="Personalized" />
    <ul>
      <li>Direct mentorship</li>
      <li>Custom learning path</li>
      <li>Real-time guidance</li>
      <li>Hands-on projects</li>
    </ul>
  </Card>

  <Card title="Resources" icon="📚">
    <Badge type="info" text="Exclusive" />
    <ul>
      <li>Private tools</li>
      <li>Custom configs</li>
      <li>Premium guides</li>
      <li>Source codes</li>
    </ul>
  </Card>

  <Card title="Support" icon="🔧">
    <Badge type="warning" text="24/7" />
    <ul>
      <li>Priority assistance</li>
      <li>Technical support</li>
      <li>Project help</li>
      <li>Ongoing guidance</li>
    </ul>
  </Card>
</div>

## Pricing Options

<div class="pricing-grid">
  <PriceCard
    tier="Weekly Access"
    icon="⚡"
    :prices="{
      weekly: 550,
      monthly: 2000
    }"
  />
</div>

<style>
.hero-section {
  text-align: center;
  padding: 4rem 2rem;
  margin: 2rem 0;
  background: linear-gradient(45deg, #000, #1a1a1a);
  border-radius: 1rem;
  position: relative;
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

.neon-text {
  font-size: 3rem;
  color: #00ff00;
  text-shadow: 
    0 0 5px #00ff00,
    0 0 10px #00ff00,
    0 0 20px #00ff00;
  margin: 0;
  position: relative;
  z-index: 1;
}

.cyber-line {
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ff00, transparent);
  margin: 2rem auto;
  width: 200px;
  position: relative;
  z-index: 1;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

@keyframes gridScroll {
  0% { transform: translate(0, 0); }
  100% { transform: translate(20px, 20px); }
}

@media (max-width: 768px) {
  .neon-text {
    font-size: 2rem;
  }
  
  .services-grid,
  .benefits-grid,
  .pricing-grid {
    grid-template-columns: 1fr;
  }
}
</style>
