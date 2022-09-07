const company = {
  state: {
    companyId: localStorage.getItem('companyId') || '',
    companyName: localStorage.getItem('companyName') || '',
  },
  mutations: {
    // setCompanyId(state) {
    //   if (localStorage.getItem('companyId')) {
    //     state.companyId = localStorage.getItem('companyId')
    //   }
    // },
    // setCompanyName(state, companyName) {
    //   state.companyName = companyName
    // },
  },
  actions: {
    // setCompanyId({ commit }, companyId) {
    //     commit('setCompanyId', companyId)
    // },
    // setCompanyName({ commit }, companyName) {
    //     commit('setCompanyName', companyName)
    // }
  },
}
export default company
