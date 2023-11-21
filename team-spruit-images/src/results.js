import React, { useState, useRef } from "react"
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	Center,
	Circle,
	Flex,
	HStack,
	Heading,
	Image,
	Input,
	Select,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react"
import sponsorBanner from "./SponsorBanner2.jpg"
import CurlingStone from "./CurlingStone.png"
import html2canvas from "html2canvas"

function NameInput({ onInputChange, label, placeholder }) {
	const [value, setValue] = useState("")

	const handleChange = event => {
		const newValue = event.target.value
		setValue(newValue)
		onInputChange(label, newValue) // Call the callback function with the new value and label
	}

	return (
		<>
			<HStack>
				<Text mb="8px">{label}:</Text>
				<Input value={value} onChange={handleChange} placeholder={placeholder} size="sm" w="400px" />
			</HStack>
		</>
	)
}

export default function Results() {
	const [formData, setFormData] = useState({
		SpielName: "",
		gameType: "",
		Time: "",
		isFinal: false,
		OurScore: "",
		OpponentScore: "",
		Opponent: "",
		Date: "",
		UpNextDate: "",
		UpNextOpponent: "",
		ImageTitle: "",
	})

	const handleInputChange = (label, newValue) => {
		setFormData(prevFormData => ({
			...prevFormData,
			[label]: newValue,
		}))
	}
	const lightgray = "lightgray"
	const orange = "#fd8050"
	const white = "#fdfdfe"
	const green = "#00aa86"
	const greenGrey = "#bee1d3"
	const blueGrey = "#388389"
	const blue = "#1ab7ce"

	const styleThemes = {
		lightgrey: {
			backgroundColor: lightgray,
			color: "white",
			colorShadow: "2px 2px teal",
			finalColor: "#00aa86",
			finalColorShadow: "#000000",
			teamNameBannerBG: "#000",
			teamNameBannerColor: "#fd8050",
		},
		green: {
			backgroundColor: "#00aa86",
			color: "white",
			colorShadow: "2px 2px teal",
			finalColor: "#00aa86",
			finalColorShadow: "#000000",
			teamNameBannerBG: "#000",
			teamNameBannerColor: "#fd8050",
		},

		white: {
			backgroundColor: "#fdfdfe",
			color: "black",
			colorShadow: "2px 2px teal",
			finalColor: "#00aa86",
			teamNameBannerBG: "#000",
			teamNameBannerColor: "#fd8050",
		},
		black: {
			backgroundColor: "#000000",
			color: "white",
			textShadow: "2px 2px teal",
			finalColor: "#00aa86",
			finalColorShadow: "#000000",
			teamNameBannerBG: "#000",
			teamNameBannerColor: "#fd8050",
		},
		orange: {
			backgroundColor: orange,
			color: "white",
			textShadow: "2px 2px black",
			finalColor: "#00aa86",
			finalColorShadow: "#000000",
			teamNameBannerBG: "#000",
			teamNameBannerColor: "#fd8050",
		},
		// Add more themes as needed
	}

	const [selectedThemeChoice, setSelectedThemeChoice] = useState("lightgrey") // Corrected theme name

	const selectedTheme = selectedThemeChoice ? styleThemes[selectedThemeChoice] : {}

	const boxStyle = {
		backgroundColor: selectedTheme.backgroundColor,
		color: selectedTheme.color,
		textShadow: selectedTheme.textShadow,
		finalColor: selectedTheme.finalColor,
		finalColorShadow: selectedTheme.finalColorShadow,
		teamNameBannerBG: selectedTheme.teamNameBannerBG,
		teamNameBannerColor: selectedTheme.teamNameBannerColor,
	}

	const handleStyleThemeChange = event => {
		setSelectedThemeChoice(event.target.value)
	}

	const divRef = useRef(null)
	const convertToJpg = () => {
		// Use html2canvas to capture the content of the div with scaling
		html2canvas(divRef.current).then(canvas => {
			// Convert the canvas to a data URL representing a JPEG image
			const dataUrl = canvas.toDataURL("image/jpeg")

			// Create a link element and trigger a download of the image
			const link = document.createElement("a")
			link.href = dataUrl
			link.download = `${formData.ImageTitle}.jpg`
			link.click()
		})
	}

	return (
		<>
			<Box p={3}>
				<Stack w="400px">
					<HStack>
						<Text> Theme </Text>
						<Select
							value={selectedThemeChoice}
							onChange={handleStyleThemeChange} // Fix the function name here
							mb={4}
							placeholder="Select option"
						>
							<option value="lightgrey">Light Gray</option>
							<option value="orange">Orange</option>
							<option value="white">White</option>
							<option value="black">Black</option>
							<option value="green">Green</option>
						</Select>
					</HStack>
					<NameInput onInputChange={handleInputChange} label="ImageTitle" placeholder="Enter Image Title" />

					<NameInput onInputChange={handleInputChange} label="SpielName" placeholder="Enter Spiel Name" />
					<NameInput onInputChange={handleInputChange} label="Date" placeholder="Friday, October 20" />
					<HStack>
						<Text> Game Type </Text>
						<Select value={formData.gameType} onChange={e => handleInputChange("gameType", e.target.value)} placeholder="Enter Game Type">
							<option value="Round Robin">Round Robin</option>
							<option value="Quarter Finals">Quarter Finals</option>
							<option value="Semi Finals">Semi Finals</option>
							<option value="Finals">Finals</option>
						</Select>
					</HStack>
					<NameInput onInputChange={handleInputChange} label="Time" placeholder="Enter Time" />
					<HStack>
						<Text> Is this a Final Score? </Text>
						<Select value={formData.isFinal} onChange={e => handleInputChange("isFinal", e.target.value)} mb={4} placeholder="Select option">
							<option value="false">No</option>
							<option value="true">Yes</option>
						</Select>
					</HStack>
					<NameInput onInputChange={handleInputChange} label="OurScore" placeholder="Enter Our Score" />
					<NameInput onInputChange={handleInputChange} label="Opponent" placeholder="Enter Opponent " />
					<NameInput onInputChange={handleInputChange} label="OpponentScore" placeholder="Enter Opponent Score" />

					<NameInput onInputChange={handleInputChange} label="UpNextDate" placeholder="Enter Next Date and time" />
					<NameInput onInputChange={handleInputChange} label="UpNext" placeholder="Enter Next Opponent" />
				</Stack>
				<br />
				<Button m="6" colorScheme="orange" onClick={convertToJpg}>
					Convert to JPG
				</Button>

				<Accordion allowToggle w="auto">
					<AccordionItem>
						<h2>
							<AccordionButton>
								<Box as="span" flex="1" textAlign="left">
									Preview
								</Box>
								<AccordionIcon />
							</AccordionButton>
						</h2>
						<AccordionPanel pb={4}>
							<Text>Note this preview is not 100% accurate and will center the text on conversion</Text>

							<Box>
								<Box
									ref={divRef}
									style={{
										height: "700px",
										width: "700px",
										border: "1px solid #000",
									}}
									bg={boxStyle.backgroundColor}
									color={boxStyle.color}
								>
									<Box h="558px" pt={1}>
										<Flex justify="flex-end" w="100%" pb={6} pr={2}>
											<HStack pb={5}>
												<Center>
													<Heading color={boxStyle.color} fontWeight="bold" textShadow={boxStyle.textShadow} fontSize="4xl" mt={3} pr={3}>
														{formData.SpielName}
													</Heading>
													<Image src={CurlingStone} h="65px" />
												</Center>
											</HStack>
										</Flex>
										<Flex alignItems="flex-end" justify={"flex-end"} textAlign={"right"} pr={3}>
											<br />
											<Box h="150px">
												<Text fontSize={"3xl"}> {formData.Date}</Text>
												<Heading fontSize={"4xl"}> {formData.gameType}</Heading>
												<Text fontSize={"2xl"}> {formData.Time}</Text>
											</Box>
										</Flex>

										{formData.isFinal === "true" ? (
											<>
												<Box>
													<Heading
														h="5px"
														alignContent={"left"}
														justifyContent={"left"}
														textAlign={"left"}
														fontSize={"6xl"}
														position={"relative"}
														Color="black"
														pl={9}
														top={"-175px"}
														style={{ transform: "rotate(-10deg)" }}
													>
														Final <br />
														Score
													</Heading>
												</Box>
											</>
										) : (
											<>
												<Box>
													<Heading
														h="5px"
														alignContent={"left"}
														justifyContent={"left"}
														textAlign={"left"}
														fontSize={"6xl"}
														position={"relative"}
														Color="black"
														pl={9}
														style={{ transform: "rotate(-10deg)" }}
													></Heading>
												</Box>
											</>
										)}
										<VStack spacing={0}>
											<HStack spacing={0} textAlign={"center"} w="100%">
												<Flex w="350px" bg={boxStyle.teamNameBannerBG} zIndex={1} mr="-25px" h={"50px"} alignItems="center" justifyContent="center" textAlign={"top"}>
													<Text fontSize={"2xl"} h="100%">
														Spruit/Spruit
													</Text>
												</Flex>
												<Circle zIndex={5} w={"100px"} h={"100px"} bg={boxStyle.teamNameBannerBG} alignItems="center" justifyContent="center" textAlign={"top"}>
													<Text fontSize={"5xl"} fontWeight={"bold"} h="110%">
														VS
													</Text>
												</Circle>
												<Flex w="350px" bg={boxStyle.teamNameBannerBG} zIndex={1} ml="-15px" h={"50px"} alignItems="center" justifyContent="center" textAlign={"top"}>
													<Text fontSize={"2xl"} h="100%">
														{formData.Opponent}
													</Text>
												</Flex>
											</HStack>

											<Flex w="100%" justify="space-evenly" color={boxStyle.color}>
												<Box fontSize={"3xl"}>{formData.OurScore} </Box>
												<Box></Box>
												<Box fontSize={"3xl"}>{formData.OpponentScore}</Box>
											</Flex>
										</VStack>

										{formData.UpNext ? (
											<>
												<Text> Next Game: {formData.UpNextDate} </Text>
												<Text> {formData.UpNextOpponent} </Text>
											</>
										) : (
											<></>
										)}
									</Box>

									<Image src={sponsorBanner} h="140px" w="full" />
								</Box>
							</Box>
						</AccordionPanel>
					</AccordionItem>
				</Accordion>
				<br />
				<br />
			</Box>
		</>
	)
}
