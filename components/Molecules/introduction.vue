<template>
  <div class="intoro">
    <div class="intoro__title">Profile</div>
    <div class="intoro__icon">
      <img class="intoro__icon__img" alt="プロフィール画像" width="512" src="/common/profile-icon.jpg" />
    </div>
    <!-- <div class="intoro__sectiontext">---ひとこと---</div>
    <p class="intoro__sentence">
      長崎出身の25歳です。
      <br />負けん気だけで生きてきました。
    </p>-->
    <div class="intoro__sectiontext">---SNS---</div>
    <div class="intoro__sns">
      <ul class="intoro__sns__list">
        <li class="intoro__sns__list__icon">
          <a href="https://twitter.com/couragenki" target="_blank">
            <img alt="twitterアイコン" src="/common/twitter.svg" />
          </a>
        </li>
        <li class="intoro__sns__list__icon">
          <a href="https://github.com/GenkiMatsubara" target="_blank">
            <img alt="Githubアイコン" src="/common/github.svg" />
          </a>
        </li>
        <li class="intoro__sns__list__icon">
          <a href="https://qiita.com/GenkiMatsubara" target="_blank">
            <img alt="Qiitaアイコン" src="/common/qiita.png" />
          </a>
        </li>
        <li class="intoro__sns__list__icon">
          <a href="https://www.instagram.com/genki.matsubara/" target="_blank">
            <img alt="instagramアイコン" src="/common/instagram.svg" />
          </a>
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
    font-size: 20px;
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
