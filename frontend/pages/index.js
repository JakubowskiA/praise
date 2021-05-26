import Head from "next/head";
import styled from "@emotion/styled";
import io from "socket.io-client";
import Card from "../components/card";
import {useState, useEffect, useRef} from 'react';

// const socket = io("http://localhost:4000");
// socket.on("connect", () => {})
// socket.on("praise-given", () => {});

// Potential Future Work
// Limit amount of calls, change how data is updated to make most recent posts display first, change layout and potentially include both images, implement limit to retrieve updates after certain amount of time

export default function Home() {
  const praises = useRef([])
  const [praiseCount, setPraiseCount] = useState(0)
  useEffect(() => {
    const socket = io("http://localhost:4000");
    socket.on("connect", () => {})
    socket.on("praise-given", (response) => {
      praises.current = [...praises.current, ...response.praise]
      setPraiseCount(praiseCount + 1)
    });
  }, [praises.current])

  return (
    <>
      <Head>
        <title>Praise</title>
      </Head>

      {praises.current.length > 0 && (
        praises.current.map(praise => (
        <Row key={praise.id}>
          <Card
            title={`${praises.current.indexOf(praise) +1} ${praise.author.name} to ${praise.target.name}`}
            description={praise.body}
            targetImg={praise.target.avatar}
          />
        </Row>
        ))
      )}

      <style jsx>{`
        :global(html) {
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
          padding: 0;
          margin: 0;
        }
      `}</style>
    </>
  );
}

const Row = styled("div")`
  max-width: 880px;
  margin: 80px auto 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
