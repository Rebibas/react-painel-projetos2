function StatusBadge({ status }) {
  let classe = "badge badge--outro";

  if (status === "Concluído") {
    classe = "badge badge--concluido";
  } else if (status === "Em desenvolvimento") {
    classe = "badge badge--desenvolvimento";
  } else if (status === "Planejamento") {
    classe = "badge badge--planejamento";
  }

  return <span className={classe}>{status}</span>;
}

export default StatusBadge;
