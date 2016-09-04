// reducer 生成器, cr 是 create reducer 的简写
export function cr(initialState, handlers){
	return function reducer(state = initialState, action){
		if (handlers.hasOwnProperty(action.type)){
			return handlers[action.type](state, action)
		}else{
			return state;
		}
	}
}

// action creator 的生成器, cac 是 create action creator 的简写
export function cac(type, ...argNames){
	return function(...args){
		let action = { type }
		argNames.forEach((arg, index)=>{
			action[argNames[index] = args[index]]
		})
		return action
	}
}
