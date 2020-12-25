import React from "react";
import theme from "theme";
import { Theme, Link, Text, Button, Icon, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Section, StackItem, Stack, SocialMedia } from "@quarkly/components";
import { MdArrowDownward, MdHelp } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			padding="100px 0"
			sm-padding="40px 0"
			background="linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%),--color-darkL2 url(https://res.cloudinary.com/dsurkxwmr/image/upload/v1605799384/20201119_205125_hr6qzm.png) center/cover"
			border-width="5px"
			border-style="solid"
			border-color="#00c7ff"
			border-radius="10px"
			position="relative"
		>
			<Override slot="SectionContent" align-items="center" />
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="20px 0 0 0"
				border-color="#fafafa"
				white-space="normal"
				color="#ffffff"
			>
				MagicalWizard
			</Text>
			<Text as="p" font="--lead" margin="20px 0 0 0" color="#50cfff">
				Hi i am a pokemon gamer and i know a little bit about pokes and there weaknesses and there best teams and also i know about trickroom teams because i am a trick room player and also i love Abomasnow
			</Text>
			<Button font="--lead" margin="20px">
				Button
			</Button>
		</Section>
		<Section
			background="linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%),--color-darkL2 url(https://prowiki.info/images/archive/a/ac/20161216173249%21PROLogo.png) center/cover"
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
		>
			<Stack>
				<StackItem width="75%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text color="--lightD2" letter-spacing="1px" text-transform="uppercase" margin="0">
						Excellence in everything
					</Text>
					<Text
						as="h1"
						font="--headline1"
						md-font="--headline2"
						margin="10px 0"
						color="#7cb7f2"
					>
						I like poke and we all like it because we grew up seeing it and i like pixel games or pixel arts and pokemon revolution online is correctly fit for me
					</Text>
				</StackItem>
			</Stack>
			<Box text-align="center" margin="96px 0 0 0">
				<Text margin="8px 0" text-transform="uppercase">
					Know about me
				</Text>
				<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
			</Box>
		</Section>
		<Section color="--dark">
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="20px 0 0 0"
				letter-spacing="3px"
				white-space="pre-line"
				color="#72b5f6"
			>
				Questions about pokemon
			</Text>
			<Box
				margin="36px 0 0 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			>
				<Icon
					position="absolute"
					top="0"
					left="0"
					size="36px"
					color="--primary"
					category="md"
					icon={MdHelp}
				/>
				<Text
					as="h3"
					font="--headline3"
					margin="10px 0"
					border-color="#040404"
					color="#1a5bac"
				>
					What is special about Pokemon?
				</Text>
				<Text
					as="p"
					font="--lead"
					margin="10px 0"
					color="--greyD2"
					border-style="none"
				>
					it's an awesome combination of imagination and fantasy it's a mood changer and also it's so deep that it takes u time to understand it
				</Text>
			</Box>
			<Box
				margin="36px 0 0 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			>
				<Icon
					position="absolute"
					top="0"
					left="0"
					size="36px"
					color="--primary"
					category="md"
					icon={MdHelp}
				/>
				<Text as="h3" font="--headline3" margin="10px 0" color="#1a5bac">
					What is Trick Room?
				</Text>
				<Text as="p" font="--lead" margin="10px 0" color="--greyD2">
					{"    "}it's a move by a pokemon which changes its surrounding in a way that the slow speed pokemon will attack first rather that that which has high speed
				</Text>
			</Box>
			<Box
				margin="36px 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			>
				<Icon
					position="absolute"
					top="0"
					left="0"
					size="36px"
					color="--primary"
					category="md"
					icon={MdHelp}
				/>
				<Text as="h3" font="--headline3" margin="10px 0" color="#1a5bac">
					What is pokemon revolution online?
				</Text>
				<Text as="p" font="--lead" margin="10px 0" color="--greyD2">
					its a game which is not controlled by either nintendo or pokemo officially but is is made by the pokemon lovers like us and game creaters codders and more and this game is released on August 2015{" "}
				</Text>
			</Box>
		</Section>
		<Section background-color="--dark" text-align="center" padding="32px 0">
			<Link
				href="Thank you for visiting my website"
				text-decoration-line="none"
				variant="--base"
				color="--grey"
				hover-color="--primary"
			>
				Thank you for visiting my website
			</Link>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			border-color="#ff0000"
			color="#ff0202"
			background="#000000"
		>
			<SocialMedia
				facebook="https://www.facebook.com/quarklyapp/"
				twitter="https://twitter.com/quarklyapp"
				youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
				vkontakte="https://vk.com/quarklyapp"
				telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
			>
				<Override
					slot="link"
					border-radius="50%"
					color="--light"
					margin="0 8px"
					background="--color-primary"
					hover-background="--color-greyD1"
					border-color="#59728a"
				/>
				<Override slot="icon" border-color="#466582" color="#99ecec" />
			</SocialMedia>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});