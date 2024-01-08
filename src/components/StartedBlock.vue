<template>
  <section class="start">
    <div class="start__title">Get started now</div>
    <div class="start__list">
      <div class="start__item">
        <div class="start__item-title">Connect Git repository</div>
        <div class="start__item-desc">
          Select a Git provider to start with an existing project from any Git
          context.
        </div>
        <div class="start__btns">
          <router-link to="/" class="start__btn btn-gitlab">
            <div class="start__btn-img">
              <img src="@/assets/gitlab-icon.svg" alt="gitlab" />
            </div>
            <div class="start__btn-text">Continue with GitLab</div>
          </router-link>
          <router-link to="/" class="start__btn btn-github">
            <div class="start__btn-img">
              <img src="@/assets/github-icon.svg" alt="github" />
            </div>
            <div class="start__btn-text">Continue with GitHub</div>
          </router-link>
          <router-link to="/" class="start__btn btm-bitbucket">
            <div class="start__btn-img">
              <img src="@/assets/bit-icon.svg" alt="bitbucket" />
            </div>
            <div class="start__btn-text">Continue with Bitbucket</div>
          </router-link>
        </div>
        <div class="start__item-desc">
          Or prefix any GitLab, GitHub or Bitbucket URL with
        </div>
        <button class="start__gitpod">gitpod.io/#</button>
      </div>
      <div class="start__item">
        <div class="start__item-title">Launch an example workspace</div>
        <div class="start__item-desc">
          Dive into one of our example workspaces
        </div>
        <div class="start__lang">
          <div class="start__lang-item">
            <div class="start__lang-desc">
              <div class="start__lang-logo">
                <img src="@/assets/ts.svg" alt="TS" />
              </div>
              <div class="start__lang-text">Node or TypeScript</div>
            </div>
            <button class="start__lang-btn">Launch workspace</button>
          </div>

          <div class="start__lang-item">
            <div class="start__lang-desc">
              <div class="start__lang-logo">
                <img src="@/assets/python.svg" alt="Python" />
              </div>
              <div class="start__lang-text">Python</div>
            </div>
            <button class="start__lang-btn">Launch workspace</button>
          </div>

          <div class="start__lang-item">
            <div class="start__lang-desc">
              <div class="start__lang-logo">
                <img src="@/assets/go.svg" alt="GO" />
              </div>
              <div class="start__lang-text">Go</div>
            </div>
            <button class="start__lang-btn">Launch workspace</button>
          </div>

          <div class="start__lang-item">
            <div class="start__lang-desc">
              <div class="start__lang-logo">
                <img src="@/assets/rust.svg" alt="Rust" />
              </div>
              <div class="start__lang-text">Rust</div>
            </div>
            <button class="start__lang-btn">Launch workspace</button>
          </div>

          <div class="start__lang-item">
            <div class="start__lang-desc">
              <div class="start__lang-logo">
                <img src="@/assets/java.svg" alt="Java" />
              </div>
              <div class="start__lang-text">Java</div>
            </div>
            <button class="start__lang-btn">Launch workspace</button>
          </div>

          <div class="start__lang-item">
            <div class="start__lang-desc">
              <div class="start__lang-logo">
                <img src="@/assets/svelte.svg" alt="svelte" />
              </div>
              <div class="start__lang-text">Svelte</div>
            </div>
            <button class="start__lang-btn">Launch workspace</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "StartedPage",
};
</script>

<style lang="scss" scoped>
.start {
  margin-bottom: 160px;

  &__title {
    color: #12100c;
    text-align: center;
    font-size: 54rem;
    font-weight: 700;
    line-height: 71.82rem; /* 133% */
    margin-bottom: 48px;
  }

  &__list {
    max-width: calc(1310px + 48px);
    padding: 0 24px;
    margin-inline: auto;

    display: grid;
    grid-template-columns: 1fr 1fr;
    @include tablet {
    grid-template-columns: 1fr;
    }
    gap: 26px;
  }

  &__item {
    padding: 56px 56px 86px 56px;
    @include desktop-small {
    padding: 56px 24px 86px 24px;
    }
    border-radius: 20px;
    background: #fff;

  }

  &__item-title {
    color: #12100c;
    text-align: center;
    font-size: 32px;
    font-weight: 700;
    line-height: 40px; /* 125% */
    margin-bottom: 8px;
    @include tablet {
        font-size: 28px;
    }
  }

  &__item-desc {
    color: rgba(18, 16, 12, 0.7);
    text-align: center;
    font-size: 24px;
    font-weight: 400;
    line-height: 31.92px; /* 133% */
    max-width: 480px;
    margin-inline: auto;
    @include tablet {
        font-size: 18px;
    }
  }

  &__btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 62px 0 64px 0;
  }

  &__btn {
    display: flex;
    align-items: center;
    gap: 16px;

    border-radius: 12px;
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.1);
    max-width: 262px;
    width: 100%;
    padding: 9px 33px;
  }

  &__btn-img {
  }

  &__btn-text {
    color: #fff;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px; /* 114.286% */
  }

  &__gitpod {
    display: block;
    color: rgba(18, 16, 12, 0.7);
    text-align: center;
    font-size: 24px;
    font-weight: 400;
    line-height: 31.92px; /* 133% */

    border-radius: 12px;
    background: #ffe4bc;
    width: 151px;
    margin-top: 6px;

    margin-inline: auto;
  }

  &__lang {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    margin-top: 32px;
  }

  &__lang-item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    border-radius: 12px;
    background: #f9f9f9;

    padding: 12px 12px 12px 16px;
  }

  &__lang-desc {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &__lang-logo {
  }

  &__lang-text {
    color: rgba(18, 16, 12, 0.7);
    text-align: left;
    font-size: 20px;
    font-weight: 400;
    line-height: 20px; /* 100% */
    @include mobile {
        font-size: 16px;

    }
  }

  &__lang-btn {
    color: #fff;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px; /* 114.286% */

    border-radius: 12px;
    background: #12100c;
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.1);

    padding: 7px 12px;
  }
}

.btn-gitlab {
  background: #fc6d26;
}
.btn-github {
  background: #000;
}
.btm-bitbucket {
  background: #2684ff;
}
</style>
