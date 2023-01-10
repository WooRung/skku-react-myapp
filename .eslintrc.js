module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		jest: true,
	},
	extends: [
		"plugin:react/recommended",

		"airbnb",
		"react-app/jest",
		"plugin:prettier/recommended",
		"prettier",
		// "ddfdfds",
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
	},
	plugins: ["react", "prettier"],
	rules: {
		"react/jsx-filename-extension": [1, { extensions: ["js", "jsx"] }],
		"no-param-reassign": 0,
		"arrow-parens": 0,
		"react/prop-types": 0,
		"comma-dangle": 0,
		"object-curly-newline": 0,
		"no-unused-vars": "warn",
		"react/jsx-props-no-spreading": [1, { custom: "ignore" }],
		"react/react-in-jsx-scope": 0,
		"import/prefer-default-export": 0,
		"react-hooks/exhaustive-deps": 0,
		"react/destructuring-assignment": 0,
		"react/no-access-state-in-setstate": 0,
		"jsx-a11y/no-static-element-interactions": 0,
		"jsx-a11y/click-events-have-key-events": 0,
	},
};
