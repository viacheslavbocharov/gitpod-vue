<template>
  <section class="select">
    <div class="select__title">
      <div class="select__title_main">Select project,</div>
      <div class="select__title_crossed">
        check dependencies, checkout branch, view readme.txt, install tools, run
        build, run test,
      </div>
      <div class="select__title_main">start coding.</div>
    </div>

    <div class="select__list">
      <div class="select__info">
        <div class="select__info-title">Think CI/CD for dev environments</div>
        <div class="select__desc">
          We invented prebuilds so application code, configuration and
          infrastructure can all be stored as machine-executable code in your
          git repositories and applied to dev environments automatically and
          continuously.
        </div>
        <div class="select__btns">
          <button class="select__btn-more">More on prebuilds</button>
          <button class="select__btn-doc">Documentation</button>
        </div>
      </div>
      <div class="select__img">
        <img src="@/assets/compiling.png" alt="compiling" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SelectBlock",
};
</script>

<style lang="scss" scoped>
.select {
  max-width: 1358px;
  width: 100%;
  margin-inline: auto;

  padding: 176px 24px 160px 24px;
  @include tablet {
    padding: 105px 24px 96px 24px;
  }
  @include tablet-small {
    padding: 77px 24px 77px 24px;
    }

  &__title {
    max-width: 1131px; 
    margin-inline: auto;
    margin-bottom: 339px;
    @include tablet {
      margin-bottom: 204px;
    }
    @include tablet-small {
      margin-bottom: 120px;
    }

    &_main {
      color: #12100c;
      text-align: center;
      font-size: 54rem;
      font-weight: 700;
      line-height: 63.72rem; /* 118% */
    }

    &_crossed {
      color: #999795;
      text-align: center;
      font-size: 54rem;
      font-weight: 400;
      line-height: 63.72rem; /* 118% */
      text-decoration: line-through;
      text-decoration-thickness: 2px;
    }
  }

  &__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    @include mobile {
        
        flex-direction:column-reverse;
    }
  }

  &__info {
    max-width: 650px;
    @include desktop-small {
        max-width: 450px;
    }
    @include tablet {
        max-width: 380px;
    }
    @include mobile {
        max-width: 100%;
    }
  }

  &__info-title {
    color: #12100c;
    font-size: 32rem;
    font-weight: 700;
    line-height: 40rem; /* 125% */
    margin-bottom: 8px;
    margin-top: 8px;
    @include tablet-small {
        margin-top: 24px;

    }
  }

  &__desc {
    color: rgba(18, 16, 12, 0.7);
    font-size: 24rem;
    font-weight: 400;
    line-height: 31.92rem; /* 133% */
    margin-bottom: 151px;
    @include desktop-small {
        margin-bottom: 90px;
    }
    @include tablet {
        margin-bottom: 60px;
    }
  }

  &__btns {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &__btn-more {
    color: #12100c;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px; /* 114.286% */

    padding: 8px 24px;

    border-radius: 10.5px;
    background: #ffae33;
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.1);
  }

  &__btn-doc {
    color: #12100c;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px; /* 114.286% */

    padding: 8px 24px;

    border-radius: 10.5px;
    background: #ffb0ae;
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.1);
  }

  &__img {
    max-width: 590px;
    @include mobile {
        max-width: 400px;
    }
    img {
      width: 100%;
      flex-shrink: 0;
      object-fit: cover;
    }
  }
}
</style>
