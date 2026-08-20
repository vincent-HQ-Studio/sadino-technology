"use client";

import { useState } from "react";
import ArticleHero from "@/components/articles/Hero";
import ArticleFilter from "@/components/articles/Filter";
import ArticleFeatured from "@/components/articles/Featured";
import ArticleGrid from "@/components/articles/Grid";
import ArticleNewsletter from "@/components/articles/Newsletter";

export default function ArticleClient() {
  const [activeFilter, setActiveFilter] = useState("All Stories");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="pt-24 pb-24">
      {/* Hero — animate langsung, tidak butuh stagger parent */}
      <ArticleHero />
      <ArticleFilter
        active={activeFilter}
        onFilter={setActiveFilter}
        onSearch={setSearchQuery}
      />
      <ArticleFeatured />
      <ArticleGrid activeFilter={activeFilter} searchQuery={searchQuery} />
      <ArticleNewsletter />
    </div>
  );
}
