<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__list">
        <div class="footer__column">
          <div class="footer__column-title">Gitpod</div>
          <router-link to="/" class="footer__column-item">Home</router-link>
          <router-link to="/" class="footer__column-item">Features</router-link>
          <router-link to="/" class="footer__column-item">Pricing</router-link>
          <router-link to="/" class="footer__column-item"
            >Changelog</router-link
          >
          <router-link to="/" class="footer__column-item"
            >Self-Hosted</router-link
          >
          <router-link to="/" class="footer__column-item"
            >Gitpod vs GitHub</router-link
          >
          <router-link to="/" class="footer__column-item"
            >Codespaces</router-link
          >
          <router-link to="/" class="footer__column-item">Status</router-link>
        </div>
        <div class="footer__column">
          <div class="footer__column-title">Developer</div>
          <router-link to="/" class="footer__column-item"
            >Getting started</router-link
          >
          <router-link to="/" class="footer__column-item"
            >Screencasts</router-link
          >
          <router-link to="/" class="footer__column-item">Blog</router-link>
          <router-link to="/" class="footer__column-item"
            >Documentation</router-link
          >
          <router-link to="/" class="footer__column-item"
            >Report a bug</router-link
          >
          <router-link to="/" class="footer__column-item"
            >Community</router-link
          >
        </div>
        <div class="footer__column">
          <div class="footer__column-title">Company</div>
          <router-link to="/" class="footer__column-item">About</router-link>
          <router-link to="/" class="footer__column-item">Careers</router-link>
          <router-link to="/" class="footer__column-item">Contact</router-link>
          <router-link to="/" class="footer__column-item"
            >Media Kit</router-link
          >
        </div>
        <div class="footer__column">
          <div class="footer__column-title">Legal</div>
          <router-link to="/" class="footer__column-item">Imprint</router-link>
          <router-link to="/" class="footer__column-item"
            >Terms of Service</router-link
          >
          <router-link to="/" class="footer__column-item"
            >Privacy Policy</router-link
          >
        </div>
      </div>
      <div class="footer__line"></div>

      <div class="footer__basment">
        <div class="footer__copyright">
          <router-link to="/" class="footer__column-item"
            ><img src="@/assets/footer-logo.png" alt="GitPod"
          /></router-link>
          <div class="footer__copyright-text">Copyright © 2021 Gitpod</div>
        </div>
        <div class="footer__socials">
          <router-link to="/" class="footer__socials-icon"
            ><img src="@/assets/twitter.png" alt="Twitter"
          /></router-link>
          <router-link to="/" class="footer__socials-icon"
            ><img src="@/assets/github.png" alt="GitHub"
          /></router-link>
          <router-link to="/" class="footer__socials-icon"
            ><img src="@/assets/message.png" alt="Message"
          /></router-link>
        </div>
      </div>
    </div>

    <div class="footer__cookies">
      <div class="footer__declaration">
        This website uses cookies to enhance the user experience. Read our
        <router-link to="/" class="footer__privacy">privacy policy</router-link>
        for more info.
      </div>
      <button class="footer__accept">Accept Cookies</button>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterBlock",
  components: {},
};
</script>

<style lang="scss" scoped>
.footer {
  &__wrapper {
    width: 100%;
    padding: 0 24px;
    background: #f9f9f9;
  }

  &__list {
    max-width: 852px;
    width: 100%;
    margin-inline: auto;
    padding: 48px 0;
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: space-between;
    align-items: start;
    gap: 24px;
    @include mobile {
      grid-template-columns: 1fr 1fr;
    }
  }

  &__column {
    display: grid;
    flex-direction: column;
    gap: 7px;
  }

  &__column-title {
    color: #12100c;
    font-size: 13px;
    font-weight: 700;
    line-height: 19.5px;
  }

  &__column-item {
    color: rgba(18, 16, 12, 0.7);
    font-size: 13px;
    font-weight: 400;
    line-height: 19.5px;
  }

  &__line {
    max-width: 852px;
    width: 100%;
    height: 1px;
    background: #ece7e5;
    margin-inline: auto;
  }

  &__basment {
    max-width: 852px;
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 33px 0 48px 0;
  }

  &__copyright {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__copyright-text {
    color: rgba(18, 16, 12, 0.7);
    font-size: 13px;
    font-weight: 400;
    line-height: 19.5px; /* 150% */
  }

  &__socials {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &__cookies {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    gap: 16px;
    background: #ECE7E5;
    @include tablet {
        flex-direction: column;
    }
  }

  &__declaration {
    color: rgba(18, 16, 12, 0.7);
    font-size: 16px;
    font-weight: 400;
    line-height: 24px; /* 150% */
    text-align: center;
    @include tablet {
        font-size: 14px;
    }
  }

  &__privacy {
    color: rgba(18, 16, 12, 0.59);
    font-size: 16px;
    font-weight: 400;
    line-height: 24px; /* 150% */
    text-decoration-line: underline;
    @include tablet {
        font-size: 14px;
    }
    
  }

  &__accept {
    border-radius: 8px;
    background: #f9f9f9;
    padding: 4px 24px;

    color: rgba(18, 16, 12, 0.7);
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    @include tablet {
        font-size: 14px;
    }
  }
}
</style>
