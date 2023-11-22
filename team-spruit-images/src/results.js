import React, { useState, useRef } from "react"
import { Box, Button, Center, Circle, Flex, HStack, Heading, Image, Input, Select, Stack, Text, VStack } from "@chakra-ui/react"
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
		isFinal: "false",
		OurScore: "",
		OpponentScore: "",
		Opponent: "",
		Date: "",
		UpNextDate: "",
		UpNextOpponent: "",
		ImageTitle: "noTitle",
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
	const charcoal = "#303030"
	const yellow = "#ffd71f"

	const styleThemes = {
		blueGrey: {
			backgroundColor: blueGrey,
			color: white,
			textShadow: `1px 1px ${charcoal}`,
			finalColor: orange,
			finalColorShadow: `3px 3px ${blue}`,
			gameTypeColor: yellow,
			teamNameBannerBG: orange,
			teamNameBannerColor: white,
			teamNameBannerShadow: `2px 2px ${charcoal}`,
			scoreColor: white,
			scoreColorShadow: `2px 2px ${charcoal}`,
		},
		blue: {
			backgroundColor: blue,
			color: white,
			textShadow: `1px 1px ${charcoal}`,
			finalColor: yellow,
			finalColorShadow: `3px 3px ${orange}`,
			gameTypeColor: orange,
			teamNameBannerBG: white,
			teamNameBannerColor: orange,
			teamNameBannerShadow: `1px px ${charcoal}`,
			scoreColor: white,
			scoreColorShadow: `2px 2px ${charcoal}`,
		},
		charcoal: {
			backgroundColor: charcoal,
			color: "white",
			textShadow: `1px 1px ${blue}`,
			finalColor: green,
			finalColorShadow: `3px 3px ${orange}`,
			gameTypeColor: yellow,
			teamNameBannerBG: orange,
			teamNameBannerColor: white,
			teamNameBannerShadow: `2px 2px ${charcoal}`,
			scoreColor: white,
			scoreColorShadow: `2px 2px ${charcoal}`,
		},
		green: {
			backgroundColor: green,
			color: white,
			textShadow: `2px 2px ${charcoal}`,
			finalColor: yellow,
			finalColorShadow: `3px 3px ${charcoal}`,
			gameTypeColor: yellow,
			teamNameBannerBG: orange,
			teamNameBannerColor: white,
			teamNameBannerShadow: `2px 2px ${charcoal}`,
			scoreColor: white,
			scoreColorShadow: `2px 2px ${charcoal}`,
		},
		greenGrey: {
			backgroundColor: greenGrey,
			color: white,
			textShadow: `2px 2px ${green}`,
			finalColor: yellow,
			finalColorShadow: `3px 3px ${charcoal}`,
			gameTypeColor: "#00aa86",
			teamNameBannerBG: green,
			teamNameBannerColor: white,
			teamNameBannerShadow: `2px 2px ${charcoal}`,
			scoreColor: white,
			scoreColorShadow: `2px 2px ${charcoal}`,
		},
		lightgrey: {
			backgroundColor: lightgray,
			color: white,
			textShadow: `2px 2px ${green}`,
			finalColor: green,
			finalColorShadow: `3px 3px ${yellow}`,
			gameTypeColor: green,
			teamNameBannerBG: white,
			teamNameBannerColor: charcoal,
			teamNameBannerShadow: `0px 0px ${orange}`,
			scoreColor: charcoal,
			scoreColorShadow: `0px 0px ${orange}`,
		},
		orange: {
			backgroundColor: orange,
			color: white,
			textShadow: `2px 2px ${charcoal}`,
			finalColor: green,
			finalColorShadow: `3px 3px ${charcoal}`,
			gameTypeColor: green,
			teamNameBannerBG: green,
			teamNameBannerColor: white,
			teamNameBannerShadow: `2px 2px ${charcoal}`,
			scoreColor: white,
			scoreColorShadow: `2px 2px ${charcoal}`,
		},

		white: {
			backgroundColor: white,
			color: green,
			textShadow: `2px 2px ${charcoal}`,
			finalColor: orange,
            finalColorShadow: `3px 3px ${charcoal}`,
			gameTypeColor: charcoal,
			teamNameBannerBG: charcoal,
			teamNameBannerColor: white,
			teamNameBannerShadow: `2px 2px ${charcoal}`,
			scoreColor: green,
			scoreColorShadow: `2px 2px ${charcoal}`,
		},

		// Add more themes as needed
	}

	const [selectedThemeChoice, setSelectedThemeChoice] = useState("green") // Corrected theme name

	const selectedTheme = selectedThemeChoice ? styleThemes[selectedThemeChoice] : {}

	const boxStyle = {
		backgroundColor: selectedTheme.backgroundColor, //  boxStyle.backgroundColor
		color: selectedTheme.color, // boxStyle.color
		textShadow: selectedTheme.textShadow, // boxStyle.textShadow
		finalColor: selectedTheme.finalColor, //      boxStyle.finalColor
		finalColorShadow: selectedTheme.finalColorShadow, //      boxStyle.finalColorShadow
		gameTypeColor: selectedTheme.gameTypeColor, //      boxStyle.gameTypeColor
		teamNameBannerBG: selectedTheme.teamNameBannerBG, //      boxStyle.teamNameBannerBG
		teamNameBannerColor: selectedTheme.teamNameBannerColor, //      boxStyle.teamNameBannerColor
		teamNameBannerShadow: selectedTheme.teamNameBannerShadow, // box.StyleteamNameBannerShadow
		scoreColor: selectedTheme.scoreColor, // boxStyle.scoreColor
		scoreColorShadow: selectedTheme.scoreColorShadow, // box.Style.scoreColorShadow
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
			<Box p={3} fontFamily="monospace">
				<Stack w="400px">
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
						<Select value={formData.isFinal} onChange={e => handleInputChange("isFinal", e.target.value)} mb={4}>
							<option value="false">No</option>
							<option value="true">Yes</option>
						</Select>
					</HStack>
					<NameInput onInputChange={handleInputChange} label="OurScore" placeholder="Enter Our Score" />
					<NameInput onInputChange={handleInputChange} label="Opponent" placeholder="Enter Opponent " />
					<NameInput onInputChange={handleInputChange} label="OpponentScore" placeholder="Enter Opponent Score" />

					<NameInput onInputChange={handleInputChange} label="UpNextDate" placeholder="Enter Next Date and time" />
					<NameInput onInputChange={handleInputChange} label="UpNextOpponent" placeholder="Enter Next Opponent" />

					<HStack>
						<Text> Theme </Text>
						<Select
							value={selectedThemeChoice}
							onChange={handleStyleThemeChange} // Fix the function name here
							mb={4}
							placeholder="Select option"
						>
							<option value="blueGrey">Blue Gray</option>
							<option value="blue">Blue</option>
							<option value="charcoal">Charcoal</option>
							<option value="green">Green</option>
							<option value="greenGrey">Green Gray</option>
							<option value="lightgrey">Light Gray</option>
							<option value="orange">Orange</option>
							<option value="white">White</option>
						</Select>
					</HStack>
				</Stack>
				<br />

				<Button m="6" colorScheme="orange" onClick={convertToJpg}>
					Convert to JPG
				</Button>

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
										<Image src={CurlingStone} h="85px" />
									</Center>
								</HStack>
							</Flex>
							<Flex alignItems="flex-end" justify={"flex-end"} textAlign={"right"} pr={3}>
								<br />
								<Box h="150px">
									<Text fontSize={"3xl"}> {formData.Date}</Text>
									<Heading fontSize={"4xl"} color={boxStyle.gameTypeColor}>
										{formData.gameType}
									</Heading>
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
											top={"-200px"}
											style={{ transform: "rotate(-10deg)" }}
											color={boxStyle.finalColor}
											textShadow={boxStyle.finalColorShadow}
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
										<Text 
                                        
                                        fontSize={"2xl"} h="100%" mt={"-10px"} color={boxStyle.teamNameBannerColor} textShadow={boxStyle.teamNameBannerShadow}>
											Spruit/Spruit
										</Text>
									</Flex>
									<Circle zIndex={5} w={"100px"} h={"100px"} bg={boxStyle.teamNameBannerBG} alignItems="center" justifyContent="center" textAlign={"top"}>
										<Text fontSize={"5xl"} fontWeight={"900"} h="110%" mt={"-5px"} color={boxStyle.teamNameBannerColor} textShadow={boxStyle.teamNameBannerShadow}>
											VS
										</Text>
									</Circle>
									<Flex w="350px" bg={boxStyle.teamNameBannerBG} zIndex={0} ml="-15px" h={"50px"} alignItems="center" justifyContent="center" textAlign={"top"}>
										<Text fontSize={"2xl"} h="100%" mt={"-10px"} color={boxStyle.teamNameBannerColor} textShadow={boxStyle.teamNameBannerShadow}>
											{formData.Opponent}
										</Text>
									</Flex>
								</HStack>

								<Flex w="100%" justify="space-around" color={boxStyle.color} mt={"-25px"}>
									
                                    {formData.OurScore > formData.OpponentScore? (<>
                                        <Text fontSize={"4xl"} 
                                        textDecor={"underline"}
                                        color={boxStyle.scoreColor} textShadow={boxStyle.scoreColorShadow} pr={16}>
										{formData.OurScore}
									</Text>

									<Text fontSize={"4xl"} color={boxStyle.scoreColor} textShadow={boxStyle.scoreColorShadow}>
										{formData.OpponentScore}
									</Text>
                                    
                                    </>) : (<><Text fontSize={"4xl"} color={boxStyle.scoreColor} textShadow={boxStyle.scoreColorShadow} pr={16}>
										{formData.OurScore}
									</Text>

									<Text fontSize={"4xl"} 
                                    textDecor={"underline"}
                                    color={boxStyle.scoreColor} textShadow={boxStyle.scoreColorShadow}>
										{formData.OpponentScore}
									</Text></>)}
                                    
								</Flex>
							</VStack>

							<br />
							<br />
							{formData.UpNextDate ? (
								<Box pl={2} spacing={0}>
									<Text fontSize={"2xl"} color={boxStyle.gameTypeColor} fontWeight={"bold"}>
										Next Game:
									</Text>
									<Text fontSize={"2xl"}>
										{formData.UpNextDate} VS {formData.UpNextOpponent}
									</Text>
								</Box>
							) : (
								<></>
							)}
						</Box>

						<Image src={sponsorBanner} h="140px" w="full" />
					</Box>
				</Box>

				<br />
				<br />
			</Box>
		</>
	)
}
