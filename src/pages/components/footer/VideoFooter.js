import React from "react";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import "./VideoFooter.css"

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@Paulo Ebac</h3>
        <p>Descrição do vídeo</p>
        <div className="videoFooter__music">
          <MusicNoteIcon className="videoFooter_icon"/>
          <div className="videoFooterMusic__text">
            <p>Título da música</p>
          </div>
        </div>
      </div>
      <img
        className="videoFooter__record"
        alt="imagem de um pequeno vinil girando"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
      />
    </div>
  )
}

export default VideoFooter;