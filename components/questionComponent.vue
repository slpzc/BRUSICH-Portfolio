<template>
  <div class="question">
    <div class="question-first">
      <div class="question-first-wrapper">
        <div class="question-brand">
          <img src="https://i.imgur.com/BkNd8h7.png" alt="logo">
        </div>

        <div class="question-inner">
          <div class="question-inner-desc">
            <h2 class="question-first__title">
              Остались вопросы?
            </h2>
            <p class="question-first__description">
              Позвоните нам или оставьте заявку и мы проконсультируем вас по
              любому вопросу
            </p>
          </div>

          <div class="question-inner-email">
            <h2>{{ phone }}</h2>

            <span>
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.6875 0.107788H1.9375C1.12969 0.107788 0.46875 0.76668 0.46875 1.57199V10.3572C0.46875 11.1625 1.12969 11.8214 1.9375 11.8214H13.6875C14.4953 11.8214 15.1562 11.1625 15.1562 10.3572V1.57199C15.1562 0.76668 14.4953 0.107788 13.6875 0.107788ZM13.3937 3.21922L8.59093 6.21352C8.11359 6.51368 7.5114 6.51368 7.03406 6.21352L2.23125 3.21922C2.04766 3.10208 1.9375 2.90442 1.9375 2.69211C1.9375 2.2016 2.47359 1.90876 2.89219 2.16499L7.8125 5.2325L12.7328 2.16499C13.1514 1.90876 13.6875 2.2016 13.6875 2.69211C13.6875 2.90442 13.5773 3.10208 13.3937 3.21922Z"
                  fill="#2CC37C"
                />
              </svg>
              {{ email }}
            </span>
          </div>

          <div class="question-inner-phone">
            <span class="question-phone__item">Ваш номер телефона</span>
            <input type="number" placeholder="+7">
          </div>
        </div>
      </div>
    </div>

    <div class="question-button">
      <Button style="font-family: 'Lato'; width: 100%;" :padding="'12px 20px'">
        Перезвоните мне
      </Button>
    </div>

    <div class="question-inner-callme">
      <div class="question-inner-callme-icons">
        <span>
          <img src="https://i.imgur.com/rKUtWRz.png" alt="icon">
        </span>

        <span>
          <img src="https://i.imgur.com/txpJJrU.png" alt="icon">
        </span>

        <span>
          <img src="https://i.imgur.com/uc56ETF.png" alt="icon">
        </span>
      </div>
      <p>Или напишите нам любым удобным способом</p>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue'
export default {
  name: 'QuestionComponent',
  components: {
    Button
  },
  data () {
    return {
      phone: '8 (800) 555-353-5',
      email: 'brusich.deal@mail.ru'
    }
  }
}
</script>

<style lang="scss" scoped>

.question {
    margin-top: 40px;
    &-first {
        height: 363.69px;
        background: #F8F8F8;
    }
    h2 {
        font-weight: 700;
        font-size: 28.2857px;
        line-height: 40px;
        color: #333333;
    }

    input {
        background: #FFFFFF;
        border-radius: 5px;
        border: 0;
        width: -webkit-fill-available;
        padding: 10px 10px;
        color: black;
        margin-top: 10px;
    }

    p {
        font-weight: 400;
        font-size: 14.1429px;
        line-height: 17px;

        color: rgba(51, 51, 51, 0.7);
    }

    small {
        font-weight: 400;
        font-size: 10.6071px;
        line-height: 13px;
        color: #333333;
    }

    &-brand {
        text-align: center;
        margin-bottom: 36px;
        img {
            margin-top: -32px;
        }
    }

        &-first__title {
        margin-bottom: 8px;
    }

    &-first__description {
        margin-bottom: 17px;
    }

    &-button {
        margin-top: 10px;
    }

    &-phone__item {
        font-weight: 400;
        font-size: 12px;
        color: #333333;
    }

    &-inner-email {
        margin-bottom: 20px;
    }

    &-inner-callme {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        align-items: center;
    }

    &-first-wrapper {
        max-width: 90%;
        width: 100%;
        margin: 0 auto;
    }

    &-inner-callme-icons {
        display: flex;
        span {
            margin-right: 15px;
        }
    }
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

</style>
