import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "../shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar/ui";

const App = () => {
	const { theme } = useTheme();

	return (
		<div className={classNames("app", {}, [theme])}>
			<Navbar />
			<div className="content-page">
				<Sidebar />
				<div className="page-wrapper">
					<AppRouter />
				</div>
			</div>
		</div>
	);
};

export default App;
