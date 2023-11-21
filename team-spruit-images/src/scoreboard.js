/* eslint-disable no-unused-vars */
import { Box, Button, Flex, HStack, Image, Input, Stack, Text, VStack } from "@chakra-ui/react"
import React, { useRef, useState } from "react"
import html2canvas from "html2canvas"
import sponsorBanner from "./SponsorBanner.png"
import CurlingStone from "./CurlingStone.png"

export default function Scoreboard() {
	const divRef = useRef(null)
	const [inputValues, setInputValues] = useState('')
const [SpielName, setSpielName] = useState('');
const [Opponent, setOpponent] = useState('');
const [ourScore, setOurScore] = useState(''); // Adjusted the setter function name
const [opponentScore, setOpponentScore] = useState('');
const [jpgTitle, setJpgTitle] = useState(''); // Adjusted the setter function name
const [us1, setUs1] = useState(''); // Adjusted the setter function name
const [us2, setUs2] = useState(''); // Adjusted the setter function name
const [us3, setUs3] = useState(''); // Adjusted the setter function name
const [us4, setUs4] = useState(''); // Adjusted the setter function name
const [us5, setUs5] = useState(''); // Adjusted the setter function name
const [us6, setUs6] = useState(''); // Adjusted the setter function name
const [us7, setUs7] = useState(''); // Adjusted the setter function name
const [us8, setUs8] = useState(''); // Adjusted the setter function name
const [usEE, setUsEE] = useState(''); // Adjusted the setter function name
const [them1, setThem1] = useState(''); // Adjusted the setter function name
const [them2, setThem2] = useState(''); // Adjusted the setter function name
const [them3, setThem3] = useState(''); // Adjusted the setter function name
const [them4, setThem4] = useState(''); // Adjusted the setter function name
const [them5, setThem5] = useState(''); // Adjusted the setter function name
const [them6, setThem6] = useState(''); // Adjusted the setter function name
const [them7, setThem7] = useState(''); // Adjusted the setter function name
const [them8, setThem8] = useState(''); // Adjusted the setter function name
const [themEE, setThemEE] = useState(''); // Adjusted the setter function name

	

	const convertToJpg = () => {
		const scale = 2 // Adjust the scale factor as needed

		// Use html2canvas to capture the content of the div with scaling
		html2canvas(divRef.current, { scale }).then(canvas => {
			// Convert the canvas to a data URL representing a JPEG image
			const dataUrl = canvas.toDataURL("image/jpeg")

			// Create a link element and trigger a download of the image
			const link = document.createElement("a")
			link.href = dataUrl
			link.download = `${inputValues.jpgTitle}.jpg`
			link.click()
		})
	}

    const handleInputChange = (inputName, value) => {
        setInputValues((prevValues) => ({
          ...prevValues,
          [inputName]: isNaN(value) ? value : parseInt(value, 10),
        }));
      };

	function BoxScoreInput() {
		const renderInputs4 = () => {
			const inputPairs = []
			for (let i = 1; i <= 4; i++) {
				inputPairs.push(
					<VStack spacing={1} key={i}>
						<Input type="number" w="50px" value={inputValues[`us${i}`]} onChange={e => handleInputChange(`us${i}`, e.target.value)} />
						<Text mb="8px">{i}</Text>
						<Input
							type="number"
							// value={inputValues.opponentScore}
							// onChange={e => handleInputChange("opponentScore", e.target.value)}
							w="50px"
							value={inputValues[`them${i}`]}
							onChange={e => handleInputChange(`them${i}`, e.target.value)}
						/>
					</VStack>
				)
			}
			return inputPairs
		}
		const renderInputs5 = () => {
			const inputPairs = []
			for (let i = 5; i <= 8; i++) {
				inputPairs.push(
					<VStack spacing={1} key={i}>
						<Input type="number" w="50px" value={inputValues[`us${i}`]} onChange={e => handleInputChange(`us${i}`, e.target.value)} />
						<Text mb="8px">{i}</Text>
						<Input
							type="number"
							// value={inputValues.opponentScore}
							// onChange={e => handleInputChange("opponentScore", e.target.value)}
							w="50px"
							value={inputValues[`them${i}`]}
							onChange={e => handleInputChange(`them${i}`, e.target.value)}
						/>
					</VStack>
				)
			}
			return inputPairs
		}
		return (
			<>
				<HStack>
					<VStack spacing={1}>
						<Text mb="8px">Us </Text>
						<Text mb="8px">End </Text>
						<Text mb="8px">Opponent </Text>
					</VStack>

					{renderInputs4()}
				</HStack>
				<HStack>
					<VStack spacing={1}>
						<Text mb="8px">Us </Text>
						<Text mb="8px">End </Text>
						<Text mb="8px">Opponent </Text>
					</VStack>

					{renderInputs5()}
					<VStack spacing={1}>
						<Input type="text" w="50px" value={inputValues[`usEE`]} onChange={e => handleInputChange(`usEE`, e.target.value)} />
						<Text mb="8px">EE</Text>
						<Input
							type="text"
							// value={inputValues.opponentScore}
							// onChange={e => handleInputChange("opponentScore", e.target.value)}
							w="50px"
							value={inputValues[`themEE`]}
							onChange={e => handleInputChange(`themEE`, e.target.value)}
						/>{" "}
					</VStack>
				</HStack>
			</>
		)
	}

	function BoxScoreResult() {
		const renderInputs = () => {
			const inputPairs = []
			for (let i = 1; i <= 8; i++) {
				inputPairs.push(
					<VStack key={i} spacing={1}>
						<Text mb="8px">{inputValues[`us${i}`]}</Text>
						<Text mb="8px">{inputValues[`them${i}`]}</Text>
					</VStack>
				)
			}
			return inputPairs
		}

		return (
			<>
				<HStack>
					{renderInputs()}
					{inputValues.usEE && inputValues.themEE ? <>{inputValues.usEE}</> : <>{inputValues.themEE}</>}
				</HStack>
			</>
		)
	}

	function Inputs() {
		return (
			<>
				<Box>
					<Stack spacing={5}>
						<HStack spacing={5}>
							<Text mb="8px">JPG Title: </Text>
							<Input type="text" value={inputValues.jpgTitle} onChange={e => handleInputChange("jpgTitle", e.target.value)} w="400px" placeholder="Spiel Name" />
						</HStack>
						<HStack spacing={5}>
							<Text mb="8px">Spiel Name: </Text>
							<Input type="text" value={inputValues.SpielName} onChange={e => handleInputChange("SpielName", e.target.value)} w="400px" placeholder="Spiel Name" />
						</HStack>
						<HStack spacing={5}>
							<Text mb="8px">Opponent: </Text>
							<Input type="text" value={inputValues.Opponent} onChange={e => handleInputChange("Opponent", e.target.value)} w="400px" placeholder="Opponent" />
						</HStack>
						<HStack spacing={5}>
							<Text mb="8px">Our Score: </Text>
							<Input type="number" value={inputValues.ourScore} onChange={e => handleInputChange("ourScore", e.target.value)} w="400px" placeholder="Our Score:" />{" "}
						</HStack>
						<HStack spacing={5}>
							<Text mb="8px">Opponent Score: </Text>
							<Input type="number" value={inputValues.opponentScore} onChange={e => handleInputChange("opponentScore", e.target.value)} w="400px" placeholder="Opponent score" />
						</HStack>
						<BoxScoreInput />
					</Stack>
				</Box>
			</>
		)
	}
	return (
		<>
			<Box p={3}>
				<Inputs />

				<Button onClick={convertToJpg} m="6" colorScheme="orange">
					Convert to JPG
				</Button>

				<Box w="100vw">
					<Box
						ref={divRef}
						style={{
							height: "470px",
							width: "394px",
							border: "1px solid #000", // Optional: Add a border to visualize the div
						}}
						bg="red"
					>
						<Box h="320px">
							<Flex justify={"flex-end"} w="100%">
								<HStack>
									<Text color="white" fontWeight={"bold"} textShadow="2px 2px #000000" fontSize={"lg"}>
										SpielName: {inputValues.SpielName}
									</Text>
									<Image src={CurlingStone} h="35px" />
								</HStack>
							</Flex>

							<br />
							<br />
							<br />
							<Flex w="100%" bg="yellow" justify={"space-evenly"}>
								<Box>
									<p> Spruit/Spruit</p>
									<Text> {inputValues.ourScore}</Text>
								</Box>
								<Box>
									<p> VS </p>
								</Box>
								<Box>
									<p>{inputValues.Opponent}</p>
									<p>{inputValues.opponentScore}</p>
								</Box>
							</Flex>
							<BoxScoreResult />
						</Box>
						<Image src={sponsorBanner} />
					</Box>
				</Box>
				<br />
				<br />
			</Box>
		</>
	)
}
