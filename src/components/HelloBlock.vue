<template>
  <section class="hello">
    <div class="hello__info">
      <div class="hello__title">Always<br />Ready to Code.</div>
      <div class="hello__desc">
        Spin up fresh, automated dev environments for each task, in the cloud,
        in seconds.
      </div>
      <div class="hello__try">
        <button class="hello__btn">Try Now</button>
        <div class="hello__try-desc">
          Open a workspace.<br />Start from any Git context.
        </div>
      </div>
      <div class="hello__socials">
        <router-link to="/" class="hello__sosials-icon"
          ><img src="@/assets/fox.svg" alt="fox"
        /></router-link>
        <router-link to="/" class="hello__sosials-icon"
          ><img src="@/assets/github.svg" alt="github"
        /></router-link>
        <router-link to="/" class="hello__sosials-icon"
          ><img src="@/assets/bin.svg" alt="bin"
        /></router-link>
      </div>
    </div>
    <div class="hello__img"><img src="@/assets/hello.png" alt="PC" /></div>
  </section>
</template>

<script>
export default {
  name: "HelloBlock",
  components: {},
};
</script>

<style lang="scss" scoped>
.hello {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  @include mobile {
      flex-direction: column-reverse;
    }
  max-width: 1358px;
  width: 100%;
  padding: 52px 24px 18px 24px;
  margin-inline: auto;
  @include mobile {
      padding-top: 24px;
    }

  &__info {
    min-width: 550px;
    @include desktop-small {
      min-width: 465px;
    }

    @include tablet {
      min-width: 400px;
    }

    @include tablet-small {
      min-width: 330px;
    }

    @include mobile {
      min-width: 100%;
    }
  }

  &__title {
    color: #12100c;
    font-size: 80rem;
    font-weight: 700;
    line-height: 88rem;

    margin-bottom: 38px;

    @include tablet-small {
      margin-bottom: 24px;
    }

  }

  &__desc {
    color: rgba(18, 16, 12, 0.7);
    font-size: 23rem;
    font-weight: 400;
    line-height: 31.92rem;
    max-width: 460px;

    margin-bottom: 48px;

    @include tablet-small {
      margin-bottom: 30px;
    }

  }

  &__try {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-bottom: 18px;
  }

  &__btn {
    color: #12100c;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 22.5px;

    border-radius: 16px;
    background: #ffae33;
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.1);

    padding: 11px 46px;
  }

  &__try-desc {
    color: rgba(18, 16, 12, 0.7);
    font-size: 16rem;
    font-weight: 400;
    line-height: 24rem; /* 150% */
  }

  &__socials {
    display: flex;
    align-items: center;
    gap: 28px;
    img{
        width: 29px;
    }

  }

  &__sosials-icon {
  }

  &__img {
    max-width: 630px;
    @include mobile {
      max-width: 220px;
    }

    img {
      width: 100%;
      flex-shrink: 0;
      object-fit: cover;
    }
  }
}
</style>
