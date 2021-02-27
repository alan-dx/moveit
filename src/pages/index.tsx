import Head from "next/head";
import { GetServerSideProps } from 'next'

import ChallengeBox from "../components/ChallengeBox";
import { CompletedChallenges } from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import Profile from "../components/Profile";
import { CountdownProvider } from "../contexts/CountdownContext";

import styles from '../styles/pages/Home.module.css';
import { ChallengesProvider } from "../contexts/ChallengesContext";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {

  return (
    <ChallengesProvider
      //enviando informaçõe para o ChallengesContext
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | MoveIt</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
                <Profile />
                <CompletedChallenges />
                <Countdown />
            </div>
            <div>
                <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
    </div>

    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // o código aqui colocado é executado no server do NextJs
  // realiza chamadas assincronas antes mesmo da interface ser montada
  // Lembre-se que a interface é montada após a execução do server NextJs

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}