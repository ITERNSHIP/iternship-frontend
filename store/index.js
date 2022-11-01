export const state = () => ({
  studentData: {},
})

export const mutations = {
  SET_STUDENT_DATA(state, payload) {
    console.log(payload);
    state.studentData = payload
  },
}

export const actions = {
    setStudentData({commit}, payload) {
      console.log(payload);
        commit('SET_STUDENT_DATA', payload)
    }
}
