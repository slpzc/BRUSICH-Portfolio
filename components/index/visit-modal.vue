<template>
<div id="visit__modal">
  <b class="title">Хотите посетить один из наших объектов?</b>
  <p class="subtitle">Оставьте заявку нашему менеджеру и приедьте на осмотр территории</p>
<div class="inputs">
  <div class="input">
    <label for="name">Ваше имя</label>
    <input id="name" type="text" placeholder="Имя">
  </div>
  <div class="input">
    <label for="phone">Ваш номер телефона</label>
    <input id="phone" type="phone" placeholder="+7">
  </div>
</div>
  <div class="treatment">
    <label class="checkbox">
      <input type="checkbox" checked="checked">
      <div class="checkmark"></div>
    </label>
    <p>
      Даю согласие на обработку персональных данных и соглашаюсь с политикой конфиденциальности
    </p>
  </div>
  <customized-button :padding="'9px 0'">Оставить заявку</customized-button>
</div>
</template>

<script>
import CustomizedButton from '../Button'
export default {
  name: 'visitModal',
  components: { CustomizedButton }
}
</script>

<style lang="scss" scoped>
#visit__modal{
  margin-top: 20px;
  padding: 26px 27px;
  background: #FBFBFB;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12.6191px;
  display: flex;
  flex-direction: column;
}
    .title{
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      color: #333333;
    }
    .subtitle{
      padding-top: 10px;
      font-weight: 400;
      font-size: 13px;
      line-height: 16px;
      color: rgba(51, 51, 51, 0.5);
    }
    .inputs{
      padding-top: 25px;
      display: flex;
      flex-direction: column;
      gap: 25px;
      .input{
        display: flex;
        flex-direction: column;
        label{
          font-weight: 400;
          font-size: 12px;
          line-height: 14px;
          color: #333333;
        }
        input{
          margin-top: 10px;
          min-height: 33px;
          padding-left: 10px;
          padding-right: 10px;
          background-color: #F3F3F3;
          border-radius: 5px;
          outline:none;
          border: none;
          &::placeholder{
            font-weight: 400;
            font-size: 13px;
            line-height: 16px;
            color: rgba(51, 51, 51, 0.31);
          }
        }
      }
    }
    .treatment{
      padding-top: 25px;
      display: flex;
      gap: 12px;
      .checkbox input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }
      .checkbox {
        display: block;
        position: relative;
        cursor: pointer;
        font-size: 20px;
        user-select: none;
      }
      .checkmark {
        position: relative;
        top: 0;
        left: 0;
        height: 13px;
        width: 13px;
        background-color: transparent;
        transition: all 0.3s;
        border-radius: 2.70235px;
        border: 1px solid #333333;
      }
      .checkbox input:checked ~ .checkmark {
        background-color: #2CC37C;
        border: 1px solid transparent;
        animation: pop 0.5s;
        animation-direction: alternate;
      }
      .checkmark:after {
        content: "";
        position: absolute;
        display: none;
      }
      .checkbox input:checked ~ .checkmark:after {
        display: block;
      }
      .checkbox .checkmark:after {
        left: 0;
        right: 0;
        margin: auto;
        top: 1px;
        border: 0;
        width:3px;
        height: 5px;
        border: solid white;
        border-width: 0 2.5px 2.5px 0;
        transform: rotate(45deg);
      }
      @keyframes pop {
        0% {
          transform: scale(1);
        }

        50% {
          transform: scale(0.9);
        }

        100% {
          transform: scale(1);
        }
      }
      p{
        max-width: 61.6vw;
        font-weight: 400;
        font-size: 12px;
        line-height: 137%;
        color: rgba(51, 51, 51, 0.5);
      }
    }
    button{
      margin-top: 25px;
      width: 100%;
    }
</style>
