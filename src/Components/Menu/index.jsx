import { ScreenConfig } from "../ScreenConfig"
import { Button } from "../Button"
import { ScreenGasto } from "../ScreenGasto"
import { ScreenReportes } from "../ScreenReportes"
import './MainMenu.css'
import { ScreenLDM } from "../ScreenLDM"

export const Menu = ({cambiarElementos,setActualScreen, location, setTitleScreen }) => {
  return (
      <div className="selector"> 
        <Button
          btnTitle='Libro de Mormón'
          btnColor='var(--celeste)'
          img='/ldm.svg'
          setActualScreen={setActualScreen}
          cambiarElementos={cambiarElementos}
          location = {location}
          setTitleScreen = {setTitleScreen}
          destinoScreen={<ScreenLDM cambiarElementos={cambiarElementos} setActualScreen={setActualScreen} />}
        />
        <Button
          btnTitle='Antiguo Testamento'
          btnColor='var(--verde)'
          img='/at.svg'
          setActualScreen={setActualScreen}
          cambiarElementos={cambiarElementos}
          location = {location}
          setTitleScreen = {setTitleScreen}
          destinoScreen={<ScreenGasto cambiarElementos={cambiarElementos} setActualScreen={setActualScreen} />}
        />
        <Button
          btnTitle='Nuevo Testamemto'
          btnColor='var(--rojo)'
          img='/nt.svg'
          setActualScreen={setActualScreen}
          cambiarElementos={cambiarElementos}
          location = {location}
          setTitleScreen = {setTitleScreen}
          destinoScreen={<ScreenReportes cambiarElementos={cambiarElementos} setActualScreen={setActualScreen} />}
        />
        <Button
          btnTitle='Doctrina y Convenios'
          btnColor='var(--amarillo)'
          img='/dyc.svg'
          setActualScreen={setActualScreen}
          cambiarElementos={cambiarElementos}
          location = {location}
          setTitleScreen = {setTitleScreen}
          destinoScreen={<ScreenConfig cambiarElementos={cambiarElementos} setTitleScreen={setTitleScreen} setActualScreen={setActualScreen} />}
        />
      </div>
  )
}