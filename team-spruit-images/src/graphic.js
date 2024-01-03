import html2canvas from "html2canvas"
import React, { useState, useRef, useEffect } from "react"
import { Box, Button, Card, Flex, HStack, Heading, Image, Input, Select, VStack, Text, Stack } from "@chakra-ui/react"
import sponsorBanner from "./SponsorBanner2.jpg"
import backgroundBanner from "./bground2.jpg"

import Ontario from "./flags/cad_on.png"
import Alberta from "./flags/cad_ab.png"
import BritishColumbia from "./flags/cad_bc.png"
import Manitoba from "./flags/cad_mb.png"
import NewBrunswick from "./flags/cad_nb.png"
import NewfoundlandAndLabrador from "./flags/cad_nl.png"
import NovaScotia from "./flags/cad_ns.png"
import NorthwestTerritories from "./flags/cad_nt.png"
import Nunavut from "./flags/cad_nu.png"
import PrinceEdwardIsland from "./flags/cad_pe.png"
import Quebec from "./flags/cad_qc.png"
import Saskatchewan from "./flags/cad_sk.png"
import Yukon from "./flags/cad_yt.png"

import Afghanistan from "./flags/af.png"
import AlandIslands from "./flags/ax.png"
import Albania from "./flags/al.png"
import Algeria from "./flags/dz.png"
import AmericanSamoa from "./flags/as.png"
import Andorra from "./flags/ad.png"
import Angola from "./flags/ao.png"
import Anguilla from "./flags/ai.png"
import Antarctica from "./flags/aq.png"
import AntiguaAndBarbuda from "./flags/ag.png"
import Argentina from "./flags/ar.png"
import Armenia from "./flags/am.png"
import Aruba from "./flags/aw.png"
import Australia from "./flags/au.png"
import Austria from "./flags/at.png"
import Azerbaijan from "./flags/az.png"
import Bahamas from "./flags/bs.png"
import Bahrain from "./flags/bh.png"
import Bangladesh from "./flags/bd.png"
import Barbados from "./flags/bb.png"
import Belarus from "./flags/by.png"
import Belgium from "./flags/be.png"
import Belize from "./flags/bz.png"
import Benin from "./flags/bj.png"
import Bermuda from "./flags/bm.png"
import Bhutan from "./flags/bt.png"
import BoliviaPlurinationalStateOf from "./flags/bo.png"
import BosniaAndHerzegovina from "./flags/ba.png"
import Botswana from "./flags/bw.png"
import BouvetIsland from "./flags/bv.png"
import Brazil from "./flags/br.png"
import BritishIndianOceanTerritory from "./flags/io.png"
import BruneiDarussalam from "./flags/bn.png"
import Bulgaria from "./flags/bg.png"
import BurkinaFaso from "./flags/bf.png"
import Burundi from "./flags/bi.png"
import Cambodia from "./flags/kh.png"
import Cameroon from "./flags/cm.png"
import Canada from "./flags/ca.png"
import CapeVerde from "./flags/cv.png"
import CaribbeanNetherlands from "./flags/bq.png"
import CaymanIslands from "./flags/ky.png"
import CentralAfricanRepublic from "./flags/cf.png"
import Chad from "./flags/td.png"
import Chile from "./flags/cl.png"
import ChinaPeoplesRepublicOfChina from "./flags/cn.png"
import ChristmasIsland from "./flags/cx.png"
import CocosKeelingIslands from "./flags/cc.png"
import Colombia from "./flags/co.png"
import Comoros from "./flags/km.png"
import CongoTheDemocraticRepublicOfThe from "./flags/cd.png"
import CookIslands from "./flags/ck.png"
import CostaRica from "./flags/cr.png"
import CoteDIvoire from "./flags/ci.png"
import Croatia from "./flags/hr.png"
import Cuba from "./flags/cu.png"
import Curacao from "./flags/cw.png"
import Cyprus from "./flags/cy.png"
import CzechRepublic from "./flags/cz.png"
import Denmark from "./flags/dk.png"
import Djibouti from "./flags/dj.png"
import Dominica from "./flags/dm.png"
import DominicanRepublic from "./flags/do.png"
import Ecuador from "./flags/ec.png"
import Egypt from "./flags/eg.png"
import ElSalvador from "./flags/sv.png"
import England from "./flags/gb-eng.png"
import EquatorialGuinea from "./flags/gq.png"
import Eritrea from "./flags/er.png"
import Estonia from "./flags/ee.png"
import Ethiopia from "./flags/et.png"
import Europe from "./flags/eu.png"
import FalklandIslandsMalvinas from "./flags/fk.png"
import FaroeIslands from "./flags/fo.png"
import Fiji from "./flags/fj.png"
import Finland from "./flags/fi.png"
import France from "./flags/fr.png"
import FrenchGuiana from "./flags/gf.png"
import FrenchPolynesia from "./flags/pf.png"
import FrenchSouthernTerritories from "./flags/tf.png"
import Gabon from "./flags/ga.png"
import Gambia from "./flags/gm.png"
import Georgia from "./flags/ge.png"
import Germany from "./flags/de.png"
import Ghana from "./flags/gh.png"
import Gibraltar from "./flags/gi.png"
import Greece from "./flags/gr.png"
import Greenland from "./flags/gl.png"
import Grenada from "./flags/gd.png"
import Guadeloupe from "./flags/gp.png"
import Guam from "./flags/gu.png"
import Guatemala from "./flags/gt.png"
import Guernsey from "./flags/gg.png"
import Guinea from "./flags/gn.png"
import GuineaBissau from "./flags/gw.png"
import Guyana from "./flags/gy.png"
import Haiti from "./flags/ht.png"
import HeardIslandAndMcDonaldIslands from "./flags/hm.png"
import HolySeeVaticanCityState from "./flags/va.png"
import Honduras from "./flags/hn.png"
import HongKong from "./flags/hk.png"
import Hungary from "./flags/hu.png"
import Iceland from "./flags/is.png"
import India from "./flags/in.png"
import Indonesia from "./flags/id.png"
import IranIslamicRepublicOf from "./flags/ir.png"
import Iraq from "./flags/iq.png"
import Ireland from "./flags/ie.png"
import IsleOfMan from "./flags/im.png"
import Israel from "./flags/il.png"
import Italy from "./flags/it.png"
import Jamaica from "./flags/jm.png"
import Japan from "./flags/jp.png"
import Jersey from "./flags/je.png"
import Jordan from "./flags/jo.png"
import Kazakhstan from "./flags/kz.png"
import Kenya from "./flags/ke.png"
import Kiribati from "./flags/ki.png"
import KoreaDemocraticPeoplesRepublicOf from "./flags/kp.png"
import KoreaRepublicOf from "./flags/kr.png"
import Kosovo from "./flags/xk.png"
import Kuwait from "./flags/kw.png"
import Kyrgyzstan from "./flags/kg.png"
import LaosLaoPeoplesDemocraticRepublic from "./flags/la.png"
import Latvia from "./flags/lv.png"
import Lebanon from "./flags/lb.png"
import Lesotho from "./flags/ls.png"
import Liberia from "./flags/lr.png"
import Libya from "./flags/ly.png"
import Liechtenstein from "./flags/li.png"
import Lithuania from "./flags/lt.png"
import Luxembourg from "./flags/lu.png"
import Macao from "./flags/mo.png"
import Madagascar from "./flags/mg.png"
import Malawi from "./flags/mw.png"
import Malaysia from "./flags/my.png"
import Maldives from "./flags/mv.png"
import Mali from "./flags/ml.png"
import Malta from "./flags/mt.png"
import MarshallIslands from "./flags/mh.png"
import Martinique from "./flags/mq.png"
import Mauritania from "./flags/mr.png"
import Mauritius from "./flags/mu.png"
import Mayotte from "./flags/yt.png"
import Mexico from "./flags/mx.png"
import MicronesiaFederatedStatesOf from "./flags/fm.png"
import MoldovaRepublicOf from "./flags/md.png"
import Monaco from "./flags/mc.png"
import Mongolia from "./flags/mn.png"
import Montenegro from "./flags/me.png"
import Montserrat from "./flags/ms.png"
import Morocco from "./flags/ma.png"
import Mozambique from "./flags/mz.png"
import Myanmar from "./flags/mm.png"
import Namibia from "./flags/na.png"
import Nauru from "./flags/nr.png"
import Nepal from "./flags/np.png"
import Netherlands from "./flags/nl.png"
import NewCaledonia from "./flags/nc.png"
import NewZealand from "./flags/nz.png"
import Nicaragua from "./flags/ni.png"
import Niger from "./flags/ne.png"
import Nigeria from "./flags/ng.png"
import Niue from "./flags/nu.png"
import NorfolkIsland from "./flags/nf.png"
import NorthMacedonia from "./flags/mk.png"
import NorthernIreland from "./flags/gb-nir.png"
import NorthernMarianaIslands from "./flags/mp.png"
import Norway from "./flags/no.png"
import Oman from "./flags/om.png"
import Pakistan from "./flags/pk.png"
import Palau from "./flags/pw.png"
import Palestine from "./flags/ps.png"
import Panama from "./flags/pa.png"
import PapuaNewGuinea from "./flags/pg.png"
import Paraguay from "./flags/py.png"
import Peru from "./flags/pe.png"
import Philippines from "./flags/ph.png"
import Pitcairn from "./flags/pn.png"
import Poland from "./flags/pl.png"
import Portugal from "./flags/pt.png"
import PuertoRico from "./flags/pr.png"
import Qatar from "./flags/qa.png"
import RepublicOfTheCongo from "./flags/cg.png"
import Reunion from "./flags/re.png"
import Romania from "./flags/ro.png"
import RussianFederation from "./flags/ru.png"
import Rwanda from "./flags/rw.png"
import SaintBarthelemy from "./flags/bl.png"
import SaintHelenaAscensionAndTristanDaCunha from "./flags/sh.png"
import SaintKittsAndNevis from "./flags/kn.png"
import SaintLucia from "./flags/lc.png"
import SaintMartin from "./flags/mf.png"
import SaintPierreAndMiquelon from "./flags/pm.png"
import SaintVincentAndTheGrenadines from "./flags/vc.png"
import Samoa from "./flags/ws.png"
import SanMarino from "./flags/sm.png"
import SaoTomeAndPrincipe from "./flags/st.png"
import SaudiArabia from "./flags/sa.png"
import Scotland from "./flags/gb-sct.png"
import Senegal from "./flags/sn.png"
import Serbia from "./flags/rs.png"
import Seychelles from "./flags/sc.png"
import SierraLeone from "./flags/sl.png"
import Singapore from "./flags/sg.png"
import SintMaartenDutchPart from "./flags/sx.png"
import Slovakia from "./flags/sk.png"
import Slovenia from "./flags/si.png"
import SolomonIslands from "./flags/sb.png"
import Somalia from "./flags/so.png"
import SouthAfrica from "./flags/za.png"
import SouthGeorgiaAndTheSouthSandwichIslands from "./flags/gs.png"
import SouthSudan from "./flags/ss.png"
import Spain from "./flags/es.png"
import SriLanka from "./flags/lk.png"
import Sudan from "./flags/sd.png"
import Suriname from "./flags/sr.png"
import SvalbardAndJanMayenIslands from "./flags/sj.png"
import Swaziland from "./flags/sz.png"
import Sweden from "./flags/se.png"
import Switzerland from "./flags/ch.png"
import SyrianArabRepublic from "./flags/sy.png"
import TaiwanRepublicOfChina from "./flags/tw.png"
import Tajikistan from "./flags/tj.png"
import TanzaniaUnitedRepublicOf from "./flags/tz.png"
import Thailand from "./flags/th.png"
import TimorLeste from "./flags/tl.png"
import Togo from "./flags/tg.png"
import Tokelau from "./flags/tk.png"
import Tonga from "./flags/to.png"
import TrinidadAndTobago from "./flags/tt.png"
import Tunisia from "./flags/tn.png"
import Turkey from "./flags/tr.png"
import Turkmenistan from "./flags/tm.png"
import TurksAndCaicosIslands from "./flags/tc.png"
import Tuvalu from "./flags/tv.png"
import USMinorOutlyingIslands from "./flags/um.png"
import Uganda from "./flags/ug.png"
import Ukraine from "./flags/ua.png"
import UnitedArabEmirates from "./flags/ae.png"
import UnitedKingdom from "./flags/gb.png"
import UnitedStates from "./flags/us.png"
import Uruguay from "./flags/uy.png"
import Uzbekistan from "./flags/uz.png"
import Vanuatu from "./flags/vu.png"
import VenezuelaBolivarianRepublicOf from "./flags/ve.png"
import Vietnam from "./flags/vn.png"
import VirginIslandsBritish from "./flags/vg.png"
import VirginIslandsUS from "./flags/vi.png"
import Wales from "./flags/gb-wls.png"
import WallisAndFutunaIslands from "./flags/wf.png"
import WesternSahara from "./flags/eh.png"
import Yemen from "./flags/ye.png"
import Zambia from "./flags/zm.png"
import Zimbabwe from "./flags/zw.png"

function NameInput({ onInputChange, label, placeholder }) {
	const [value, setValue] = useState("")

	const handleChange = event => {
		const newValue = event.target.value
		setValue(newValue)
		onInputChange(label, newValue)
	}

	return (
		<>
			<HStack>
				<Text mb="8px">{label}: </Text>
				<Input value={value} onChange={handleChange} placeholder={placeholder} size="sm" w="400px" />
			</HStack>
		</>
	)
}

export default function GraphicCard() {
	const [isComponentReady, setIsComponentReady] = useState(false)

	const [formData, setFormData] = useState({
		...(JSON.parse(localStorage.getItem("formData")) || {
			SpielName: "",
			Time: "",
			us1: "",
			us2: "",
			Opponent1: "",
			Opponent2: "",
			day: "",
			ImageTitle: "noTitle",
			amPm: "",
			minute: "",
			hour: "",
			month: "",
		}),
	})

	const handleClearAll = () => {
		setFormData({
			SpielName: "",
			Time: "",
			us1: "",
			us2: "",
			Opponent1: "",
			Opponent2: "",
			day: "",
			ImageTitle: "noTitle",
			amPm: "",
			month: "",
		})
	}

	useEffect(() => {
		localStorage.setItem("formData", JSON.stringify(formData))
	}, [formData])

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

	const handleInputChange = (label, newValue) => {
		setFormData(prevFormData => ({
			...prevFormData,
			[label]: newValue,
		}))
	}

	const [inputFields, setInputFields] = useState([{ day: "", hour: "", minute: "", amPm: "", opponent: "", gameType: "" }])

	const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(1, "0").slice(-2))
	const minutes = Array.from({ length: 12 }, (_, i) => (i * 5).toString().padStart(2, "0"))
	const days = Array.from({ length: 32 }, (_, i) => (i * 1).toString().padStart(1, "0"))

	const handleInputChangeOpponent = (index, field, value) => {
		const updatedFields = [...inputFields]
		updatedFields[index][field] = value
		setInputFields(updatedFields)
	}

	const getOrdinalSuffix = num => {
		const lastDigit = num % 10
		if (num === 11 || num === 12 || num === 13) {
			return "th"
		} else if (lastDigit === 1) {
			return "st"
		} else if (lastDigit === 2) {
			return "nd"
		} else if (lastDigit === 3) {
			return "rd"
		} else {
			return "th"
		}
	}

	const [usFlag, setUsFlag] = useState(Ontario)
	const [themFlag, setThemFlag] = useState(Ontario)

	const handleFlagChange = (event, setFlag) => {
		// Update the selected flag based on the option value
		const selectedFlag = event.target.value

		// Set the state to the corresponding flag image
		switch (selectedFlag) {
            // Province
			case "Ontario":
				setFlag(Ontario)
				break
			case "Alberta":
				setFlag(Alberta)
				break
			case "BritishColumbia":
				setFlag(BritishColumbia)
				break
                case "Manitoba":
				setFlag(Manitoba)
				break
			case "NewBrunswick":
				setFlag(NewBrunswick)
				break
			case "NewfoundlandAndLabrador":
				setFlag(NewfoundlandAndLabrador)
				break
                case "NovaScotia":
				setFlag(NovaScotia)
				break
			case "NorthwestTerritories":
				setFlag(NorthwestTerritories)
				break
			case "PrinceEdwardIsland":
				setFlag(PrinceEdwardIsland)
				break
			case "Quebec":
				setFlag(Quebec)
				break
			case "Nunavut":
				setFlag(Nunavut)
				break
                case "Saskatchewan":
				setFlag(Saskatchewan)
				break
			case "Yukon":
				setFlag(Yukon)
				break
// World
                case "Afghanistan": setFlag(Afghanistan); break;
                case "AlandIslands": setFlag(AlandIslands); break;
                case "Albania": setFlag(Albania); break;
                case "Algeria": setFlag(Algeria); break;
                case "AmericanSamoa": setFlag(AmericanSamoa); break;
                case "Andorra": setFlag(Andorra); break;
                case "Angola": setFlag(Angola); break;
                case "Anguilla": setFlag(Anguilla); break;
                case "Antarctica": setFlag(Antarctica); break;
                case "AntiguaAndBarbuda": setFlag(AntiguaAndBarbuda); break;
                case "Argentina": setFlag(Argentina); break;
                case "Armenia": setFlag(Armenia); break;
                case "Aruba": setFlag(Aruba); break;
                case "Australia": setFlag(Australia); break;
                case "Austria": setFlag(Austria); break;
                case "Azerbaijan": setFlag(Azerbaijan); break;
                case "Bahamas": setFlag(Bahamas); break;
                case "Bahrain": setFlag(Bahrain); break;
                case "Bangladesh": setFlag(Bangladesh); break;
                case "Barbados": setFlag(Barbados); break;
                case "Belarus": setFlag(Belarus); break;
                case "Belgium": setFlag(Belgium); break;
                case "Belize": setFlag(Belize); break;
                case "Benin": setFlag(Benin); break;
                case "Bermuda": setFlag(Bermuda); break;
                case "Bhutan": setFlag(Bhutan); break;
                case "BoliviaPlurinationalStateOf": setFlag(BoliviaPlurinationalStateOf); break;
                case "BosniaAndHerzegovina": setFlag(BosniaAndHerzegovina); break;
                case "Botswana": setFlag(Botswana); break;
                case "BouvetIsland": setFlag(BouvetIsland); break;
                case "Brazil": setFlag(Brazil); break;
                case "BritishIndianOceanTerritory": setFlag(BritishIndianOceanTerritory); break;
                case "BruneiDarussalam": setFlag(BruneiDarussalam); break;
                case "Bulgaria": setFlag(Bulgaria); break;
                case "BurkinaFaso": setFlag(BurkinaFaso); break;
                case "Burundi": setFlag(Burundi); break;
                case "Cambodia": setFlag(Cambodia); break;
                case "Cameroon": setFlag(Cameroon); break;
                case "Canada": setFlag(Canada); break;
                case "CapeVerde": setFlag(CapeVerde); break;
                case "CaribbeanNetherlands": setFlag(CaribbeanNetherlands); break;
                case "CaymanIslands": setFlag(CaymanIslands); break;
                case "CentralAfricanRepublic": setFlag(CentralAfricanRepublic); break;
                case "Chad": setFlag(Chad); break;
                case "Chile": setFlag(Chile); break;
                case "ChinaPeoplesRepublicOfChina": setFlag(ChinaPeoplesRepublicOfChina); break;
                case "ChristmasIsland": setFlag(ChristmasIsland); break;
                case "CocosKeelingIslands": setFlag(CocosKeelingIslands); break;
                case "Colombia": setFlag(Colombia); break;
                case "Comoros": setFlag(Comoros); break;
                case "CongoTheDemocraticRepublicOfThe": setFlag(CongoTheDemocraticRepublicOfThe); break;
                case "CookIslands": setFlag(CookIslands); break;
                case "CostaRica": setFlag(CostaRica); break;
                case "CoteDIvoire": setFlag(CoteDIvoire); break;
                case "Croatia": setFlag(Croatia); break;
                case "Cuba": setFlag(Cuba); break;
                case "Curacao": setFlag(Curacao); break;
                case "Cyprus": setFlag(Cyprus); break;
                case "CzechRepublic": setFlag(CzechRepublic); break;
                case "Denmark": setFlag(Denmark); break;
                case "Djibouti": setFlag(Djibouti); break;
                case "Dominica": setFlag(Dominica); break;
                case "DominicanRepublic": setFlag(DominicanRepublic); break;
                case "Ecuador": setFlag(Ecuador); break;
                case "Egypt": setFlag(Egypt); break;
                case "ElSalvador": setFlag(ElSalvador); break;
                case "England": setFlag(England); break;
                case "EquatorialGuinea": setFlag(EquatorialGuinea); break;
                case "Eritrea": setFlag(Eritrea); break;
                case "Estonia": setFlag(Estonia); break;
                case "Ethiopia": setFlag(Ethiopia); break;
                case "Europe": setFlag(Europe); break;
                case "FalklandIslandsMalvinas": setFlag(FalklandIslandsMalvinas); break;
                case "FaroeIslands": setFlag(FaroeIslands); break;
                case "Fiji": setFlag(Fiji); break;
                case "Finland": setFlag(Finland); break;
                case "France": setFlag(France); break;
                case "FrenchGuiana": setFlag(FrenchGuiana); break;
                case "FrenchPolynesia": setFlag(FrenchPolynesia); break;
                case "FrenchSouthernTerritories": setFlag(FrenchSouthernTerritories); break;
                case "Gabon": setFlag(Gabon); break;
                case "Gambia": setFlag(Gambia); break;
                case "Georgia": setFlag(Georgia); break;
                case "Germany": setFlag(Germany); break;
                case "Ghana": setFlag(Ghana); break;
                case "Gibraltar": setFlag(Gibraltar); break;
                case "Greece": setFlag(Greece); break;
                case "Greenland": setFlag(Greenland); break;
                case "Grenada": setFlag(Grenada); break;
                case "Guadeloupe": setFlag(Guadeloupe); break;
                case "Guam": setFlag(Guam); break;
                case "Guatemala": setFlag(Guatemala); break;
                case "Guernsey": setFlag(Guernsey); break;
                case "Guinea": setFlag(Guinea); break;
                case "GuineaBissau": setFlag(GuineaBissau); break;
                case "Guyana": setFlag(Guyana); break;
                case "Haiti": setFlag(Haiti); break;
                case "HeardIslandAndMcDonaldIslands": setFlag(HeardIslandAndMcDonaldIslands); break;
                case "HolySeeVaticanCityState": setFlag(HolySeeVaticanCityState); break;
                case "Honduras": setFlag(Honduras); break;
                case "HongKong": setFlag(HongKong); break;
                case "Hungary": setFlag(Hungary); break;
                case "Iceland": setFlag(Iceland); break;
                case "India": setFlag(India); break;
                case "Indonesia": setFlag(Indonesia); break;
                case "IranIslamicRepublicOf": setFlag(IranIslamicRepublicOf); break;
                case "Iraq": setFlag(Iraq); break;
                case "Ireland": setFlag(Ireland); break;
                case "IsleOfMan": setFlag(IsleOfMan); break;
                case "Israel": setFlag(Israel); break;
                case "Italy": setFlag(Italy); break;
                case "Jamaica": setFlag(Jamaica); break;
                case "Japan": setFlag(Japan); break;
                case "Jersey": setFlag(Jersey); break;
                case "Jordan": setFlag(Jordan); break;
                case "Kazakhstan": setFlag(Kazakhstan); break;
                case "Kenya": setFlag(Kenya); break;
                case "Kiribati": setFlag(Kiribati); break;
                case "KoreaDemocraticPeoplesRepublicOf": setFlag(KoreaDemocraticPeoplesRepublicOf); break;
                case "KoreaRepublicOf": setFlag(KoreaRepublicOf); break;
                case "Kosovo": setFlag(Kosovo); break;
                case "Kuwait": setFlag(Kuwait); break;
                case "Kyrgyzstan": setFlag(Kyrgyzstan); break;
                case "LaosLaoPeoplesDemocraticRepublic": setFlag(LaosLaoPeoplesDemocraticRepublic); break;
                case "Latvia": setFlag(Latvia); break;
                case "Lebanon": setFlag(Lebanon); break;
                case "Lesotho": setFlag(Lesotho); break;
                case "Liberia": setFlag(Liberia); break;
                case "Libya": setFlag(Libya); break;
                case "Liechtenstein": setFlag(Liechtenstein); break;
                case "Lithuania": setFlag(Lithuania); break;
                case "Luxembourg": setFlag(Luxembourg); break;
                case "Macao": setFlag(Macao); break;
                case "Madagascar": setFlag(Madagascar); break;
                case "Malawi": setFlag(Malawi); break;
                case "Malaysia": setFlag(Malaysia); break;
                case "Maldives": setFlag(Maldives); break;
                case "Mali": setFlag(Mali); break;
                case "Malta": setFlag(Malta); break;
                case "MarshallIslands": setFlag(MarshallIslands); break;
                case "Martinique": setFlag(Martinique); break;
                case "Mauritania": setFlag(Mauritania); break;
                case "Mauritius": setFlag(Mauritius); break;
                case "Mayotte": setFlag(Mayotte); break;
                case "Mexico": setFlag(Mexico); break;
                case "MicronesiaFederatedStatesOf": setFlag(MicronesiaFederatedStatesOf); break;
                case "MoldovaRepublicOf": setFlag(MoldovaRepublicOf); break;
                case "Monaco": setFlag(Monaco); break;
                case "Mongolia": setFlag(Mongolia); break;
                case "Montenegro": setFlag(Montenegro); break;
                case "Montserrat": setFlag(Montserrat); break;
                case "Morocco": setFlag(Morocco); break;
                case "Mozambique": setFlag(Mozambique); break;
                case "Myanmar": setFlag(Myanmar); break;
                case "Namibia": setFlag(Namibia); break;
                case "Nauru": setFlag(Nauru); break;
                case "Nepal": setFlag(Nepal); break;
                case "Netherlands": setFlag(Netherlands); break;
                case "NewCaledonia": setFlag(NewCaledonia); break;
                case "NewZealand": setFlag(NewZealand); break;
                case "Nicaragua": setFlag(Nicaragua); break;
                case "Niger": setFlag(Niger); break;
                case "Nigeria": setFlag(Nigeria); break;
                case "Niue": setFlag(Niue); break;
                case "NorfolkIsland": setFlag(NorfolkIsland); break;
                case "NorthMacedonia": setFlag(NorthMacedonia); break;
                case "NorthernIreland": setFlag(NorthernIreland); break;
                case "NorthernMarianaIslands": setFlag(NorthernMarianaIslands); break;
                case "Norway": setFlag(Norway); break;
                case "Oman": setFlag(Oman); break;
                case "Pakistan": setFlag(Pakistan); break;
                case "Palau": setFlag(Palau); break;
                case "Palestine": setFlag(Palestine); break;
                case "Panama": setFlag(Panama); break;
                case "PapuaNewGuinea": setFlag(PapuaNewGuinea); break;
                case "Paraguay": setFlag(Paraguay); break;
                case "Peru": setFlag(Peru); break;
                case "Philippines": setFlag(Philippines); break;
                case "Pitcairn": setFlag(Pitcairn); break;
                case "Poland": setFlag(Poland); break;
                case "Portugal": setFlag(Portugal); break;
                case "PuertoRico": setFlag(PuertoRico); break;
                case "Qatar": setFlag(Qatar); break;
                case "RepublicOfTheCongo": setFlag(RepublicOfTheCongo); break;
                case "Reunion": setFlag(Reunion); break;
                case "Romania": setFlag(Romania); break;
                case "RussianFederation": setFlag(RussianFederation); break;
                case "Rwanda": setFlag(Rwanda); break;
                case "SaintBarthelemy": setFlag(SaintBarthelemy); break;
                case "SaintHelenaAscensionAndTristanDaCunha": setFlag(SaintHelenaAscensionAndTristanDaCunha); break;
                case "SaintKittsAndNevis": setFlag(SaintKittsAndNevis); break;
                case "SaintLucia": setFlag(SaintLucia); break;
                case "SaintMartin": setFlag(SaintMartin); break;
                case "SaintPierreAndMiquelon": setFlag(SaintPierreAndMiquelon); break;
                case "SaintVincentAndTheGrenadines": setFlag(SaintVincentAndTheGrenadines); break;
                case "Samoa": setFlag(Samoa); break;
                case "SanMarino": setFlag(SanMarino); break;
                case "SaoTomeAndPrincipe": setFlag(SaoTomeAndPrincipe); break;
                case "SaudiArabia": setFlag(SaudiArabia); break;
                case "Scotland": setFlag(Scotland); break;
                case "Senegal": setFlag(Senegal); break;
                case "Serbia": setFlag(Serbia); break;
                case "Seychelles": setFlag(Seychelles); break;
                case "SierraLeone": setFlag(SierraLeone); break;
                case "Singapore": setFlag(Singapore); break;
                case "SintMaartenDutchPart": setFlag(SintMaartenDutchPart); break;
                case "Slovakia": setFlag(Slovakia); break;
                case "Slovenia": setFlag(Slovenia); break;
                case "SolomonIslands": setFlag(SolomonIslands); break;
                case "Somalia": setFlag(Somalia); break;
                case "SouthAfrica": setFlag(SouthAfrica); break;
                case "SouthGeorgiaAndTheSouthSandwichIslands": setFlag(SouthGeorgiaAndTheSouthSandwichIslands); break;
                case "SouthSudan": setFlag(SouthSudan); break;
                case "Spain": setFlag(Spain); break;
                case "SriLanka": setFlag(SriLanka); break;
                case "Sudan": setFlag(Sudan); break;
                case "Suriname": setFlag(Suriname); break;
                case "SvalbardAndJanMayenIslands": setFlag(SvalbardAndJanMayenIslands); break;
                case "Swaziland": setFlag(Swaziland); break;
                case "Sweden": setFlag(Sweden); break;
                case "Switzerland": setFlag(Switzerland); break;
                case "SyrianArabRepublic": setFlag(SyrianArabRepublic); break;
                case "TaiwanRepublicOfChina": setFlag(TaiwanRepublicOfChina); break;
                case "Tajikistan": setFlag(Tajikistan); break;
                case "TanzaniaUnitedRepublicOf": setFlag(TanzaniaUnitedRepublicOf); break;
                case "Thailand": setFlag(Thailand); break;
                case "TimorLeste": setFlag(TimorLeste); break;
                case "Togo": setFlag(Togo); break;
                case "Tokelau": setFlag(Tokelau); break;
                case "Tonga": setFlag(Tonga); break;
                case "TrinidadAndTobago": setFlag(TrinidadAndTobago); break;
                case "Tunisia": setFlag(Tunisia); break;
                case "Turkey": setFlag(Turkey); break;
                case "Turkmenistan": setFlag(Turkmenistan); break;
                case "TurksAndCaicosIslands": setFlag(TurksAndCaicosIslands); break;
                case "Tuvalu": setFlag(Tuvalu); break;
                case "USMinorOutlyingIslands": setFlag(USMinorOutlyingIslands); break;
                case "Uganda": setFlag(Uganda); break;
                case "Ukraine": setFlag(Ukraine); break;
                case "UnitedArabEmirates": setFlag(UnitedArabEmirates); break;
                case "UnitedKingdom": setFlag(UnitedKingdom); break;
                case "UnitedStates": setFlag(UnitedStates); break;
                case "Uruguay": setFlag(Uruguay); break;
                case "Uzbekistan": setFlag(Uzbekistan); break;
                case "Vanuatu": setFlag(Vanuatu); break;
                case "VenezuelaBolivarianRepublicOf": setFlag(VenezuelaBolivarianRepublicOf); break;
                case "Vietnam": setFlag(Vietnam); break;
                case "VirginIslandsBritish": setFlag(VirginIslandsBritish); break;
                case "VirginIslandsUS": setFlag(VirginIslandsUS); break;
                case "Wales": setFlag(Wales); break;
                case "WallisAndFutunaIslands": setFlag(WallisAndFutunaIslands); break;
                case "WesternSahara": setFlag(WesternSahara); break;
                case "Yemen": setFlag(Yemen); break;
                case "Zambia": setFlag(Zambia); break;
                case "Zimbabwe": setFlag(Zimbabwe); break;

			default:
				// Default case, you may handle it differently based on your requirements
				break
		}
	}

	return (
		<>
			<br />
			<Box p={3}>
				<Stack w="400px">
					<Button colorScheme="orange" onClick={handleClearAll}>
						New Event
					</Button>
					<NameInput onInputChange={handleInputChange} label="ImageTitle" placeholder="Enter Image Title" />
					<NameInput onInputChange={handleInputChange} label="SpielName" placeholder="Enter Spiel Name" />
					<NameInput onInputChange={handleInputChange} label="us1" placeholder="Enter us 1" />
					<NameInput onInputChange={handleInputChange} label="us2" placeholder="Enter us 2" />
					<HStack>
						<Text w="110px"> Our Flag :</Text>
						<Select onChange={event => handleFlagChange(event, setUsFlag)}>
							<option value="" disabled selected>
								--- Select a country ---
							</option>
							<optgroup label="Provinces">
								<option value="Ontario">Ontario</option>
								<option value="alberta">Alberta</option>
								<option value="BritishColumbia">British Columbia</option>
								<option value="Manitoba">Manitoba</option>
								<option value="NewBrunswick">New Brunswick</option>
								<option value="NewfoundlandAndLabrador">Newfoundland and Labrador</option>
								<option value="NovaScotia">Nova Scotia</option>
								<option value="NorthwestTerritories">Northwest Territories</option>
								<option value="Nunavut">Nunavut</option>
								<option value="PrinceEdwardIsland">Prince Edward Island</option>
								<option value="Quebec">Quebec</option>
								<option value="Saskatchewan">Saskatchewan</option>
								<option value="Yukon">Yukon</option>
							</optgroup>

							<optgroup label="World">
                            <option value="Afghanistan">Afghanistan</option> 
<option value="AlandIslands">AlandIslands</option> 
<option value="Albania">Albania</option> 
<option value="Algeria">Algeria</option> 
<option value="AmericanSamoa">AmericanSamoa</option> 
<option value="Andorra">Andorra</option> 
<option value="Angola">Angola</option> 
<option value="Anguilla">Anguilla</option> 
<option value="Antarctica">Antarctica</option> 
<option value="AntiguaAndBarbuda">AntiguaAndBarbuda</option> 
<option value="Argentina">Argentina</option> 
<option value="Armenia">Armenia</option> 
<option value="Aruba">Aruba</option> 
<option value="Australia">Australia</option> 
<option value="Austria">Austria</option> 
<option value="Azerbaijan">Azerbaijan</option> 
<option value="Bahamas">Bahamas</option> 
<option value="Bahrain">Bahrain</option> 
<option value="Bangladesh">Bangladesh</option> 
<option value="Barbados">Barbados</option> 
<option value="Belarus">Belarus</option> 
<option value="Belgium">Belgium</option> 
<option value="Belize">Belize</option> 
<option value="Benin">Benin</option> 
<option value="Bermuda">Bermuda</option> 
<option value="Bhutan">Bhutan</option> 
<option value="BoliviaPlurinationalStateOf">BoliviaPlurinationalStateOf</option> 
<option value="BosniaAndHerzegovina">BosniaAndHerzegovina</option> 
<option value="Botswana">Botswana</option> 
<option value="BouvetIsland">BouvetIsland</option> 
<option value="Brazil">Brazil</option> 
<option value="BritishIndianOceanTerritory">BritishIndianOceanTerritory</option> 
<option value="BruneiDarussalam">BruneiDarussalam</option> 
<option value="Bulgaria">Bulgaria</option> 
<option value="BurkinaFaso">BurkinaFaso</option> 
<option value="Burundi">Burundi</option> 
<option value="Cambodia">Cambodia</option> 
<option value="Cameroon">Cameroon</option> 
<option value="Canada">Canada</option> 
<option value="CapeVerde">CapeVerde</option> 
<option value="CaribbeanNetherlands">CaribbeanNetherlands</option> 
<option value="CaymanIslands">CaymanIslands</option> 
<option value="CentralAfricanRepublic">CentralAfricanRepublic</option> 
<option value="Chad">Chad</option> 
<option value="Chile">Chile</option> 
<option value="ChinaPeoplesRepublicOfChina">ChinaPeoplesRepublicOfChina</option> 
<option value="ChristmasIsland">ChristmasIsland</option> 
<option value="CocosKeelingIslands">CocosKeelingIslands</option> 
<option value="Colombia">Colombia</option> 
<option value="Comoros">Comoros</option> 
<option value="CongoTheDemocraticRepublicOfThe">CongoTheDemocraticRepublicOfThe</option> 
<option value="CookIslands">CookIslands</option> 
<option value="CostaRica">CostaRica</option> 
<option value="CoteDIvoire">CoteDIvoire</option> 
<option value="Croatia">Croatia</option> 
<option value="Cuba">Cuba</option> 
<option value="Curacao">Curacao</option> 
<option value="Cyprus">Cyprus</option> 
<option value="CzechRepublic">CzechRepublic</option> 
<option value="Denmark">Denmark</option> 
<option value="Djibouti">Djibouti</option> 
<option value="Dominica">Dominica</option> 
<option value="DominicanRepublic">DominicanRepublic</option> 
<option value="Ecuador">Ecuador</option> 
<option value="Egypt">Egypt</option> 
<option value="ElSalvador">ElSalvador</option> 
<option value="England">England</option> 
<option value="EquatorialGuinea">EquatorialGuinea</option> 
<option value="Eritrea">Eritrea</option> 
<option value="Estonia">Estonia</option> 
<option value="Ethiopia">Ethiopia</option> 
<option value="Europe">Europe</option> 
<option value="FalklandIslandsMalvinas">FalklandIslandsMalvinas</option> 
<option value="FaroeIslands">FaroeIslands</option> 
<option value="Fiji">Fiji</option> 
<option value="Finland">Finland</option> 
<option value="France">France</option> 
<option value="FrenchGuiana">FrenchGuiana</option> 
<option value="FrenchPolynesia">FrenchPolynesia</option> 
<option value="FrenchSouthernTerritories">FrenchSouthernTerritories</option> 
<option value="Gabon">Gabon</option> 
<option value="Gambia">Gambia</option> 
<option value="Georgia">Georgia</option> 
<option value="Germany">Germany</option> 
<option value="Ghana">Ghana</option> 
<option value="Gibraltar">Gibraltar</option> 
<option value="Greece">Greece</option> 
<option value="Greenland">Greenland</option> 
<option value="Grenada">Grenada</option> 
<option value="Guadeloupe">Guadeloupe</option> 
<option value="Guam">Guam</option> 
<option value="Guatemala">Guatemala</option> 
<option value="Guernsey">Guernsey</option> 
<option value="Guinea">Guinea</option> 
<option value="GuineaBissau">GuineaBissau</option> 
<option value="Guyana">Guyana</option> 
<option value="Haiti">Haiti</option> 
<option value="HeardIslandAndMcDonaldIslands">HeardIslandAndMcDonaldIslands</option> 
<option value="HolySeeVaticanCityState">HolySeeVaticanCityState</option> 
<option value="Honduras">Honduras</option> 
<option value="HongKong">HongKong</option> 
<option value="Hungary">Hungary</option> 
<option value="Iceland">Iceland</option> 
<option value="India">India</option> 
<option value="Indonesia">Indonesia</option> 
<option value="IranIslamicRepublicOf">IranIslamicRepublicOf</option> 
<option value="Iraq">Iraq</option> 
<option value="Ireland">Ireland</option> 
<option value="IsleOfMan">IsleOfMan</option> 
<option value="Israel">Israel</option> 
<option value="Italy">Italy</option> 
<option value="Jamaica">Jamaica</option> 
<option value="Japan">Japan</option> 
<option value="Jersey">Jersey</option> 
<option value="Jordan">Jordan</option> 
<option value="Kazakhstan">Kazakhstan</option> 
<option value="Kenya">Kenya</option> 
<option value="Kiribati">Kiribati</option> 
<option value="KoreaDemocraticPeoplesRepublicOf">KoreaDemocraticPeoplesRepublicOf</option> 
<option value="KoreaRepublicOf">KoreaRepublicOf</option> 
<option value="Kosovo">Kosovo</option> 
<option value="Kuwait">Kuwait</option> 
<option value="Kyrgyzstan">Kyrgyzstan</option> 
<option value="LaosLaoPeoplesDemocraticRepublic">LaosLaoPeoplesDemocraticRepublic</option> 
<option value="Latvia">Latvia</option> 
<option value="Lebanon">Lebanon</option> 
<option value="Lesotho">Lesotho</option> 
<option value="Liberia">Liberia</option> 
<option value="Libya">Libya</option> 
<option value="Liechtenstein">Liechtenstein</option> 
<option value="Lithuania">Lithuania</option> 
<option value="Luxembourg">Luxembourg</option> 
<option value="Macao">Macao</option> 
<option value="Madagascar">Madagascar</option> 
<option value="Malawi">Malawi</option> 
<option value="Malaysia">Malaysia</option> 
<option value="Maldives">Maldives</option> 
<option value="Mali">Mali</option> 
<option value="Malta">Malta</option> 
<option value="MarshallIslands">MarshallIslands</option> 
<option value="Martinique">Martinique</option> 
<option value="Mauritania">Mauritania</option> 
<option value="Mauritius">Mauritius</option> 
<option value="Mayotte">Mayotte</option> 
<option value="Mexico">Mexico</option> 
<option value="MicronesiaFederatedStatesOf">MicronesiaFederatedStatesOf</option> 
<option value="MoldovaRepublicOf">MoldovaRepublicOf</option> 
<option value="Monaco">Monaco</option> 
<option value="Mongolia">Mongolia</option> 
<option value="Montenegro">Montenegro</option> 
<option value="Montserrat">Montserrat</option> 
<option value="Morocco">Morocco</option> 
<option value="Mozambique">Mozambique</option> 
<option value="Myanmar">Myanmar</option> 
<option value="Namibia">Namibia</option> 
<option value="Nauru">Nauru</option> 
<option value="Nepal">Nepal</option> 
<option value="Netherlands">Netherlands</option> 
<option value="NewCaledonia">NewCaledonia</option> 
<option value="NewZealand">NewZealand</option> 
<option value="Nicaragua">Nicaragua</option> 
<option value="Niger">Niger</option> 
<option value="Nigeria">Nigeria</option> 
<option value="Niue">Niue</option> 
<option value="NorfolkIsland">NorfolkIsland</option> 
<option value="NorthMacedonia">NorthMacedonia</option> 
<option value="NorthernIreland">NorthernIreland</option> 
<option value="NorthernMarianaIslands">NorthernMarianaIslands</option> 
<option value="Norway">Norway</option> 
<option value="Oman">Oman</option> 
<option value="Pakistan">Pakistan</option> 
<option value="Palau">Palau</option> 
<option value="Palestine">Palestine</option> 
<option value="Panama">Panama</option> 
<option value="PapuaNewGuinea">PapuaNewGuinea</option> 
<option value="Paraguay">Paraguay</option> 
<option value="Peru">Peru</option> 
<option value="Philippines">Philippines</option> 
<option value="Pitcairn">Pitcairn</option> 
<option value="Poland">Poland</option> 
<option value="Portugal">Portugal</option> 
<option value="PuertoRico">PuertoRico</option> 
<option value="Qatar">Qatar</option> 
<option value="RepublicOfTheCongo">RepublicOfTheCongo</option> 
<option value="Reunion">Reunion</option> 
<option value="Romania">Romania</option> 
<option value="RussianFederation">RussianFederation</option> 
<option value="Rwanda">Rwanda</option> 
<option value="SaintBarthelemy">SaintBarthelemy</option> 
<option value="SaintHelenaAscensionAndTristanDaCunha">SaintHelenaAscensionAndTristanDaCunha</option> 
<option value="SaintKittsAndNevis">SaintKittsAndNevis</option> 
<option value="SaintLucia">SaintLucia</option> 
<option value="SaintMartin">SaintMartin</option> 
<option value="SaintPierreAndMiquelon">SaintPierreAndMiquelon</option> 
<option value="SaintVincentAndTheGrenadines">SaintVincentAndTheGrenadines</option> 
<option value="Samoa">Samoa</option> 
<option value="SanMarino">SanMarino</option> 
<option value="SaoTomeAndPrincipe">SaoTomeAndPrincipe</option> 
<option value="SaudiArabia">SaudiArabia</option> 
<option value="Scotland">Scotland</option> 
<option value="Senegal">Senegal</option> 
<option value="Serbia">Serbia</option> 
<option value="Seychelles">Seychelles</option> 
<option value="SierraLeone">SierraLeone</option> 
<option value="Singapore">Singapore</option> 
<option value="SintMaartenDutchPart">SintMaartenDutchPart</option> 
<option value="Slovakia">Slovakia</option> 
<option value="Slovenia">Slovenia</option> 
<option value="SolomonIslands">SolomonIslands</option> 
<option value="Somalia">Somalia</option> 
<option value="SouthAfrica">SouthAfrica</option> 
<option value="SouthGeorgiaAndTheSouthSandwichIslands">SouthGeorgiaAndTheSouthSandwichIslands</option> 
<option value="SouthSudan">SouthSudan</option> 
<option value="Spain">Spain</option> 
<option value="SriLanka">SriLanka</option> 
<option value="Sudan">Sudan</option> 
<option value="Suriname">Suriname</option> 
<option value="SvalbardAndJanMayenIslands">SvalbardAndJanMayenIslands</option> 
<option value="Swaziland">Swaziland</option> 
<option value="Sweden">Sweden</option> 
<option value="Switzerland">Switzerland</option> 
<option value="SyrianArabRepublic">SyrianArabRepublic</option> 
<option value="TaiwanRepublicOfChina">TaiwanRepublicOfChina</option> 
<option value="Tajikistan">Tajikistan</option> 
<option value="TanzaniaUnitedRepublicOf">TanzaniaUnitedRepublicOf</option> 
<option value="Thailand">Thailand</option> 
<option value="TimorLeste">TimorLeste</option> 
<option value="Togo">Togo</option> 
<option value="Tokelau">Tokelau</option> 
<option value="Tonga">Tonga</option> 
<option value="TrinidadAndTobago">TrinidadAndTobago</option> 
<option value="Tunisia">Tunisia</option> 
<option value="Turkey">Turkey</option> 
<option value="Turkmenistan">Turkmenistan</option> 
<option value="TurksAndCaicosIslands">TurksAndCaicosIslands</option> 
<option value="Tuvalu">Tuvalu</option> 
<option value="USMinorOutlyingIslands">USMinorOutlyingIslands</option> 
<option value="Uganda">Uganda</option> 
<option value="Ukraine">Ukraine</option> 
<option value="UnitedArabEmirates">UnitedArabEmirates</option> 
<option value="UnitedKingdom">UnitedKingdom</option> 
<option value="UnitedStates">UnitedStates</option> 
<option value="Uruguay">Uruguay</option> 
<option value="Uzbekistan">Uzbekistan</option> 
<option value="Vanuatu">Vanuatu</option> 
<option value="VenezuelaBolivarianRepublicOf">VenezuelaBolivarianRepublicOf</option> 
<option value="Vietnam">Vietnam</option> 
<option value="VirginIslandsBritish">VirginIslandsBritish</option> 
<option value="VirginIslandsUS">VirginIslandsUS</option> 
<option value="Wales">Wales</option> 
<option value="WallisAndFutunaIslands">WallisAndFutunaIslands</option> 
<option value="WesternSahara">WesternSahara</option> 
<option value="Yemen">Yemen</option> 
<option value="Zambia">Zambia</option> 
<option value="Zimbabwe">Zimbabwe</option> 

							</optgroup>
						</Select>
					</HStack>

					{inputFields.map((_, index) => (
						<VStack key={index} spacing={4} fontFamily="sans-serif" pb={1}>
							<HStack w="100%" justify={"space-evenly"}>
								<Text w="100px">Month :</Text>
								<Select id={`month`} onChange={e => handleInputChangeOpponent(index, "month", e.target.value)} value={formData.amPm} placeholder="---">
									<option value="January">January</option>
									<option value="February">February</option>
									<option value="March">March</option>
									<option value="April">April</option>
									<option value="May">May</option>
									<option value="June">June</option>
									<option value="July">July</option>
									<option value="August">August</option>
									<option value="September">September</option>
									<option value="October">October</option>
									<option value="November">November</option>
									<option value="December">December</option>
								</Select>
							</HStack>
							<HStack w="100%">
								<label htmlFor={`day`}>Day:</label>
								<Select id={`day`} onChange={e => handleInputChangeOpponent(index, "day", e.target.value)} value={formData.day} placeholder="---">
									{days.map(day => (
										<option key={day} value={day}>
											{day}
										</option>
									))}
								</Select>
							</HStack>

							<label htmlFor={`time`}>Time:</label>
							<HStack w="100%">
								<Select id={`hour`} onChange={e => handleInputChangeOpponent(index, "hour", e.target.value)} value={formData.hour} placeholder="---">
									{hours.map(hour => (
										<option key={hour} value={hour}>
											{hour}
										</option>
									))}
								</Select>
								<Select id={`minute`} onChange={e => handleInputChangeOpponent(index, "minute", e.target.value)} value={formData.minute} placeholder="---">
									{minutes.map(minute => (
										<option key={minute} value={minute}>
											{minute}
										</option>
									))}
								</Select>
								<Select id={`amPm`} onChange={e => handleInputChangeOpponent(index, "amPm", e.target.value)} value={formData.amPm} placeholder="---">
									<option value="am">AM</option>
									<option value="pm">PM</option>
								</Select>
							</HStack>
						</VStack>
					))}

					<NameInput onInputChange={handleInputChange} label="Opponent1" placeholder="Enter Opponent 1" />
					<NameInput onInputChange={handleInputChange} label="Opponent2" placeholder="Enter Opponent 2" />
					<HStack>
						<Text w="110px"> Their Flag :</Text>
						<Select onChange={event => handleFlagChange(event, setThemFlag)}>
							<option value="" disabled selected>
								--- Select a country ---
							</option>
							<optgroup label="Provinces">
								<option value="Ontario">Ontario</option>
								<option value="alberta">Alberta</option>
								<option value="BritishColumbia">British Columbia</option>
								<option value="Manitoba">Manitoba</option>
								<option value="NewBrunswick">New Brunswick</option>
								<option value="NewfoundlandAndLabrador">Newfoundland and Labrador</option>
								<option value="NovaScotia">Nova Scotia</option>
								<option value="NorthwestTerritories">Northwest Territories</option>
								<option value="Nunavut">Nunavut</option>
								<option value="PrinceEdwardIsland">Prince Edward Island</option>
								<option value="Quebec">Quebec</option>
								<option value="Saskatchewan">Saskatchewan</option>
								<option value="Yukon">Yukon</option>
							</optgroup>

							<optgroup label="World">
                            <option value="Afghanistan">Afghanistan</option> 
<option value="AlandIslands">AlandIslands</option> 
<option value="Albania">Albania</option> 
<option value="Algeria">Algeria</option> 
<option value="AmericanSamoa">AmericanSamoa</option> 
<option value="Andorra">Andorra</option> 
<option value="Angola">Angola</option> 
<option value="Anguilla">Anguilla</option> 
<option value="Antarctica">Antarctica</option> 
<option value="AntiguaAndBarbuda">AntiguaAndBarbuda</option> 
<option value="Argentina">Argentina</option> 
<option value="Armenia">Armenia</option> 
<option value="Aruba">Aruba</option> 
<option value="Australia">Australia</option> 
<option value="Austria">Austria</option> 
<option value="Azerbaijan">Azerbaijan</option> 
<option value="Bahamas">Bahamas</option> 
<option value="Bahrain">Bahrain</option> 
<option value="Bangladesh">Bangladesh</option> 
<option value="Barbados">Barbados</option> 
<option value="Belarus">Belarus</option> 
<option value="Belgium">Belgium</option> 
<option value="Belize">Belize</option> 
<option value="Benin">Benin</option> 
<option value="Bermuda">Bermuda</option> 
<option value="Bhutan">Bhutan</option> 
<option value="BoliviaPlurinationalStateOf">BoliviaPlurinationalStateOf</option> 
<option value="BosniaAndHerzegovina">BosniaAndHerzegovina</option> 
<option value="Botswana">Botswana</option> 
<option value="BouvetIsland">BouvetIsland</option> 
<option value="Brazil">Brazil</option> 
<option value="BritishIndianOceanTerritory">BritishIndianOceanTerritory</option> 
<option value="BruneiDarussalam">BruneiDarussalam</option> 
<option value="Bulgaria">Bulgaria</option> 
<option value="BurkinaFaso">BurkinaFaso</option> 
<option value="Burundi">Burundi</option> 
<option value="Cambodia">Cambodia</option> 
<option value="Cameroon">Cameroon</option> 
<option value="Canada">Canada</option> 
<option value="CapeVerde">CapeVerde</option> 
<option value="CaribbeanNetherlands">CaribbeanNetherlands</option> 
<option value="CaymanIslands">CaymanIslands</option> 
<option value="CentralAfricanRepublic">CentralAfricanRepublic</option> 
<option value="Chad">Chad</option> 
<option value="Chile">Chile</option> 
<option value="ChinaPeoplesRepublicOfChina">ChinaPeoplesRepublicOfChina</option> 
<option value="ChristmasIsland">ChristmasIsland</option> 
<option value="CocosKeelingIslands">CocosKeelingIslands</option> 
<option value="Colombia">Colombia</option> 
<option value="Comoros">Comoros</option> 
<option value="CongoTheDemocraticRepublicOfThe">CongoTheDemocraticRepublicOfThe</option> 
<option value="CookIslands">CookIslands</option> 
<option value="CostaRica">CostaRica</option> 
<option value="CoteDIvoire">CoteDIvoire</option> 
<option value="Croatia">Croatia</option> 
<option value="Cuba">Cuba</option> 
<option value="Curacao">Curacao</option> 
<option value="Cyprus">Cyprus</option> 
<option value="CzechRepublic">CzechRepublic</option> 
<option value="Denmark">Denmark</option> 
<option value="Djibouti">Djibouti</option> 
<option value="Dominica">Dominica</option> 
<option value="DominicanRepublic">DominicanRepublic</option> 
<option value="Ecuador">Ecuador</option> 
<option value="Egypt">Egypt</option> 
<option value="ElSalvador">ElSalvador</option> 
<option value="England">England</option> 
<option value="EquatorialGuinea">EquatorialGuinea</option> 
<option value="Eritrea">Eritrea</option> 
<option value="Estonia">Estonia</option> 
<option value="Ethiopia">Ethiopia</option> 
<option value="Europe">Europe</option> 
<option value="FalklandIslandsMalvinas">FalklandIslandsMalvinas</option> 
<option value="FaroeIslands">FaroeIslands</option> 
<option value="Fiji">Fiji</option> 
<option value="Finland">Finland</option> 
<option value="France">France</option> 
<option value="FrenchGuiana">FrenchGuiana</option> 
<option value="FrenchPolynesia">FrenchPolynesia</option> 
<option value="FrenchSouthernTerritories">FrenchSouthernTerritories</option> 
<option value="Gabon">Gabon</option> 
<option value="Gambia">Gambia</option> 
<option value="Georgia">Georgia</option> 
<option value="Germany">Germany</option> 
<option value="Ghana">Ghana</option> 
<option value="Gibraltar">Gibraltar</option> 
<option value="Greece">Greece</option> 
<option value="Greenland">Greenland</option> 
<option value="Grenada">Grenada</option> 
<option value="Guadeloupe">Guadeloupe</option> 
<option value="Guam">Guam</option> 
<option value="Guatemala">Guatemala</option> 
<option value="Guernsey">Guernsey</option> 
<option value="Guinea">Guinea</option> 
<option value="GuineaBissau">GuineaBissau</option> 
<option value="Guyana">Guyana</option> 
<option value="Haiti">Haiti</option> 
<option value="HeardIslandAndMcDonaldIslands">HeardIslandAndMcDonaldIslands</option> 
<option value="HolySeeVaticanCityState">HolySeeVaticanCityState</option> 
<option value="Honduras">Honduras</option> 
<option value="HongKong">HongKong</option> 
<option value="Hungary">Hungary</option> 
<option value="Iceland">Iceland</option> 
<option value="India">India</option> 
<option value="Indonesia">Indonesia</option> 
<option value="IranIslamicRepublicOf">IranIslamicRepublicOf</option> 
<option value="Iraq">Iraq</option> 
<option value="Ireland">Ireland</option> 
<option value="IsleOfMan">IsleOfMan</option> 
<option value="Israel">Israel</option> 
<option value="Italy">Italy</option> 
<option value="Jamaica">Jamaica</option> 
<option value="Japan">Japan</option> 
<option value="Jersey">Jersey</option> 
<option value="Jordan">Jordan</option> 
<option value="Kazakhstan">Kazakhstan</option> 
<option value="Kenya">Kenya</option> 
<option value="Kiribati">Kiribati</option> 
<option value="KoreaDemocraticPeoplesRepublicOf">KoreaDemocraticPeoplesRepublicOf</option> 
<option value="KoreaRepublicOf">KoreaRepublicOf</option> 
<option value="Kosovo">Kosovo</option> 
<option value="Kuwait">Kuwait</option> 
<option value="Kyrgyzstan">Kyrgyzstan</option> 
<option value="LaosLaoPeoplesDemocraticRepublic">LaosLaoPeoplesDemocraticRepublic</option> 
<option value="Latvia">Latvia</option> 
<option value="Lebanon">Lebanon</option> 
<option value="Lesotho">Lesotho</option> 
<option value="Liberia">Liberia</option> 
<option value="Libya">Libya</option> 
<option value="Liechtenstein">Liechtenstein</option> 
<option value="Lithuania">Lithuania</option> 
<option value="Luxembourg">Luxembourg</option> 
<option value="Macao">Macao</option> 
<option value="Madagascar">Madagascar</option> 
<option value="Malawi">Malawi</option> 
<option value="Malaysia">Malaysia</option> 
<option value="Maldives">Maldives</option> 
<option value="Mali">Mali</option> 
<option value="Malta">Malta</option> 
<option value="MarshallIslands">MarshallIslands</option> 
<option value="Martinique">Martinique</option> 
<option value="Mauritania">Mauritania</option> 
<option value="Mauritius">Mauritius</option> 
<option value="Mayotte">Mayotte</option> 
<option value="Mexico">Mexico</option> 
<option value="MicronesiaFederatedStatesOf">MicronesiaFederatedStatesOf</option> 
<option value="MoldovaRepublicOf">MoldovaRepublicOf</option> 
<option value="Monaco">Monaco</option> 
<option value="Mongolia">Mongolia</option> 
<option value="Montenegro">Montenegro</option> 
<option value="Montserrat">Montserrat</option> 
<option value="Morocco">Morocco</option> 
<option value="Mozambique">Mozambique</option> 
<option value="Myanmar">Myanmar</option> 
<option value="Namibia">Namibia</option> 
<option value="Nauru">Nauru</option> 
<option value="Nepal">Nepal</option> 
<option value="Netherlands">Netherlands</option> 
<option value="NewCaledonia">NewCaledonia</option> 
<option value="NewZealand">NewZealand</option> 
<option value="Nicaragua">Nicaragua</option> 
<option value="Niger">Niger</option> 
<option value="Nigeria">Nigeria</option> 
<option value="Niue">Niue</option> 
<option value="NorfolkIsland">NorfolkIsland</option> 
<option value="NorthMacedonia">NorthMacedonia</option> 
<option value="NorthernIreland">NorthernIreland</option> 
<option value="NorthernMarianaIslands">NorthernMarianaIslands</option> 
<option value="Norway">Norway</option> 
<option value="Oman">Oman</option> 
<option value="Pakistan">Pakistan</option> 
<option value="Palau">Palau</option> 
<option value="Palestine">Palestine</option> 
<option value="Panama">Panama</option> 
<option value="PapuaNewGuinea">PapuaNewGuinea</option> 
<option value="Paraguay">Paraguay</option> 
<option value="Peru">Peru</option> 
<option value="Philippines">Philippines</option> 
<option value="Pitcairn">Pitcairn</option> 
<option value="Poland">Poland</option> 
<option value="Portugal">Portugal</option> 
<option value="PuertoRico">PuertoRico</option> 
<option value="Qatar">Qatar</option> 
<option value="RepublicOfTheCongo">RepublicOfTheCongo</option> 
<option value="Reunion">Reunion</option> 
<option value="Romania">Romania</option> 
<option value="RussianFederation">RussianFederation</option> 
<option value="Rwanda">Rwanda</option> 
<option value="SaintBarthelemy">SaintBarthelemy</option> 
<option value="SaintHelenaAscensionAndTristanDaCunha">SaintHelenaAscensionAndTristanDaCunha</option> 
<option value="SaintKittsAndNevis">SaintKittsAndNevis</option> 
<option value="SaintLucia">SaintLucia</option> 
<option value="SaintMartin">SaintMartin</option> 
<option value="SaintPierreAndMiquelon">SaintPierreAndMiquelon</option> 
<option value="SaintVincentAndTheGrenadines">SaintVincentAndTheGrenadines</option> 
<option value="Samoa">Samoa</option> 
<option value="SanMarino">SanMarino</option> 
<option value="SaoTomeAndPrincipe">SaoTomeAndPrincipe</option> 
<option value="SaudiArabia">SaudiArabia</option> 
<option value="Scotland">Scotland</option> 
<option value="Senegal">Senegal</option> 
<option value="Serbia">Serbia</option> 
<option value="Seychelles">Seychelles</option> 
<option value="SierraLeone">SierraLeone</option> 
<option value="Singapore">Singapore</option> 
<option value="SintMaartenDutchPart">SintMaartenDutchPart</option> 
<option value="Slovakia">Slovakia</option> 
<option value="Slovenia">Slovenia</option> 
<option value="SolomonIslands">SolomonIslands</option> 
<option value="Somalia">Somalia</option> 
<option value="SouthAfrica">SouthAfrica</option> 
<option value="SouthGeorgiaAndTheSouthSandwichIslands">SouthGeorgiaAndTheSouthSandwichIslands</option> 
<option value="SouthSudan">SouthSudan</option> 
<option value="Spain">Spain</option> 
<option value="SriLanka">SriLanka</option> 
<option value="Sudan">Sudan</option> 
<option value="Suriname">Suriname</option> 
<option value="SvalbardAndJanMayenIslands">SvalbardAndJanMayenIslands</option> 
<option value="Swaziland">Swaziland</option> 
<option value="Sweden">Sweden</option> 
<option value="Switzerland">Switzerland</option> 
<option value="SyrianArabRepublic">SyrianArabRepublic</option> 
<option value="TaiwanRepublicOfChina">TaiwanRepublicOfChina</option> 
<option value="Tajikistan">Tajikistan</option> 
<option value="TanzaniaUnitedRepublicOf">TanzaniaUnitedRepublicOf</option> 
<option value="Thailand">Thailand</option> 
<option value="TimorLeste">TimorLeste</option> 
<option value="Togo">Togo</option> 
<option value="Tokelau">Tokelau</option> 
<option value="Tonga">Tonga</option> 
<option value="TrinidadAndTobago">TrinidadAndTobago</option> 
<option value="Tunisia">Tunisia</option> 
<option value="Turkey">Turkey</option> 
<option value="Turkmenistan">Turkmenistan</option> 
<option value="TurksAndCaicosIslands">TurksAndCaicosIslands</option> 
<option value="Tuvalu">Tuvalu</option> 
<option value="USMinorOutlyingIslands">USMinorOutlyingIslands</option> 
<option value="Uganda">Uganda</option> 
<option value="Ukraine">Ukraine</option> 
<option value="UnitedArabEmirates">UnitedArabEmirates</option> 
<option value="UnitedKingdom">UnitedKingdom</option> 
<option value="UnitedStates">UnitedStates</option> 
<option value="Uruguay">Uruguay</option> 
<option value="Uzbekistan">Uzbekistan</option> 
<option value="Vanuatu">Vanuatu</option> 
<option value="VenezuelaBolivarianRepublicOf">VenezuelaBolivarianRepublicOf</option> 
<option value="Vietnam">Vietnam</option> 
<option value="VirginIslandsBritish">VirginIslandsBritish</option> 
<option value="VirginIslandsUS">VirginIslandsUS</option> 
<option value="Wales">Wales</option> 
<option value="WallisAndFutunaIslands">WallisAndFutunaIslands</option> 
<option value="WesternSahara">WesternSahara</option> 
<option value="Yemen">Yemen</option> 
<option value="Zambia">Zambia</option> 
<option value="Zimbabwe">Zimbabwe</option> 

							</optgroup>
						</Select>
					
					</HStack>
				</Stack>
			</Box>
			<br />
			<Button colorScheme="orange" onClick={convertToJpg}>
				Convert to JPG
			</Button>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<Box
				ref={divRef}
				style={{
					height: "700px",
					width: "700px",
					color: "black",
					position: "relative", // Ensure proper stacking of elements
				}}
				border={"1px solid black"}
			>
				<Box h="558px" pt={1} mt="-5px">
					<Image src={backgroundBanner} alt="vs banner" h="600px" w="1000px" />
					<VStack h="100%" gap={20} mt="-555px" width="700px">
						<Heading textAlign="center" color="white" textShadow={"5px 5px 10px #052939"} h="50px">
							{formData.SpielName}
						</Heading>
						<HStack justify={"space-between"} px="10px" w="100%">
							<Card w="300" mx="10px" bg="#ffe40199" border={"1px groove #ffe40199"} variant="elevated">
								<Image src={usFlag} alt="{formData.usFlag}" h="140" borderRadius="lg" mb={4} border={"5px outset #ffe40199"} />
								<Flex h="100px" align={"center"} justify={"center"} borderRadius="md">
									<Heading textAlign="center" mt="-40px" color="white" textShadow={"5px 5px 10px #052939"}>
										{formData.us1} <br />
										{formData.us2}
									</Heading>
								</Flex>
							</Card>
							<Box> </Box>
							<Card w="300" mx="10px" bg="#00de7199" border={"1px groove #00de7199"} variant="elevated">
								<Image src={themFlag} h="140" borderRadius="lg" mb={4} border={"5px outset #00de7199"} />
								<Flex h="100px" align={"center"} justify={"center"} borderRadius="md">
									<Heading textAlign="center" mt="-40px" color="white" textShadow={"5px 5px 10px #052939"}>
										{formData.Opponent1} <br />
										{formData.Opponent2}
									</Heading>
								</Flex>
							</Card>
						</HStack>
						<Heading textAlign="center" color="white" textShadow={"5px 5px 10px #052939"}>
							{inputFields.map((field, index) => (
								<span key={index}>
									{field.month} {field.day}
									{getOrdinalSuffix(field.day)} {field.hour}:{field.minute}
									{field.amPm}
								</span>
							))}
						</Heading>
					</VStack>
				</Box>
				<Image src={sponsorBanner} h="125px" w="full" alt="Background" mt="20px" />
			</Box>
			<br />
			<br /> <br />
			<br /> <br />
			<br /> <br />
			<br /> <br />
			<br /> <br />
			<br />
			<br />
		</>
	)
}
