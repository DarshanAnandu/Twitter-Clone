import MainContents from "../fragments/MainContents"
import LeftNav from "../fragments/LeftNav"
import RightNav from "../fragments/RightNav"

const Home = () => {
    return (
        <div className="flex justify-center bg-black text-[#fff] h-screen">
            <LeftNav />
            <MainContents />
            <RightNav />
        </div>
    )
}

export default Home