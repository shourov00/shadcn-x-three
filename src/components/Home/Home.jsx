import StarsCanvas from "@/components/Canvas/Stars.jsx";
import CrystalCanvas from "@/components/Canvas/Crystal";

const Home = () => {
  return (
    <div className={"flex h-full flex-col items-center justify-center"}>
      <div className={" h-[400px] w-[300px] sm:h-[500px] sm:w-[400px]"}>
        <CrystalCanvas />
      </div>
      <StarsCanvas />
    </div>
  );
};

export default Home;
