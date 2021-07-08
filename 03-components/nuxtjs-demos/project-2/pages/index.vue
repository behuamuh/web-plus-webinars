<template>
  <div class="index">
    <button class="index__button" @click="showPopup">Показать аккордионы</button>
    <Overlay :shown="overlayShown" @overlayClick="hidePopup"/>
    <PopUp :opened="popupOpened">
      Popup content
    </PopUp>
  </div>
</template>

<script>
export default {
  data() {
    return {
      overlayShown: false,
      popupOpened: false
    }
  },
  methods: {
    showPopup() {
      this.overlayShown = true;
      this.popupOpened = true;
    },
    hidePopup() {
      this.overlayShown = false;
      this.popupOpened = false;
    }
  }
}
</script>

<style>
  .index {
    width: 80%;
    margin: 40px auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .index__button {
    border: 1px solid black;
    padding: 40px;
    cursor: pointer;
    background-color: transparent;
    font-size: 24px;
  }

  .index__button:hover {
    background-color: black;
    color: white;
  }
</style>
