import React, { useState, useRef, useEffect } from "react"
import { Box, Button, Center, Flex, HStack, Heading, Image, Input, Select, Stack, Text, VStack } from "@chakra-ui/react"
import sponsorBanner from "./images/SponsorBanner2.jpg"
import CurlingStone from "./images/Curling_stone.svg-removebg-preview.png"
import html2canvas from "html2canvas"
import { styleThemes } from "./styleThemesStylings"

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

export default function PreCompSchedule() {
	const [formData, setFormData] = useState({
		SpielName: "",
		Time: "",
		Date: "",
		ImageTitle: "noTitle",

		opponentFields: [
			{
				day: "",
				hour: "",
				minute: "",
				amPm: "",
				opponent: "",
				gameType: "",
			},
		],
	})
	const handleClearAll = () => {
		// Clear all form data
		setFormData({
			SpielName: "",
			Time: "",
			Date: "",
			ImageTitle: "noTitle",
			TeamPic: "",
			opponentFields: [
				{
					day: "",
					hour: "",
					minute: "",
					amPm: "",
					opponent: "",
					gameType: "",
				},
			],
		})
	}

	useEffect(() => {
		// Load data from local storage on component mount
		const storedFormData = JSON.parse(localStorage.getItem("formData"))
		if (storedFormData) {
			setFormData(storedFormData)
		}
	}, [])

	const handleInputChange = (label, newValue) => {
		setFormData(prevFormData => ({
			...prevFormData,
			[label]: newValue,
		}))
	}

	useEffect(() => {
		// Save form data to local storage whenever it changes
		localStorage.setItem("formData", JSON.stringify(formData))
	}, [formData])

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
		teamNameBannerShadow: selectedTheme.teamNameBannerShadow, // boxStyle.teamNameBannerShadow
		scoreColor: selectedTheme.scoreColor, // boxStyle.scoreColor
		scoreColorShadow: selectedTheme.scoreColorShadow, // boxStyle.scoreColorShadow
		WebkitTextStrokeColor: selectedTheme.WebkitTextStrokeColor,
	}

	const handleStyleThemeChange = event => {
		setSelectedThemeChoice(event.target.value)
	}

	const divRef = useRef(null)
	const convertToJpg = () => {
		html2canvas(divRef.current, { scale: 2 }).then(canvas => {
			const dataUrl = canvas.toDataURL("image/jpeg")
			const link = document.createElement("a")
			link.href = dataUrl
			link.download = `${formData.ImageTitle}.jpg`
			link.click()
		})
	}

	const [opponentCount, setOpponentCount] = useState(1)
	const [inputFields, setInputFields] = useState(Array.from({ length: opponentCount }, () => ({ day: "", time: "", opponent: "", gameType: "Round Robin" })))

	const handleOpponentCountChange = e => {
		const count = parseInt(e.target.value, 10) || 0
		setOpponentCount(count)
		setInputFields(Array.from({ length: count }, () => ({ day: "", time: "", opponent: "", gameType: "Round Robin" })))
	}

	const handleInputChangeOpponent = (index, field, value) => {
		const updatedFields = [...inputFields]
		updatedFields[index][field] = value

		setFormData(prevFormData => ({
			...prevFormData,
			opponentFields: updatedFields,
		}))
	}
	const DisplayInputRoundRobin = () => {
		return (
			<Box fontFamily="sans-serif">
				{inputFields &&
					inputFields
						.filter(field => field.gameType === "Round Robin")
						.map((field, index) => (
							<>
								<Box
									w="100%"
									h="50px"
									textAlign={"top"}
									fontSize={"xl"}
									mt={-2}
									key={index}
									pl={2}
									color={boxStyle.teamNameBannerColor}
									style={{
										borderTop: `25px solid ${boxStyle.teamNameBannerBG}`, // Top side of the triangle
										borderBottom: `25px solid ${boxStyle.teamNameBannerBG}`, // Bottom side of the triangle
										borderRight: `30px solid ${boxStyle.backgroundColor}`, // Right side of the triangle
									}}
								>
									<Text mt={-6} bg={boxStyle.teamNameBannerBG} w="100%">
										{field.day} {field.hour}:{field.minute}
										{field.amPm} VS {field.opponent}
									</Text>
								</Box>
								<Box h={3}> </Box>
							</>
						))}
			</Box>
		)
	}

	const DisplayInputPlayoffs = () => {
		return (
			<Box fontFamily="sans-serif">
				{inputFields &&
					inputFields
						.filter(field => field.gameType === "Playoffs")
						.map((field, index) => (
							<>
								<Box
									w="100%"
									h="50px"
									textAlign={"top"}
									fontSize={"xl"}
									mt={-2}
									key={index}
									pl={2}
									color={boxStyle.teamNameBannerColor}
									style={{
										borderTop: `25px solid ${boxStyle.teamNameBannerBG}`, // Top side of the triangle
										borderBottom: `25px solid ${boxStyle.teamNameBannerBG}`, // Bottom side of the triangle
										borderRight: `30px solid ${boxStyle.backgroundColor}`, // Right side of the triangle
									}}
								>
									<Text mt={-6} bg={boxStyle.teamNameBannerBG} w="100%">
										{field.day} {field.hour}:{field.minute}
										{field.amPm} {field.opponent} *
									</Text>
								</Box>
								<Box h={3}> </Box>
							</>
						))}
			</Box>
		)
	}

	const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(1, "0").slice(-2))
	const minutes = Array.from({ length: 12 }, (_, i) => (i * 5).toString().padStart(2, "0"))

	return (
		<>
			<Box p={3} fontFamily="sans-serif">
				<Stack w="400px">
					<Button colorScheme="orange" onClick={handleClearAll}>
						New Event
					</Button>
					<NameInput onInputChange={handleInputChange} label="ImageTitle" placeholder="Enter Image Title" value={formData.ImageTitle} />
					<NameInput onInputChange={handleInputChange} label="SpielName" placeholder="Enter Spiel Name" value={formData.SpielName} />
					<NameInput onInputChange={handleInputChange} label="Date" placeholder="Friday, October 20" />

					<VStack>
						<HStack>
							<label htmlFor="opponentCount">Select Opponent Count:</label>
							<Select id="opponentCount" onChange={handleOpponentCountChange} value={opponentCount}>
								{[1, 2, 3, 4, 5, 6, 7, 8].map(count => (
									<option key={count} value={count}>
										{count}
									</option>
								))}
							</Select>
						</HStack>

						{inputFields.map((_, index) => (
							<>
								<VStack key={index} spacing={4} fontFamily="sans-serif" pb={1}>
									<Box w="100%" textAlign={"center"} color="#fdfdfe">
										<Text fontWeight={"bold"} bg="#00aa86">
											Game #{index + 1}
										</Text>
									</Box>
									<HStack>
										<label htmlFor={`day-${index}`}>Day:</label>
										<Select w="100px" id={`day-${index}`} onChange={e => handleInputChangeOpponent(index, "day", e.target.value)} value={inputFields[index].day} placeholder="---">
											{["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"].map(day => (
												<option key={day} value={day}>
													{day}
												</option>
											))}
										</Select>

										<label htmlFor={`time-${index}`}>Time:</label>
										<HStack>
											<Select id={`hour-${index}`} onChange={e => handleInputChangeOpponent(index, "hour", e.target.value)} value={formData.hour} placeholder="---">
												{hours.map(hour => (
													<option key={hour} value={hour}>
														{hour}
													</option>
												))}
											</Select>
											<Select id={`minute-${index}`} onChange={e => handleInputChangeOpponent(index, "minute", e.target.value)} value={formData.minute} placeholder="---">
												{minutes.map(minute => (
													<option key={minute} value={minute}>
														{minute}
													</option>
												))}
											</Select>
											<Select id={`amPm-${index}`} onChange={e => handleInputChangeOpponent(index, "amPm", e.target.value)} value={formData.amPm} placeholder="---">
												<option value="am">AM</option>
												<option value="pm">PM</option>
											</Select>
										</HStack>
									</HStack>
									<HStack w="100%">
										<label htmlFor={`opponent-${index}`}>Opponent:</label>
										<Input type="text" id={`opponent-${index}`} name={`opponent-${index}`} onChange={e => handleInputChangeOpponent(index, "opponent", e.target.value)} />
									</HStack>
									<Select
										id={`gameType`}
										onChange={e => handleInputChangeOpponent(index, "gameType", e.target.value)}
										value={formData.gameType} // Use formData[index] for each instance
									>
										<option value="Round Robin">Round Robin</option>
										<option value="Playoffs">Playoffs</option>
									</Select>
								</VStack>
							</>
						))}
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
				{/* <Text> {opponentCount} </Text>
				<Text> {opponentCount === 8 ? "true" : "false"} </Text> */}

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
						}}
						bg={boxStyle.backgroundColor}
						color={boxStyle.color}
					>
						<Box h={opponentCount === 8 ? "610px" : "590px"} pt={1}>
							<Flex justify="flex-end" w="100%" pb={6} pr={2}>
								<HStack>
									<VStack spacing={0} justify={"center"}>
										<Heading color={boxStyle.color} fontWeight="bold" textShadow={boxStyle.textShadow} fontSize="4xl" mt={3} pr={3}>
											{formData.SpielName}
										</Heading>
										<Flex justify="flex-end" w="100%" pr={3}>
											<Text fontSize={"xl"} textAlign={"right"}>
												{formData.Date}
											</Text>
										</Flex>
									</VStack>
									<Image src={CurlingStone} h="85px" />
								</HStack>
							</Flex>
							<HStack align={"flex-start"} h="full">
								<Box w="60%">
									<Box w="100%">
										<Heading
											fontSize={"2xl"}
											mt={opponentCount === 8 ? "-25px" : "-20px"}
											pl={2}
											style={{
												color: ` ${boxStyle.scoreColor}`,
												fontFamily: "sans-serif",
												WebkitTextStroke: `1.5px ${boxStyle.WebkitTextStrokeColor}`,
											}}
											fontWeight={"bold"}
											pb={5}
										>
											Round Robin
										</Heading>
										<DisplayInputRoundRobin />
										<br />
										<HStack pb={5}>
											<Heading
												fontSize={"2xl"}
												mt={opponentCount === 8 ? "-30px" : "-20px"}
												pl={2}
												style={{
													color: ` ${boxStyle.scoreColor}`,
													fontFamily: "sans-serif",
													WebkitTextStroke: `1.5px ${boxStyle.WebkitTextStrokeColor}`,
												}}
												fontWeight={"bold"}
											>
												Playoffs
											</Heading>
										</HStack>
										<DisplayInputPlayoffs />
									</Box>
								</Box>
								{/* <Flex w="40%" h={"100%"} align={"flex-start"} >
									<Center>
										<Image src={TeamLogo2} h={"350px"} mt={6}   />
									</Center>
								</Flex> */}
							</HStack>
							<Flex justify={"flex-end"} align={"flex-start"} textAlign={"start"} w={"100%"} mt={opponentCount === 8 ? "-140px" : "-140px"}>
								<Text fontSize={"xs"} color={boxStyle.color} w="200px">
									* Pending Qualification
								</Text>
							</Flex>
						</Box>

						<Image src={sponsorBanner} h={opponentCount === 8 ? "90px" : "112px"} w="full" />
					</Box>
				</Box>

				<br />
				<br />
			</Box>
		</>
	)
}
