// import external modules
import React, { Component } from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import {
   Form,
   Media,
   Collapse,
   Navbar,
   Nav,
   NavItem,
   UncontrolledDropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem
} from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
   // Moon,
   Mail,
   Menu,
   MoreVertical,
   Check,
   Bell,
   User,
   AlertTriangle,
   Inbox,
   Phone,
   Calendar,
   Lock,
   X,
   LogOut,
   Home,
   MessageSquare
} from "react-feather";
import NavbarSearch from "../../../components/search/Search";
import ReactCountryFlag from "react-country-flag";
import templateConfig from "../../../templateConfig";

import userImage from "../../../assets/img/portrait/small/avatar-s-1.png";
import userImage2 from "../../../assets/img/portrait/small/avatar-s-2.png";
import userImage3 from "../../../assets/img/portrait/small/avatar-s-3.png";
import userImage4 from "../../../assets/img/portrait/small/avatar-s-4.png";
import "../../../assets/scss/components/navbar/topbar.scss";
import {logoutAction} from "../../../redux/actions/login/logoutActions";

const mapDispatchToProps = (dispatch) =>
   bindActionCreators(
      {
         logoutAction,
      },
      dispatch,
   )

class ThemeNavbar extends Component {
   handleClick = e => {
      this.props.toggleSidebarMenu("open");
   };
   constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
         isOpen: false,
         activePage: 'home'
      };
   }
   toggle() {
      this.setState({
         isOpen: !this.state.isOpen
      });
   }

   onLogout = () => {
      localStorage.removeItem('token');
      this.props.logoutAction();
   }

   onClickNav = (page) => {
      this.setState({activePage: page});
   }

   render() {
      const {activePage} = this.state;
      console.log('a', activePage);

      return (
         <Navbar className="navbar navbar-expand-lg navbar-light bg-faded fixed-top">
            <div className="container-fluid px-0">
               <div className="navbar-header">
                  <Menu
                     size={14}
                     className="navbar-toggle d-lg-none float-left"
                     onClick={this.handleClick.bind(this)}
                     data-toggle="collapse"
                  />
                  {/*<Form className="navbar-form mt-1 float-left" role="search">
                     <NavbarSearch />
                  </Form>
                   <Moon size={20} color="#333" className="m-2 cursor-pointer"/> */}
                  <MoreVertical
                     className="mt-1 navbar-toggler black no-border float-right"
                     size={50}
                     onClick={this.toggle}
                  />
               </div>

               <div className="navbar-container">
                  <Collapse isOpen={this.state.isOpen} navbar>
                     <Nav className="ml-auto float-right" navbar>
                        <NavItem className="pr-1">
                           <Link to="/" className="nav-link" onClick={() => this.onClickNav('home')}>
                              <Home
                                 size={30}
                                 color={activePage === "home" ? "#FF8D60" : "#333"}
                              />
                           </Link>
                        </NavItem>
                        <NavItem className="pr-1">
                           <Link to="/chat" className="nav-link" onClick={() => this.onClickNav('chat')}>
                              <MessageSquare size={30} color={activePage === "chat" ? "#FF8D60" : "#333"} />
                           </Link>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar className="pr-1">
                           <DropdownToggle nav>
                              <ReactCountryFlag code="us" svg /> EN
                           </DropdownToggle>
                           <DropdownMenu right>
                              <DropdownItem>
                                 <ReactCountryFlag code="us" svg /> English
                              </DropdownItem>
                              <DropdownItem>
                                 <ReactCountryFlag code="fr" svg /> France
                              </DropdownItem>
                              <DropdownItem>
                                 <ReactCountryFlag code="es" svg /> Spanish
                              </DropdownItem>
                              <DropdownItem>
                                 <ReactCountryFlag code="cn" svg /> Chinese
                              </DropdownItem>
                           </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar className="pr-1">
                           {/*<DropdownToggle nav>
                              <span className="notification-bell-blink" />
                              <Bell size={31} className="text-dark notification-danger animate-shake" />
                           </DropdownToggle>*/}
                           <DropdownMenu right className="notification-dropdown">
                              <div className="p-2 text-center  border-bottom-grey border-bottom-lighten-2">
                                 <h6 className="mb-0 text-bold-500">Notifications</h6>
                              </div>
                              <PerfectScrollbar className="noti-list bg-grey bg-lighten-5">
                                 <Media className="px-3 pt-2 pb-2 media  border-bottom-grey border-bottom-lighten-3">
                                    <Media left top href="#">
                                       <Media
                                          object
                                          src={userImage2}
                                          alt="Generic placeholder image"
                                          className="rounded-circle width-35"
                                       />
                                    </Media>
                                    <Media body>
                                       <h6 className="mb-0 text-bold-500 font-small-3">
                                          Selina sent you mail
                                          <span className="text-bold-300 font-small-2 text-muted float-right">9:00 A.M</span>
                                       </h6>
                                       <span className="font-small-3 line-height-2">
                                          Cras sit amet nibh libero, in gravida nulla.
                                       </span>
                                    </Media>
                                 </Media>
                                 <Media className="px-3 pt-2 pb-2 media  border-bottom-grey border-bottom-lighten-3">
                                    <Media left middle href="#" className="mr-2">
                                       <span className="bg-success rounded-circle width-35 height-35 d-block">
                                          <Check size={30} className="p-1 white margin-left-3" />
                                       </span>
                                    </Media>
                                    <Media body>
                                       <h6 className="mb-1 text-bold-500 font-small-3">
                                          <span className="success">Report generated successfully!</span>
                                          <span className="text-bold-300 font-small-2 text-muted float-right">
                                             10:15 A.M
                                          </span>
                                       </h6>
                                       <span className="font-small-3 line-height-2">
                                          Consectetur adipisicing elit sed do eiusmod.
                                       </span>
                                    </Media>
                                 </Media>
                                 <Media className="px-3 pt-2 pb-2 media  border-bottom-grey border-bottom-lighten-3">
                                    <Media left middle href="#" className="mr-2">
                                       <span className="bg-warning rounded-circle width-35 height-35 d-block">
                                          <AlertTriangle size={30} className="p-1 white margin-left-3" />
                                       </span>
                                    </Media>
                                    <Media body>
                                       <h6 className="mb-1 text-bold-500 font-small-3">
                                          <span className="warning">Warning notificatoin</span>
                                          <span className="text-bold-300 font-small-2 text-muted float-right">
                                             11:00 A.M
                                          </span>
                                       </h6>
                                       <p className="font-small-3 line-height-2">
                                          Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.
                                       </p>
                                    </Media>
                                 </Media>
                                 <Media className="px-3 pt-2 pb-2 media  border-bottom-grey border-bottom-lighten-3">
                                    <Media left top href="#">
                                       <Media
                                          object
                                          src={userImage3}
                                          alt="Generic placeholder image"
                                          className="rounded-circle width-35"
                                       />
                                    </Media>
                                    <Media body>
                                       <h6 className="mb-0 text-bold-500 font-small-3">
                                          John started task
                                          <span className="text-bold-300 font-small-2 text-muted float-right">5:00 P.M</span>
                                       </h6>
                                       <span className="font-small-3 line-height-2">
                                          Sit amet consectetur adipisicing elit sed.
                                       </span>
                                    </Media>
                                 </Media>
                                 <Media className="px-3 pt-2 pb-2 media  border-bottom-grey border-bottom-lighten-3">
                                    <Media left middle href="#" className="mr-2">
                                       <span className="bg-danger rounded-circle width-35 height-35 d-block">
                                          <X size={30} className="p-1 white margin-left-3" />
                                       </span>
                                    </Media>
                                    <Media body>
                                       <h6 className="mb-1 text-bold-500 font-small-3">
                                          <span className="danger">Error notificarion</span>
                                          <span className="text-bold-300 font-small-2 text-muted float-right">
                                             12:15 P.M
                                          </span>
                                       </h6>
                                       <span className="font-small-3 line-height-2">
                                          Consectetur adipisicing elit sed do eiusmod.
                                       </span>
                                    </Media>
                                 </Media>
                                 <Media className="px-3 pt-2 pb-2 media  border-bottom-grey border-bottom-lighten-3">
                                    <Media left top href="#">
                                       <Media
                                          object
                                          src={userImage4}
                                          alt="Generic placeholder image"
                                          className="rounded-circle width-35"
                                       />
                                    </Media>
                                    <Media body>
                                       <h6 className="mb-0 text-bold-500 font-small-3">
                                          Lisa started task
                                          <span className="text-bold-300 font-small-2 text-muted float-right">6:00 P.M</span>
                                       </h6>
                                       <span className="font-small-3 line-height-2">
                                          Sit amet consectetur adipisicing elit sed.
                                       </span>
                                    </Media>
                                 </Media>
                              </PerfectScrollbar>
                              <div className="p-1 text-center border-top-grey border-top-lighten-2">
                                 <Link to="/">View All</Link>
                              </div>
                           </DropdownMenu>
                        </UncontrolledDropdown>

                        <UncontrolledDropdown nav inNavbar className="pr-1">
                           <DropdownToggle nav>
                              <img src={userImage} alt="logged-in-user" className="rounded-circle width-35" />
                           </DropdownToggle>
                           <DropdownMenu right>
                              <DropdownItem>
                                 <span className="font-small-3">
                                    John Doe <span className="text-muted">(Guest)</span>
                                 </span>
                              </DropdownItem>
                              <DropdownItem divider />

                              <Link to="/profile/edit" className="p-0" onClick={() => this.onClickNav('profile')}>
                                 <DropdownItem>
                                    <User size={16} className="mr-1" /> My Profile
                                 </DropdownItem>
                              </Link>
                              {/*<Link to="/email" className="p-0">
                                 <DropdownItem>
                                    <Inbox size={16} className="mr-1" /> Email
                                 </DropdownItem>
                              </Link>
                              <Link to="/contacts" className="p-0">
                                 <DropdownItem>
                                    <Phone size={16} className="mr-1" /> Contacts
                                 </DropdownItem>
                              </Link>
                              <Link to="/calendar" className="p-0">
                                 <DropdownItem>
                                    <Calendar size={16} className="mr-1" /> Calendar
                                 </DropdownItem>
                              </Link>
                              <DropdownItem divider />
                              <Link to="/pages/lockscreen" className="p-0">
                                 <DropdownItem>
                                    <Lock size={16} className="mr-1" /> Lock Screen
                                 </DropdownItem>
                              </Link>*/}
                              <div to="" className="p-0" onClick={this.onLogout}>
                                 <DropdownItem>
                                    <LogOut size={16} className="mr-1" /> Logout
                                 </DropdownItem>
                              </div>
                           </DropdownMenu>
                        </UncontrolledDropdown>
                     </Nav>
                  </Collapse>
               </div>
            </div>
         </Navbar>
      );
   }
}

export default connect(null, mapDispatchToProps)(ThemeNavbar);