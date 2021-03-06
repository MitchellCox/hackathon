const auth = (state = { isAuthenticated: false }, action) => {
  switch (action.type) {
    case 'USER_LOGGED_IN':
      return {
        isAuthenticated: true,
        id: action.id,
        token: action.token
      }
    case 'USER_LOGGED_OUT':
      return {
        isAuthenticated: false,
        status: (action.status || 'logged out')
      }
    default: 
      return state
  }
}

export default auth
