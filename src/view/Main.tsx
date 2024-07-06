import MainComponent from "../components/MainComponent/MainComponent"
import Title from "../components/Title"

const Main = () => {
    return(
     <main className="flex flex-col justify-center items-center"> 
        <Title />
        <MainComponent />
     </main>
    )
}

export default Main