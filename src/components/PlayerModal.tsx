import React, { ReactElement, FC, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputField: {
      minWidth: "650px",
      margin: "20px",
    },
    dialogBody: {
      padding: "10px 50px",
    },
  })
);
interface Props {
  fullScreen: boolean;
  open: boolean;
  onClose: any;
  player: any;
  onSave: any;
}
interface IPlayer {
  id: number;
  email: string;
  phone: string;
  name: string;
  points: number;
  username: string;
  website: string;
}

const PlayerModal: FC<Props> = ({
  fullScreen,
  onClose,
  open,
  player,
  onSave,
}): ReactElement => {
  const classes = useStyles();
  const [selectedPlayer, setSelectedPlayer] = React.useState<IPlayer | null>(
    null
  );

  useEffect(() => {
    if (!selectedPlayer) setSelectedPlayer(player);
  }, [player]);

  const handlePointsChange = (value: any) => {
    if (selectedPlayer) {
      setSelectedPlayer({
        ...selectedPlayer,
        points: parseInt(value !== "" ? value : "0"),
      });
    }
  };

  const saveChanges = () => {
    onSave(selectedPlayer);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={onClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Update Player Points"}
        </DialogTitle>

        <DialogContent className={classes.dialogBody}>
          <TextField
            className={classes.inputField}
            autoFocus
            margin="dense"
            id="points"
            type="number"
            value={selectedPlayer?.points}
            onChange={(e) => {
              handlePointsChange(e.target.value);
            }}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={saveChanges} color="primary" autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default PlayerModal;
