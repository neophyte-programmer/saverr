export const fetchUser = () => {
    let userInfo = null
	if (typeof window !== 'undefined') {
		 userInfo =
			localStorage.getItem('user') !== 'undefined'
				? JSON.parse(localStorage.getItem('user'))
				: localStorage.clear()
	}

	return userInfo
}