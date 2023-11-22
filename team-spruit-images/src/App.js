import Results from "./results"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import Scoreboard from "./scoreboard"
import PreCompSchedule from "./PreSchedule"

function App() {
	return (
		<>
			{/* <Scoreboard />
			 */}
			<Tabs isFitted variant="enclosed">
				<TabList>
					<Tab>Pre Competition Schedule</Tab>
					<Tab>Game & Results</Tab>
					<Tab>BoxScore Results</Tab>					
				</TabList>
				<TabPanels>
					<TabPanel>
						<PreCompSchedule />
					</TabPanel>
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
