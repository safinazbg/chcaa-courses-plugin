<template>
  <div id="gridLayout">
    <div class="navbar uk-padding-small">
        <ul class="uk-iconnav uk-iconnav-vertical">
          <li @click="$router.push('/')">
            <a uk-icon="icon: home"></a>
          </li>
          <li @click="$router.push('/courses')"><a uk-icon="icon: file-edit"></a></li>
          <li @click="$router.push('/modules')"><a uk-icon="icon: user"></a></li>
          <li><a uk-icon="icon: settings"></a></li>
        </ul>
      </div>
      <div id="body" class="uk-padding">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
#gridLayout {
  height: 100vh;
  display: grid;
  grid-template-columns: 50px 1fr;
}
.navbar {
  display: flex;
  justify-content: center;
  background-color: #eeeeee;
}

#nav svg {
    color: black;
  }
</style>
