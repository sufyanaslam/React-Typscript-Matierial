import React, { ReactElement, FC } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import PlayerDialog from "./PlayerModal";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divider: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    table: {
      minWidth: 650,
    },
    list: {
      marginLeft: theme.spacing(2),
      fontSize: "12px",
      color: "grey",
    },
    delete: {
      marginLeft: "10px"
    }
  })
);

interface Props {
  players: any;
  onDelete: any;
}
const PlayerList: FC<Props> = ({ players, onDelete }): ReactElement => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [player, setPlayer] = React.useState({});
  const [ref, setRef] = React.useState(0);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  function handleModal(index: any) {
    setRef(index);
    setPlayer(players[index]);

    setOpen(!open);
  }
  function deletePlayer(index: any) {
    onDelete(index);
  }

  function onSave(player: any) {
    players[ref] = player;
    setOpen(false);
  }
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Points</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {players.map((player: any, index: any) => (
              <TableRow key={player.name}>
                <TableCell>{player.id}</TableCell>

                <TableCell component="th" scope="row">
                  {player.name}
                </TableCell>
                <TableCell>{player.email}</TableCell>
                <TableCell>{player.phone}</TableCell>
                <TableCell>{player.points}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleModal(index)}
                  >
                    Edit
                  </Button>
                  <Button
                    className={classes.delete}
                    variant="outlined"
                    color="secondary"
                    onClick={() => deletePlayer(index)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {open && (
        <PlayerDialog
          fullScreen={fullScreen}
          open={open}
          player={player}
          onClose={handleModal}
          onSave={onSave}
        />
      )}
    </>
  );
};

export default PlayerList;
