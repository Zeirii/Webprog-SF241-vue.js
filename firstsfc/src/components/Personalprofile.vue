<template>
  <div class="page">
    <header class="hero" id="top">
      <nav class="main-nav">
        <a href="#about">About</a>
        <a href="#tech">Tech Skills</a>
        <a href="#orgs">Organizations</a>
        <a href="#interests">Interests</a>
        <a href="#contact">Say Hi</a>
      </nav>

      <div class="hero-content">
        <div class="hero-text">
          <p class="eyebrow">{{ specialization }}</p>
          <h1>Hi, I’m {{ fullName }}</h1>
          <p class="subtitle">{{ bio }}</p>
          <p class="subtitle smaller">{{ roles }}</p>
        </div>

        <div class="hero-right">
          <div class="photo-orbit">
            <div class="photo-glow"></div>
            <img src="../assets/Kristoff.jpg" alt="Photo of Kristoff" class="hero-photo" />
          </div>

          <div class="chibi-wrapper" aria-hidden="true">
            <div class="chibi">
              <div class="chibi-head">
                <div class="chibi-face">
                  <span class="eye eye-left"></span>
                  <span class="eye eye-right"></span>
                  <span class="mouth"></span>
                </div>
              </div>
              <div class="chibi-body">
                <div class="chibi-arm chibi-arm-left"></div>
                <div class="chibi-arm chibi-arm-right"></div>
                <div class="chibi-torso"></div>
              </div>
            </div>
            <p class="chibi-caption">Nice to meet you! 👋</p>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section class="card" id="tech">
        <h2>Tech Confidence Levels</h2>
        <p class="muted">
          These are rough confidence percentages for the tools and languages used most often.
        </p>

        <div class="confidence-grid">
          <div v-for="skill in skills" :key="skill.label" class="confidence-item">
            <span class="label">{{ skill.label }}</span>
            <div class="bar-track">
              <div class="bar-fill" :style="{ width: skill.level + '%' }"></div>
            </div>
            <span class="percent">{{ skill.level }}%</span>
          </div>
        </div>
      </section>

      <section class="card" id="about">
        <h2>About Kristoff</h2>
        <p>
          Currently 19 and in second year CS at Asia Pacific College, specializing in Cybersecurity and Digital Forensics.
        </p>
      </section>

      <section class="card" id="contact">
        <h2>Say Hi</h2>
        <div class="magnet-wrapper" @mousemove="handleMouseMove" @mouseleave="resetMagnet">
          <button class="magnet-btn" :style="magnetStyle" type="button">
            Hover to Connect
          </button>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: 'Kristoff Aadryk L. Viray',
      specialization: 'Cybersecurity · Digital Forensics · Org Life',
      bio: '19-year-old Second Year Computer Science student specializing in Cybersecurity and Digital Forensics at Asia Pacific College.',
      roles: 'Assistant Director of Marketing of JISSA and JPCS • Antipolo-based • Chill, fun-loving, and always down for org work.',
      skills: [
        { label: 'HTML', level: 75 },
        { label: 'Java', level: 60 },
        { label: 'Python', level: 70 },
        { label: 'CMD', level: 65 },
        { label: 'Kali Linux', level: 70 },
        { label: 'CSS', level: 50 }
      ],
      magnetStyle: {
        transform: 'translate(0, 0)'
      }
    };
  },
  methods: {
    handleMouseMove(e) {
      const strength = 0.25;
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      this.magnetStyle.transform = `translate(${x * strength}px, ${y * strength}px)`;
    },
    resetMagnet() {
      this.magnetStyle.transform = 'translate(0, 0)';
    }
  }
};
</script>