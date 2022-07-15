import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
	scroll-behavior: smooth;
	text-decoration: none;
	box-sizing: border-box;
  
font: inherit;
	color: inherit;
	font-family: 'Lato', sans-serif;
}
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}

button {
	cursor: pointer;

	&:focus {
		border-radius: 0.25rem;
		border: none;
		outline: 2px solid #C8051BE5;
		outline-offset: 3px;
	}
}

input:hover, textarea:hover, button:hover {
	box-shadow: 4px 3px 3px #565656;
	transition: all 0.1s;
}

input:focus, textarea:focus, button:focus {
	border-radius: 0.25rem;
	border: none;
	outline: 2px solid #C8051BE5;
	outline-offset: 3px;
}

html {
	font-family: "AvenirBlack", "AvenirBook", "AvenirRoman", Roboto;
	position: relative;
}

@media(max-width: 1023px) {
  html {
    font-size: 93.75%;
  }
}
@media(max-width: 767px) {
  html {
    font-size: 87.5%;
  }
}

	.react-modal-overlay  {
		background: rgba(164, 160, 146, 0.8);

		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;

		display: flex;
		align-items: center;
		justify-content: center;

		z-index: 2;
	}
	
  .ReactModal__Content {
		width: 100%;
		position: unset!important;
		height: fit-content;
		max-width: 600px;
  }
`;


export default GlobalStyled;