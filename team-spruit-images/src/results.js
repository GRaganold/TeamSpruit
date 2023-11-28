import React, { useState, useRef,useEffect } from "react"
import { Box, Button, Center, Circle, Flex, HStack, Heading, Image, Input, Select, Stack, Text, VStack } from "@chakra-ui/react"
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
		isFinal: "false",
		OurScore: "",
		OpponentScore: "",
		Opponent: "",
		Date: "",
		UpNextDate: "",
		UpNextOpponent: "",
		ImageTitle: "noTitle",
	})
	const handleClearAll = () => {
		// Clear all form data
		setFormData({
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
		});
	  };

	useEffect(() => {
		// Load data from local storage on component mount
		const storedFormData = JSON.parse(localStorage.getItem("formData"));
		if (storedFormData) {
		  setFormData(storedFormData);
		}
	  }, []);
	
	  const handleInputChange = (label, newValue) => {
		setFormData((prevFormData) => ({
		  ...prevFormData,
		  [label]: newValue,
		}));
	  };
	
	  useEffect(() => {
		// Save form data to local storage whenever it changes
		localStorage.setItem("formData", JSON.stringify(formData));
	  }, [formData]);

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
			<Box p={3} fontFamily="sans-serif">
				<Stack w="400px">
				<Button  colorScheme="orange" onClick={handleClearAll}>
        New Event
        </Button>
				<NameInput onInputChange={handleInputChange} label="ImageTitle" placeholder="Enter Image Title"  />
          <NameInput onInputChange={handleInputChange} label="SpielName" placeholder="Enter Spiel Name"  />
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
											
											pl={9}
											style={{ transform: "rotate(-10deg)" }}
										></Heading>
									</Box>
								</>
							)}
							<VStack spacing={0}>
								<HStack spacing={0} textAlign={"center"} w="100%">
									<Flex w="350px" bg={boxStyle.teamNameBannerBG} zIndex={1} mr="-25px" h={"50px"} alignItems="center" justifyContent="center" textAlign={"top"}>
										<Heading 
                                        mt={"-10px"}
                                        fontSize={"3xl"} h="100%"  
										style={{
											color: ` ${boxStyle.scoreColor}`,
											fontFamily: "sans-serif",
											WebkitTextStroke: `1.5px ${boxStyle.WebkitTextStrokeColor}`,
										}}
										>
											Spruit/Spruit
										</Heading>
									</Flex>
									<Circle zIndex={5} w={"100px"} h={"100px"} bg={boxStyle.teamNameBannerBG} alignItems="center" justifyContent="center" textAlign={"top"}>
										<Text fontSize={"5xl"} fontWeight={"900"} h="110%"  style={{
											color: ` ${boxStyle.scoreColor}`,
											fontFamily: "sans-serif",
											WebkitTextStroke: `1.5px ${boxStyle.WebkitTextStrokeColor}`,
										}}
										>
											VS
										</Text>
									</Circle>
									<Flex w="350px" bg={boxStyle.teamNameBannerBG} zIndex={0} ml="-15px" h={"50px"} alignItems="center" justifyContent="center" textAlign={"top"}>
										<Heading mt={"-10px"} 
										fontSize={"3xl"} h="100%"  
										style={{
											color: ` ${boxStyle.scoreColor}`,
											fontFamily: "sans-serif",
											WebkitTextStroke: `1.5px ${boxStyle.WebkitTextStrokeColor}`,
										}}
										
										>
											{formData.Opponent}
										</Heading>
									</Flex>
								</HStack>

								<Flex w="100%" justify="space-around" color={boxStyle.color} mt={"-25px"}>
									
                                    {parseInt(formData.OurScore) > parseInt(formData.OpponentScore)? (<>
                                        <Heading fontSize={"4xl"} 
                                        textDecor={"underline"}
										
                                        style={{
											color: ` ${boxStyle.scoreColor}`,
											fontFamily: "sans-serif",
											WebkitTextStroke: `1.5px ${boxStyle.WebkitTextStrokeColor}`,
										}} pr={16}>
										{formData.OurScore}
									</Heading>

									<Heading fontSize={"4xl"} style={{
											color: ` ${boxStyle.scoreColor}`,
											fontFamily: "sans-serif",
											WebkitTextStroke: `1.5px ${boxStyle.WebkitTextStrokeColor}`,
										}}>
										{formData.OpponentScore}
									</Heading>
                                    
                                    </>) : (<><Heading fontSize={"4xl"} style={{
											color: ` ${boxStyle.scoreColor}`,
											fontFamily: "sans-serif",
											WebkitTextStroke: `1.5px ${boxStyle.WebkitTextStrokeColor}`,
										}} pr={16}>
										{formData.OurScore}
									</Heading>

									<Heading fontSize={"4xl"} 
                                    textDecor={"underline"}
                                    style={{
										color: ` ${boxStyle.scoreColor}`,
										fontFamily: "sans-serif",
										WebkitTextStroke: `1.5px ${boxStyle.WebkitTextStrokeColor}`,
									}}>
										{formData.OpponentScore}
									</Heading></>)}
                                    
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
