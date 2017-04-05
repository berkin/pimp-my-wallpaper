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
		"no-tabs": 0,
		"indent": ["error", "tab"],
		"semi": [2, "never"],
		"no-unexpected-multiline": 2,
		"compat/compat": 2
	},
	"plugins": [
		"compat",
		"react"
	]
}
