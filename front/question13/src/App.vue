<template> 
  <section id="app" v-on:click.ctrl="changeFontSize"> 
    <p v-for="word in words" :key="word" :style="fontSizeStyle">{{ word }}</p> 
    <button v-on:click="reverseWords">Reverse</button>
  </section> 
</template> 
 
<script> 
export default { 
  name: "App", 
  data: function() { 
    return { 
      words: ["Level", "Kayak", "Madam"],
      isFontSizeBig: false,
    };
  },
  methods: {
    reverseWords: function(event) {
        event.preventDefault();
        event.stopImmediatePropagation();

        this.words = this.words.map((word) => word.split("").reverse().join(""));
    },
    changeFontSize: function(event) {
        this.isFontSizeBig = !this.isFontSizeBig;
    },
  },
  computed: {
      fontSizeStyle() {
          if (this.isFontSizeBig) {
              return {
                  fontSize: '32px'
              }
          };

          return {
              fontSize: '16px'
          };
      },
  },
}; 
</script> 
 
<style> 
#app { 
  display: flex; 
  flex-direction: row; 
  align-items: center; 
  justify-content: space-evenly; 
  width: 100%;
}

</style>