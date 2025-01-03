<script setup>
import { ref } from 'vue'
import TierCard from '../components/membership/TierCard.vue'
import ComparisonTable from '../components/membership/ComparisonTable.vue'

const activeTier = ref(null)
const showComparison = ref(false)

const tiers = {
  basic: {
    icon: '🔵',
    features: ['Basic tool access', 'Community support', 'Standard configs'],
    limitations: ['No advanced features', 'Limited daily checks', 'Basic support only']
  },
  premium: {
    icon: '⭐',
    features: ['All basic features', 'Advanced tools', 'Priority support', 'Premium configs'],
    limitations: ['No custom solutions', 'Standard response time']
  },
  vip: {
    icon: '👑',
    features: ['All premium features', 'Custom solutions', '24/7 support', 'Private training'],
    limitations: ['Standard deployment time']
  },
  diamond: {
    icon: '💎',
    features: ['Unlimited everything', 'Priority development', 'Direct developer access', 'Custom tools'],
    limitations: []
  }
}
</script>

<template>
  <div class="membership-container">
    <div class="cyber-grid"></div>
    <div class="hero-section">
      <h1 class="glitch-text" data-text="MEMBERSHIP TIERS">MEMBERSHIP TIERS</h1>
      <div class="cyber-line"></div>
    </div>
    <div class="tiers-grid">
      <TierCard
        v-for="(tier, key) in tiers"
        :key="key"
        :tier="key"
        :details="tier"
        :is-active="activeTier === key"
        @click="activeTier = key"
      />
    </div>
    <div class="comparison-section">
      <button 
        class="comparison-toggle"
        @click="showComparison = !showComparison"
      >
        <span class="icon">📊</span>
        Compare Features
      </button>
      <ComparisonTable 
        :tiers="tiers"
        :is-visible="showComparison"
      />
    </div>
  </div>
</template>

<style>
.membership-container {
  position: relative;
  padding: 2rem;
  background: linear-gradient(45deg, #000022, #000044);
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
    linear-gradient(90deg, rgba(0, 229, 255, 0.1) 1px, transparent 1px),
    linear-gradient(rgba(0, 229, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  animation: gridScroll 20s linear infinite;
  pointer-events: none;
}

.hero-section {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
}

.glitch-text {
  font-size: 3rem;
  color: #00e5ff;
  text-shadow: 0 0 10px #00e5ff;
  position: relative;
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip: rect(0, 900px, 0, 0);
  animation: glitch 2s infinite linear alternate-reverse;
}

.cyber-line {
  height: 2px;
  background: linear-gradient(90deg, transparent, #00e5ff, transparent);
  margin: 2rem auto;
  width: 200px;
}

.tiers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.comparison-section {
  margin-top: 3rem;
}

.comparison-toggle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(0, 229, 255, 0.1);
  border: 1px solid #00e5ff;
  border-radius: 0.5rem;
  color: #00e5ff;
  cursor: pointer;
  margin: 0 auto;
  transition: all 0.3s ease;
}

.comparison-toggle:hover {
  background: rgba(0, 229, 255, 0.2);
  transform: translateY(-2px);
}

@keyframes gridScroll {
  0% { transform: translate(0, 0); }
  100% { transform: translate(20px, 20px); }
}

@keyframes glitch {
  0% { clip: rect(44px, 900px, 56px, 0); }
  20% { clip: rect(12px, 900px, 65px, 0); }
  40% { clip: rect(78px, 900px, 92px, 0); }
  60% { clip: rect(23px, 900px, 45px, 0); }
  80% { clip: rect(34px, 900px, 86px, 0); }
  100% { clip: rect(67px, 900px, 91px, 0); }
}
</style>