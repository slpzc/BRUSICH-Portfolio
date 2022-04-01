export default {
  mounted() {
    this.setInnerWidth();
    window.addEventListener('resize', this.setInnerWidth);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.setInnerWidth);
  },

  data() {
    return {
      innerWidth: 0,
      mobileWidth: 429,
    };
  },

  methods: {
    setInnerWidth() {
      this.innerWidth = screen.width;
    },
  },

  computed: {
    isMobile() {
      return this.innerWidth <= this.mobileWidth;
    },
  },
};
