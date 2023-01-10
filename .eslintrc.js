module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		jest: true,
	},
	extends: [
		"react-app",
		"react-app/jest",
		"eslint:recommended",
		"plugin:react/recommended",
		"prettier",
		"plugin:prettier/recommended",
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
		"prettier/prettier": "warn",
		"no-param-reassign": 0,
		"arrow-parens": 0,
		"max-len": [
			"error",
			{
				code: 120,
			},
		],
		"comma-dangle": 0,
		"object-curly-newline": 0,
		"no-unused-vars": "warn",
		"react-hooks/exhaustive-deps": ["warn"],
		"react/jsx-props-no-spreading": [1, { custom: "ignore" }],
		"react/react-in-jsx-scope": 0,
	},
};
