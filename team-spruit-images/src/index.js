import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

import { ChakraProvider, extendTheme, withDefaultColorScheme } from "@chakra-ui/react"

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
	<ChakraProvider theme={theme}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</ChakraProvider>
)
// orange: "#fd8050",
// white: "#fdfdfe",
// black: "#000000",
// green: "00aa86"
