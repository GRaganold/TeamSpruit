import Results from "./results"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import Scoreboard from "./scoreboard"

function App() {
	return (
		<>
			{/* <Scoreboard />
			 */}
			<Tabs isFitted variant="enclosed">
				<TabList>
					<Tab>Game & Results</Tab>
					<Tab>BoxScore Results</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<Results />
					</TabPanel>
					<TabPanel>
						<Scoreboard />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</>
	)
}

export default App
