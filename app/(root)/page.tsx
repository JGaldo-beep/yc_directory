import React from "react";
import SearchForm from "../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const query = (await searchParams).query;
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Entrepreneurs
        </h1>
        <p className="sub-heading">
          Join our community of innovative thinkers and take your startup to the
          next level.
        </p>
        <SearchForm query={query} />
      </section>
    </>
  );
}
