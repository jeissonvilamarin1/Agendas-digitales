import React from 'react'
import { Link } from 'react-router-dom';
import { Menu, ContainerHome, MenuList, MenuListItem } from "../styles/styles";

export const Home = () => {
      return (
        <ContainerHome>
          <Menu>
            <MenuList>
              <Link to="/calendario">
                <MenuListItem>
                  <img
                    src="https://res.cloudinary.com/dtp6uf9vc/image/upload/v1638370496/Agendas%20Digitales/Calendar_ds6wyc.png"
                    alt="Calendario"
                    width="30px"
                    height="30px"
                  />
                </MenuListItem>
              </Link>
              <Link to="/home">
                <MenuListItem>
                  <img
                    src="https://res.cloudinary.com/dtp6uf9vc/image/upload/v1638370496/Agendas%20Digitales/Home_qf9ze4.png"
                    alt="Calendario"
                    width="30px"
                    height="30px"
                  />
                </MenuListItem>
              </Link>
              <Link to="/perfil">
                <MenuListItem>
                  <img
                    src="https://res.cloudinary.com/dtp6uf9vc/image/upload/v1638370496/Agendas%20Digitales/Profile_hl0naa.png"
                    alt="Calendario"
                    width="30px"
                    height="30px"
                  />
                </MenuListItem>
              </Link>
            </MenuList>
          </Menu>
        </ContainerHome>
      );
}
