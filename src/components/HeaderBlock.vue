<template>
  <header class="header">
    <router-link to="/" class="header__logo"
      ><img src="@/assets/logo.svg" alt="GitPot"
    /></router-link>
    <nav
      class="header__nav"
      :class="{ 'is-active': isActive }"
      @click="isActive = false"
    >
      <router-link @click="isActive = false" to="/">Features</router-link>
      <router-link @click="isActive = false" to="/">Pricing</router-link>
      <router-link @click="isActive = false" to="/">Blog</router-link>
      <router-link @click="isActive = false" to="/">Docs</router-link>
      <router-link @click="isActive = false" to="/">Changelog</router-link>
      <router-link @click="isActive = false" to="/">We're hiring</router-link>
      <div class="header__close" @click="isActive = false"><CloseIcon /></div>
    </nav>
    <div class="header__btn-container">
      <div class="header__btn">
        <router-link to="/">Login</router-link>
      </div>
      <div class="header__burger" @click="isActive = !isActive">
        <MenuIcon />
      </div>
    </div>
  </header>
</template>

<script>
import MenuIcon from "vue-material-design-icons/Menu.vue";
import CloseIcon from "vue-material-design-icons/Close.vue";

export default {
  name: "HeaderBlock",
  data() {
    return {
      isActive: false,
    };
  },
  components: {
    MenuIcon,
    CloseIcon,
  },
};
</script>

<style lang="scss" scoped>
.header {
  max-width: 1440px;
  width: 100%;
  margin-inline: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 32px;

  &__logo,
  &__btn {
    width: 135px;
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: 40px;
    a {
      color: rgba(18, 16, 12, 0.7);
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }
    @include tablet {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      background: rgba(0, 0, 0, 0.8);
      transform: translateX(120%);
      transition: 0.2s ease-in;
      &.is-active {
        transform: translateX(0%);
      }

      a {
        color: #fff;
      }
    }
  }

  &__burger {
    display: none;
    @include tablet {
      display: block;
    }
  }

  &__close {
    display: none;
    @include tablet {
      display: flex;
    }
    .material-design-icon {
      display: flex;
    }
    position: absolute;
    top: 24px;
    right: 30px;
    background: orange;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
  }

  &__btn-container {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  &__btn {
    text-align: right;
    a {
      min-width: 82px;
      padding: 6px 23px;
      display: inline-block;
      color: #f9f9f9;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      border-radius: 12px;
      background: #12100c;
    }
    @include tablet {
      //display: none;
    }
  }
}
</style>
