<template>
  <div class="test">
    <div class="test__column test__text">
      <h2>Text</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore commodi error eaque recusandae qui voluptas sed cupiditate aperiam quidem libero reprehenderit consequatur exercitationem nulla repudiandae odio ad, ab perferendis illo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore commodi error eaque recusandae qui voluptas sed cupiditate aperiam quidem libero reprehenderit consequatur exercitationem nulla repudiandae odio ad, ab perferendis illo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore commodi error eaque recusandae qui voluptas sed cupiditate aperiam quidem libero reprehenderit consequatur exercitationem nulla repudiandae odio ad, ab perferendis illo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore commodi error eaque recusandae qui voluptas sed cupiditate aperiam quidem libero reprehenderit consequatur exercitationem nulla repudiandae odio ad, ab perferendis illo.</p>
    </div>
    <div class="test__column test__faq">
      <h2>FAQ</h2>
      
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .test {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 40px auto;
  }

  .test__column {
    width: calc(50% - 20px);
  }
</style>
