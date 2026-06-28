"use client";

import { motion } from "framer-motion";
import { stagger, fadeUp } from "@/lib/animations";

import ArticleHero from "@/components/articles/Hero";
import ArticleFilter from "@/components/articles/Filter";
import ArticleFeatured from "@/components/articles/Featured";
import ArticleGrid from "@/components/articles/Grid";
import ArticleNewsletter from "@/components/articles/Newsletter";

export default function ArticleClient() {
<<<<<<< HEAD
  const [activeFilter, setActiveFilter] = useState("All Stories");
  const [searchQuery, setSearchQuery] = useState("");

=======
>>>>>>> 59b82bdc6324f43ccdb2ae70fc9cdb7fbc9fb8d9
  return (
    <div className="pt-28 pb-24">
      <motion.div variants={stagger} initial="hidden" animate="show">
        <motion.div variants={fadeUp}>
          <ArticleHero />
        </motion.div>

        <motion.div variants={fadeUp}>
<<<<<<< HEAD
          <ArticleFilter
            active={activeFilter}
            onFilter={setActiveFilter}
            onSearch={setSearchQuery}
          />
=======
          <ArticleFilter />
>>>>>>> 59b82bdc6324f43ccdb2ae70fc9cdb7fbc9fb8d9
        </motion.div>

        <motion.div variants={fadeUp}>
          <ArticleFeatured />
        </motion.div>

        <motion.div variants={fadeUp}>
<<<<<<< HEAD
          <ArticleGrid activeFilter={activeFilter} searchQuery={searchQuery} />
=======
          <ArticleGrid />
>>>>>>> 59b82bdc6324f43ccdb2ae70fc9cdb7fbc9fb8d9
        </motion.div>

        <motion.div variants={fadeUp}>
          <ArticleNewsletter />
        </motion.div>
      </motion.div>
    </div>
  );
}
