import html2canvas from "html2canvas"
import React, { useState, useRef, useEffect } from "react"
import { Box, Button, Card, Flex, HStack, Heading, Image, Input, Select, VStack, Text, Stack } from "@chakra-ui/react"
import sponsorBanner from "./images/SponsorBanner2.jpg"
import backgroundBanner from "./images/bground2.jpg"

// Provincial Flag imports
import Ontario from "./flags/flag/cad_on.png"
import Alberta from "./flags/flag/cad_ab.png"
import BritishColumbia from "./flags/flag/cad_bc.png"
import Manitoba from "./flags/flag/cad_mb.png"
import NewBrunswick from "./flags/flag/cad_nb.png"
import NewfoundlandAndLabrador from "./flags/flag/cad_nl.png"
import NovaScotia from "./flags/flag/cad_ns.png"
import NorthwestTerritories from "./flags/flag/cad_nt.png"
import Nunavut from "./flags/flag/cad_nu.png"
import PrinceEdwardIsland from "./flags/flag/cad_pe.png"
import Quebec from "./flags/flag/cad_qc.png"
import Saskatchewan from "./flags/flag/cad_sk.png"
import Yukon from "./flags/flag/cad_yt.png"
// World Flag imports
import Afghanistan from "./flags/flag/af.png"
import AlandIslands from "./flags/flag/ax.png"
import Albania from "./flags/flag/al.png"
import Algeria from "./flags/flag/dz.png"
import AmericanSamoa from "./flags/flag/as.png"
import Andorra from "./flags/flag/ad.png"
import Angola from "./flags/flag/ao.png"
import Anguilla from "./flags/flag/ai.png"
import Antarctica from "./flags/flag/aq.png"
import AntiguaAndBarbuda from "./flags/flag/ag.png"
import Argentina from "./flags/flag/ar.png"
import Armenia from "./flags/flag/am.png"
import Aruba from "./flags/flag/aw.png"
import Australia from "./flags/flag/au.png"
import Austria from "./flags/flag/at.png"
import Azerbaijan from "./flags/flag/az.png"
import Bahamas from "./flags/flag/bs.png"
import Bahrain from "./flags/flag/bh.png"
import Bangladesh from "./flags/flag/bd.png"
import Barbados from "./flags/flag/bb.png"
import Belarus from "./flags/flag/by.png"
import Belgium from "./flags/flag/be.png"
import Belize from "./flags/flag/bz.png"
import Benin from "./flags/flag/bj.png"
import Bermuda from "./flags/flag/bm.png"
import Bhutan from "./flags/flag/bt.png"
import BoliviaPlurinationalStateOf from "./flags/flag/bo.png"
import BosniaAndHerzegovina from "./flags/flag/ba.png"
import Botswana from "./flags/flag/bw.png"
import BouvetIsland from "./flags/flag/bv.png"
import Brazil from "./flags/flag/br.png"
import BritishIndianOceanTerritory from "./flags/flag/io.png"
import BruneiDarussalam from "./flags/flag/bn.png"
import Bulgaria from "./flags/flag/bg.png"
import BurkinaFaso from "./flags/flag/bf.png"
import Burundi from "./flags/flag/bi.png"
import Cambodia from "./flags/flag/kh.png"
import Cameroon from "./flags/flag/cm.png"
import Canada from "./flags/flag/ca.png"
import CapeVerde from "./flags/flag/cv.png"
import CaribbeanNetherlands from "./flags/flag/bq.png"
import CaymanIslands from "./flags/flag/ky.png"
import CentralAfricanRepublic from "./flags/flag/cf.png"
import Chad from "./flags/flag/td.png"
import Chile from "./flags/flag/cl.png"
import ChinaPeoplesRepublicOfChina from "./flags/flag/cn.png"
import ChristmasIsland from "./flags/flag/cx.png"
import CocosKeelingIslands from "./flags/flag/cc.png"
import Colombia from "./flags/flag/co.png"
import Comoros from "./flags/flag/km.png"
import CongoTheDemocraticRepublicOfThe from "./flags/flag/cd.png"
import CookIslands from "./flags/flag/ck.png"
import CostaRica from "./flags/flag/cr.png"
import CoteDIvoire from "./flags/flag/ci.png"
import Croatia from "./flags/flag/hr.png"
import Cuba from "./flags/flag/cu.png"
import Curacao from "./flags/flag/cw.png"
import Cyprus from "./flags/flag/cy.png"
import CzechRepublic from "./flags/flag/cz.png"
import Denmark from "./flags/flag/dk.png"
import Djibouti from "./flags/flag/dj.png"
import Dominica from "./flags/flag/dm.png"
import DominicanRepublic from "./flags/flag/do.png"
import Ecuador from "./flags/flag/ec.png"
import Egypt from "./flags/flag/eg.png"
import ElSalvador from "./flags/flag/sv.png"
import England from "./flags/flag/gb-eng.png"
import EquatorialGuinea from "./flags/flag/gq.png"
import Eritrea from "./flags/flag/er.png"
import Estonia from "./flags/flag/ee.png"
import Ethiopia from "./flags/flag/et.png"
import Europe from "./flags/flag/eu.png"
import FalklandIslandsMalvinas from "./flags/flag/fk.png"
import FaroeIslands from "./flags/flag/fo.png"
import Fiji from "./flags/flag/fj.png"
import Finland from "./flags/flag/fi.png"
import France from "./flags/flag/fr.png"
import FrenchGuiana from "./flags/flag/gf.png"
import FrenchPolynesia from "./flags/flag/pf.png"
import FrenchSouthernTerritories from "./flags/flag/tf.png"
import Gabon from "./flags/flag/ga.png"
import Gambia from "./flags/flag/gm.png"
import Georgia from "./flags/flag/ge.png"
import Germany from "./flags/flag/de.png"
import Ghana from "./flags/flag/gh.png"
import Gibraltar from "./flags/flag/gi.png"
import Greece from "./flags/flag/gr.png"
import Greenland from "./flags/flag/gl.png"
import Grenada from "./flags/flag/gd.png"
import Guadeloupe from "./flags/flag/gp.png"
import Guam from "./flags/flag/gu.png"
import Guatemala from "./flags/flag/gt.png"
import Guernsey from "./flags/flag/gg.png"
import Guinea from "./flags/flag/gn.png"
import GuineaBissau from "./flags/flag/gw.png"
import Guyana from "./flags/flag/gy.png"
import Haiti from "./flags/flag/ht.png"
import HeardIslandAndMcDonaldIslands from "./flags/flag/hm.png"
import HolySeeVaticanCityState from "./flags/flag/va.png"
import Honduras from "./flags/flag/hn.png"
import HongKong from "./flags/flag/hk.png"
import Hungary from "./flags/flag/hu.png"
import Iceland from "./flags/flag/is.png"
import India from "./flags/flag/in.png"
import Indonesia from "./flags/flag/id.png"
import IranIslamicRepublicOf from "./flags/flag/ir.png"
import Iraq from "./flags/flag/iq.png"
import Ireland from "./flags/flag/ie.png"
import IsleOfMan from "./flags/flag/im.png"
import Israel from "./flags/flag/il.png"
import Italy from "./flags/flag/it.png"
import Jamaica from "./flags/flag/jm.png"
import Japan from "./flags/flag/jp.png"
import Jersey from "./flags/flag/je.png"
import Jordan from "./flags/flag/jo.png"
import Kazakhstan from "./flags/flag/kz.png"
import Kenya from "./flags/flag/ke.png"
import Kiribati from "./flags/flag/ki.png"
import KoreaDemocraticPeoplesRepublicOf from "./flags/flag/kp.png"
import KoreaRepublicOf from "./flags/flag/kr.png"
import Kosovo from "./flags/flag/xk.png"
import Kuwait from "./flags/flag/kw.png"
import Kyrgyzstan from "./flags/flag/kg.png"
import LaosLaoPeoplesDemocraticRepublic from "./flags/flag/la.png"
import Latvia from "./flags/flag/lv.png"
import Lebanon from "./flags/flag/lb.png"
import Lesotho from "./flags/flag/ls.png"
import Liberia from "./flags/flag/lr.png"
import Libya from "./flags/flag/ly.png"
import Liechtenstein from "./flags/flag/li.png"
import Lithuania from "./flags/flag/lt.png"
import Luxembourg from "./flags/flag/lu.png"
import Macao from "./flags/flag/mo.png"
import Madagascar from "./flags/flag/mg.png"
import Malawi from "./flags/flag/mw.png"
import Malaysia from "./flags/flag/my.png"
import Maldives from "./flags/flag/mv.png"
import Mali from "./flags/flag/ml.png"
import Malta from "./flags/flag/mt.png"
import MarshallIslands from "./flags/flag/mh.png"
import Martinique from "./flags/flag/mq.png"
import Mauritania from "./flags/flag/mr.png"
import Mauritius from "./flags/flag/mu.png"
import Mayotte from "./flags/flag/yt.png"
import Mexico from "./flags/flag/mx.png"
import MicronesiaFederatedStatesOf from "./flags/flag/fm.png"
import MoldovaRepublicOf from "./flags/flag/md.png"
import Monaco from "./flags/flag/mc.png"
import Mongolia from "./flags/flag/mn.png"
import Montenegro from "./flags/flag/me.png"
import Montserrat from "./flags/flag/ms.png"
import Morocco from "./flags/flag/ma.png"
import Mozambique from "./flags/flag/mz.png"
import Myanmar from "./flags/flag/mm.png"
import Namibia from "./flags/flag/na.png"
import Nauru from "./flags/flag/nr.png"
import Nepal from "./flags/flag/np.png"
import Netherlands from "./flags/flag/nl.png"
import NewCaledonia from "./flags/flag/nc.png"
import NewZealand from "./flags/flag/nz.png"
import Nicaragua from "./flags/flag/ni.png"
import Niger from "./flags/flag/ne.png"
import Nigeria from "./flags/flag/ng.png"
import Niue from "./flags/flag/nu.png"
import NorfolkIsland from "./flags/flag/nf.png"
import NorthMacedonia from "./flags/flag/mk.png"
import NorthernIreland from "./flags/flag/gb-nir.png"
import NorthernMarianaIslands from "./flags/flag/mp.png"
import Norway from "./flags/flag/no.png"
import Oman from "./flags/flag/om.png"
import Pakistan from "./flags/flag/pk.png"
import Palau from "./flags/flag/pw.png"
import Palestine from "./flags/flag/ps.png"
import Panama from "./flags/flag/pa.png"
import PapuaNewGuinea from "./flags/flag/pg.png"
import Paraguay from "./flags/flag/py.png"
import Peru from "./flags/flag/pe.png"
import Philippines from "./flags/flag/ph.png"
import Pitcairn from "./flags/flag/pn.png"
import Poland from "./flags/flag/pl.png"
import Portugal from "./flags/flag/pt.png"
import PuertoRico from "./flags/flag/pr.png"
import Qatar from "./flags/flag/qa.png"
import RepublicOfTheCongo from "./flags/flag/cg.png"
import Reunion from "./flags/flag/re.png"
import Romania from "./flags/flag/ro.png"
import RussianFederation from "./flags/flag/ru.png"
import Rwanda from "./flags/flag/rw.png"
import SaintBarthelemy from "./flags/flag/bl.png"
import SaintHelenaAscensionAndTristanDaCunha from "./flags/flag/sh.png"
import SaintKittsAndNevis from "./flags/flag/kn.png"
import SaintLucia from "./flags/flag/lc.png"
import SaintMartin from "./flags/flag/mf.png"
import SaintPierreAndMiquelon from "./flags/flag/pm.png"
import SaintVincentAndTheGrenadines from "./flags/flag/vc.png"
import Samoa from "./flags/flag/ws.png"
import SanMarino from "./flags/flag/sm.png"
import SaoTomeAndPrincipe from "./flags/flag/st.png"
import SaudiArabia from "./flags/flag/sa.png"
import Scotland from "./flags/flag/gb-sct.png"
import Senegal from "./flags/flag/sn.png"
import Serbia from "./flags/flag/rs.png"
import Seychelles from "./flags/flag/sc.png"
import SierraLeone from "./flags/flag/sl.png"
import Singapore from "./flags/flag/sg.png"
import SintMaartenDutchPart from "./flags/flag/sx.png"
import Slovakia from "./flags/flag/sk.png"
import Slovenia from "./flags/flag/si.png"
import SolomonIslands from "./flags/flag/sb.png"
import Somalia from "./flags/flag/so.png"
import SouthAfrica from "./flags/flag/za.png"
import SouthGeorgiaAndTheSouthSandwichIslands from "./flags/flag/gs.png"
import SouthSudan from "./flags/flag/ss.png"
import Spain from "./flags/flag/es.png"
import SriLanka from "./flags/flag/lk.png"
import Sudan from "./flags/flag/sd.png"
import Suriname from "./flags/flag/sr.png"
import SvalbardAndJanMayenIslands from "./flags/flag/sj.png"
import Swaziland from "./flags/flag/sz.png"
import Sweden from "./flags/flag/se.png"
import Switzerland from "./flags/flag/ch.png"
import SyrianArabRepublic from "./flags/flag/sy.png"
import TaiwanRepublicOfChina from "./flags/flag/tw.png"
import Tajikistan from "./flags/flag/tj.png"
import TanzaniaUnitedRepublicOf from "./flags/flag/tz.png"
import Thailand from "./flags/flag/th.png"
import TimorLeste from "./flags/flag/tl.png"
import Togo from "./flags/flag/tg.png"
import Tokelau from "./flags/flag/tk.png"
import Tonga from "./flags/flag/to.png"
import TrinidadAndTobago from "./flags/flag/tt.png"
import Tunisia from "./flags/flag/tn.png"
import Turkey from "./flags/flag/tr.png"
import Turkmenistan from "./flags/flag/tm.png"
import TurksAndCaicosIslands from "./flags/flag/tc.png"
import Tuvalu from "./flags/flag/tv.png"
import USMinorOutlyingIslands from "./flags/flag/um.png"
import Uganda from "./flags/flag/ug.png"
import Ukraine from "./flags/flag/ua.png"
import UnitedArabEmirates from "./flags/flag/ae.png"
import UnitedKingdom from "./flags/flag/gb.png"
import UnitedStates from "./flags/flag/us.png"
import Uruguay from "./flags/flag/uy.png"
import Uzbekistan from "./flags/flag/uz.png"
import Vanuatu from "./flags/flag/vu.png"
import VenezuelaBolivarianRepublicOf from "./flags/flag/ve.png"
import Vietnam from "./flags/flag/vn.png"
import VirginIslandsBritish from "./flags/flag/vg.png"
import VirginIslandsUS from "./flags/flag/vi.png"
import Wales from "./flags/flag/gb-wls.png"
import WallisAndFutunaIslands from "./flags/flag/wf.png"
import WesternSahara from "./flags/flag/eh.png"
import Yemen from "./flags/flag/ye.png"
import Zambia from "./flags/flag/zm.png"
import Zimbabwe from "./flags/flag/zw.png"

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
		setIsComponentReady(true)
	}, [formData])

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
		const countryFlagMap = {
			// Province flags
			Ontario: Ontario,
			Alberta: Alberta,
			BritishColumbia: BritishColumbia,
			Manitoba: Manitoba,
			NewBrunswick: NewBrunswick,
			NewfoundlandAndLabrador: NewfoundlandAndLabrador,
			NovaScotia: NovaScotia,
			NorthwestTerritories: NorthwestTerritories,
			PrinceEdwardIsland: PrinceEdwardIsland,
			Quebec: Quebec,
			Nunavut: Nunavut,
			Saskatchewan: Saskatchewan,
			Yukon: Yukon,
			// World flags
			Afghanistan: Afghanistan,
			AlandIslands: AlandIslands,
			Albania: Albania,
			Algeria: Algeria,
			AmericanSamoa: AmericanSamoa,
			Andorra: Andorra,
			Angola: Angola,
			Anguilla: Anguilla,
			Antarctica: Antarctica,
			AntiguaAndBarbuda: AntiguaAndBarbuda,
			Argentina: Argentina,
			Armenia: Armenia,
			Aruba: Aruba,
			Australia: Australia,
			Austria: Austria,
			Azerbaijan: Azerbaijan,
			Bahamas: Bahamas,
			Bahrain: Bahrain,
			Bangladesh: Bangladesh,
			Barbados: Barbados,
			Belarus: Belarus,
			Belgium: Belgium,
			Belize: Belize,
			Benin: Benin,
			Bermuda: Bermuda,
			Bhutan: Bhutan,
			BoliviaPlurinationalStateOf: BoliviaPlurinationalStateOf,
			BosniaAndHerzegovina: BosniaAndHerzegovina,
			Botswana: Botswana,
			BouvetIsland: BouvetIsland,
			Brazil: Brazil,
			BritishIndianOceanTerritory: BritishIndianOceanTerritory,
			BruneiDarussalam: BruneiDarussalam,
			Bulgaria: Bulgaria,
			BurkinaFaso: BurkinaFaso,
			Burundi: Burundi,
			Cambodia: Cambodia,
			Cameroon: Cameroon,
			Canada: Canada,
			CapeVerde: CapeVerde,
			CaribbeanNetherlands: CaribbeanNetherlands,
			CaymanIslands: CaymanIslands,
			CentralAfricanRepublic: CentralAfricanRepublic,
			Chad: Chad,
			Chile: Chile,
			ChinaPeoplesRepublicOfChina: ChinaPeoplesRepublicOfChina,
			ChristmasIsland: ChristmasIsland,
			CocosKeelingIslands: CocosKeelingIslands,
			Colombia: Colombia,
			Comoros: Comoros,
			CongoTheDemocraticRepublicOfThe: CongoTheDemocraticRepublicOfThe,
			CookIslands: CookIslands,
			CostaRica: CostaRica,
			CoteDIvoire: CoteDIvoire,
			Croatia: Croatia,
			Cuba: Cuba,
			Curacao: Curacao,
			Cyprus: Cyprus,
			CzechRepublic: CzechRepublic,
			Denmark: Denmark,
			Djibouti: Djibouti,
			Dominica: Dominica,
			DominicanRepublic: DominicanRepublic,
			Ecuador: Ecuador,
			Egypt: Egypt,
			ElSalvador: ElSalvador,
			England: England,
			EquatorialGuinea: EquatorialGuinea,
			Eritrea: Eritrea,
			Estonia: Estonia,
			Ethiopia: Ethiopia,
			Europe: Europe,
			FalklandIslandsMalvinas: FalklandIslandsMalvinas,
			FaroeIslands: FaroeIslands,
			Fiji: Fiji,
			Finland: Finland,
			France: France,
			FrenchGuiana: FrenchGuiana,
			FrenchPolynesia: FrenchPolynesia,
			FrenchSouthernTerritories: FrenchSouthernTerritories,
			Gabon: Gabon,
			Gambia: Gambia,
			Georgia: Georgia,
			Germany: Germany,
			Ghana: Ghana,
			Gibraltar: Gibraltar,
			Greece: Greece,
			Greenland: Greenland,
			Grenada: Grenada,
			Guadeloupe: Guadeloupe,
			Guam: Guam,
			Guatemala: Guatemala,
			Guernsey: Guernsey,
			Guinea: Guinea,
			GuineaBissau: GuineaBissau,
			Guyana: Guyana,
			Haiti: Haiti,
			HeardIslandAndMcDonaldIslands: HeardIslandAndMcDonaldIslands,
			HolySeeVaticanCityState: HolySeeVaticanCityState,
			Honduras: Honduras,
			HongKong: HongKong,
			Hungary: Hungary,
			Iceland: Iceland,
			India: India,
			Indonesia: Indonesia,
			IranIslamicRepublicOf: IranIslamicRepublicOf,
			Iraq: Iraq,
			Ireland: Ireland,
			IsleOfMan: IsleOfMan,
			Israel: Israel,
			Italy: Italy,
			Jamaica: Jamaica,
			Japan: Japan,
			Jersey: Jersey,
			Jordan: Jordan,
			Kazakhstan: Kazakhstan,
			Kenya: Kenya,
			Kiribati: Kiribati,
			KoreaDemocraticPeoplesRepublicOf: KoreaDemocraticPeoplesRepublicOf,
			KoreaRepublicOf: KoreaRepublicOf,
			Kosovo: Kosovo,
			Kuwait: Kuwait,
			Kyrgyzstan: Kyrgyzstan,
			LaosLaoPeoplesDemocraticRepublic: LaosLaoPeoplesDemocraticRepublic,
			Latvia: Latvia,
			Lebanon: Lebanon,
			Lesotho: Lesotho,
			Liberia: Liberia,
			Libya: Libya,
			Liechtenstein: Liechtenstein,
			Lithuania: Lithuania,
			Luxembourg: Luxembourg,
			Macao: Macao,
			Madagascar: Madagascar,
			Malawi: Malawi,
			Malaysia: Malaysia,
			Maldives: Maldives,
			Mali: Mali,
			Malta: Malta,
			MarshallIslands: MarshallIslands,
			Martinique: Martinique,
			Mauritania: Mauritania,
			Mauritius: Mauritius,
			Mayotte: Mayotte,
			Mexico: Mexico,
			MicronesiaFederatedStatesOf: MicronesiaFederatedStatesOf,
			MoldovaRepublicOf: MoldovaRepublicOf,
			Monaco: Monaco,
			Mongolia: Mongolia,
			Montenegro: Montenegro,
			Montserrat: Montserrat,
			Morocco: Morocco,
			Mozambique: Mozambique,
			Myanmar: Myanmar,
			Namibia: Namibia,
			Nauru: Nauru,
			Nepal: Nepal,
			Netherlands: Netherlands,
			NewCaledonia: NewCaledonia,
			NewZealand: NewZealand,
			Nicaragua: Nicaragua,
			Niger: Niger,
			Nigeria: Nigeria,
			Niue: Niue,
			NorfolkIsland: NorfolkIsland,
			NorthMacedonia: NorthMacedonia,
			NorthernIreland: NorthernIreland,
			NorthernMarianaIslands: NorthernMarianaIslands,
			Norway: Norway,
			Oman: Oman,
			Pakistan: Pakistan,
			Palau: Palau,
			Palestine: Palestine,
			Panama: Panama,
			PapuaNewGuinea: PapuaNewGuinea,
			Paraguay: Paraguay,
			Peru: Peru,
			Philippines: Philippines,
			Pitcairn: Pitcairn,
			Poland: Poland,
			Portugal: Portugal,
			PuertoRico: PuertoRico,
			Qatar: Qatar,
			RepublicOfTheCongo: RepublicOfTheCongo,
			Reunion: Reunion,
			Romania: Romania,
			RussianFederation: RussianFederation,
			Rwanda: Rwanda,
			SaintBarthelemy: SaintBarthelemy,
			SaintHelenaAscensionAndTristanDaCunha: SaintHelenaAscensionAndTristanDaCunha,
			SaintKittsAndNevis: SaintKittsAndNevis,
			SaintLucia: SaintLucia,
			SaintMartin: SaintMartin,
			SaintPierreAndMiquelon: SaintPierreAndMiquelon,
			SaintVincentAndTheGrenadines: SaintVincentAndTheGrenadines,
			Samoa: Samoa,
			SanMarino: SanMarino,
			SaoTomeAndPrincipe: SaoTomeAndPrincipe,
			SaudiArabia: SaudiArabia,
			Scotland: Scotland,
			Senegal: Senegal,
			Serbia: Serbia,
			Seychelles: Seychelles,
			SierraLeone: SierraLeone,
			Singapore: Singapore,
			SintMaartenDutchPart: SintMaartenDutchPart,
			Slovakia: Slovakia,
			Slovenia: Slovenia,
			SolomonIslands: SolomonIslands,
			Somalia: Somalia,
			SouthAfrica: SouthAfrica,
			SouthGeorgiaAndTheSouthSandwichIslands: SouthGeorgiaAndTheSouthSandwichIslands,
			SouthSudan: SouthSudan,
			Spain: Spain,
			SriLanka: SriLanka,
			Sudan: Sudan,
			Suriname: Suriname,
			SvalbardAndJanMayenIslands: SvalbardAndJanMayenIslands,
			Swaziland: Swaziland,
			Sweden: Sweden,
			Switzerland: Switzerland,
			SyrianArabRepublic: SyrianArabRepublic,
			TaiwanRepublicOfChina: TaiwanRepublicOfChina,
			Tajikistan: Tajikistan,
			TanzaniaUnitedRepublicOf: TanzaniaUnitedRepublicOf,
			Thailand: Thailand,
			TimorLeste: TimorLeste,
			Togo: Togo,
			Tokelau: Tokelau,
			Tonga: Tonga,
			TrinidadAndTobago: TrinidadAndTobago,
			Tunisia: Tunisia,
			Turkey: Turkey,
			Turkmenistan: Turkmenistan,
			TurksAndCaicosIslands: TurksAndCaicosIslands,
			Tuvalu: Tuvalu,
			USMinorOutlyingIslands: USMinorOutlyingIslands,
			Uganda: Uganda,
			Ukraine: Ukraine,
			UnitedArabEmirates: UnitedArabEmirates,
			UnitedKingdom: UnitedKingdom,
			UnitedStates: UnitedStates,
			Uruguay: Uruguay,
			Uzbekistan: Uzbekistan,
			Vanuatu: Vanuatu,
			VenezuelaBolivarianRepublicOf: VenezuelaBolivarianRepublicOf,
			Vietnam: Vietnam,
			VirginIslandsBritish: VirginIslandsBritish,
			VirginIslandsUS: VirginIslandsUS,
			Wales: Wales,
			WallisAndFutunaIslands: WallisAndFutunaIslands,
			WesternSahara: WesternSahara,
			Yemen: Yemen,
			Zambia: Zambia,
			Zimbabwe: Zimbabwe,
		}
		setFlag(countryFlagMap[selectedFlag] || Ontario)
	}

	const countries = [
		"Afghanistan",
		"AlandIslands",
		"Albania",
		"Algeria",
		"AmericanSamoa",
		"Andorra",
		"Angola",
		"Anguilla",
		"Antarctica",
		"AntiguaAndBarbuda",
		"Argentina",
		"Armenia",
		"Aruba",
		"Australia",
		"Austria",
		"Azerbaijan",
		"Bahamas",
		"Bahrain",
		"Bangladesh",
		"Barbados",
		"Belarus",
		"Belgium",
		"Belize",
		"Benin",
		"Bermuda",
		"Bhutan",
		"BoliviaPlurinationalStateOf",
		"BosniaAndHerzegovina",
		"Botswana",
		"BouvetIsland",
		"Brazil",
		"BritishIndianOceanTerritory",
		"BruneiDarussalam",
		"Bulgaria",
		"BurkinaFaso",
		"Burundi",
		"Cambodia",
		"Cameroon",
		"Canada",
		"CapeVerde",
		"CaribbeanNetherlands",
		"CaymanIslands",
		"CentralAfricanRepublic",
		"Chad",
		"Chile",
		"ChinaPeoplesRepublicOfChina",
		"ChristmasIsland",
		"CocosKeelingIslands",
		"Colombia",
		"Comoros",
		"CongoTheDemocraticRepublicOfThe",
		"CookIslands",
		"CostaRica",
		"CoteDIvoire",
		"Croatia",
		"Cuba",
		"Curacao",
		"Cyprus",
		"CzechRepublic",
		"Denmark",
		"Djibouti",
		"Dominica",
		"DominicanRepublic",
		"Ecuador",
		"Egypt",
		"ElSalvador",
		"England",
		"EquatorialGuinea",
		"Eritrea",
		"Estonia",
		"Ethiopia",
		"Europe",
		"FalklandIslandsMalvinas",
		"FaroeIslands",
		"Fiji",
		"Finland",
		"France",
		"FrenchGuiana",
		"FrenchPolynesia",
		"FrenchSouthernTerritories",
		"Gabon",
		"Gambia",
		"Georgia",
		"Germany",
		"Ghana",
		"Gibraltar",
		"Greece",
		"Greenland",
		"Grenada",
		"Guadeloupe",
		"Guam",
		"Guatemala",
		"Guernsey",
		"Guinea",
		"GuineaBissau",
		"Guyana",
		"Haiti",
		"HeardIslandAndMcDonaldIslands",
		"HolySeeVaticanCityState",
		"Honduras",
		"HongKong",
		"Hungary",
		"Iceland",
		"India",
		"Indonesia",
		"IranIslamicRepublicOf",
		"Iraq",
		"Ireland",
		"IsleOfMan",
		"Israel",
		"Italy",
		"Jamaica",
		"Japan",
		"Jersey",
		"Jordan",
		"Kazakhstan",
		"Kenya",
		"Kiribati",
		"KoreaDemocraticPeoplesRepublicOf",
		"KoreaRepublicOf",
		"Kosovo",
		"Kuwait",
		"Kyrgyzstan",
		"LaosLaoPeoplesDemocraticRepublic",
		"Latvia",
		"Lebanon",
		"Lesotho",
		"Liberia",
		"Libya",
		"Liechtenstein",
		"Lithuania",
		"Luxembourg",
		"Macao",
		"Madagascar",
		"Malawi",
		"Malaysia",
		"Maldives",
		"Mali",
		"Malta",
		"MarshallIslands",
		"Martinique",
		"Mauritania",
		"Mauritius",
		"Mayotte",
		"Mexico",
		"MicronesiaFederatedStatesOf",
		"MoldovaRepublicOf",
		"Monaco",
		"Mongolia",
		"Montenegro",
		"Montserrat",
		"Morocco",
		"Mozambique",
		"Myanmar",
		"Namibia",
		"Nauru",
		"Nepal",
		"Netherlands",
		"NewCaledonia",
		"NewZealand",
		"Nicaragua",
		"Niger",
		"Nigeria",
		"Niue",
		"NorfolkIsland",
		"NorthMacedonia",
		"NorthernIreland",
		"NorthernMarianaIslands",
		"Norway",
		"Oman",
		"Pakistan",
		"Palau",
		"Palestine",
		"Panama",
		"PapuaNewGuinea",
		"Paraguay",
		"Peru",
		"Philippines",
		"Pitcairn",
		"Poland",
		"Portugal",
		"PuertoRico",
		"Qatar",
		"RepublicOfTheCongo",
		"Reunion",
		"Romania",
		"RussianFederation",
		"Rwanda",
		"SaintBarthelemy",
		"SaintHelenaAscensionAndTristanDaCunha",
		"SaintKittsAndNevis",
		"SaintLucia",
		"SaintMartin",
		"SaintPierreAndMiquelon",
		"SaintVincentAndTheGrenadines",
		"Samoa",
		"SanMarino",
		"SaoTomeAndPrincipe",
		"SaudiArabia",
		"Scotland",
		"Senegal",
		"Serbia",
		"Seychelles",
		"SierraLeone",
		"Singapore",
		"SintMaartenDutchPart",
		"Slovakia",
		"Slovenia",
		"SolomonIslands",
		"Somalia",
		"SouthAfrica",
		"SouthGeorgiaAndTheSouthSandwichIslands",
		"SouthSudan",
		"Spain",
		"SriLanka",
		"Sudan",
		"Suriname",
		"SvalbardAndJanMayenIslands",
		"Swaziland",
		"Sweden",
		"Switzerland",
		"SyrianArabRepublic",
		"TaiwanRepublicOfChina",
		"Tajikistan",
		"TanzaniaUnitedRepublicOf",
		"Thailand",
		"TimorLeste",
		"Togo",
		"Tokelau",
		"Tonga",
		"TrinidadAndTobago",
		"Tunisia",
		"Turkey",
		"Turkmenistan",
		"TurksAndCaicosIslands",
		"Tuvalu",
		"USMinorOutlyingIslands",
		"Uganda",
		"Ukraine",
		"UnitedArabEmirates",
		"UnitedKingdom",
		"UnitedStates",
		"Uruguay",
		"Uzbekistan",
		"Vanuatu",
		"VenezuelaBolivarianRepublicOf",
		"Vietnam",
		"VirginIslandsBritish",
		"VirginIslandsUS",
		"Wales",
		"WallisAndFutunaIslands",
		"WesternSahara",
		"Yemen",
		"Zambia",
		"Zimbabwe",
	]

	const provinces = [
		"Ontario",
		"Alberta",
		"BritishColumbia",
		"Manitoba",
		"NewBrunswick",
		"NewfoundlandAndLabrador",
		"NovaScotia",
		"NorthwestTerritories",
		"Nunavut",
		"PrinceEdwardIsland",
		"Quebec",
		"Saskatchewan",
		"Yukon",
	]
	const CardWidth = "282px"
	const CardImageWidth = "140px"

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
								{provinces.map((province, index) => (
									<option key={index} value={province}>
										{province}
									</option>
								))}
							</optgroup>

							<optgroup label="World">
								{countries.map((country, index) => (
									<option key={index} value={country}>
										{country}
									</option>
								))}
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
								{provinces.map((province, index) => (
									<option key={index} value={province}>
										{province}
									</option>
								))}
							</optgroup>

							<optgroup label="World">
								{countries.map((country, index) => (
									<option key={index} value={country}>
										{country}
									</option>
								))}
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
							<Card mx="6px" bg="#ffe40199" border={"1px groove #ffe40199"} variant="elevated" minW={CardWidth} maxW={CardWidth}>
								<Image minH={CardImageWidth} maxH={CardImageWidth} src={usFlag} alt="{formData.usFlag}" borderRadius="lg" mb={4} border={"5px outset #ffe40199"} />
								<Flex h="100px" align={"center"} justify={"center"} borderRadius="md">
									<Heading textAlign="center" mt="-40px" color="white" textShadow={"5px 5px 10px #052939"}>
										{formData.us1} <br />
										{formData.us2}
									</Heading>
								</Flex>
							</Card>
							<Box> </Box>
							<Card mx="6px" bg="#00de7199" border={"1px groove #00de7199"} variant="elevated" minW={CardWidth} maxW={CardWidth}>
								<Image src={themFlag} minH={CardImageWidth} maxH={CardImageWidth} borderRadius="lg" mb={4} border={"5px outset #00de7199"} />
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
			<br />
			<br />
			<br />
		</>
	)
}
