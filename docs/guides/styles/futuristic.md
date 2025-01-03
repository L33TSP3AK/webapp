# Futuristic Guide

<div class="guide-container">
  <div class="hex-grid"></div>
  <div class="header">
    <h1>FUTURISTIC GUIDE</h1>
    <div class="tech-line"></div>
  </div>

  <div class="tech-grid">
    <div class="tech-card" data-augmented>
      <div class="card-frame"></div>
      <div class="card-content">
        <div class="tech-icon">⚡</div>
        <h3>Neural Interface</h3>
        <p>Advanced human-machine interaction</p>
      </div>
      <div class="card-overlay"></div>
    </div>
    <div class="tech-card" data-augmented>
      <div class="card-frame"></div>
      <div class="card-content">
        <div class="tech-icon">🔮</div>
        <h3>Quantum Core</h3>
        <p>Next-gen processing power</p>
      </div>
      <div class="card-overlay"></div>
    </div>
    <div class="tech-card" data-augmented>
      <div class="card-frame"></div>
      <div class="card-content">
        <div class="tech-icon">🌐</div>
        <h3>Holo Display</h3>
        <p>3D projection interface</p>
      </div>
      <div class="card-overlay"></div>
    </div>
  </div>

  <div class="data-stream">
    <div class="stream-content">
      <div class="data-line">INITIALIZING NEURAL NETWORK</div>
      <div class="data-line">QUANTUM PROCESSORS ONLINE</div>
      <div class="data-line">ESTABLISHING SECURE CONNECTION</div>
    </div>
  </div>

</div>

<style>
.guide-container {
  position: relative;
  padding: 2rem;
  background: #0a0a1a;
  border-radius: 1rem;
  margin: 2rem 0;
  overflow: hidden;
  color: #4a9eff;
}

.hex-grid {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30 L15 0 L45 0 L60 30 L45 60 L15 60' fill='none' stroke='rgba(74, 158, 255, 0.1)'/%3E%3C/svg%3E");
  animation: hexRotate 20s linear infinite;
}

.header {
  text-align: center;
  position: relative;
  margin-bottom: 3rem;
}

.header h1 {
  font-size: 3rem;
  color: #4a9eff;
  text-shadow: 0 0 10px rgba(74, 158, 255, 0.5);
}

.tech-line {
  height: 2px;
  background: linear-gradient(90deg, transparent, #4a9eff, transparent);
  margin: 1rem auto;
  width: 200px;
}

.tech-line::before {
  content: '';
  position: absolute;
  top: -3px;
  left: calc(50% - 5px);
  width: 10px;
  height: 8px;
  background: #4a9eff;
}

.tech-grid {
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
   gap:1.5rem;
   margin:2rem auto; 
}

.tech-card {
   position: relative;
   padding:2rem; 
   background: rgba(74,158,255,0.1);
   border-radius:.5rem; 
   border:1px solid #4a9eff; 
   transition:.3s ease; 
}

.tech-card:hover {
   transform: translateY(-5px); 
   box-shadow:0px -5px rgba(74,158,255,.5); 
}

.card-frame {
   position:absolute; 
   top:-10%; 
   left:-10%; 
   right:-10%; 
   bottom:-10%; 
   border:.5px dashed rgba(74,158,255,.5); 
}

.tech-icon {
   font-size:2rem; 
   margin-bottom:.5rem; 
}

.data-stream {
   margin-top:.5rem; 
   padding:.5rem; 
   background-color:#00000020; 
}

.data-line {
   font-family:"Courier New", monospace; 
   color:#4a9eff; 
}
</style>

