const UserDetails = ({name, age, job}) => {

  return (
    <div>
      <h2>{name}</h2>
      <p>Idade: {age}</p>
      <p>Profissão: {job}</p>
      {age >= 18 ? (
        <p><strong>Pode tirar CNH!</strong></p>
        ) : (
        <p><strong>Menor de Idade!</strong></p>
        )}
    </div>
  )
}

export default UserDetails
