import React, { useState, useRef, useEffect } from "react"
import { Box, Button, Center, Flex, HStack, Heading, Image, Input, Select, Stack, Text, VStack } from "@chakra-ui/react"
import sponsorBanner from "./SponsorBanner2.jpg"
import CurlingStone from "./Curling_stone.svg-removebg-preview.png"
import html2canvas from "html2canvas"
import { styleThemes } from "./styleThemes"

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
		...(JSON.parse(localStorage.getItem("formData")) || {
			SpielName: "",
			gameType: "",
			Time: "",
			OurScore: "",
			OpponentScore: "",
			Opponent1: "",
			Opponent2 : "",
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
		}),
	})

	const [isComponentReady, setIsComponentReady] = useState(false)

	const handleInputChange = (label, newValue) => {
		setFormData(prevFormData => ({
			...prevFormData,
			[label]: newValue,
		}))
	}

	const handleClearAll = () => {
		// Clear all form data
		setFormData({
			SpielName: "",
			gameType: "",
			Time: "",
			OurScore: "",
			OpponentScore: "",
			Opponent1 : "",
			Opponent2: "",
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
	}

	const handleResetScoreBoard = () => {
		// Reset all us fields to an empty string
		const resetUsFields = {}
		for (let i = 1; i <= 8; i++) {
			resetUsFields[`us${i}`] = ""
		}

		// Reset all them fields to an empty string
		const resetThemFields = {}
		for (let i = 1; i <= 8; i++) {
			resetThemFields[`them${i}`] = ""
		}

		// Reset usEE, Opponent and themEE fields
		resetUsFields["usEE"] = ""
		resetUsFields["Opponent1"] = ""
		resetUsFields["Opponent"] = ""
		resetThemFields["themEE"] = ""

		setFormData(prevFormData => ({
			...prevFormData,
			...resetUsFields,
			...resetThemFields,
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

	useEffect(() => {
		setIsComponentReady(true)
	}, [])
	const divRef = useRef(null)
	const convertToJpg = () => {
		if (!isComponentReady) {
			console.log("Component is not ready yet.")
			return
		}

		html2canvas(divRef.current, { scale: 2 }).then(canvas => {
			const dataUrl = canvas.toDataURL("image/jpeg", 1)
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
					<Text mb="8px">{i} </Text>
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
					<Flex direction={"column"} justifyContent={"space-between"}>
						<Box>
							<Text fontSize={"xl"} h="50px" textAlign={"center"} color={boxStyle.WebkitTextStrokeColor}>
								{formData[`us${i}`] === "" && formData[`them${i}`] === "" ? "X" : <>{formData[`us${i}`] ? <span>{formData[`us${i}`]}</span> : <span>0</span>}</>}
							</Text>
						</Box>
						<Text fontSize={"xl"} h="50px" textAlign={"center"} fontWeight={"bold"}>
							{i}
						</Text>

						<Box>
							<Text fontSize={"xl"} h="50px" textAlign={"center"} color={boxStyle.WebkitTextStrokeColor}>
								{formData[`us${i}`] === "" && formData[`them${i}`] === "" ? "X" : <>{formData[`them${i}`] ? <span>{formData[`them${i}`]}</span> : <span>0</span>}</>}
							</Text>
						</Box>
					</Flex>
				)
			}
			return inputPairs
		}

		return (
			<>
				<HStack gap={1}>
					{renderInputs()}
					{formData.usEE !== "" || formData.themEE !== "" ? (
						<>
							<Flex direction={"column"} justifyContent={"space-between"}>
								<Box>
									<Text fontSize={"xl"} h="50px" textAlign={"center"} color={boxStyle.WebkitTextStrokeColor}>
										{formData.usEE === "" ? "0" : formData.usEE}
									</Text>
								</Box>
								<Text fontSize={"xl"} h="50px" textAlign={"center"} fontWeight={"bold"}>
									EE
								</Text>

								<Box>
									<Text fontSize={"xl"} h="50px" textAlign={"center"} color={boxStyle.WebkitTextStrokeColor}>
										{formData.themEE === "" ? "0" : formData.themEE}
									</Text>
								</Box>
							</Flex>
						</>
					) : (
						<></>
					)}
				</HStack>
			</>
		)
	}

	function BoxSore() {
		const height = "180px"
		const middle = "80px"

		const calculateUsTotal = () => {
			let usTotal = 0

			// Include usEE in the loop
			for (let i = 1; i <= 8; i++) {
				const key = `us${i}`
				const value = parseInt(formData[key]) || 0
				usTotal += value
			}

			// Add usEE to the total
			usTotal += parseInt(formData.usEE) || 0

			return usTotal
		}

		const calculateThemTotal = () => {
			let usTotal = 0

			for (let i = 1; i <= 8; i++) {
				const key = `them${i}`
				const value = parseInt(formData[key]) || 0 // Parse value as integer or default to 0
				usTotal += value
			}
			usTotal += parseInt(formData.themEE) || 0
			return usTotal
		}

		return (
			<>
				<Box h={height} bg={boxStyle.teamNameBannerBG} width="788px" justifyContent={"center"} color={boxStyle.scoreColor}>
					<Flex direction={"row"} gap={1} alignContent={"center"} h={height} justifyContent={"space-evenly"} mt={-2}>
						<Flex direction={"column"} justifyContent={"space-between"} h={height} align={"flex-end"}>
							<Box>
								<Heading
									fontSize={"3xl"}
									h="100px"
									textAlign={"center"}
									style={{
										color: ` ${boxStyle.scoreColor}`,
										fontFamily: "sans-serif",
										WebkitTextStroke: `1.5px ${boxStyle.WebkitTextStrokeColor}`,
									}}
								>
									Spruit <br />
									Spruit
								</Heading>
							</Box>

							<Box>
								<Heading
									fontSize={"3xl"}
									h="100px"
									textAlign={"center"}
									style={{
										color: ` ${boxStyle.scoreColor}`,
										fontFamily: "sans-serif",
										WebkitTextStroke: `1.5px ${boxStyle.WebkitTextStrokeColor}`,
									}}
					
								>  
						
									{formData.Opponent1}
								<br />
								{formData.Opponent2  }
								 </Heading>
								
								
								
								
							</Box>
							<Box></Box>
						</Flex>
						<Box h={middle} pt={"20px"}>
							<BoxScoreResult />
						</Box>
						<Flex direction={"column"} justifyContent={"space-around"} h={height} align={"flex-end"}>
							<Box>
								<Heading
									fontSize={"3xl"}
									h="50px"
									textAlign={"center"}
									style={{
										color: ` ${boxStyle.scoreColor}`,
										fontFamily: "sans-serif",
										WebkitTextStroke: `1.5px ${boxStyle.WebkitTextStrokeColor}`,
									}}
								>
									{calculateUsTotal()}
								</Heading>
							</Box>
							<Box></Box>

							<Box>
								<Heading
									fontSize={"3xl"}
									h="50px"
									textAlign={"center"}
									style={{
										color: ` ${boxStyle.scoreColor}`,
										fontFamily: "sans-serif",
										WebkitTextStroke: `1.5px ${boxStyle.WebkitTextStrokeColor}`,
									}}
								>
									{calculateThemTotal()}
								</Heading>
								<Box></Box>
							</Box>
						</Flex>
					</Flex>
				</Box>
			</>
		)
	}

	return (
		<>
			<Box p={3}>
				<Stack w="400px">
					<Button colorScheme="orange" onClick={handleClearAll}>
						New Event
					</Button>
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
					<NameInput onInputChange={handleInputChange} label="Opponent1" placeholder="Enter Opponent 1" />
                    <NameInput onInputChange={handleInputChange } label="Opponent2" placeholder="Enter Opponent 2" />
					<NameInput onInputChange={handleInputChange} label="UpNextDate" placeholder="Enter Next Date and time" />
					<NameInput onInputChange={handleInputChange} label="UpNextOpponent" placeholder="Enter Next Opponent" />
					<Button colorScheme="orange" onClick={handleResetScoreBoard}>
						Reset scoreboard
					</Button>
					<VStack>
						<HStack spacing={10}>
							<Text> Us </Text>
							<Text> Them</Text>/
						</HStack>
						{renderInputs4()}
						<HStack spacing={4}>
							<Input type="text" w="75px" value={formData[`usEE`]} onChange={e => handleInputChange(`usEE`, e.target.value)} />
							<Text mb="8px">EE</Text>
							<Input type="text" w="75px" value={formData[`themEE`]} onChange={e => handleInputChange(`themEE`, e.target.value)} />
						</HStack>
					</VStack>
					<HStack>
						<Text> Theme </Text>
						<Select value={selectedThemeChoice} onChange={handleStyleThemeChange} mb={4} placeholder="Select option">
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
				<Button colorScheme="orange" onClick={convertToJpg}>
					Convert to JPG
				</Button>

				<Text>Note this preview is not 100% accurate and will center the text on conversion</Text>

				<div>
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
							<Flex justify={"center"} bg={boxStyle.teamNameBannerBG}>
								<BoxSore />

								<br />
							</Flex>
							<br />
							<br />
						</Box>

						<Image src={sponsorBanner} h="140px" w="full" />
					</Box>
				</div>

				<br />
				<br />
			</Box>
		</>
	)
}
