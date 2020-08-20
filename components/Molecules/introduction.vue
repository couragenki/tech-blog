<template>
  <div class="intoro">
    <div class="intoro__icon">
      <img class="intoro__icon__img" src="/common/profile-icon.png" />
    </div>
    <div class="intoro__sectiontext">---ひとこと---</div>
    <p class="intoro__sentence">
      ニワトリです。
      <br />名前はまだない。
    </p>
    <div class="intoro__sectiontext">---SNS---</div>
    <div class="intoro__sns">
      <ul class="intoro__sns__list">
        <li class="intoro__sns__list__icon">
          <img src="/common/twitter.svg" />
        </li>
        <li class="intoro__sns__list__icon">
          <img src="/common/github.svg" />
        </li>
        <li class="intoro__sns__list__icon">
          <img src="/common/qiita.png" />
        </li>
        <li class="intoro__sns__list__icon">
          <img src="/common/instagram.svg" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Introduction",
};
</script>
<style scoped lang="scss">
.intoro {
  margin-bottom: 32px;
  &__title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  &__sectiontext {
    font-size: 20px;
    text-align: center;
    font-weight: 700;
    margin-bottom: 16px;
  }
  &__sentence {
    text-align: center;
  }
  &__icon {
    text-align: center;
    &__img {
      width: 50%;
      border-radius: 50%;
      background-position: center;
    }
  }
  &__sns {
    &__list {
      padding: 0;
      display: flex;
      list-style: none;
      &__icon {
        width: 19%;
        margin-left: 3%;
        margin-right: 3%;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
