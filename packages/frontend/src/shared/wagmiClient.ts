import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createClient } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

export const {
	chains,
	provider,
} = configureChains(
	[polygonMumbai],
	[

		publicProvider(),
	],
);

const { connectors } = getDefaultWallets({
	appName: "change",
	chains,
});

export const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider,
});
