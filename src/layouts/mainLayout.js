// import external modules
import React, {PureComponent} from "react";
import {connect} from "react-redux";
import classnames from "classnames";

// import internal(own) modules
import {FoldedContentConsumer, FoldedContentProvider} from "../utility/context/toggleContentContext";
import Sidebar from "./components/sidebar/sidebar";
import CandidateNavbar from "./components/navbar/candidateNavbar"
import Footer from "./components/footer/footer";
import templateConfig from "../templateConfig";
import {getToken, getUserType} from "../redux/selectors/auth";
import {CANDIDATE, EMPLOYEE} from "../config/constants";
import EmployeeNavbar from "./components/navbar/employeeNavbar";
import AdminNavbar from "./components/navbar/adminNavbar";

class MainLayout extends PureComponent {
	state = {
		width: window.innerWidth,
		sidebarState: "close",
		sidebarSize: '',
		layout: ''
	};

	updateWidth = () => {
		this.setState(prevState => ({
			width: window.innerWidth
		}));
	};

	handleSidebarSize = (sidebarSize) => {
		this.setState({sidebarSize});
	}

	handleLayout = (layout) => {
		this.setState({layout});
	}

	componentDidMount() {
		if (window !== "undefined") {
			window.addEventListener("resize", this.updateWidth, false);
		}
	}

	componentWillUnmount() {
		if (window !== "undefined") {
			window.removeEventListener("resize", this.updateWidth, false);
		}
	}

	toggleSidebarMenu(sidebarState) {
		this.setState({sidebarState});
	}

	render() {
		const {
			token,
			userType
		} = this.props;
		return (
			<FoldedContentProvider>
				<FoldedContentConsumer>
					{context => (

						<div
							className={classnames("wrapper ", {
								"menu-collapsed": templateConfig.sidebar.visible && (context.foldedContent || this.state.width < 991),
								"menu-hide": !templateConfig.sidebar.visible,
								"main-layout": !context.foldedContent,
								[`${templateConfig.sidebar.size}`]: (this.state.sidebarSize === ''),
								[`${this.state.sidebarSize}`]: (this.state.sidebarSize !== ''),
								[`${templateConfig.layoutColor}`]: (this.state.layout === ''),
								[`${this.state.layout}`]: (this.state.layout !== '')
							})}
						>

							<Sidebar
								toggleSidebarMenu={this.toggleSidebarMenu.bind(this)}
								sidebarState={this.state.sidebarState}
								handleSidebarSize={this.handleSidebarSize.bind(this)}
								handleLayout={this.handleLayout.bind(this)}
							/>
							{
								token ? (
									userType === CANDIDATE ? (
										<CandidateNavbar
											toggleSidebarMenu={this.toggleSidebarMenu.bind(this)}
											sidebarState={this.state.sidebarState}
										/>
									) : userType === EMPLOYEE ? (
										<EmployeeNavbar
											toggleSidebarMenu={this.toggleSidebarMenu.bind(this)}
											sidebarState={this.state.sidebarState}
										/>
									) : (
										<AdminNavbar
											toggleSidebarMenu={this.toggleSidebarMenu.bind(this)}
											sidebarState={this.state.sidebarState}
										/>
									)
								) : (
									<CandidateNavbar
										toggleSidebarMenu={this.toggleSidebarMenu.bind(this)}
										sidebarState={this.state.sidebarState}
									/>
								)
							}
							<main className="top-margin">{this.props.children}</main>
							<Footer/>
						</div>
					)}
				</FoldedContentConsumer>
			</FoldedContentProvider>
		);
	}
}


const mapStateToProps = state => ({
	token: getToken(state),
	userType: getUserType(state)
});

export default connect(mapStateToProps)(MainLayout);
