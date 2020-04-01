import {
  MOSTRAR_ALERTA,
  OCULTAR_ALERTA
} from '../types'

//Muestra una alerta
export function mostrarAlerta(alerta){
  return (dispatach) => {
    dispatach( crearAlerta(alerta) )
  }
}

const crearAlerta = alerta => ({
  type : MOSTRAR_ALERTA,
  payload : alerta
})

//Ocultar Alerta
export function ocultarAlertaAction() {
  return (dispatach) => {
    dispatach( ocultarAlerta )
  }
}

const ocultarAlerta = () => ({
  type : OCULTAR_ALERTA,
})