import HomeHeader from "./components/home-header/home-header";
import { WhySite } from "./components/why-section/why-site";

export default function HomeContainer() {
  return (
    <>
      <HomeHeader></HomeHeader>
      <div className="m-12">
        <WhySite id="whySite"></WhySite>
      </div>
    </>
  );
}
