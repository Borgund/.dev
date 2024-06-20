import { useEffect, useState } from "react";

export type BatteryType = {
	level: number;
	charging: boolean;
	supported: boolean;
};

export default function useBattery() {
	useEffect(() => {
		// Check if the browser supports the Battery Status API and setup the event listeners
		const checkBatteryAPIAndSetup = async () => {
			if (navigator.getBattery) {
				try {
					// Get the battery status
					const battery = await navigator.getBattery();
					updateBatteryInfo(battery);

					// Setup the event listeners for the battery status changes
					battery.addEventListener("chargingchange", () =>
						updateBatteryInfo(battery),
					);
					battery.addEventListener("levelchange", () =>
						updateBatteryInfo(battery),
					);
				} catch (error) {
					console.error("Battery status is not supported.", error);
					setBatteryInfo((prev) => ({ ...prev, supported: false }));
				}
			} else {
				console.error("Battery status is not supported.");
				setBatteryInfo((prev) => ({ ...prev, supported: false }));
			}
		};

		checkBatteryAPIAndSetup();
	}, []);

	const initialBatteryInfo: BatteryType = {
		level: 0,
		charging: false,
		supported: true,
	};

	const [batteryInfo, setBatteryInfo] =
		useState<BatteryType>(initialBatteryInfo);

	const updateBatteryInfo = (battery: BatteryType) => {
		setBatteryInfo({
			level: battery.level * 100,
			charging: battery.charging,
			supported: true,
		});
	};

	return [batteryInfo] as const;
}
