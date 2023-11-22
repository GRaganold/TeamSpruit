import React, { useState, useRef } from "react"
import { Box, Button, Center, Flex, HStack, Heading, Image, Input, Select, Stack, Text, VStack } from "@chakra-ui/react"
import sponsorBanner from "./SponsorBanner2.jpg"
import CurlingStone from "./CurlingStone.png"
import html2canvas from "html2canvas"
import { styleThemes } from "./StyleThemes"

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
		OurScore: "",
		OpponentScore: "",
		Opponent: "",
		Date: "",
		UpNextDate: "",
		UpNextOpponent: "",
		ImageTitle: "noTitle",
		us1: "",
		us2: "",
		us3: "",
		us4: "",
		us5: "",
		us6: "",
		us7: "",
		us8: "",
		usEE: "",
		them1: "",
		them2: "",
		them3: "",
		them4: "",
		them5: "",
		them6: "",
		them7: "",
		them8: "",
		themEE: "",
	})

	const handleInputChange = (label, newValue) => {
		setFormData(prevFormData => ({
			...prevFormData,
			[label]: newValue,
		}))
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

	const renderInputs4 = () => {
		const inputPairs = []
		for (let i = 1; i <= 8; i++) {
			inputPairs.push(
				<HStack spacing={6} key={i}>
					<Input type="text" w="75px" value={formData[`us${i}`]} onChange={e => handleInputChange(`us${i}`, e.target.value)} />
					<Text mb="8px">{i}</Text>
					<Input type="text" w="75px" value={formData[`them${i}`]} onChange={e => handleInputChange(`them${i}`, e.target.value)} />
				</HStack>
			)
		}
		return inputPairs
	}

	function BoxScoreResult() {
		const renderInputs = () => {
			const inputPairs = []
			for (let i = 1; i <= 8; i++) {
				inputPairs.push(
					<VStack key={i} spacing={1} textShadow={"2px 2px black"}>
						<Text mb="8px" fontSize={"2xl"}>
							{formData[`us${i}`] || "X"}
						</Text>
						<Text fontSize={"xl"}>{i}</Text>
						<Text mb="8px" fontSize={"2xl"}>
							{formData[`them${i}`] || "X"}
						</Text>
					</VStack>
				)
			}
			return inputPairs
		}

		return (
			<>
				<HStack>
					<VStack key={9} spacing={1} textShadow={"2px 2px black"}>
						<Text mb="8px" pr={8} fontSize={"2xl"}>
							Spruit/Spruit
						</Text>
						<Text mb="32px" pr={8}></Text>						
						<Text mb="8px" pr={8} fontSize={"2xl"}>
							{formData.Opponent}
						</Text>{" "}
					</VStack>
					{renderInputs()}
					{formData.usEE && formData.themEE ? (
						<>
							<VStack key={9} spacing={1} textShadow={"2px 2px black"}>
								<Text mb="8px" fontSize={"2xl"}>
									{formData.usEE}
								</Text>
								<Text>EE </Text>
								<Text mb="8px" fontSize={"2xl"}>
									{formData.themEE}
								</Text>
							</VStack>
						</>
					) : (
						<></>
					)}
					<VStack key={9} spacing={1} textShadow={"2px 2px black"} mt={"-10px"}>
						{parseInt(formData.OurScore) > parseInt(formData.OpponentScore) ? (
							<>
								<Text fontSize={"4xl"} textDecor={"underline"} color={boxStyle.scoreColor} pl={8} textShadow={boxStyle.scoreColorShadow} pr={16}>
									{formData.OurScore}
								</Text>
								<Text mb="8px" pr={8}></Text>								
								<Text fontSize={"4xl"} color={boxStyle.scoreColor} textShadow={boxStyle.scoreColorShadow}>
									{formData.OpponentScore}
								</Text>
								<Text mb="8px" pr={8} fontSize={"2xl"}></Text>
							</>
						) : (
							<>
								<Text fontSize={"4xl"} pl={8} color={boxStyle.scoreColor} textShadow={boxStyle.scoreColorShadow} pr={16}>
									{formData.OurScore}
								</Text>
								<Text mb="24px" pr={8}></Text>								
								<Text fontSize={"4xl"} textDecor={"underline"} pl={8} color={boxStyle.scoreColor} textShadow={boxStyle.scoreColorShadow}>
									{formData.OpponentScore}
								</Text>
							</>
						)}

					</VStack>
				</HStack>
			</>
		)
	}

	return (
		<>
			<Box p={3}>
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
					<NameInput onInputChange={handleInputChange} label="OurScore" placeholder="Enter Our Score" />
					<NameInput onInputChange={handleInputChange} label="Opponent" placeholder="Enter Opponent " />
					<NameInput onInputChange={handleInputChange} label="OpponentScore" placeholder="Enter Opponent Score" />

					<NameInput onInputChange={handleInputChange} label="UpNextDate" placeholder="Enter Next Date and time" />
					<NameInput onInputChange={handleInputChange} label="UpNextOpponent" placeholder="Enter Next Opponent" />

					<VStack>
						<HStack spacing={10}>
							<Text> Us </Text>
							<Text> Them</Text>/
						</HStack>
						{renderInputs4()}
						<HStack spacing={4}>
							<Input type="text" w="75px" value={formData[`usEE`]} onChange={e => handleInputChange(`usEE`, e.target.value)} />
							<Text mb="8px">EE</Text>
							<Input type="text" w="75px" value={formData[`themEE`]} onChange={e => handleInputChange(`themEE`, e.target.value)} />{" "}
						</HStack>
					</VStack>
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
									color={boxStyle.finalColor}
									textShadow={boxStyle.finalColorShadow}
								>
									Final Score
								</Heading>
							</Box>
							<br />						
							<Flex justify={"center"}  bg={boxStyle.teamNameBannerBG}>
								<Box textAlign={"center"} mt={"-20px"}color={boxStyle.teamNameBannerColor} textShadow={boxStyle.teamNameBannerShadow}>
									<BoxScoreResult />
								</Box>
								<br/>
							</Flex>
							<br />
							<br />
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
