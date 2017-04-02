module.exports = {
	"extends": "airbnb",
	"parserOptions": {
		"ecmaVersion": 7,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true,
			"impliedStrict": true,
			"experimentalObjectRestSpread": true
		}
	},
	"env": {
		"browser": true,
		"jest": true
	},
	"rules": {
		"semi": [2, "never"],
		"compat/compat": 2
	},
	"plugins": [
		"compat",
		"react"
	]
}
