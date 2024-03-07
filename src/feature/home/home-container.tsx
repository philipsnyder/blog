import { BlogPostSection } from "../../shared/components";
import HomeHeader from "./components/home-header/home-header";
import { WhySite } from "./components/why-section/why-site";
import { motion } from "framer-motion";

export default function HomeContainer() {
  return (
    <>
      <HomeHeader></HomeHeader>
      <motion.div
        className="my-12"
        initial={{ opacity: 0 }}
        transition={{ duration: 2.5 }}
        whileInView={{ opacity: 1 }}
      >
        <WhySite id="whySite"></WhySite>
      </motion.div>
      <BlogPostSection></BlogPostSection>
    </>
  );
}
