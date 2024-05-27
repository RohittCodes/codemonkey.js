"use client";

import { useEffect, useState } from "react";
import { EditorComponent } from "../_components/editor";
import { InputField } from "../_components/input";
import { OutputField } from "../_components/output";
import ProblemDetails from "../_components/problem";
import TestCases from "../_components/test-cases";
import Toolbar from "../_components/toolbar";

const ProblemPage = ({ params, searchParams }) => {
  // fetch problem details and test cases from API. Both are in the same API call
  const [problem, setProblem] = useState(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/problems/${params.slug}`)
      .then((res) => res.json())
      .then((data) => setProblem(data));
  }, [params.slug]);

  if (!problem) {
    return <div>Loading...</div>;
  } else if (problem.error) {
    return <div>{problem.error}</div>;
  }

  return (
    <div className="w-full h-full flex">
      <EditorComponent data={problem.templateCode} id={problem.problem_id} />
      <div className="h-full w-[60%] flex flex-col gap-2 pt-6 pb-1">
        <ProblemDetails data={problem} />
        <TestCases data={problem.testcases} />
      </div>
      <div className="h-full w-[8%] py-1">
        <Toolbar data={problem} />
      </div>
    </div>
  );
};

export default ProblemPage;
