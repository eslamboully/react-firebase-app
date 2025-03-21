import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/dashboard/EventDashboard";
import NavBar from "./nav/NavBar";
import { useState } from "react";
import { AppEvent } from "../types/event";
import { Outlet, useLocation } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import ModalManager from "../common/modals/ModalManager";

export default function App() {

  const location = useLocation();

  return (
    location.pathname === '/' ? <HomePage /> :
    <>
      <ModalManager />
      <NavBar />
      <Container className='main'>
          <Outlet />
      </Container>
    </>
  )
}