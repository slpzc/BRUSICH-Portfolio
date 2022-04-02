<template>
  <div class="about">
    <div class="about-wrapper">
      <h2 class="about-header__item">
        О компании
      </h2>
      <div id="about" class="about-us">
        <h2>
          О компании <br>
          «Брусичъ»
        </h2>
        <p>
          В 2010 году на рынке деревянного домостроения Московского региона
          появилась новая, принципиально отличающаяся от других, компания.
          <br><br>
          Ее создателями и впоследствии движущей силой стала команда
          профессионалов с огромным опытом работы. Глубокое знание сферы помогло
          компании «Теремъ» совершить важный прорыв в области деревянного
          домостроения. Главной идеей стало строительство качественных и
          комфортных домов.
          <br><br>
          Сегодня «Теремъ» предоставляет полный спектр услуг: строительство
          деревянных домов, достройка и реконструкция, инженерные коммуникации,
          кредитование и страхование, благоустройство и продажа земельных
          участков и многое другое.
        </p>
      </div>

      <div class="about-statistic global-wrapper flex-direction">
        <h2 class="about-statistic-header__item">
          «Брусичъ» в цифрах
        </h2>

        <div class="about-statistic-card">
          <div class="about-statistic-card-item">
            <h2>720+</h2>
            <p>
              Построенных <br>
              объектов
            </p>
          </div>
          <div class="about-statistic-card-item">
            <h2>22 года</h2>
            <p>Производим</p>
          </div>
          <div class="about-statistic-card-item">
            <h2>5 лет</h2>
            <p>Строим</p>
          </div>
          <div class="about-statistic-card-item">
            <h2>99%</h2>
            <p>
              Довольных <br>
              клиентов
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="about-video">
      <VideoPlayer src="https://www.youtube.com/embed/1zUmd5f-PXQ" />
    </div>

    <div class="global-wrapper flex-direction">
      <question />
    </div>
  </div>
</template>

<script>
import VideoPlayer from 'nuxt-video-player'
import question from '../components/questionComponent.vue'

require('nuxt-video-player/src/assets/css/main.css')

export default {
  name: 'AboutPage',
  components: {
    question,
    VideoPlayer
  }
}
</script>
<style lang="scss" scoped>
.about {
  &-us {
    h2 {
      font-weight: 700;
      font-size: 36px;
      line-height: 43px;
      text-align: center;
      color: #ffffff;
      margin-bottom: 20px;
    }
    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
      color: #ffffff;
      max-width: 90%;
      margin: 0 auto;
    }
  }
  &-statistic {
    background: url(https://i.imgur.com/oj9bJ9V.png);
    background-repeat: no-repeat;
    background-size: 100%;
    height: 500px;
    margin-top: 40px;

    &-header__item {
      font-weight: 700;
      font-size: 30px;
      line-height: 36px;
      color: #ffffff;
      text-align: center;
      padding: 40px 0 15px 0;
    }

    &-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 10px;

      &-item {
        text-align: center;

        h2 {
          font-weight: 700;
          font-size: 42px;
          line-height: 50px;
          color: #2cc37c;
          margin-bottom: 5px;
        }

        p {
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          color: #ffffff;
        }
      }
    }
  }

  &-header__item {
    margin-left: 15px;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #333333;
    margin-bottom: 20px;
  }

  &-video {
    margin-top: 40px;
  }
}

#about {
  background: #2cc37c;
  color: white;
  width: 100%;
  height: 779px;
  position: relative;
  padding-top: 20px;

  &::before {
    content: "";
    position: absolute;
    background: url(https://i.imgur.com/TNTtew8.png);
    background-repeat: no-repeat;
    background-size: 100%;
    width: 100%;
    height: 304px;
    right: 0;
    bottom: 0;
  }
}
</style>
