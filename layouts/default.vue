<template>
  <Nuxt />
</template>

<script>
export default {
  async created() {
    console.log('************FROM LAYOUT*********')
    try {
      const token = localStorage.getItem('userId')
      const accessToken = localStorage.getItem('accessToken')
      if (token && accessToken) {
        const userRes = await this.$axios.$get('/users/get/' + token, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        this.$store.dispatch('setStudentData', userRes)
      }
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style></style>
