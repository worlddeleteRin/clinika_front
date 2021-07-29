<template>
 <div>
	Main page is here
 </div>
</template>

<script>

export default {
  name: 'MainPage',
  props: {
  },
  components: {
  },
  async mounted () {
	console.log('it is mounted')
  },
  data () {
	return {
	}
  },
  computed: {
	theme_var () {
		return this.$store.state.theme.theme;
	},
  },
  methods: {
	
  },
}
</script>

