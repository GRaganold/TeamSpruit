import Results from "./results"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import Scoreboard from "./scoreboard"
import PreCompSchedule from "./PreSchedule"
import GraphicCard from "./graphic"

function App() {
	return (
		<>
			{/* <Scoreboard />
			 */}
			<Tabs isFitted variant="enclosed">
				<TabList>
					<Tab _selected={{ color: 'white', bg: 'blue.500' }}>Pre Competition Schedule</Tab>
					<Tab  _selected={{ color: 'white', bg: 'blue.500' }}>Game & Results</Tab>
					<Tab  _selected={{ color: 'white', bg: 'blue.500' }}>BoxScore Results</Tab>	
					<Tab  _selected={{ color: 'white', bg: 'blue.500' }}>Game Graphic Card</Tab>					
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
					<TabPanel>
						<GraphicCard />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</>
	)
}

export default App
