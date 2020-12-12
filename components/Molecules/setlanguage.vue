<template>
  <div class="links">
    <div class="modal_wrap">
      <input id="trigger" type="checkbox" />
      <div class="modal_overlay">
        <label for="trigger" class="modal_trigger"></label>
        <div class="modal_content">
          <label for="trigger" class="close_button">✖️</label>
          <p>
            <label>{{ $t("common.current") }} : </label>
            <label v-if="$i18n.locale === 'ja'">{{ $t("common.ja") }}</label>
            <label v-if="$i18n.locale === 'en'">{{ $t("common.en") }}</label>
          </p>
          <n-link v-if="$i18n.locale === 'ja'" :to="`/en` + $route.fullPath">
            {{ $t("base.en") }}
          </n-link>
          <n-link v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')">
            {{ $t("base.ja") }}
          </n-link>
        </div>
      </div>
    </div>
    <label for="trigger" class="open_button">{{ $t("common.language") }}</label>
  </div>
</template>

<style lang="scss" scoped>
.modal_wrap input {
  display: none;
}

.modal_overlay {
  display: flex;
  justify-content: center;
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 0.5s, transform 0s 0.5s;
  transform: scale(0);
}

.modal_trigger {
  position: absolute;
  width: 100%;
  height: 100%;
}

.modal_content {
  align-self: flex-start;
  position: absolute;
  top: 16px;
  right: 16px;
  width: 300px;
  padding: 30px;
  box-sizing: border-box;
  background: #fff;
  line-height: 1.4em;
  transform: translateY(-100%);
  transition: 0.5s;
}

.close_button {
  position: absolute;
  top: 14px;
  right: 16px;
  font-size: 24px;
  cursor: pointer;
}

.modal_wrap input:checked ~ .modal_overlay {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.5s;
}

.modal_wrap input:checked ~ .modal_overlay .modal_content {
  transform: translateY(20px);
}

.open_button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 30px;
  margin: auto;
  padding: 5px 20px;
  color: #444;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  border-radius: 16px;
  cursor: pointer;
  color: black;
  font-size: 1em;
  font-weight: 700;
  font-family: "Helvetica Neue", Helvetica, Arial, YuGothic, "Yu Gothic",
    游ゴシック体, "游ゴシック", "ヒラギノ角ゴ ProN W3",
    "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ Pro W3",
    "Hiragino Kaku Gothic Pro", "メイリオ", Meiryo, "MS ゴシック", "MS Gothic",
    sans-serif;
}
</style>