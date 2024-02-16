import { Nav } from "../../shared/components";
import HomeHeader from "./components/home-header";

export default function HomeContainer() {
  return (
    <>
      <Nav></Nav>
      <HomeHeader></HomeHeader>
      <section className="mx-8"></section>
    </>
  );
}
