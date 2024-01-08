<template>
  <section class="remot">
    <div class="remot__title">Remote-first. Secure by design.</div>
    <div class="remot__img"><img src="@/assets/remot.png" alt="remot" /></div>
    <div class="remot__desc">
      You no longer need an over-powered laptop to code, Gitpod works just as
      smoothly on a Chromebook or iPad. All you need is a browser. Gitpod
      centralizes all source code and never stores it on insecure machines and
      networks.
    </div>
    <div class="remot__btns">
      <router-link to="/" class="remot__btn">
        <div class="remot__btn-cover">
          <div class="remot__btn-icon">
            <img src="@/assets/google.svg" alt="google" />
          </div>
          <div class="remot__btn-text">Chrome Extension</div>
        </div>
      </router-link>
      <router-link to="/" class="remot__btn">
        <div class="remot__btn-cover">
          <div class="remot__btn-icon">
            <img src="@/assets/firefox.svg" alt="firefox" />
          </div>
          <div class="remot__btn-text">Firefox Extension</div>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "RemotBlock",
};
</script>

<style lang="scss" scoped>
.remot {
  padding: 177px 24px;
  @include tablet {
    padding: 105px 24px;
    }

  &__title {
    color: #12100c;
    text-align: center;
    font-size: 54rem;
    font-weight: 700;
    line-height: 71.82rem; /* 133% */
    margin-bottom: 47px;
  }

  &__img {
    max-width: 1310px;
    margin-inline: auto;
    border-radius: 14px;
    box-shadow: -2px 2px 15px 8px rgba(255, 138, 0, 0.4);
    margin-bottom: 49px;

    img {
      width: 100%;
      flex-shrink: 0;
      object-fit: cover;
    }
  }

  &__desc {
    color: rgba(18, 16, 12, 0.7);
    text-align: center;
    font-size: 24px;
    font-weight: 400;
    line-height: 31.92px; /* 133% */

    max-width: 877px;
    margin-inline: auto;
    margin-bottom: 45px;
  }

  &__btns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    @include mobile {
      flex-direction: column;
    }
    
  }

  &__btn {
    border: 1px solid #000;
    display: inline-block;   
  }

  &__btn-cover {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 8px 12px;
    border-radius: 9px;
    background: #fff;
    box-shadow: 0px 0.5px 2px 0px rgba(0, 0, 0, 0.1);

    top: 0;
    left: 0;
    outline: 1px solid #fff;
  }

  &__btn-icon {
  }

  &__btn-text {
    color: #12100c;
    font-size: 18px;
    font-weight: 700;
    line-height: 31.86px; /* 177% */
  }
}
</style>
