import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

import { ChakraProvider, ColorModeScript, extendTheme, withDefaultColorScheme } from "@chakra-ui/react"

const theme = extendTheme(withDefaultColorScheme({ colorScheme: "blue" }), {
	styles: {
		global: {
			p: {
				fontFamily: "Sans-Serif",
			},

			colors: {
				orange: "#fd8050",
				white: "#fdfdfe",
				black: "#000000",
				green: "00aa86",
			},
		},
	},
})

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<ColorModeScript initialColorMode="light" />
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</React.StrictMode>
)
// orange: "#fd8050",
// white: "#fdfdfe",
// black: "#000000",
// green: "00aa86"
// import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
