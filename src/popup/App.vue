<template>
<div>
  <div class="card text-center">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs">
          <li class="nav-item">
            <a class="nav-link active" href="#">Active</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <h5 class="card-title">WIN-BCR</h5>
        <a href="#"  @click="getGame"  class="btn btn-primary">Get Game</a>
        <br>
        <div  v-html="message.road"></div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Welcome!'
    }
  },
  created() {
    chrome.runtime.onMessage.addListener((message) => {
      switch (message.type) {
        case 'Roads':
          console.log('Recived sms: ' + JSON.stringify(message));
          this.message = message;
          break;
      }
    });
  },
  methods: {
    getGame () {
      chrome.tabs.query({currentWindow: true, active: true}, function( tabs ) { 
        // console.log(tabs)
        var activeTab = tabs[0]
        var obj = 'I send you data'
        chrome.tabs.sendMessage(activeTab.id, {command: 'runCommands', data: obj})
      })
    }
  }
}
</script>

<style lang="scss">
  div {
    color: blue
  }

  body{
    width: 450px;
    height: 450px
  }
</style>
