export const requiredField = value =>{
	if(!!value) return undefined
	return "Field is required";	
}

export const moreThen3Symbols = value =>{
	if(value.length > 3) return undefined
		return "Should be more than 3 symbols"
}


