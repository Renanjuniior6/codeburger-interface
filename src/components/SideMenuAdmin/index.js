import HomeIcon from "@mui/icons-material/Home"
import LogoutIcon from "@mui/icons-material/Logout"
import PropTypes from "prop-types"
import React from "react"

import { useUser } from "../../hooks/UserContext"
import listLinks from "./menu-list"
import { Container, ItemContainer, ContainerLogout, ListLink } from "./styles"

export function SideMenuAdmin({ path }) {
  const { logout } = useUser()

  return (
    <Container>
      <hr />
      {listLinks.map((item) => (
        <ItemContainer key={item.id} isActive={path === item.link}>
          <item.icon className="icon" />
          <ListLink to={item.link}>{item.label}</ListLink>
        </ItemContainer>
      ))}
      <hr />
      <ContainerLogout style={{ position: "fixed", bottom: "30px" }}>
        <div className="div-logout">
          <LogoutIcon style={{ color: "#ffffff" }} />
          <ListLink to={"/login"} onClick={logout}>
            Sair
          </ListLink>
        </div>
        <div className="div-logout">
          <HomeIcon style={{ color: "#ffffff" }} />
          <ListLink to={"/"}>Home</ListLink>
        </div>
      </ContainerLogout>
    </Container>
  )
}

SideMenuAdmin.propTypes = {
  path: PropTypes.string,
}
