import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
//   border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
//   console.log(props.propsAnime.attributes.canonicalTitle)

  return (
    <div>
      <Button onClick={handleOpen}>Read More</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.propsAnime.attributes.canonicalTitle}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {props.propsAnime.attributes.titles.ja_jp}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {props.propsAnime.attributes.description}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
