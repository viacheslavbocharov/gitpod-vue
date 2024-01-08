<template>
  <section class="dev">
    <div class="dev__title">Used by 400,000+ developers.</div>

    <div class="dev__slider">
      <swiper
        :slides-per-view="this.calculateValueBasedOnWidth()"
        :space-between="24"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide>
          <div class="dev__slide">
            <div class="dev__slide-desc">
              GitPod is incredibly cool.<br /><br />
              In my opinion, this is a big step in open source software
              contribution. I'm excited to see where we go from here.
            </div>
            <div class="dev__slide-info">
              <div class="dev__slide-img">
                <img src="@/assets/ben-halpern.png" alt="Ben Halpern" />
              </div>
              <div class="dev__slide-role">
                <div class="dev__slide-name">Ben Halpern</div>
                <div class="dev__slide-contact">
                  Creator and Co-founder <span>@forem</span> and
                  <span>@ThePracticalDev</span>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="dev__slide">
            <div class="dev__slide-desc">
              Let's say we were overwhelmed how smooth @gitpod workspaces
              creation & own Docker image for workspaces worked.<br /><br />
              Plus, installing @code extensions from the store and integrating
              @gitlab CI. That blew my mind entirely, and that is hard ;
            </div>
            <div class="dev__slide-info">
              <div class="dev__slide-img">
                <img
                  src="@/assets/michael-friedrich.png"
                  alt="Michael Friedrich"
                />
              </div>
              <div class="dev__slide-role">
                <div class="dev__slide-name">Michael Friedrich</div>
                <div class="dev__slide-contact">
                  Developer Evangelist <span>@GitLab</span> and
                </div>
              </div>
            </div>
          </div></swiper-slide
        >
        <swiper-slide>
          <div class="dev__slide">
            <div class="dev__slide-desc">
              Look at any PR (pull request) in a full coding environment where
              you can edit, build, and test the PR code, by just prepending
              "gitpod.io#" to the PR URL. Super useful for reviewing/testing
              stuff without having to check it out locally!
            </div>
            <div class="dev__slide-info">
              <div class="dev__slide-img">
                <img src="@/assets/julius-volz.png" alt="Julius Volz" />
              </div>
              <div class="dev__slide-role">
                <div class="dev__slide-name">Julius Volz</div>
                <div class="dev__slide-contact">
                  Creator <span>@PrometheusIO</span> and
                </div>
              </div>
            </div>
          </div></swiper-slide
        >
        <swiper-slide>
          <div class="dev__slide">
            <div class="dev__slide-desc">
              I think I’m in love with @gitpod. It’s such a powerful tool. I’ve
              learned so much in the past week just from stumbling across Github
              repos that interest me and appending “http://gitpod.io/#” to the
              URL. A+ tool all around.
            </div>
            <div class="dev__slide-info">
              <div class="dev__slide-img">
                <img src="@/assets/david-ressler.png" alt="David Ressler" />
              </div>
              <div class="dev__slide-role">
                <div class="dev__slide-name">David Ressler</div>
                <div class="dev__slide-contact">
                  Engineering Manager <span>@instagram</span> and
                </div>
              </div>
            </div>
          </div></swiper-slide
        >
      </swiper>
    </div>

    <div class="dev__partners">
      <div class="dev__partner">
        <img src="@/assets/gitlab-partner.png" alt="Partner" />
      </div>
      <div class="dev__partner">
        <img src="@/assets/freecodecamp-partner.png" alt="Partner" />
      </div>
      <div class="dev__partner" style="max-width: 96px">
        <img
          style="width: 100%"
          src="@/assets/dwave-partner.png"
          alt="Partner"
        />
      </div>
      <div class="dev__partner">
        <img src="@/assets/google-partner.png" alt="Partner" />
      </div>
      <div class="dev__partner">
        <img src="@/assets/amazon-partner.png" alt="Partner" />
      </div>
      <div class="dev__partner">
        <img src="@/assets/facebook-partner.png" alt="Partner" />
      </div>
      <div class="dev__partner">
        <img src="@/assets/uber-partner.png" alt="Partner" />
      </div>
      <div class="dev__partner">
        <img src="@/assets/openai-partner.png" alt="Partner" />
      </div>
      <div class="dev__partner">
        <img src="@/assets/intel-partner.png" alt="Partner" />
      </div>
      <div class="dev__partner">
        <img src="@/assets/theia-partner.png" alt="Partner" />
      </div>
      <div class="dev__partner">
        <img src="@/assets/code-partner.png" alt="Partner" />
      </div>
      <div class="dev__partner">
        <img src="@/assets/geeks-partner.png" alt="Partner" />
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";

export default {
  name: "DevBlock",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },

  methods: {
    calculateValueBasedOnWidth() {
      const screenWidth = window.innerWidth;

      if (screenWidth < 670) {
        return "1.2";
      } else if (screenWidth < 992) {
        return "2.25";
      } else {
        return "3.25";
      }
    },
    handleResize() {
      this.$forceUpdate(); // Принудительное обновление компонента при изменении размера экрана
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style lang="scss" scoped>
.dev {
  padding: 0 24px 177px 24px;
  @include tablet {
    padding: 0 24px 105px 24px;
    }

  &__title {
    color: #12100c;
    text-align: center;
    font-size: 54rem;
    font-weight: 700;
    line-height: 63.72rem; /* 118% */
    margin-bottom: 57px;
  }

  &__slider {
    max-width: calc(1310px + 48px);
    margin-inline: auto;
  }

  &__slide {
    border-radius: 16px;
    background: #fff;
    max-width: 100%;
    padding: 24px;
  }

  &__slide-desc {
    margin-bottom: 14px;
    color: #12100c;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }

  &__slide-info {
    display: flex;
    gap: 12px;
  }

  &__slide-img {
  }

  &__slide-role {
  }

  &__slide-name {
    color: #12100c;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px; /* 150% */
  }

  &__slide-contact {
    color: #12100c;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px; /* 150% */
    span {
      font-weight: 700;
    }
  }

  &__partners {
    max-width: 1050px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-inline: auto;
    gap: 60px;
    margin-top: 127px;
    @include tablet {
        margin-top: 70px;
    }
  }
}
</style>
