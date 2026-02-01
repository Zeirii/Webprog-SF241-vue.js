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
        <p>
          Lives in Antipolo and loves to chill, have fun, and stay laid-back.
        </p>
      </section>

      <section class="card" id="orgs">
        <h2>Organizations & Competitions</h2>
        <p>
          Serves as the Assistant Director of Marketing for both JISSA and JPCS.
        </p>
        <p>
          Actively participates in cybersecurity competitions such as the Trend Micro UCTF.
        </p>
      </section>

      <section class="card" id="interests">
        <h2>What I Enjoy</h2>
        <p>
          Loves to mix productivity with good vibes—gaming, music, and chill org work.
        </p>
      </section>

      <section class="card" id="contact">
        <h2>Say Hi</h2>
        <div class="magnet-wrapper" @mousemove="handleMouseMove" @mouseleave="resetMagnet">
          <button class="magnet-btn" :style="magnetStyle" type="button">
            Hover to Connect
          </button>
        </div>

        <div class="social-row">
          <a class="social-pill ig" href="https://www.instagram.com/zeirii_/" target="_blank" rel="noopener noreferrer">
            <span class="pill-glow"></span>
            <span class="pill-inner">
              <i class="fa-brands fa-instagram"></i>
              <span>Instagram</span>
            </span>
          </a>
          <a class="social-pill fb" href="https://www.facebook.com/Kristoff.Viray.5/" target="_blank" rel="noopener noreferrer">
            <span class="pill-glow"></span>
            <span class="pill-inner">
              <i class="fa-brands fa-facebook-f"></i>
              <span>Facebook</span>
            </span>
          </a>
          <a class="social-pill li" href="https://www.linkedin.com/in/kristoff-aadryk-viray/" target="_blank" rel="noopener noreferrer">
            <span class="pill-glow"></span>
            <span class="pill-inner">
              <i class="fa-brands fa-linkedin-in"></i>
              <span>LinkedIn</span>
            </span>
          </a>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <p>&copy; 2026 Kristoff Aadryk L. Viray. All rights reserved.</p>
      <p><a href="#top">Back to top</a></p>
    </footer>
  </div>
</template>