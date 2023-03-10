import { Box, Button, Heading, Text, Input } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { backendLink } from "../../BackendLink";
import { AuthContext } from "../../Components/Context/AuthContext";
interface Game {
  playerFirstScore: number;
  playerFirstUserName: string;
  playerSecondScore: number;
  playerSecondUserName: string;
}
const GameOver = () => {
  const [seconds, setSeconds] = useState<number>(10);
  const { authState } = useContext<any>(AuthContext);
  const [game, setGame] = useState<Game>();

  //  Timer for minus count --------
  useEffect(() => {
    axios
      .get(`${backendLink}/games?q=${authState.gameId}`)
      .then((res) => {
        setGame(res.data.data);
      })
      .catch((err) => console.log(err));

    let timer = seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
    return () => {
      if (typeof timer === "number") {
        clearInterval(timer);
      }
    };
  }, [seconds]);

  //    Function for get back in lobby
  const navigate = useNavigate();
  useEffect(() => {
    if (seconds == 0) {
      navigate("/homepage");
    }
  }, [seconds]);

  // const {playerFirstScore , playerSecondScore , playerSecondUserName , playerFirstUserName} = game
  console.log(game, "game play");

  return (
    <Box mt="200px">
      <Box className={"ggamebox"} textAlign="left">
        <Box fontFamily="Press2p" textAlign="center" color="#ce0000" px="10px">
          <Text>Game Over</Text>
        </Box>
        <Box fontFamily="Press2p" textAlign="center" color="" mt="-12px">
          <Text>`Back in lobby in {seconds} seconds </Text>
        </Box>
        <Heading>
          Winner{" "}
          {(game&&game.playerFirstScore > game.playerSecondScore &&
            game&&game.playerFirstUserName) ||
            (game&&game.playerFirstScore < game.playerSecondScore &&
              game.playerSecondUserName) ||
            (game&&game.playerFirstScore === game.playerSecondScore && "Draw")}{" "}
        </Heading>
        <Box display="flex" justifyContent="space-between">
          {/* Player 1 stats------ */}
          <Box fontFamily="Press2p" textAlign="left" px="10px">
            <Text>Player 1</Text>
            <Text mt="10px">{game?.playerFirstUserName}</Text>
            <Text mt="10px">Score {game?.playerFirstScore}</Text>
          </Box>

          <Box borderRight="2px solid black"></Box>

          {/* Player -2 ------- */}
          <Box fontFamily="Press2p" textAlign="left" px="10px">
            <Text>Player 2</Text>
            <Text mt="10px">{game?.playerSecondUserName}</Text>
            <Text mt="10px">Score {game?.playerSecondScore}</Text>
          </Box>
        </Box>
        <Link to="/homepage">
          <Button
            className="buttons"
            bgColor="yellow"
            textAlign="center"
            _hover={{ bgColor: "blue" }}
            width="40%"
            m="auto"
            disabled={true}
          >
            Exit
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export { GameOver };
