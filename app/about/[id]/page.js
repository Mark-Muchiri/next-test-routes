'use client'
import { useParams } from "next/navigation";

function Teams() {
  const {id} = useParams()
  return (
    <h2>Teams {id}</h2>
  );
}

export default Teams;