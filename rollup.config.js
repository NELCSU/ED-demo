import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";

export default [
	{
		input: "src/index.ts",
		onwarn(warning, rollupWarn) {
			if (warning.code !== "CIRCULAR_DEPENDENCY") {
				rollupWarn(warning);
			}
		},
	  output: [
			{
				file: "docs/js/app.js",
				format: "iife",
				name: "App",
			}
	  ],
	  plugins: [
			resolve(),
			commonjs(),
			typescript()	
		]
	}
];