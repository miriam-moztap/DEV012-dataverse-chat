import ButtonHad from "../componentes/ButtonHad.js"

const Cloter =(props)=>{
    const container = document.createElement('div')
    const changeTitle = ()=>{
        container.textContent='Soy el sobrero del chente'
    }
    container.append(ButtonHad(changeTitle))
    return container;

}

export default Cloter;
