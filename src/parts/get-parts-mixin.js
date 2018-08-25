export default {
  created() {
    // this.$store.dispatch('getParts');
    this.$store.dispatch('robots/getParts');
  },
  computed: {
    parts() {
      return this.$store.state.robots.parts || {
        heads: [],
        arms: [],
        torsos: [],
        bases: [],
      };
      // return this.$store.state.parts || {
      //   heads: [],
      //   arms: [],
      //   torsos: [],
      //   bases: [],
      // };
    },
  },
};

