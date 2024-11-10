"use client";
import { CodeBlock, dracula } from "react-code-blocks";
export default function CodeBlockText() {
  const code = `
    function Crowd() {
      return (
          <>
            Developed with Next.js, Go, Kubernetes, PostgreSQL.
            <Crowd.town />
          </>
      );
    }
  `;
  return <CodeBlock text={code} language={"javascript"} theme={dracula} />;
}
