import posthog from "posthog-js";
import useFullscreen from "~/hooks/useFullscreen";
import styles from "./windowcontrols.module.css";

type windowcontrolsProps = {
	on_close?: () => void;
	on_minimize?: () => void;
	on_maximize?: () => void;
};

// export function toggleFullScreen() {
//   if (!document.fullscreenElement) {
//     document.documentElement.requestFullscreen();
//   } else if (document.exitFullscreen) {
//     document.exitFullscreen();
//   }
// }

export const Windowcontrols = ({
	on_close,
	on_minimize,
	on_maximize,
}: windowcontrolsProps) => {
	const [isFullscreen, toggleFullScreen] = useFullscreen();
	return (
		<>
			<div className={styles.windowControls}>
				<button className={styles.close} onClick={on_close}></button>
				<button className={styles.minimize} onClick={on_minimize}></button>
				<button
					className={
						styles.maximize + " " + (isFullscreen ? styles.fullscreen : "")
					}
					onClick={
						on_maximize ??
						(() => {
							toggleFullScreen();
							posthog.capture("fullcreen toggle", { property: isFullscreen });
						})
					}
				></button>
			</div>
		</>
	);
};

export default Windowcontrols;
