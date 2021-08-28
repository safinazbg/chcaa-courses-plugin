<template>
  <div class="courseResources uk-card uk-card-default">
    <div class="uk-text-center title">Course Resources</div>
    <LTwoColumns>
      <template v-slot:items>

        <div class="frame"></div>

        <div class="padding-h content">
          <div class="uk-card uk-card-small uk-card-body">

            <p>
              <strong>Readings</strong>
            </p>
            <ul class="uk-list uk-list-divider">
              <li>Lorem ipsum dolor.</li>
              <li>Lorem ipsum dolor.</li>
              <li>Lorem ipsum dolor.</li>
              <li>Lorem ipsum dolor.</li>
            </ul>

            <p>
              <strong>Software Installations</strong>
            </p>
            <ol>
              <li>Lorem ipsum dolor.</li>
              <li>Lorem ipsum dolor.</li>
              <li>Lorem ipsum dolor.</li>
            </ol>

            <p>Links</p>
            <iframe width="100%" height="200" src="https://player.vimeo.com/video/542613535" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>


      </template>
    </LTwoColumns>
    </div>
</template>

<script>
import LTwoColumns from "../layoutComponents/LTwoColumns";

export default {
  name: "CourseResources",
  components: {
    LTwoColumns,
  }

}
</script>

<style scoped>
  .title {
    font-size: 130%;
    background-color: #003D73;
    color: white;
  }
  .courseResources {
    background-color: white;
  }
  .frame {
    background-image: url('../../assets/terminal.jpg');
    background-size: cover;
    overflow: hidden;
    height: 100%;
  }
  .uk-card {
    overflow: hidden;
  }
</style>
